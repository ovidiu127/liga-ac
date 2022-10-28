document.getElementById("im1").onmousedown = function () {
    var rnd=Math.floor(Math.random()*100)%5+1;
    document.getElementById("im1").src="img/"+rnd+".jpg";
};