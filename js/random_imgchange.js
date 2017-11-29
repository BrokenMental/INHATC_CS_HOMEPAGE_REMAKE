var ran = Math.floor(Math.random() * 6);
var imgc = document.getElementById('imgc');
switch (ran) {
case 0:
    imgc.src = "img/down/00.png";
    break;
case 1:
    imgc.src = "img/down/12.png";
    break;
case 2:
    imgc.src = "img/down/20.png";
    break;
case 3:
    imgc.src = "img/down/31.png";
    break;
case 4:
    imgc.src = "img/down/32.jpg";
    break;
default:
    imgc.src = "img/down/33.png";
    break;
}