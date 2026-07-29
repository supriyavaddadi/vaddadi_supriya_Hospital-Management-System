function bookAppointment(){


let patient = {


name: document.getElementById("name").value,

age: document.getElementById("age").value,

gender: document.getElementById("gender").value,

disease: document.getElementById("disease").value,

doctor: document.getElementById("doctor").value,

city: document.getElementById("city").value,

contact: document.getElementById("contact").value


};



if(patient.name=="" || patient.age=="" || patient.contact==""){

alert("Please fill patient details");

return;

}



fetch("http://127.0.0.1:5000/register",
{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(patient)


})


.then(response=>response.json())


.then(data=>{


alert(data.message);



document.querySelectorAll("input,textarea").forEach(function(field){

field.value="";

});


})



.catch(error=>{


console.log(error);

alert("Backend connection failed");


});


}







function loadPatients(){



fetch("http://127.0.0.1:5000/patients")



.then(response=>response.json())



.then(data=>{



let records=document.getElementById("records");


records.innerHTML="";



data.forEach(function(patient){



let card=document.createElement("div");


card.className="card";



card.innerHTML=`

<h2>Patient ID: ${patient.id}</h2>

<p><b>Name:</b> ${patient.name}</p>

<p><b>Age:</b> ${patient.age}</p>

<p><b>Gender:</b> ${patient.gender}</p>

<p><b>Disease:</b> ${patient.disease}</p>

<p><b>Doctor:</b> ${patient.doctor}</p>

<p><b>Village:</b> ${patient.city}</p>

<p><b>Contact:</b> ${patient.contact}</p>

`;



records.appendChild(card);



});



})


.catch(error=>{


console.log(error);


});


}