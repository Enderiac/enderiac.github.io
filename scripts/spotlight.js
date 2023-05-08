// {
//     'title': "",
//     'desc': "",
//     'link': "",
//     'onclick': ,
// },

var cards = [
    {
        'title': "Trance song to House",
        'desc': "I created a song which switchs subgenres from Trance to Progressive House. That's all.",
        'link': "https://youtu.be/wcQZX8sKRG0",
        'onclick': false,
    },
    {
        'title': "Future Bass Preview",
        'desc': "I've attempted to make a Future Bass song again.",
        'link': "https://youtu.be/qZJ7hg1Ilv4",
        'onclick': false,
    },
    {
        'title': "Drum n' Bass concept",
        'desc': "First time attempting to produce Drum n' bass. Click for more info and the download to the FLP.",
        'link': "/exclusive",
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
    {
        'title': "Trying Future Bounce",
        'desc': "New Future Bounce track called 'Velocity.'",
        'link': "https://youtu.be/HVgjhzn1Pns",
        'onclick': false,
    },
]

const maxcards = 3;
const spotlight = document.getElementById("coolthings")

for (var i = 0; i < cards.length; i++) {
    if (window.location.href.includes("/index.html")) {
        if (i <= maxcards-1) {
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
        } else {
            break;
        }
    } else {
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
}
