
function Skill(name, color, imageSrc) {
    this.name = name;
    this.color = color;
    this.imageSrc = imageSrc
}

var android = new Skill("Android", "#2e7d32", "/static/assets/android.png");
var go = new Skill("Golang", "#1976d2", "");
var postgres = new Skill("Postgres", "#304ffe", "/static/assets/database.png");
var machineLearning = new Skill("Machine Learning", "#6200ea", "/static/assets/chart-bar-stacked.png");
var web = new Skill("Web", "#dd2c00", "/static/assets/web.png");

var projects = {
    vidangel: {
        img: "/static/assets/vidangel.png",
        description: "This project was a large Java app written in an MVC like way. After joining the VidAngel Team, " +
        "I've converted 15% of their codebase into Kotlin, and dropped the size of the code base by over 10%. " +
        "Converting the app architecture over to MVVM has been a challenge, but has brought massive benefits with maintainability.",
        skills: [android, postgres]
    },
    vampir: {
        img: "/static/assets/vampir.png",
        description: "After watching my sister struggle to maintain her blood sugar for years, " +
        "I thought that there had to be a better way. After a year of planning and looking over solutions, " +
        "I decided on Machine Learning and entered into a Hackathon. There we took first place, and then went " +
        "on to take first place at BYU's Student Innovator of the year competition. Since then, we have decided to open source" +
        "the project after Google's announcement that they would be using similar technology.",
        skills: [android, web, postgres, machineLearning]
    },
    syds: {
        img: "/static/assets/s",
        description: "After watching my sister struggle to maintain her blood sugar for years, " +
        "I thought that there had to be a better way. After a year of planning and looking over solutions, " +
        "I decided on Machine Learning and entered into a Hackathon. There we took first place, and then went " +
        "on to take first place at BYU's Student Innovator of the year competition. Since then, we have decided to open source" +
        "the project after Google's announcement that they would be using similar technology.",
        skills: [web]
    },
    clearplex: {
        img: "/static/assets/clearplex.jpg",
        description: "After watching my sister struggle to maintain her blood sugar for years, " +
        "I thought that there had to be a better way. After a year of planning and looking over solutions, " +
        "I decided on Machine Learning and entered into a Hackathon. There we took first place, and then went " +
        "on to take first place at BYU's Student Innovator of the year competition. Since then, we have decided to open source" +
        "the project after Google's announcement that they would be using similar technology.",
        skills: [android, web, postgres]
    }
};


function createSkill(skill) {
    return $("<img style='background: " + skill.color + "' class='modal__skill' src=" + skill.imageSrc + ">")
}


function fillOutModal(project) {

    var skills = $(".modal__skills--icons")

    $(".modal-container").css({"display": "flex"});

    $(".modal__image").attr('src', project.img);
    $(".modal__description").text(project.description);
    skills.empty();

    for (var i = 0; i < project.skills.length; i++) {
        skills.append(createSkill(project.skills[i]));
    }
}

function lock() {
    $("body").css({
        overflow: "hidden",
        position: "fixed",
        height: "100vh"
    });
}

function unlock() {
    $("body").css({
        overflow: "auto",
        position: "absolute",
        height: "auto"
    });
}

$(document).ready(function() {

    $(".modal-container").click(function () {
        $(this).hide();
        unlock()
    });

    $(".project__about").click(function () {
        var id = $(this).parent().attr('id');
        fillOutModal(projects[id]);
        lock()
    });
});



