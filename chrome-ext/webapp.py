import jira
from jira import JIRA
from flask import Flask
from flask_cors import CORS, cross_origin
from collections import defaultdict, OrderedDict

app = Flask(__name__)

# allow cross origin network calls
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



# authentication for jira
def getJira(username, password):
    options = {'verify': False, 'server': 'https://jira01.corp.linkedin.com:8443'}
    return JIRA(basic_auth=(username, password), options = options)

@app.route("/search")
@cross_origin()
def search_issues():
    # create a search filter in jira to search by
    issues = jira.search_issues("filter=112950")

    print(issues)

    results = []
    for issue in issues:
        result = OrderedDict()
        result["Issue key"] = issue.key
        result["Status"] = issue.fields.status.name
        result["Priority"] = issue.fields.priority.name
        result["Assignee"] = issue.fields.assignee.key
        result["Created"] = issue.fields.created
        result["Updated"] = issue.fields.updated
        result["Last Viewed"] = issue.fields.lastViewed
        if issue.fields.components:
            result["Components"] = issue.fields.components[0].name
        result["Due Date"] = issue.fields.duedate
        results.append(result)
    return str(results)

@app.route("/create")
def create_issue():
    summary = request.args.get('summary')
    description = request.args.get('description')
    issue_dict = {
    'project': {'key': 'CSE'},
    'summary': summary,
    'description': description,
    'issuetype': {'name': 'Bug'},
    }
    new_issue = jira.create_issue(fields=issue_dict)
    return str(new_issue)


if __name__ == "__main__":
    # here is starting of the development HTTP server
    print('Enter your ldap username:')
    username = input()
    print('password:')
    password = input()
    global jira
    jira = getJira(username, password)
    app.run()

