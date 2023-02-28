import jira
from jira import JIRA
from flask import Flask
from flask_cors import CORS, cross_origin


app = Flask(__name__)

# allow cross origin network calls
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


# authentication for jira
def getJira():
    username = ''
    password = ''
    options = {'verify': False, 'server': 'https://jira01.corp.linkedin.com:8443'}
    jira = JIRA(basic_auth=(username, password), options = options)

@app.route("/search")
@cross_origin()
def search_issues():
    jira = getJira()
    # create a search filter in jira to search by
    issues = jira.search_issues("filter=112950")
    return str(issues)

@app.route("/create")
def create_issue():
    summary = request.args.get('summary')
    description = request.args.get('description')
    jira = getJira()
    issue_dict = {
    'project': {'key': 'CSE'},
    'summary': summary,
    'description': description,
    'issuetype': {'name': 'Bug'},
    }
    new_issue = create_issue(fields=issue_dict)
    return str(new_issue)


if __name__ == "__main__":
    # here is starting of the development HTTP server
    app.run()

