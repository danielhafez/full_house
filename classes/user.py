import json


class User:

    def to_json(self):
        return json.dumps(self, default=lambda o: o.__dict__)

    def __init__(self, first_name, last_name, email, password, company_id):
        self.db_id = str(id)
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = password
        self.company_id = company_id
