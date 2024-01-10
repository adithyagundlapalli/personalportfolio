var tablinks = document.getElementsByClassName("t");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const icon = document.getElementById("theme-icon");

function themeSwitch() {
    document.body.classList.toggle("light-theme");
    console.log("Theme switch function called!");

    if (document.body.classList.contains("light-theme")) {
        document.getElementById("theme-icon").src = "img/moon.png";
    } else {
        document.getElementById("theme-icon").src = "img/sun.png";
    }
}





     
