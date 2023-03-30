let d = document;
let guishowing = false;
const urlParams = new URLSearchParams(window.location.search);

let banner = d.getElementById("banner")
let bannertext = d.getElementById("bannertext")
let bannerenabled = false;
let bannertext_ = "";

if (bannerenabled) {
    banner.style.display = "block";
    bannertext.innerHTML = bannertext_;
}

// General functions

function hidegui() {
    if (guishowing) {
        var gui = d.querySelectorAll(".gui");
        for (var i = 0; i < gui.length; i++) {
            gui[i].style.display = "none"
            guishowing = false;
        }
    }
}

function runurlfunc() {
    const funcname = urlParams.get('run');
    eval(funcname)
}

function go(to) {
    window.location.href = to;
}

function showtrack(title, album, artist, sc, yt, mp3, ng) {
    if (!guishowing) {
        d.getElementById("listenon").style.display = "inline-block"
        guishowing = true;
    }
    
    var sclink = d.querySelectorAll(".soundcloud");
    var ytlink = d.querySelectorAll(".youtube");
    var mp3link = d.querySelectorAll(".mp3");
    var nglink = d.querySelectorAll(".newgrounds");
    
    d.getElementById("listenonimg").src = "/music/res/" + album + ".jpg";
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


// Configure the paths for the navigation bar.

let homepath = "/"
let musicpath = "/music"
let exclusivepath = "/exclusive"
let socialpath = "https://linktr.ee/enderiac"

d.getElementById("home").href = homepath;
d.getElementById("music").href = musicpath;
d.getElementById("exclusive").href = exclusivepath;
d.getElementById("social").href = socialpath;

runurlfunc();