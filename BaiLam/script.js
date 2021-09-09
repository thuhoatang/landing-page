// Show - Hide Menu on Scroll
var prevScrollpos = window.pageYOffset;
var prevScrollpos02 = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("menuHeaderLogo").style.top = "0";
        document.getElementById("menuHome").style.top = "0";
    } else {
        document.getElementById("menuHeaderLogo").style.top = "-100px";
        document.getElementById("menuHome").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

//

// $(document).ready(function() {
//     $("#cardIdAboutme").mouseenter(function() {
//         $("#aboutme").slideToggle(1000);
//     });
// });


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }

}