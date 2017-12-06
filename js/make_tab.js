var divcon1 = document.getElementById("div-content1");
var divcon2 = document.getElementById("div-content2");
var divcon3 = document.getElementById("div-content3");
var divcon4 = document.getElementById("div-content4");
divcon1.style.display = "block";
divcon2.style.display = "none";
divcon3.style.display = "block";
divcon4.style.display = "none";
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
p1.style.background = "white";
p1.style.color = "darkseagreen";
p3.style.background = "white";
p3.style.color = "darkseagreen";

function cgcolor(num) {
    if (num == 1) {
        divcon2.style.display = "none";
        divcon1.style.display = "block";
        p1.style.background = "white";
        p1.style.color = "darkseagreen";
        p2.style.background = "darkseagreen";
        p2.style.color = "white";
    }
    else if(num == 2) {
        divcon1.style.display = "none";
        divcon2.style.display = "block";
        p2.style.background = "white";
        p2.style.color = "darkseagreen";
        p1.style.background = "darkseagreen";
        p1.style.color = "white";
    }
    else if(num == 3) {
        divcon4.style.display = "none";
        divcon3.style.display = "block";
        p3.style.background = "white";
        p3.style.color = "darkseagreen";
        p4.style.background = "darkseagreen";
        p4.style.color = "white";
    }
    else if(num == 4) {
        divcon3.style.display = "none";
        divcon4.style.display = "block";
        p4.style.background = "white";
        p4.style.color = "darkseagreen";
        p3.style.background = "darkseagreen";
        p3.style.color = "white";
    }
}