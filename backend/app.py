from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3


app = Flask(__name__)

CORS(app)


DATABASE = "hospital.db"



# Create database
def create_database():

    connection = sqlite3.connect(DATABASE)

    cursor = connection.cursor()


    cursor.execute("""
    CREATE TABLE IF NOT EXISTS patients(

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        name TEXT,
        age INTEGER,
        gender TEXT,
        disease TEXT,
        doctor TEXT,
        city TEXT,
        contact TEXT

    )
    """)


    connection.commit()
    connection.close()



# Test backend
@app.route("/")
def home():

    return jsonify(
        {
            "message":
            "Hospital Management System Backend Running"
        }
    )



# Appointment Registration API
@app.route("/register", methods=["POST"])
def register():

    data = request.json


    connection = sqlite3.connect(DATABASE)

    cursor = connection.cursor()



    cursor.execute("""

    INSERT INTO patients
    (name,age,gender,disease,doctor,city,contact)

    VALUES(?,?,?,?,?,?,?)

    """,

    (

    data["name"],
    data["age"],
    data["gender"],
    data["disease"],
    data["doctor"],
    data["city"],
    data["contact"]

    ))



    connection.commit()

    connection.close()



    return jsonify(
        {
            "message":
            "Appointment registered successfully"
        }
    )




# Display Patients
@app.route("/patients")
def patients():


    connection = sqlite3.connect(DATABASE)

    cursor = connection.cursor()



    cursor.execute(
        "SELECT * FROM patients"
    )


    records = cursor.fetchall()


    connection.close()


    patient_list=[]


    for patient in records:

        patient_list.append({

        "id":patient[0],
        "name":patient[1],
        "age":patient[2],
        "gender":patient[3],
        "disease":patient[4],
        "doctor":patient[5],
        "city":patient[6],
        "contact":patient[7]

        })


    return jsonify(patient_list)




if __name__=="__main__":

    create_database()

    app.run(debug=True)