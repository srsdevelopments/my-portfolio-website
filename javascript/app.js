window.addEventListener("scroll", handleScroll, false);

var viewProjects = document.getElementById("introname");
var navBar = document.getElementsByClassName("masterhead")[0];

var landingPageFader = document.getElementById("homecont");

var portItems = document.getElementsByClassName("portitem");
var sendMessage = document.getElementById("homequotebtn");
var readMore = document.getElementById("readmorebtn");
var viewResume = document.getElementById("resumebtn");
var footIcons = document.getElementsByClassName("footicons")[0];

function handleScroll(event) {
    if (window.scrollY > viewProjects.offsetTop) {
        navBar.classList.add("scrolled");
    }
    else {
         navBar.classList.remove("scrolled");
    }

    var opacity = (3 / 4) * window.scrollY / landingPageFader.clientHeight;
    landingPageFader.style.backgroundColor = "rgba(255, 255, 255, " + opacity + ")";

    for (var i = 0; i < portItems.length; i++) {
        if (window.scrollY + window.innerHeight > portItems[i].offsetTop) {
            portItems[i].classList.add("visible");
        }
    }

    if (window.scrollY + window.innerHeight > sendMessage.offsetTop) {
        sendMessage.classList.add("visible");
    }
    if (window.scrollY + window.innerHeight > readMore.offsetTop) {
        readMore.classList.add("visible");
    }
    if (window.scrollY + window.innerHeight > viewResume.offsetTop) {
        viewResume.classList.add("visible");
    }
    for (var i = 0; i < footIcons.children.length; i++) {
        if (window.scrollY + window.innerHeight > footIcons.children[i].children[0].offsetTop) {
            footIcons.classList.add("visible");
        }
    }
}
