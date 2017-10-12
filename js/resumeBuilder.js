/*
This is empty on purpose! Your code to build the resume will go here.
*/
var bio = {
    "name": "feerliliso",
    "role": "Tech of lab",
    "contacts": {
        "mobile": "13521849286",
        "email": "feerliliso@hotmail.com",
        "github": "https://github.com/feerliliso",
        "twitter": "https://twitter.com/feerliliso",
        "location": "Beijing"
    },
    "biopic": "images/myPhoto.jpg",
    "welcomeMessage": "Welcome you arrive my web set and thanks for your attention",
    "skills": ["computer", "medical lab", "photoshop", "addob AI", "program"]
};

var work = {
    "jobs": [{
            "employer": "Fenglinlin",
            "title": "Director of lab",
            "location": "Beijing xiaotangshan Hospital",
            "dates": "2002.7.1",
            "description": "work at lab of Hospital."
        },
        {
            "employer": "Sunfei",
            "title": "Doctor",
            "location": "Beijing United Family Hospital",
            "dates": "2007.7.1",
            "description": "work at center lab and clinic lab ",
        },


    ]
};
var projects = {
    "projects": [{
        "title": "object of web developer lesson of udacity ",
        "dates": "2017.9.13",
        "description": "hard work for study JS Html and CSS",
        "images": ["images/object.jpg", "images/objectt.jpg", "images/objectttt.jpg"]
    }]

};
var education = {
    "schools": [{
            "name": "Capital medical university",
            "location": "Beijing",
            "degge": "College",
            "majors": ["medical lab technology"],
            "dates": "1999~2002"
        },
        {
            "name": "Medical Board of Beijing university",
            "location": "Beijing",
            "degree": "Clinicl ",
            "majors": "medical lab technology",
            "dates": "2005~2008"
        }
    ],

    "onlineCourses": [{
        "title": "Front-end development",
        "school": "Udacity(优达学城)",
        "dates": "2017",
        "url": "https://classroom.udacity.com/me"

    }]
};


//this function show my work.
work.display = function() {
    work.jobs.forEach(function(work) {

        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.employer),
            formattedTitle = HTMLworkTitle.replace('%data%', work.title),
            formattedEmployerTitle = formattedTitle + formattedEmployer,
            formattedLocation = HTMLworkLocation.replace('%data%', work.location),
            formattedDates = HTMLworkDates.replace('%data%', work.dates),
            formattedDescription = HTMLworkDescription.replace('%data%', work.description);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").
        append(formattedDates).
        append(formattedDescription).
        append(formattedEmployerTitle).
        append(formattedLocation);

    });
};

function inName(name) {
    newName = name.strim().split(" ");
    console.log(name);
    newName[0] = name[1].toUpperCase();
    newName[1] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return newName[0] + " " + newName[1];
}
$("#main").append(internationalizeButton);
//this function show my projects.
projects.display = function buildProject() {
    projects.projects.forEach(function(p) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace('%data%', p.title),
            formattedDates = HTMLprojectDates.replace('%data%', p.dates),
            formattedDescription = HTMLprojectDescription.replace('%data%', p.description);

        $(".project-entry:last").
        append(formattedTitle).
        append(formattedDates).
        append(formattedDescription);

        p.images.forEach(function(url) {
            var formattedImage = HTMLprojectImage.replace('%data%', url);
            $(".project-entry:last").append(formattedImage);

        });
    });
};
//this function show my bio.
bio.display = function displaybio() {
    var formattedHTMLheaderName = HTMLheaderName.replace('%data%', bio.name),
        formattdHTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role),
        welcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage),
        formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
    $("#header").prepend(welcomeMessage).
    append(formattedHTMLheaderName).
    append(formattdHTMLheaderRole).
    append(formattedPic).
    append(HTMLskillsStart);


    bio.skills.forEach(function(s) {
        formattedSkills = HTMLskills.replace('%data%', s);
        $("#skills").append(formattedSkills);
    });


    for(var t in bio.contacts) {
        //if(bio.contacts.hasOwnProperterty(t))  {
        var formattedHTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%", t)
            .replace('%data%', bio.contacts[t]);
        $("#topContacts,#footerContacts").append(formattedHTMLcontactGeneric);

        //}
    }
};


//this function show my education.
education.display = function() {
    $("#education").append(HTMLschoolStart);

    education.schools.forEach(function(edu) {

        var formattedHTMLschoolName = HTMLschoolName.replace('%data%', edu.name),
            formattedHTMLschoolDegree = HTMLschoolDegree.replace('%data%', edu.degree),
            formattedHTMLschoolDates = HTMLschoolDates.replace('%data%', edu.dates),
            formattedschoolLocation = HTMLschoolLocation.replace('%data%', edu.location),
            formattedschoolMajor = HTMLschoolMajor.replace('%data%', edu.majors);
        $(".education-entry:last").
        append(formattedHTMLschoolName).
        append(formattedHTMLschoolDegree).
        append(formattedHTMLschoolDates).
        append(formattedschoolLocation).
        append(formattedschoolMajor);
    });

    education.onlineCourses.forEach(function(eduu) {

        var formattedHTMLonlineTitle = HTMLonlineTitle.replace('%data%', eduu.title),
            formattedonlineSchool = HTMLonlineSchool.replace('%data%', eduu.school),
            formattedHTMLonlineDates = HTMLonlineDates.replace('%data%', eduu.dates),
            formattedHTMLHTMLonlineURL = HTMLonlineURL.replace('%data%', eduu.url);
        $(".education-entry:last").
        append(HTMLonlineClasses).
        append(formattedHTMLonlineTitle).
        append(formattedonlineSchool).
        append(formattedHTMLonlineDates).
        append(formattedHTMLHTMLonlineURL);

    });
};


$("#mapDiv").append(googleMap); //show map.
education.display(); //show education part.
bio.display(); //show bio part.
work.display(); //show work part.
projects.display(); //show projectsct part.
