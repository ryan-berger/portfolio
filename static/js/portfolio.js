
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
        description: "Bacon ipsum dolor amet ball tip t-bone kielbasa pancetta burgdoggen, alcatra pork pastrami short loin.",
        awards: [],
        skills: [android, postgres],
        link: ""
    },
    vampir: {
        img: "/static/assets/vampir.png",
        description: "Bacon ipsum dolor amet ball tip t-bone kielbasa pancetta burgdoggen, alcatra pork pastrami short loin.",
        awards: [""],
        skills: [android, go, web, postgres, machineLearning],
        link: ""
    }
};


function createSkill(skill) {
    return $("<img style='background: " + skill.color + "' class='modal__skill' src=" + skill.imageSrc + ">")
}


function fillOutModal(project) {

    var skills = $(".modal__skills")

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
        overflow: "hidden",
        position: "fixed",
        height: "auto"
    });
}

$(document).ready(function() {

    $(".modal-container").click(function () {
        $(this).hide()
    });

    $(".modal").click(function (e) {
        e.stopPropagation();
        unlock()
    });

    $(".project__about").click(function () {
        var id = $(this).parent().attr('id');
        fillOutModal(projects[id])
        lock()
    });
});



