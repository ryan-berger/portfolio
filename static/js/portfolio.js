
function Skill(name, color, imageSrc) {
    this.name = name;
    this.color = color;
    this.imageSrc = imageSrc
}

var android = new Skill("", "", "");
var go = new Skill("", "", "");
var postgres = new Skill("", "", "");
var machineLearning = new Skill("", "", "");
var web = new Skill("", "", "");

var projects = {
    vidangel: {
        img: "",
        description: "",
        awards: [],
        skills: [android, postgres]
    },
    vampir: {
        img: "",
        description: "",
        awards: [""],
        skills: [android, go, web, postgres, machineLearning]
    }
};


function fillOutModal(project) {

    $(".modal-container").show()
}

$(document).ready(function() {
    $(".project").click(function () {
        var id = $(this).attr('id');
        fillOutModal(projects[id])
    });
});



