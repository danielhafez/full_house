import pymongo
from classes.company import Company
from classes.user import User


class DataLayer:

    def __init__(self):
        self.__myclient = pymongo.MongoClient('mongodb+srv://danielhafez:hackathon2020@cluster0-9phti.mongodb.net/test')
        self.__db = self.__myclient["full_house"]
        self.__companies_collection = self.__db["companies_new"]
        self.__user_collection = self.__db["users"]

    @staticmethod
    def create_company_object(company_dict):
        company = Company(company_dict['_id'], company_dict['company_id'], company_dict['company_name'],
                          company_dict['address'], company_dict['phone'],
                          company_dict['email'], company_dict['maximum_capacity'], company_dict['current_occupancy'],
                          company_dict['description'], company_dict['logo'])
        return company

    @staticmethod
    def create_user_object(user_dict):
        user = User(user_dict['_id'], user_dict['first_name'], user_dict['last_name'],
                    user_dict['email'], user_dict['password'],
                    user_dict['company_id'])
        return user

    def find_one_company(self, key, value):
        try:
            find = self.__companies_collection.find_one({key: value})
            company = self.create_company_object(find)
            return company

        except TypeError:
            print("Company not found")
            return False

    def get_all_companies(self):
        all_companies = self.__companies_collection.find()
        store_companies = []
        for i in all_companies:
            company = self.create_company_object(i)
            store_companies.append(company)

        return store_companies

    def register_new_company(self, company_dict):
        try:
            company_id = self.__companies_collection.insert_one(company_dict).inserted_id
            if company_id is not None:
                return True

        except pymongo.errors:
            print(pymongo.errors)
            return False

    def register_user(self, user_dict):
        try:
            user_id = self.__user_collection.insert_one(user_dict).inserted_id
            if user_id is not None:
                return True
        except pymongo.errors:
            print(pymongo.errors)
            return False

    def find_one_user(self, key, value):
        try:
            find = self.__user_collection.find_one({key: value})
            user = self.create_user_object(find)
            return user

        except TypeError:
            print("user not found")
            return False

    def update_student(self, key, value, new_key, new_value):

        myquery = {key: value}
        newvalues = {"$set": {new_key: new_value}}
        try:
            result = self.__companies_collection.update_one(myquery, newvalues)
            return result

        except TypeError:
            return False
