// scroll sticky function start
window.onscroll = function () {
    navbarFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navbarFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
} // scroll sticky function end

// readMore function function start
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function arrow() {
    var dot = document.getElementById("dot");
    var moreText = document.getElementById("left");
    var btnText = document.getElementById("next");

    if (dot.style.display === "none") {
        dot.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dot.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

// readMore function function end