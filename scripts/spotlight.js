var cards = [
    {
        'title': "Drum n' Bass concept",
        'desc': "First time attempting to produce Drum n' bass. Click for more info and the download to the FLP.",
        'link': "https://youtu.be/M79BlrNn-VU",
        'onclick': false,
    },
    {
        'title': "New house track!",
        'desc': "I made a new house track which includes sampled Windows OS sounds.",
        'link': "https://youtu.be/-Eyjz_gsxWk",
        'onclick': false,
    },
    {
        'title': "Synthwave Type Track",
        'desc': "I made a Synthwave type track titled 'it's 2050...'",
        'link': "https://on.soundcloud.com/HjKBq",
        'onclick': false,
    },
]

const spotlight = document.getElementById("coolthings")

for (var i = 0; i < cards.length; i++) {
    var link = document.createElement("a");
    link.classList.add("projectpanel")
    link.href = cards[i].link;
    link.target = "_blank";
    spotlight.appendChild(link);

    if (cards[i].onclick) {
        link.onclick = cards[i].onclick;
    }

    var title = document.createElement("h1");
    title.innerHTML = cards[i].title;
    title.classList.add("pptitle");
    link.appendChild(title);

    var desc = document.createElement("h1");
    desc.innerHTML = cards[i].desc;
    desc.classList.add("ppdesc");
    link.appendChild(desc);
}