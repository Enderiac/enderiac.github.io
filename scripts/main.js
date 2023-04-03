// Controlled

const d = document;
const urlParams = new URLSearchParams(window.location.search);
const banner = d.getElementById("banner")
const bannertext = d.getElementById("bannertext")
const bannerenabled = false;
const bannertext_ = "";

// Independent

let guishowing = false;
let smallviewport = false;
if (!smallviewport) {
    d.getElementById("menubutton").style.display = "none";
}

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
        d.getElementById("soundcloud").href = sc;
        for (var i = 0; i < sclink.length; i++) {
        sclink[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < sclink.length; i++) {
            sclink[i].style.display = "none";
        } 
    }
    if (yt) {
        d.getElementById("youtube").href = yt;
        for (var i = 0; i < ytlink.length; i++) {
        ytlink[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < ytlink.length; i++) {
            ytlink[i].style.display = "none";
        } 
    }
    if (mp3) {
        d.getElementById("mp3").href = mp3;
        for (var i = 0; i < mp3link.length; i++) {
        mp3link[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < mp3link.length; i++) {
            mp3link[i].style.display = "none";
        } 
    }
    if (ng) {
        d.getElementById("newgrounds").href = ng;
        for (var i = 0; i < nglink.length; i++) {
        nglink[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < nglink.length; i++) {
            nglink[i].style.display = "none";
        } 
    }
}

function shownavmenu() {
    if (!guishowing) {
        d.getElementById("menu").style.display = "inline-block"
        guishowing = true;
    }
}

function copytext(text) {
    navigator.clipboard.writeText(text);
    alert(text + " was copied to clipboard!")
}

window.addEventListener("resize", function() {
    checkviewportsize(window.innerWidth);
});

function checkviewportsize(vw) {
    if (vw<=768) {
        smallviewport = true;

        d.getElementById("menubutton").style.display = "table-cell"
        d.getElementById("home").style.display = "none";
        d.getElementById("music").style.display = "none";
        d.getElementById("exclusive").style.display = "none";
        d.getElementById("social").style.display = "none";
    } else {
        smallviewport = false;
        
        d.getElementById("menubutton").style.display = "none"
        d.getElementById("home").style.display = "table-cell"
        d.getElementById("music").style.display = "table-cell"
        d.getElementById("exclusive").style.display = "table-cell"
        d.getElementById("social").style.display = "table-cell"
    }
}


// Path configuration

let homepath = "/?"
let musicpath = "/music"
let exclusivepath = "/exclusive"
let socialpath = "https://linktr.ee/enderiac"

d.getElementById("home").href = homepath;
d.getElementById("music").href = musicpath;
d.getElementById("exclusive").href = exclusivepath;
d.getElementById("social").href = socialpath;

d.getElementById("_home").href = homepath;
d.getElementById("_music").href = musicpath;
d.getElementById("_exclusive").href = exclusivepath;
d.getElementById("_social").href = socialpath;

runurlfunc();

checkviewportsize(window.innerWidth);