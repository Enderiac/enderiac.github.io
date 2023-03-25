let d = document;
let guishowing = false;

function hidegui() {
    if (guishowing) {
        var gui = d.querySelectorAll(".gui");
        for (var i = 0; i < gui.length; i++) {
            gui[i].style.opacity = 0;
            gui[i].style.display = "none"
            guishowing = false;
        }
    }
}

function showtrack(title, album, artist, sc, yt, mp3, ng) {
    if (!guishowing) {
        d.getElementById("listenon").style.display = "block"
        d.getElementById("listenon").style.opacity = 1;
        guishowing = true;
    }
    
    var sclink = d.querySelectorAll(".soundcloud");
    var ytlink = d.querySelectorAll(".youtube");
    var mp3link = d.querySelectorAll(".mp3");
    var nglink = d.querySelectorAll(".newgrounds");
    
    d.getElementById("listenonimg").src = "/music/res/" + album + ".png";
    d.getElementById("listenontitle").innerHTML = title;
    d.getElementById("listenonartist").innerHTML = artist;
    

    if (sc) {
        d.getElementById("soundcloud").href = "https://soundcloud.com/" + sc;
        for (var i = 0; i < sclink.length; i++) {
        sclink[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < sclink.length; i++) {
            sclink[i].style.display = "none";
        } 
    }
    if (yt) {
        d.getElementById("youtube").href = "https://youtu.be/" + yt;
        for (var i = 0; i < ytlink.length; i++) {
        ytlink[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < ytlink.length; i++) {
            ytlink[i].style.display = "none";
        } 
    }
    if (mp3) {
        d.getElementById("mp3").href = "https://drive.google.com/file/d/" + mp3;
        for (var i = 0; i < mp3link.length; i++) {
        mp3link[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < mp3link.length; i++) {
            mp3link[i].style.display = "none";
        } 
    }
    if (ng) {
        d.getElementById("newgrounds").href = "https://www.newgrounds.com/audio/listen/" + ng;
        for (var i = 0; i < nglink.length; i++) {
        nglink[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < nglink.length; i++) {
            nglink[i].style.display = "none";
        } 
    }
}

function copytext(text) {
    navigator.clipboard.writeText(text);
    alert(text + " was copied to clipboard!")
}
 
// Check viewport size and redirect if too low.

let vw = window.innerWidth
let vh = window.innerHeight

// if (vw < 768) {
//     alert("This website is not yet supported on your device or resolution. Please make your resolution bigger or use a device with a bigger screen. Your resolution: "+vw+"x"+vh)
//     window.location.href = "about:blank"
// }

// Configure the paths for the navigation bar.

let homepath = "/home"
let musicpath = "/music"
let exclusivepath = "/exclusive"
let socialpath = "https://linktr.ee/enderiac"

document.getElementById("home").href = homepath;
document.getElementById("music").href = musicpath;
document.getElementById("exclusive").href = exclusivepath;
document.getElementById("social").href = socialpath;
