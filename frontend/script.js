function bookAppointment() {

    let patient = {

        name: document.getElementById("name").value.trim(),
        age: document.getElementById("age").value.trim(),
        gender: document.getElementById("gender").value,
        disease: document.getElementById("disease").value.trim(),
        doctor: document.getElementById("doctor").value,
        city: document.getElementById("city").value.trim(),
        contact: document.getElementById("contact").value.trim()

    };

    // Validation
    if (
        patient.name === "" ||
        patient.age === "" ||
        patient.gender === "" ||
        patient.city === "" ||
        patient.contact === "" ||
        patient.disease === "" ||
        patient.doctor === ""
    ) {
        alert("Please fill all the required fields.");
        return;
    }

    fetch("http://127.0.0.1:5000/register", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(patient)

    })

    .then(response => response.json())

    .then(data => {

        alert(data.message);

        // Reset all fields
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("gender").selectedIndex = 0;
        document.getElementById("city").value = "";
        document.getElementById("contact").value = "";
        document.getElementById("disease").value = "";
        document.getElementById("doctor").selectedIndex = 0;
        document.getElementById("date").value = "";
        document.getElementById("reason").value = "";

    })

    .catch(error => {

        console.log(error);
        alert("Backend connection failed.");

    });

}



function loadPatients() {

    fetch("http://127.0.0.1:5000/patients")

    .then(response => response.json())

    .then(data => {

        let records = document.getElementById("records");

        records.innerHTML = "";

        if (data.length === 0) {

            records.innerHTML = "<h2>No patients registered yet.</h2>";
            return;

        }

        data.forEach(function(patient) {

            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `

            <h2>Patient ID : ${patient.id}</h2>

            <p><b>Name :</b> ${patient.name}</p>

            <p><b>Age :</b> ${patient.age}</p>

            <p><b>Gender :</b> ${patient.gender}</p>

            <p><b>Disease :</b> ${patient.disease}</p>

            <p><b>Doctor :</b> ${patient.doctor}</p>

            <p><b>City :</b> ${patient.city}</p>

            <p><b>Contact :</b> ${patient.contact}</p>

            `;

            records.appendChild(card);

        });

    })

    .catch(error => {

        console.log(error);

    });

}