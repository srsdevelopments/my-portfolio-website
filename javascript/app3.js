window.addEventListener("scroll", handleScroll, false);

var body = document.getElementsByTagName("body")[0];
var navBar = document.getElementsByClassName("masterhead")[0];
var portItems = document.getElementsByClassName("portitem");
var footIcons = document.getElementsByClassName("footicons")[0];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function() {
    body.style.opacity = 1;

    for (var i = 0; i < portItems.length; i++) {
        if (window.scrollY + window.innerHeight > portItems[i].offsetTop + portItems[i].clientHeight / 4) {
            portItems[i].classList.add("visible");
        }
    }
}
function handleScroll(event) {
    if (window.scrollY > 500) {
        navBar.classList.add("scrolled");
    }
    else {
         navBar.classList.remove("scrolled");
    }

    for (var i = 0; i < portItems.length; i++) {
        if (window.scrollY + window.innerHeight > portItems[i].offsetTop + portItems[i].clientHeight / 4) {
            portItems[i].classList.add("visible");
        }
    }

    for (var i = 0; i < footIcons.children.length; i++) {
        if (window.scrollY + window.innerHeight > footIcons.children[i].children[0].offsetTop + footIcons.children[i].children[0].clientHeight) {
            footIcons.classList.add("visible");
        }
    }
}
