# Framework to make the application RESTful for API calls and connecting frontend to backend
from flask import Flask, request
from flask_cors import CORS
from pymongo import MongoClient  # Driver to connect with MongoDB
import json


app = Flask(__name__)
CORS(app)

# To connect with the Database
client = MongoClient("mongodb://localhost:27017/")
mydb = client["bms"]

app.config["DEBUG"] = True


def intro():
    print("\t\t\t\t**********************")
    print("\t\t\t\tBANK MANAGEMENT SYSTEM")
    print("\t\t\t\t**********************")
    print("\t\t\t\t\t\t\t\t\t\t\t\tby: Manish Singh")


@app.route("/createAccount", methods=["GET"])
def write_account():
    temp_name = request.args["name"]
    temp_pin = request.args["pin"]
    temp_phone = request.args["phone"]
    temp_email = request.args["email"]

    account = {
        "name": temp_name,
        "pin": temp_pin,
        "email": temp_email,
        "phone": temp_phone,
        "num": "1100" + temp_phone[::-1],
        "balance": 0,
    }

    mydb["accounts"].insert_one(account)
    return account["num"]


@app.route("/accounts", methods=["GET"])
def display_all():
    my_list = list(mydb["accounts"].find())

    for item in my_list:
        item["_id"] = str(item["_id"])

    return json.dumps(my_list)


@app.route("/balance", methods=["GET"])
def display_sp():
    num = request.args["num"]
    pin = request.args["pin"]

    my_list = list(mydb["accounts"].find({"num": num}))

    if len(my_list) == 1:
        if my_list[0]["pin"] == pin:
            return str(my_list[0]["balance"])
        else:
            return "Incorrect PIN"
    else:
        return "Account does not exist"


@app.route("/withdraw", methods=["GET"])
def withdraw():
    num = request.args["num"]
    amount = int(request.args["amount"])
    pin = request.args["pin"]

    my_list = list(mydb["accounts"].find({"num": num}))

    if len(my_list) == 1:
        if my_list[0]["pin"] == pin:
            if amount <= my_list[0]["balance"]:
                new_balance = my_list[0]["balance"] - amount
                mydb["accounts"].update_one(
                    {"num": num}, {"$set": {"balance": new_balance}}
                )
                return "Your new balance is " + str(new_balance)
            else:
                return "Insufficient funds"
        else:
            return "Incorrect PIN"
    else:
        return "Account not found"


@app.route("/transfer", methods=["GET"])
def transfer():
    num = request.args["from"]
    amount = int(request.args["amount"])
    pin = request.args["pin"]
    to = request.args["to"]

    from_acc = list(mydb["accounts"].find({"num": num}))
    to_acc = list(mydb["accounts"].find({"num": to}))

    if len(from_acc) == 1 and len(to_acc) == 1:
        if from_acc[0]["pin"] == pin:
            if amount <= from_acc[0]["balance"]:
                new_balance = from_acc[0]["balance"] - amount

                mydb["accounts"].update_one(
                    {"num": num}, {"$set": {"balance": new_balance}}
                )

                mydb["accounts"].update_one(
                    {"num": to}, {"$set": {"balance": to_acc[0]["balance"] + amount}}
                )

                return "Amount transferred successfully"
            else:
                return "Insufficient funds"
        else:
            return "Incorrect PIN"
    else:
        return "Account(s) not found"


@app.route("/deposit", methods=["GET"])
def deposit():
    num = request.args["num"]
    amount = int(request.args["amount"])

    my_list = list(mydb["accounts"].find({"num": num}))

    if len(my_list) == 1:
        new_balance = my_list[0]["balance"] + amount
        mydb["accounts"].update_one({"num": num}, {"$set": {"balance": new_balance}})
        return "Your new balance is " + str(new_balance)
    else:
        return "Account not found"


@app.route("/close", methods=["GET"])
def close_account():
    num = request.args["num"]
    pin = request.args["pin"]
    transferee = None

    if "transferee" in list(request.args.keys()):
        transferee = request.args["transferee"]

    del_acc = mydb["accounts"].find_one({"num": num})

    if del_acc:
        if del_acc["pin"] == pin:
            mydb["accounts"].delete_one({"num": num})

            if transferee:
                transferee_acc = mydb["accounts"].find_one({"num": transferee})

                if transferee_acc:
                    mydb["accounts"].update_one(
                        {"num": transferee},
                        {
                            "$set": {
                                "balance": transferee_acc["balance"]
                                + del_acc["balance"]
                            }
                        },
                    )

                    return "Account closed and amount transferred successfully"
                else:
                    return "Account closed but transfer failed as transferee details provided were incorrect"
            else:
                return "Account closed"
        else:
            return "Incorrect PIN"
    else:
        return "Account not found"


@app.route("/update", methods=["GET"])
def update_account():
    num = request.args["num"]
    pin = request.args["pin"]

    req_args = list(request.args.keys())

    update_acc = mydb["accounts"].find_one({"num": num})

    if update_acc:
        if update_acc["pin"] == pin:
            update_obj = {}

            if "new_pin" in req_args:
                update_obj["pin"] = request.args["new_pin"]
            if "new_name" in req_args:
                update_obj["name"] = request.args["new_name"]
            if "new_phone" in req_args:
                update_obj["phone"] = request.args["new_phone"]
            if "new_email" in req_args:
                update_obj["email"] = request.args["new_email"] 

            mydb["accounts"].update_one(
                {"num": num}, {"$set": update_obj}
            )

            return "Account updated successfully"
        else:
            return "Incorrect PIN"
    else:
        return "Account not found"


intro()

app.run()