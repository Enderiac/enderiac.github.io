var ltstmscs = [
    {
        'title': "Ursa Minor",
        'artist': "Enderiac",
        'album': "Elevation",
        'onclick': '?run=showtrack("Ursa Minor","Elevation","Enderiac","enderiac1/ursa-minor","inW18miD-h4","1x2owdxaJKH8RTmiwRIiENMTnsbe4OVg2","1215769")',
    },
    {
        'title': "Vista",
        'artist': "Enderiac",
        'album': "Vista",
        'onclick': '?run=showtrack("Vista", "Vista", "Enderiac", "enderiac1/vista", "-Eyjz_gsxWk", "1gmH7xOeQjTRbB4xExo8ON5Mo6Ken3F7c", "1203353")',
    },
]

const ltstmscsection = document.getElementById("ltstmusicsection")

for (var i = 0; i < ltstmscs.length; i++) {
    var link = document.createElement("a");
    link.href = ltstmscs[i].onclick;
    link.title = "Listen to "+ltstmscs[i].title+" by "+ltstmscs[i].artist+".";
    ltstmscsection.appendChild(link);

    var img = document.createElement("img");
    img.classList.add("ltstmsc");
    img.src = "/music/res/"+ltstmscs[i].album+".jpg"
    link.appendChild(img);
}

const more = document.createElement("a");
more.href = "/music";
more.target = "_self"
ltstmscsection.appendChild(more);

const moreimg = document.createElement("img");
moreimg.classList.add("ltstmsc");
moreimg.src = "/res/images/more.png";
more.appendChild(moreimg);
