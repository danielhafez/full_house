from flask import Flask, json, request, abort
from db.data_layer import DataLayer
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})

dataLayer = DataLayer()


@app.route("/companies", )
def get_all_companies():
    companies = dataLayer.get_all_companies()
    companies_json = []
    for one_company in companies:
        companies_json.append(one_company.to_json())

    response = app.response_class(
        response=json.dumps(companies_json),
        status=200,
        mimetype="application/json")

    return response


@app.route("/get-company")
def search_company():
    key = request.args.get("key")
    value = request.args.get("value")
    company = dataLayer.find_one_company(key, value)
    if not company:
        abort(404)
    response = app.response_class(
        response=company.to_json(),
        status=200,
        mimetype="application/json")

    return response


@app.route("/create-company", methods=["POST"])
def create_new_company():
    data = request.get_json()
    response = dataLayer.register_new_company(data)
    if not response:
        return 'Impossible to to create the new profile'

    company = dataLayer.create_company_object(data)
    response = app.response_class(
        response=company.to_json(),
        status=200,
        mimetype="application/json"
    )
    return response


@app.route("/create-user", methods=["POST"])
def create_new_user():
    data = request.get_json()
    response = dataLayer.register_user(data)
    if not response:
        return 'Impossible to to create the new user'

    response = app.response_class(
        response='successfully added new student',
        status=200,
        mimetype="application/json"
    )
    return response


@app.route("/get-user")
def search_user():
    key = request.args.get("key")
    value = request.args.get("value")
    user = dataLayer.find_one_user(key, value)

    response = app.response_class(
        response=user.to_json(),
        status=200,
        mimetype="application/json")

    return response


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
