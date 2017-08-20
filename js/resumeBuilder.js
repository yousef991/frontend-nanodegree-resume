/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var bio = {
    "name": "Yousef Almutairi",
    "role": "Front-End Developer",
    "biopic": "images/yousef.jpg",
    "welcomemsg": "Welcome to my resume page!",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery"],
    "contacts": {
    "mobile": "0551125547",
    "email": "y.almutairi47@gmail.com",
    "github": "yousef991",
    "twitter": "u_sef91",
    "linkedin": "yousef-a",
    "location": "Riyadh, KSA",
    },
    "display" : function() {
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      $("#header").prepend(formattedRole);
      var headerName = HTMLheaderName.replace("%data%", bio.name);
      $("#header").prepend(headerName);
      var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
      $("#header").append(bioPic);
      var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomemsg);
      $("#header").append(welcome);


      var contactslocation = HTMLlocation.replace("%data%", bio.contacts.location);
      $("#topContacts").prepend(contactslocation);
      var contactstwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      $("#topContacts").prepend(contactstwitter);
      var contactsgithub = HTMLgithub.replace("%data%", bio.contacts.gethub);
      $("#topContacts").prepend(contactsgithub);
      var contactsemail = HTMLemail.replace("%data%", bio.contacts.email);
      $("#topContacts").prepend(contactsemail);
      var contactsmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      $("#topContacts").prepend(contactsmobile);
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++ ) {
        var formattedSkill = HTMLskills.replace("%data%",  bio.skills[i] );
        $('#skills').append(formattedSkill);
      }
    }
};

bio.display();


var exp = {
    
    "workstart": "Yousef Almutairi",
    "employ": "Front-End Developer",
    "date": "May 2017 - present",
    "location": "Riyadh, KSA ",
    "descrip": "Development and support of websites and web applications using SharePoint, HTML, CSS, and JavaScript.",

    "display" : function() {
    var expstart = HTMLworkStart.replace("%data%", exp.workstart);
      $("#workExperience").append(expstart);
    var expemploy = HTMLworkEmployer.replace("%data%", exp.employ);
      $("#workExperience").append(expemploy);
    var expdate = HTMLworkDates.replace("%data%", exp.date);
      $("#workExperience").append(expdate);
    var explocation = HTMLworkLocation.replace("%data%", exp.location);
      $("#workExperience").append(explocation);
    var expdescrip = HTMLworkDescription.replace("%data%", exp.descrip);
      $("#workExperience").append(expdescrip);
    
}
};

exp.display();

 
var projects = {
    
    "start": "2016",
    "title": "video communication",
    "date": "2016",
    "img": "images/project.png",
    "descrip": "My is video call service for elderly people living alone & help elderly people communicate their friend, children, social worker easily..",

    "display" : function() {
    var projectstart = HTMLprojectStart.replace("%data%", projects.start);
      $("#projects").append(projectstart);
    var projecttitle = HTMLprojectTitle.replace("%data%", projects.title);
      $("#projects").append(projecttitle);
    var projectdate = HTMLprojectDates.replace("%data%", projects.date);
      $("#projects").append(projectdate);
    var projectdescrip = HTMLprojectDescription.replace("%data%", projects.descrip);
      $("#projects").append(projectdescrip);
    var projectimg = HTMLprojectImage.replace("%data%", projects.img);
      $("#projects").append(projectimg);        
        
    }
};
projects.display();



var education = {
    "schools":[
        {
        "name": "College of telecome and information",
        "location": "Riyadh, Saudi Arabia",
        "date": "2011",
        "major": ["Programming"]
        },
        {
        "name": "Kookmin University",
        "location": "Seoul, South Korea",
        "date": "2017",
        "major": ["Computer Science"]
        },
    ]
};

    education.display = function() {
  for ( var i = 0; i < education.schools.length; i++ ) {
  $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
     $('.education-entry:last').append(formattedSchoolName);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
     $('.education-entry:last').append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
     $('.education-entry:last').append(formattedSchoolLocation);
     var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
     $('.education-entry:last').append(formattedSchoolMajor);
  }
  
};
education.display();



$("#mapDiv").append(googleMap);



var footer = {

    "mobile": "0551125547",
    "email": "y.almutairi47@gmail.com",
    "github": "yousef991",
    "twitter": "u_sef91",
    "linkedin": "yousef-a",
    "location": "Riyadh, KSA",
 
    "display" : function() {

      var footerlocation = HTMLlocation.replace("%data%", footer.location);
      $("#footerContacts").append(footerlocation);
      var footertwitter = HTMLtwitter.replace("%data%", footer.twitter);
      $("#footerContacts").append(footertwitter);
      var footergithub = HTMLgithub.replace("%data%", footer.gethub);
      $("#footerContacts").append(footergithub);
      var footeremail = HTMLemail.replace("%data%", footer.email);
      $("#footerContacts").append(footeremail);
      var footermobile = HTMLmobile.replace("%data%", footer.mobile);
      $("#footerContacts").append(footermobile);

      }
};

footer.desplay();

