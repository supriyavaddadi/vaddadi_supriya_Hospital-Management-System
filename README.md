# Hospital Management System

## Project Overview

The Hospital Management System is a web-based application developed to simplify hospital operations such as patient registration, doctor information management, appointment booking, and patient record management.

The system provides an easy-to-use interface where users can view hospital details, explore available doctors, register patients, book appointments, and maintain patient information digitally.

The project consists of a frontend developed using HTML, CSS, and JavaScript, and a backend developed using Python Flask with SQLite database integration.

---

# Features

## Frontend Features

- Hospital information display
- Doctor details page
- Patient registration form
- Appointment booking
- Patient records display
- Responsive and user-friendly interface

## Backend Features

- Flask-based REST API
- Patient data registration
- Patient data retrieval
- SQLite database storage
- API communication between frontend and backend

---

# Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Python
- Flask Framework
- Flask-CORS

## Database

- SQLite

## Tools

- Visual Studio Code
- GitHub

---

# Project Structure
Hospital-Management-System

│
├── frontend
│ ├── index.html
│ ├── doctors.html
│ ├── patients.html
│ ├── appointments.html
│ ├── script.js
│ ├── style.css
│ └── README.md
│
├── backend
│ ├── app.py
│ ├── requirements.txt
│ └── hospital.db
│
├── Integration
│ └── integration_notes.txt
│
├── Testing
│ ├── screenshots
│ └── test_report.txt
│
└── Report_and_Documentation

---

# Application Modules

## Home Page

Provides information about the hospital and navigation to different sections of the application.

## Doctors Module

Displays available doctors along with their specialization details.

## Appointment Module

Allows patients to enter personal details, health problems, select doctors, and book appointments.

## Patient Records Module

Displays registered patient details retrieved from the database.

---

# Backend API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Checks backend status |
| POST | /register | Registers patient appointment details |
| GET | /patients | Retrieves patient records |

---

# Database Design

The project uses SQLite database.

## Patient Table

| Field | Description |
|------|-------------|
| id | Unique patient ID |
| name | Patient name |
| age | Patient age |
| gender | Patient gender |
| disease | Health problem |
| doctor | Assigned doctor |
| city | Patient location |
| contact | Contact number |

---

# How to Run the Project

## Step 1: Run Backend

Open terminal:
cd backend


Install dependencies:


pip install -r requirements.txt


Start Flask server:


python app.py


Backend runs at:


http://127.0.0.1:5000


---

## Step 2: Run Frontend

Open the frontend folder.

Run:


index.html


using Live Server in Visual Studio Code.

---

# Testing

The system was tested for:

- Backend server execution
- Patient registration
- Database storage
- Patient record retrieval
- Frontend and backend communication

Screenshots of testing results are available in the Testing folder.

---

# Future Enhancements

- User authentication system
- Online doctor consultation
- Medical report upload
- Payment integration
- Advanced patient analytics
- Appointment notification system

---

# Conclusion

The Hospital Management System provides an efficient digital solution for managing hospital information, patient registration, appointments, and patient records.

The project demonstrates the integration of frontend technologies, Flask backend development, REST APIs, and database management to create a complete web application.

---

# Author

Supriya Vaddadi

B.Tech Bioinformatics

---

# GitHub Repository
https://github.com/supriyavaddadi/vaddadi_supriya_Hospital-Management-System
