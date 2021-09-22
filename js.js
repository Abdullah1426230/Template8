var bg = document.querySelector(".intro+ .bg");
var img = document.createElement("img");
img.src = "./images/bg-pattern-intro-left-desktop.png";
img.style.marginTop = "-220px";
bg.appendChild(img);


var toggler = document.querySelector("header #open");
var ul = document.querySelector("header ul");
toggler.onclick = () => {
    // alert(this)
    ul.classList.toggle("block")
    document.body.classList.toggle("ovh")
}

document.getElementById("top").onclick = function() {
    window.scrollTo(0, 0)
}