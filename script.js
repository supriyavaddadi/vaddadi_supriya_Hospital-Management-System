
function bookAppointment(){



let patient = {


name: document.getElementById("name").value,


age: document.getElementById("age").value,


gender: document.getElementById("gender").value,


city: document.getElementById("city").value,


phone: document.getElementById("phone").value,


problem: document.getElementById("problem").value,


doctor: document.getElementById("doctor").value,


date: document.getElementById("date").value,


reason: document.getElementById("reason").value



};



if(patient.name=="" || patient.age=="" || patient.phone==""){


alert("Please fill patient details");


return;


}




let patients = JSON.parse(localStorage.getItem("patients")) || [];



patients.push(patient);



localStorage.setItem(
"patients",
JSON.stringify(patients)
);



alert("Appointment booked successfully!");



document.querySelectorAll("input,textarea").forEach(function(field){

field.value="";

});



}