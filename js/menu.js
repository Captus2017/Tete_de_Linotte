
sfHover = function() {
        var sfEls = document.getElementById("menu").getElementsByTagName("LI");
        for (var i=0; i<sfEls.length; i++) {
                sfEls[i].onmouseover=function() {
                        this.className+=" sfhover";
                }
                sfEls[i].onmouseout=function() {
                        this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
                }
        }
}
if (window.attachEvent) window.attachEvent("onload", sfHover);




document.createElement('video');

var vid = document.getElementById("titre-video");
var pauseButton = document.getElementById("vidpause");
function vidFace() {
    vid.classList.add("stopfade");
    }
    vid.addEventListener('ended', function() {
        vid.pause();
        videFade();
    });
pauseButton.addEventListener("click", function() {
        vid.classList.toggle("stopfade");
if(vid.paused){
    vid.play();
    pauseButton.innerHTML = "Pause";
}
else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
}
})

