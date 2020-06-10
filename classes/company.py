import json


class Company:

    def to_json(self):
        return json.dumps(self, default=lambda o: o.__dict__)

    def __init__(self, id, company_id, company_name, address, phone, email, maximum_capacity, current_occupancy, description, logo):
        self.db_id = str(id)
        self.company_id = company_id
        self.company_name = company_name
        self.address = address
        self.phone = str(phone)
        self.email = email
        self.maximum_capacity = maximum_capacity
        self.current_occupancy = current_occupancy
        self.description = description
        self.logo = logo
