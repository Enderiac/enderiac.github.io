var tracks = [
    {   // Enderiac - Vista
        'title': "Vista",
        'album': "Vista",
        'art': "/music/res/Vista.jpg",
        'artist': "Enderiac",
        'year': "2023",
        'dl': "https://drive.google.com/uc?export=download&id=1gmH7xOeQjTRbB4xExo8ON5Mo6Ken3F7c",
        'sc': "enderiac1/vista",
        'yt': "-Eyjz_gsxWk",
        'mp3': "1gmH7xOeQjTRbB4xExo8ON5Mo6Ken3F7c",
        'ng': "1203353",
        'multipletracks': false,
        'multipletrackpage': null,
    },

    {   // Enderiac - it's 2050...
        'title': "it's 2050...",
        'album': "its 2050...",
        'art': "/music/res/its 2050....jpg",
        'artist': "Enderiac",
        'year': "2023",
        'dl': "https://drive.google.com/uc?export=download&id=1vezDloGnBoHpXnXUGylsHTFYfjrSl6LH",
        'sc': "enderiac1/its-2050",
        'yt': "FlDWo-qBXUA",
        'mp3': "1vezDloGnBoHpXnXUGylsHTFYfjrSl6LH",
        'ng': "1196246",
        'multipletracks': false,
        'multipletrackpage': null,
    },

    {   // Enderiac - Velocity
        'title': "Velocity",
        'album': "Velocity",
        'art': "/music/res/Velocity.jpg",
        'artist': "Enderiac",
        'year': "2023",
        'dl': "https://drive.google.com/uc?export=download&id=1gmH7xOeQjTRbB4xExo8ON5Mo6Ken3F7c",
        'sc': "enderiac1/vista",
        'yt': "-Eyjz_gsxWk",
        'mp3': "1gmH7xOeQjTRbB4xExo8ON5Mo6Ken3F7c",
        'ng': false,
        'multipletracks': false,
        'multipletrackpage': null,
  },

  {     // Enderiac - Eclipse
        'title': "Eclipse",
        'album': "Eclipse",
        'art': "/music/res/Eclipse.jpg",
        'artist': "Enderiac",
        'year': "2022",
        'multipletracks': true,
        'multipletrackpage': "eclipse.html",
  },

  {     // Enderiac - Collision
        'title': "Collision",
        'album': "Collision",
        'art': "/music/res/Collision.jpg",
        'artist': "Enderiac",
        'year': "2022",
        'dl': "https://drive.google.com/uc?export=download&id=17N0ms69e1bl9iSKPipfx_XegdJA6MbS5",
        'sc': "enderiac1/collision",
        'yt': "ly0wNk-r5rc",
        'mp3': "17N0ms69e1bl9iSKPipfx_XegdJA6MbS5",
        'ng': "1194518",
        'multipletracks': false,
        'multipletrackpage': null,
  },

  {     // Enderiac - Hypnosis
        'title': "Hypnosis",
        'album': "Hypnosis",
        'art': "/music/res/Hypnosis.jpg",
        'artist': "Enderiac",
        'year': "2022",
        'dl': "https://drive.google.com/uc?export=download&id=1TDYXuMmSOH2ZoM9kL2Wj9Z5LGSWjUZ2n",
        'sc': "enderiac1/hypnosis",
        'yt': "nt9vrKNsx9Y",
        'mp3': "1TDYXuMmSOH2ZoM9kL2Wj9Z5LGSWjUZ2n",
        'ng': "1194517",
        'multipletracks': false,
        'multipletrackpage': null,
  },

  {     // Enderiac - Blast
        'title': "Blast",
        'album': "Blast",
        'art': "/music/res/Blast.jpg",
        'artist': "Enderiac",
        'year': "2021",
        'dl': "https://drive.google.com/uc?export=download&id=1KrqGSIF47tr1tcgaihOF42wNhzzK-sTq",
        'sc': false,
        'yt': "eXdwVRlZfnU",
        'mp3': "1KrqGSIF47tr1tcgaihOF42wNhzzK-sTq",
        'ng': false,
        'multipletracks': false,
        'multipletrackpage': null,
  },

  {     // Enderiac - Glitched
        'title': "Glitched",
        'album': "Glitched",
        'art': "/music/res/Glitched.jpg",
        'artist': "Enderiac",
        'year': "2021",
        'multipletracks': true,
        'multipletrackpage': "glitched.html",
  },
]

const tracklist = document.querySelector(".tracklist")

for (var i = 0; i < tracks.length; i++) {
    var track = document.createElement("div");
    track.classList.add("container");
    track.id = "track";
    tracklist.appendChild(track);

    var art = document.createElement("img");
    art.classList.add("tlalbumart");
    art.src = tracks[i].art;
    track.appendChild(art);

    var artist = document.createElement("h2");
    artist.classList.add("tlartistname");
    artist.innerHTML = tracks[i].artist
    track.appendChild(artist);

    var album = document.createElement("h1");
    album.classList.add("tlalbumname");
    album.innerHTML = tracks[i].title;
    track.appendChild(album);

    var year = document.createElement("h4");
    year.classList.add("tlyear");
    year.innerHTML = tracks[i].year;
    track.appendChild(year);

    var viewbutton = document.createElement("a");
    viewbutton.classList.add("tlalltracks");
    if (!tracks[i].multipletracks) {
      (function(index) {
        viewbutton.onclick = function() {
          showtrack(
            tracks[index].title,
            tracks[index].album, 
            tracks[index].artist, 
            tracks[index].sc, 
            tracks[index].yt, 
            tracks[index].mp3, 
            tracks[index].ng
          );
        };
      })(i);
    } else {
      viewbutton.href = tracks[i].multipletrackpage;
    }
    viewbutton.innerHTML = "View";
    track.appendChild(viewbutton);

    if (!tracks[i].multipletracks) {
      var downloadbutton = document.createElement("a");
      downloadbutton.classList.add("tldownload");
      downloadbutton.innerHTML = "Download"
      downloadbutton.href = tracks[i].dl;
      track.appendChild(downloadbutton);
    }
    
}