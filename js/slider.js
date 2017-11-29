var slidIndex = 1;
showDivs(slidIndex);

function plusDivs(n) {
    showDivs(slidIndex += n);
}

function currentDiv(n) {
    showDivs(slidIndex = n);
}

function showDivs(n) {
    var i;
    var myslides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");
    if (n > myslides.length) {
        slidIndex = 1;
    }
    if (n < 1) {
        slidIndex = myslides.length;
    }
    for (i = 0; i < myslides.length; i++) {
        myslides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" wh-dot", "");
    }
    myslides[slidIndex - 1].style.display = "block";
    dots[slidIndex - 1].className += " wh-dot";
}

var nextsli = setInterval(function () {
    plusDivs(1);
}, 3000);

function stopsli(){
    clearInterval(nextsli);
}

function startsli(){
    nextsli = setInterval(function () {
        plusDivs(1);
    }, 3000);
}