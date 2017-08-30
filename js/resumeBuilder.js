var bio = {
    "name": "Yousef Almutairi",
    "role": "Front-End Developer",
    "biopic": "images/yousef.jpg",
    "welcomeMessage": "Welcome to my resume page!",
    "skills": ["HTML", "CSS", "JavaScript", "ASP.Net", "Data structure", "Sendgrid", "Microsoft office", "Photoshop"],
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


var projects = {

    "projects": [{
        "start": "2016",
        "title": "video communication",
        "dates": "2016",
        "images": "images/project.png",
        "description": "My project was a video call service for elderly people living alone & help elderly people communicate their friend, children, social worker easily..",
    }],
    
        "display": function() {
            projects.projects.forEach(function(myproject) {
            var projectstart = HTMLprojectStart.replace("%data%", myproject.start);
            $("#projects").append(projectstart);
            var projecttitle = HTMLprojectTitle.replace("%data%", myproject.title);
            $("#projects").append(projecttitle);
            var projectdate = HTMLprojectDates.replace("%data%", myproject.dates);
            $("#projects").append(projectdate);
            var projectdescription = HTMLprojectDescription.replace("%data%", myproject.description);
            $("#projects").append(projectdescription);
            var projectimage = HTMLprojectImage.replace("%data%", myproject.images);
            $("#projects").append(projectimage);
        });
    }
};
projects.display();



var education = {
    "schools": [{
        "name": "College of telecome and information",
        "location": "Riyadh, Saudi Arabia",
        "dates": "2011",
        "degree": "Diploma",
        "majors": ["Programming"]
    }, {
        "name": "Kookmin University",
        "location": "Seoul, South Korea",
        "dates": "2017",
        "degree": "BA",
        "majors": ["Computer Science"]

    }],

    "onlineCourses": [{
        "title": "Front end developer",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/",
    }, {
        "title": "Show Academy",
        "school": "Show Academy - Online",
        "dates": "2016",
        "url": "http://www.shawacademy.com/",
    }],
};

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        $('.education-entry:last').append(formattedSchoolName);
        var formattedSchooldates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $('.education-entry:last').append(formattedSchooldates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $('.education-entry:last').append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $('.education-entry:last').append(formattedSchoolMajor);
        var formattedSchooldegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $('.education-entry:last').append(formattedSchooldegree);
    }

    for (var j = 0; j < education.onlineCourses.length; j++) {
        $("#education").append(HTMLonlineClasses);
        var formattedonlineClassestitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        $("#education").append(formattedonlineClassestitle);
        var formattedonlineClassesschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        $("#education").append(formattedonlineClassesschool);
        var formattedonlineClassesdates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        $("#education").append(formattedonlineClassesdates);
        var formattedonlineClassesurl = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $("#education").append(formattedonlineClassesurl);
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