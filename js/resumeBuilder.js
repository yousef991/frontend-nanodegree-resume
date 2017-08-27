var bio = {
    "name": "Yousef Almutairi",
    "role": "Front-End Developer",
    "biopic": "images/yousef.jpg",
    "welcomeMessage": "Welcome to my resume page!",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery"],
    "contacts": {
        "mobile": "0551125547",
        "email": "y.almutairi47@gmail.com",
        "github": "yousef991",
        "twitter": "u_sef91",
        "linkedin": "yousef-a",
        "location": "Riyadh, KSA",
    },
    "display": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var headerName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(headerName);
        var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(bioPic);
        var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
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
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $('#skills').append(formattedSkill);
        }
    }
};

bio.display();


var work = {

    "jobs": [{

        "employer": "Yousef Almutairi",
        "title": "Front-End Developer",
        "dates": "May 2017 - present",
        "location": "Riyadh, KSA ",
        "description": "Development and support of websites and web applications using SharePoint, HTML, CSS, and JavaScript.",

    }],

    "display": function() {

        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function(job) {
            var expstart = HTMLworkStart.replace("%data%", job.employer);
            $("#workExperience").append(expstart);
            var expemploy = HTMLworkEmployer.replace("%data%", job.title);
            $("#workExperience").append(expemploy);
            var expdate = HTMLworkDates.replace("%data%", job.dates);
            $("#workExperience").append(expdate);
            var explocation = HTMLworkLocation.replace("%data%", job.location);
            $("#workExperience").append(explocation);
            var expdescrip = HTMLworkDescription.replace("%data%", job.description);
            $("#workExperience").append(expdescrip);
        });
    }
};

work.display();


var project = {

    "projects": [{
        "Start": "2016",
        "Title": "video communication",
        "Dates": "2016",
        "Image": "images/project.png",
        "Description": "My is video call service for elderly people living alone & help elderly people communicate their friend, children, social worker easily..",
    }],

    "display": function() {
        project.projects.forEach(function(myproject) {
            var projectstart = HTMLprojectStart.replace("%data%", myproject.Start);
            $("#projects").append(projectstart);
            var projecttitle = HTMLprojectTitle.replace("%data%", myproject.Title);
            $("#projects").append(projecttitle);
            var projectdate = HTMLprojectDates.replace("%data%", myproject.Dates);
            $("#projects").append(projectdate);
            var projectdescrip = HTMLprojectDescription.replace("%data%", myproject.Description);
            $("#projects").append(projectdescrip);
            var projectimg = HTMLprojectImage.replace("%data%", myproject.Image);
            $("#projects").append(projectimg);
        });
    }
};
project.display();



var education = {
    "schools": [{
        "name": "College of telecome and information",
        "location": "Riyadh, Saudi Arabia",
        "date": "2011",
        "major": ["Programming"]
    }, {
        "name": "Kookmin University",
        "location": "Seoul, South Korea",
        "date": "2017",
        "major": ["Computer Science"]
    }],

    "onlineClasses": [{
        "Title": "Front end developer",
        "School": "Udacity",
        "Dates": "2017",
        "URL": "https://www.udacity.com/",
    }, {
        "Title": "Show Academy",
        "School": "Show Academy - Online",
        "Dates": "2016",
        "URL": "http://www.shawacademy.com/",
    }],
};

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
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

    for (var j = 0; j < education.onlineClasses.length; j++) {
        $("#education").append(HTMLonlineClasses);
        var formattedonlineClassesTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[j].Title);
        $("#education").append(formattedonlineClassesTitle);
        var formattedonlineClassesSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[j].School);
        $("#education").append(formattedonlineClassesSchool);
        var formattedonlineClassesDates = HTMLonlineDates.replace("%data%", education.onlineClasses[j].Dates);
        $("#education").append(formattedonlineClassesDates);
        var formattedonlineClassesURL = HTMLonlineURL.replace("%data%", education.onlineClasses[j].URL);
        $("#education").append(formattedonlineClassesURL);
    }

};

education.display();

var footer = {

    "mobile": "0551125547",
    "email": "y.almutairi47@gmail.com",
    "github": "yousef991",
    "twitter": "u_sef91",
    "linkedin": "yousef-a",
    "location": "Riyadh, KSA",

    "display": function() {

        var footerlocation = HTMLlocation.replace("%data%", footer.location);
        $("#footerContacts").append(footerlocation);
        var footertwitter = HTMLtwitter.replace("%data%", footer.twitter);
        $("#footerContacts").append(footertwitter);
        var footergithub = HTMLgithub.replace("%data%", footer.github);
        $("#footerContacts").append(footergithub);
        var footeremail = HTMLemail.replace("%data%", footer.email);
        $("#footerContacts").append(footeremail);
        var footermobile = HTMLmobile.replace("%data%", footer.mobile);
        $("#footerContacts").append(footermobile);

    }
};

footer.display();

$("#mapDiv").append(googleMap);