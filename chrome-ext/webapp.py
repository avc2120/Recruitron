import jira
from jira import JIRA
from flask import Flask, request, redirect, render_template, jsonify
from flask_cors import CORS, cross_origin
from collections import defaultdict, OrderedDict
import json

app = Flask(__name__)

# allow cross origin network calls
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



# authentication for jira
def getJira(username, password):
    options = {'verify': False, 'server': 'https://jira01.corp.linkedin.com:8443'}
    return JIRA(basic_auth=(username, password), options = options)

@app.route("/search", methods = ['GET'])
@cross_origin()
def search_issues():
    # create a search filter in jira to search by
    issues = jira.search_issues("filter=112950")
    results = []
    for issue in issues:
        result = OrderedDict()
        result["Key"] = issue.key
        result["Summary"] = issue.fields.summary
        result["Status"] = issue.fields.status.name
        result["url"] = "https://jira01.corp.linkedin.com:8443/browse/" + issue.key
        results.append(result)
    return json.dumps(results)

@app.route("/create", methods = ['POST'])
def create_issue():
    summary = request.args.get('summary', 'Test Ticket for GAI Hackathon')
    description = request.args.get('description', 'Unable to import candidate resumes')
    issue_dict = {
    'project': {'key': 'HPLT'},
    'summary': summary,
    'description': description,
    'issuetype': {'name': 'Bug'},
    }
    new_issue = jira.create_issue(fields=issue_dict)

    results = []
    result = {}
    result["Key"] = new_issue.key
    result["Status"] = new_issue.fields.status.name
    result["Summary"] = new_issue.fields.summary
    result["url"] = "https://jira01.corp.linkedin.com:8443/browse/" + new_issue.key
    results.append(result)
    return json.dumps(results)

def transformToString(results):
    stringresult = ''
    for result in results:
        stringresult = stringresult + "<a ref=" + result["url"] + ">"
        stringresult += result["Key"]
        stringresult += ": "
        stringresult += result["Summary"]
        stringresult += "</a>,  "
    return stringresult

if __name__ == "__main__":
    # here is starting of the development HTTP server
    print('Enter your ldap username:')
    username = input()
    print('password:')
    password = input()
    global jira
    jira = getJira(username, password)
    app.run()

