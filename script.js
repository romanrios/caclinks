document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("section a");
    for (var i = 0; i < links.length; i++) {
        links[i].setAttribute("target", "_blank");
    }
});
