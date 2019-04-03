window.addEventListener("scroll", handleScroll, false);

// navbar and image fading for landing screen
var navBar = document.getElementsByClassName("masterhead")[0];
var landingPageFader = document.getElementById("homecont");

// background image and title text fade in
var homePage = document.getElementById("homecont");
var homeElements = homePage.children;

// children of <body> to display after loading screen finishes
var portTitle = document.getElementById("homeporttitle");
var portButtons = document.getElementById("homeportbtns");
var homePort = document.getElementById("homeport");
var homeQuote = document.getElementById("homequote");
var homeAbout = document.getElementsByClassName("homeabout")[0];
var skillTitle = document.getElementById("skillstitle1");
var skillSubTitle = document.getElementById("skillstitle2");
var skills = document.getElementById("skillscontainer");
var otherHomeAbout = document.getElementsByClassName("homeabout")[1];
var footer = document.getElementsByClassName("masterfoot")[0];

// buttons to fade in when we scroll to them
var viewProjects = document.getElementById("introname");
var portItems = document.getElementsByClassName("portitem");
var sendMessage = document.getElementById("homequotebtn");
var skillItems = document.getElementsByClassName("skillitem");
var viewResume = document.getElementById("resumebtn");
var footIcons = document.getElementsByClassName("footicons")[0];

// loading page animations
var loadingPage = document.getElementById("loadingpage");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function() {
    portTitle.style.display = "none";
    portButtons.style.display = "none";
    homePort.style.display = "none";
    homeQuote.style.display = "none";
    homeAbout.style.display = "none";
    skillTitle.style.display = "none";
    skillSubTitle.style.display = "none";
    skills.style.display = "none";
    otherHomeAbout.style.display = "none";
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

    for (var i = 0; i < portItems.length; i++) {
        portItems[i].classList.remove("visible");
    }
    sendMessage.classList.remove("visible");
    for (var i = 0; i < skillItems.length; i++) {
        skillItems[i].classList.remove("visible");
    }
    viewResume.classList.remove("visible");
    for (var i = 0; i < footIcons.children.length; i++) {
        footIcons.classList.remove("visible");
    }

    portTitle.style.display = "";
    portButtons.style.display = "";
    homePort.style.display = "";
    homeQuote.style.display = "";
    homeAbout.style.display = "";
    skillTitle.style.display = "";
    skillSubTitle.style.display = "";
    skills.style.display = "";
    otherHomeAbout.style.display = "";
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

    for (var i = 0; i < skillItems.length; i++) {
        if (window.scrollY + window.innerHeight > skillItems[i].offsetTop + skillItems[i].clientHeight / 4) {
            skillItems[i].classList.add("visible");
        }
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
