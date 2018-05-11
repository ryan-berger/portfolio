var sideNavToggle = false;

$(document).ready(function () {
    var sidenav = $(".sidenav");
    var overlay = $(".overlay");

    function toggle() {
        console.log("clicked!");
        sideNavToggle = !sideNavToggle;
        if (sideNavToggle) {
            sidenav.animate({top: "0%"}, 300);
            overlay.show();
            $("body").css({"overflow": "hidden", position: "fixed"});
        } else {
            sidenav.animate({top: "-200%"}, 300);
            overlay.hide();
            $("body").css({"overflow": "auto", position: "absolute"});
        }
    }


    overlay.click(toggle);
    $("#icon").click(toggle)
});