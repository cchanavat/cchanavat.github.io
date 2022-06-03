
var dictContentElements;
var dictNavElements;


window.onload = function() {
    dictContentElements = {
        "about": document.getElementById("content_about"),
        "work": document.getElementById("content_work"),
        "contact": document.getElementById("content_contact"),
    };
    dictNavElements = {
        "about": document.getElementById("nav_about"),
        "work": document.getElementById("nav_work"),
        "contact": document.getElementById("nav_contact"),
    }
}

function hideAllContent() {
    for (const [_, v] of Object.entries(dictContentElements)) {
        if (!v.classList.contains("hidden")) {
            v.classList.add("hidden")
        }
    }
}

function deactivateAllNAv() {
    for (const [_, v] of Object.entries(dictNavElements)) {
        if (v.classList.contains("navigation__link--is-active")) {
            v.classList.remove("navigation__link--is-active")
        }
    }
}
function toggleContent(id) {
    var contentElement = dictContentElements[id];
    var navElement = dictNavElements[id];
    
    hideAllContent();
    deactivateAllNAv();

    contentElement.classList.remove("hidden"); 
    navElement.classList.add("navigation__link--is-active");
}
