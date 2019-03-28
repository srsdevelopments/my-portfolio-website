window.addEventListener("scroll", handleScroll, false);

var navBar = document.getElementsByClassName("masterhead")[0];
var footIcons = document.getElementsByClassName("footicons")[0];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function() {
}
function handleScroll(event) {
    if (window.scrollY > 500) {
        navBar.classList.add("scrolled");
    }
    else {
         navBar.classList.remove("scrolled");
    }

    for (var i = 0; i < footIcons.children.length; i++) {
        if (window.scrollY + window.innerHeight > footIcons.children[i].children[0].offsetTop + footIcons.children[i].children[0].clientHeight) {
            footIcons.classList.add("visible");
        }
    }
}
