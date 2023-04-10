var tracks = [
    {   // Enderiac - Sonar
        'title': "Sonar",
        'album': "Eclipse",
        'art': "/music/res/Eclipse.jpg",
        'artist': "Enderiac",
        'year': "2022",
        'dl': "https://drive.google.com/uc?export=download&id=1Ukmpuw7-0RLluVSmCj3J6pW-mFcSr9eL",
        'sc': "enderiac1/sonar",
        'yt': false,
        'mp3': "1Ukmpuw7-0RLluVSmCj3J6pW-mFcSr9eL",
        'ng': "1194522",
        'multipletracks': false,
        'multipletrackpage': null,
    },

    {   // Enderiac - Stereo
        'title': "Stereo",
        'album': "Eclipse",
        'art': "/music/res/Eclipse.jpg",
        'artist': "Enderiac",
        'year': "2022",
        'dl': "https://drive.google.com/uc?export=download&id=19um9FQIxfkh1rbgiPzCjOWeyKpwxmEWu",
        'sc': "enderiac1/stereo",
        'yt': "eJ18cSg1Z2g",
        'mp3': "19um9FQIxfkh1rbgiPzCjOWeyKpwxmEWu",
        'ng': false,
        'multipletracks': false,
        'multipletrackpage': null,
  },

  {   // Enderiac - Aspect
      'title': "Aspect",
      'album': "Eclipse",
      'art': "/music/res/Eclipse.jpg",
      'artist': "Enderiac",
      'year': "2022",
      'dl': "https://drive.google.com/uc?export=download&id=1ym1AcvrEXDzsOgG0CH8Gp9shcH--S9Ek",
      'sc': "enderiac1/aspect",
      'yt': "XSBIScppsP8",
      'mp3': "1ym1AcvrEXDzsOgG0CH8Gp9shcH--S9Ek",
      'ng': "1194523",
      'multipletracks': false,
      'multipletrackpage': null,
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