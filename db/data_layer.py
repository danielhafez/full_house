import pymongo
from classes.company import Company


class DataLayer:

    def __init__(self):
        self.__myclient = pymongo.MongoClient('mongodb+srv://danielhafez:hackathon2020@cluster0-9phti.mongodb.net/test')
        self.__db = self.__myclient["full_house"]
        self.__companies_collection = self.__db["companies"]
        self.__user_collection = self.__db["users"]

    @staticmethod
    def create_company_object(company_dict):
        company = Company(company_dict['_id'], company_dict['company_id'], company_dict['company_name'],
                          company_dict['address'], company_dict['phone'],
                          company_dict['email'], company_dict['maximum_capacity'],
                          company_dict['description'], company_dict['logo'])
        return company

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
