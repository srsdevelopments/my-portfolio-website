window.addEventListener("scroll", handleScroll, false);

var landingPage = document.getElementById("home");
var navBar = document.getElementsByClassName("masterhead")[0];

var landingPageFader = document.getElementById("homecont");

function handleScroll(event) {
    if (window.scrollY > landingPage.clientHeight) {
        navBar.classList.add("scrolled");
    }
    else {
         navBar.classList.remove("scrolled");
    }

    var opacity = (3 / 4) * window.scrollY / landingPage.clientHeight;
    landingPageFader.style.backgroundColor = "rgba(255, 255, 255, " + opacity + ")";
}
