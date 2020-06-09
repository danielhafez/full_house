import pymongo

client = pymongo.MongoClient('mongodb+srv://danielhafez:hackathon2020@cluster0-9phti.mongodb.net/test')
db = client["full_house"]
collection = db["companies"]
find = collection.find()

for i in find:
    print(find[i])

class DataLayer:

    def __init__(self):
        self.__myclient = pymongo.MongoClient('mongodb+srv://danielhafez:hackathon2020@cluster0-9phti.mongodb.net/test')
        self.__db = self.__myclient["full_house"]
        self.__companies_collection = self.__db["companies"]

    def find_one_student(self, key, value):
        try:
            find = self.__companies_collection.find_one({key: value})
            return find

        except TypeError:
            print("Student not found")
            return False

    def get_all_students(self):
        all_students = self.__companies_collection.find()
        return all_students
