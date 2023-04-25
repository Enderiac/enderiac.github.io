var flps = [
    {
        'thumbnailpath': "/exclusive/res/icanhasdrumandbass.jpg",
        'title': "DnB Track Concept FLP",
        'desc': "Paid VSTs converted to DirectWave. <br><br> Contains samples from: KSHMR, D3ron, Ultrasonic & Christoph Ghosthack.",
        'dllink': "https://drive.google.com/uc?export=download&id=1FLZn6g0VsWc04hxTvTPV62pmnO4VCxjC",
        'disabled': false,
    },
    {
        'thumbnailpath': "/exclusive/res/vistaflp.jpg",
        'title': "Vista FLP",
        'desc': "Requires reFX Nexus, Vital, dblue.Tapestop, TAL-Filter <br><br> Contains samples from: KSHMR, D3ron, Memphy & W.A Production.",
        'dllink': "",
        'disabled': true,
    },
]

var flplist = document.querySelector(".flps");

for (var i = 0; i < flps.length; i++) {
    var flpcard = document.createElement("div");
    flpcard.classList.add("flp", "container");
    flplist.appendChild(flpcard);

    var thumbnail = document.createElement("img");
    thumbnail.classList.add("flpthumbnail");
    thumbnail.src = flps[i].thumbnailpath;
    flpcard.appendChild(thumbnail);

    var flptitle = document.createElement("h1");
    flptitle.classList.add("flptitle");
    flptitle.innerHTML = flps[i].title;
    flpcard.appendChild(flptitle);

    var flpdesc = document.createElement("h5");
    flpdesc.classList.add("flpdesc");
    flpdesc.innerHTML = flps[i].desc;
    flpcard.appendChild(flpdesc);

    var dllink = document.createElement("a");
    dllink.classList.add("flplink");
    dllink.href = flps[i].dllink;
    flpcard.appendChild(dllink);
    
    var dlbutton = document.createElement("button");
    dlbutton.innerHTML = "Download";
    dlbutton.classList.add("flpdownload");
    dllink.appendChild(dlbutton);

    if (flps[i].disabled) {
        flpcard.appendChild(dlbutton);
        dllink.remove;
        dlbutton.innerHTML = "Locked";
        dlbutton.title = "This FLP is currently unavailable.";
        dlbutton.setAttribute("disabled", true);
    }
}
