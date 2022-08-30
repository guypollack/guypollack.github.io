const str = "Guy Pollack";
let fullStr = "";
typewriter = document.getElementById("typewriter");
// typewriter.appendChild(document.createTextNode(""));

// for (letter of str) {
//     fullStr += letter;
//     setTimeout(printedStr => updateString(printedStr),500);
// }

function updateText(newString) {
    document.querySelector("#typewriter").firstChild.data = newString;
}

function addA() {
    if (document.querySelector("#typewriter").firstChild.data === "AAAAA") {
        clearInterval(intervalId);
    } else {
        document.querySelector("#typewriter").firstChild.data += "A";
    }
}

function addNextLetter() {
    if (stringIndex === str.length) {
        clearInterval(intervalId);
    } else {
        document.querySelector("#typewriter").firstChild.data += str[stringIndex];
        stringIndex++;
    }
}

function showHideTopArrow() {
    if (window.scrollY > 50) {
        document.querySelector(".nav-to-top-container").style.visibility = "visible";
        if (window.scrollY < 150) {
            document.querySelector(".nav-to-top-container").style.opacity = (window.scrollY-50)/100;
        } else {
            document.querySelector(".nav-to-top-container").style.opacity = 1;
        }
    } else {
        document.querySelector(".nav-to-top-container").style.visibility = "hidden";
    }
}

function underlineHeadings() {
    if (window.scrollY >= document.querySelector("#contact>h2").offsetTop) {
        document.querySelector("#nav-about-me-underline").classList.remove("scroll-in-section");
        document.querySelector("#nav-skills-underline").classList.remove("scroll-in-section");
        document.querySelector("#nav-projects-underline").classList.remove("scroll-in-section");
        document.querySelector("#nav-contact-underline").classList.add("scroll-in-section");
    } else if (window.scrollY >= document.querySelector("#projects>h2").offsetTop) {
        document.querySelector("#nav-about-me-underline").classList.remove("scroll-in-section");
        document.querySelector("#nav-skills-underline").classList.remove("scroll-in-section");
        document.querySelector("#nav-projects-underline").classList.add("scroll-in-section");
        document.querySelector("#nav-contact-underline").classList.remove("scroll-in-section");
    } else if (window.scrollY >= document.querySelector("#skills>h2").offsetTop) {
        document.querySelector("#nav-about-me-underline").classList.remove("scroll-in-section");
        document.querySelector("#nav-skills-underline").classList.add("scroll-in-section");
        document.querySelector("#nav-projects-underline").classList.remove("scroll-in-section");
        document.querySelector("#nav-contact-underline").classList.remove("scroll-in-section");
    } else if (window.scrollY >= document.querySelector("#about-me>h2").offsetTop) {
        document.querySelector("#nav-about-me-underline").classList.add("scroll-in-section");
        document.querySelector("#nav-skills-underline").classList.remove("scroll-in-section");
        document.querySelector("#nav-projects-underline").classList.remove("scroll-in-section");
        document.querySelector("#nav-contact-underline").classList.remove("scroll-in-section");
    } else {
        document.querySelector("#nav-about-me-underline").classList.remove("scroll-in-section");
        document.querySelector("#nav-skills-underline").classList.remove("scroll-in-section");
        document.querySelector("#nav-projects-underline").classList.remove("scroll-in-section");
        document.querySelector("#nav-contact-underline").classList.remove("scroll-in-section");
    }
}

setTimeout(() => {
    showHideTopArrow();
    // document.querySelector(".nav-about-me-container>a").click();
    window.addEventListener("scroll",showHideTopArrow);
    window.addEventListener("scroll",underlineHeadings)
},11100)

// window.alert(document.querySelector("#about-me>h2").offsetTop);

//window.alert(document.querySelector(".landing").offsetLeft); //Use to start animation from different sides

//let intervalId = setInterval(addA,500);

// let stringIndex = 0;
// let intervalId = setInterval(addNextLetter,100);