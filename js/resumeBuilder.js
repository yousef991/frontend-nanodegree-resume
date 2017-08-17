/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var bio = {
    "name": "Yousef Almutairi",
    "role": "Front-End Developer",
    "biopic": "images/yousef.jpg",
    "welcomemsg": "Welcome to my resume page!",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery"],
};
var contacts={
    "mobile": "0551125547",
    "email": "y.almutairi47@gmail.com",
    "github": "yousef991",
    "twitter": "u_sef91",
    "linkedin": "yousef-a",
    "location": "Riyadh, KSA",
};

    
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var headerName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(headerName);
    var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(bioPic);

    
//    var biowelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomemsg);
//    $("#header").prepend(biowelcomemsg);


    var contactslocation = HTMLlocation.replace("%data%", contacts.location);
    $("#topContacts").prepend(contactslocation);
    var contactstwitter = HTMLtwitter.replace("%data%", contacts.twitter);
    $("#topContacts").prepend(contactstwitter);
    var contactsgithub = HTMLgithub.replace("%data%", contacts.gethub);
    $("#topContacts").prepend(contactsgithub);
    var contactsemail = HTMLemail.replace("%data%", contacts.email);
    $("#topContacts").prepend(contactsemail);
    var contactsmobile = HTMLmobile.replace("%data%", contacts.mobile);
    $("#topContacts").prepend(contactsmobile);





var education = {
    "schools":[
        {
        "name": "College of telecome and information",
        "city": "Riyadh, Saudi Arabia",
        "degree": "Associate Degree",
        "major": ["Programming"]
        },
        {
        "name": "Kookmin University",
        "city": "Seoul, South Korea",
        "degree": "BA",
        "major": ["Computer Science"]
        },
    ]
};


document.getElementById("education").innerHTML += education.school.name + "<br>";


