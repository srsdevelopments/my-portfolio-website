window.addEventListener("scroll", handleScroll, false);

var viewProjects = document.getElementById("introname");
var navBar = document.getElementsByClassName("masterhead")[0];

var landingPageFader = document.getElementById("homecont");

var portItems = document.getElementsByClassName("portitem");
var sendMessage = document.getElementById("homequotebtn");
var readMore = document.getElementById("readmorebtn");
var viewResume = document.getElementById("resumebtn");
var footIcons = document.getElementsByClassName("footicons")[0];

var loadingPage = document.getElementById("loadingpage");
var homePage = document.getElementById("homecont");
var homeElements = homePage.children;

var portTitle = document.getElementById("homeporttitle");
var portButtons = document.getElementById("homeportbtns");
var homePort = document.getElementById("homeport");
var homeQuote = document.getElementById("homequote");
var homeAbout = document.getElementById("homeabout");
var footer = document.getElementsByClassName("masterfoot")[0];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function() {
    portTitle.style.display = "none";
    portButtons.style.display = "none";
    homePort.style.display = "none";
    homeQuote.style.display = "none";
    homeAbout.style.display = "none";
    footer.style.display = "none";

    navBar.style.opacity = 0;
    for (var i = 0; i < 3; i++) {
        homeElements[i].style.opacity = 0;
    }

    await sleep(1000);
    loadingPage.style.opacity = 0;

    await sleep(1000);
    loadingPage.style.display = "none";

    for (var i = 0; i < 3; i++) {
        homeElements[i].style.transition = "opacity 1s";
    }

    navBar.style.opacity = 1;
    await sleep(500);
    for (var i = 0; i < 3; i++) {
        homeElements[i].style.opacity = 1;
        await sleep(500);
    }

    portTitle.style.display = "";
    portButtons.style.display = "";
    homePort.style.display = "";
    homeQuote.style.display = "";
    homeAbout.style.display = "";
    footer.style.display = "";

}
function handleScroll(event) {
    if (window.scrollY > viewProjects.offsetTop) {
        navBar.classList.add("scrolled");
    }
    else {
         navBar.classList.remove("scrolled");
    }

    if (window.scrollY < window.innerHeight) {
        var opacity = (3 / 4) * window.scrollY / landingPageFader.clientHeight;
        landingPageFader.style.backgroundColor = "rgba(255, 255, 255, " + opacity + ")";

        var offset = (3 / 4) * window.scrollY;
        homePage.style.paddingTop = offset + "px";
    }

    for (var i = 0; i < portItems.length; i++) {
        if (window.scrollY + window.innerHeight > portItems[i].offsetTop + portItems[i].clientHeight / 4) {
            portItems[i].classList.add("visible");
        }
    }

    if (window.scrollY + window.innerHeight > sendMessage.offsetTop + sendMessage.clientHeight) {
        sendMessage.classList.add("visible");
    }
    if (window.scrollY + window.innerHeight > readMore.offsetTop + readMore.clientHeight) {
        readMore.classList.add("visible");
    }
    if (window.scrollY + window.innerHeight > viewResume.offsetTop + viewResume.clientHeight) {
        viewResume.classList.add("visible");
    }
    for (var i = 0; i < footIcons.children.length; i++) {
        if (window.scrollY + window.innerHeight > footIcons.children[i].children[0].offsetTop + footIcons.children[i].children[0].clientHeight) {
            footIcons.classList.add("visible");
        }
    }
}
