CREATE TABLE Patients (
    Patient_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name VARCHAR(100),
    Age INTEGER,
    Gender VARCHAR(10),
    Disease VARCHAR(100),
    City VARCHAR(100),
    Contact VARCHAR(15)
);

CREATE TABLE Doctors (
    Doctor_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Doctor_Name VARCHAR(100),
    Specialization VARCHAR(100),
    Experience INTEGER,
    Contact VARCHAR(15)
);

CREATE TABLE Appointments (
    Appointment_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Patient_ID INTEGER,
    Doctor_ID INTEGER,
    Appointment_Date DATE,
    Appointment_Time TIME,
    FOREIGN KEY (Patient_ID) REFERENCES Patients(Patient_ID),
    FOREIGN KEY (Doctor_ID) REFERENCES Doctors(Doctor_ID)
);