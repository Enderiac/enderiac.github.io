var tracks = [
    {   // Enderiac - Ursa Minor
        'title': "Ursa Minor",
        'album': "Elevation",
        'art': "/music/res/Elevation.jpg",
        'artist': "Enderiac",
        'year': "2023",
        'dl': "https://drive.google.com/uc?export=download&id=1x2owdxaJKH8RTmiwRIiENMTnsbe4OVg2",
        'sc': "enderiac1/ursa-minor",
        'yt': "inW18miD-h4",
        'mp3': "1x2owdxaJKH8RTmiwRIiENMTnsbe4OVg2",
        'ng': "1215769",
        'multipletracks': false,
        'multipletrackpage': null,
    },
    {   // Enderiac - Serenity
        'title': "Serenity",
        'album': "Elevation",
        'art': "/music/res/Elevation.jpg",
        'artist': "Enderiac",
        'year': "2023",
        'dl': "https://drive.google.com/uc?export=download&id=1odCqGbKwc3ii8BYiWUaUoJFCLpxFqCWd",
        'sc': "enderiac1/serenity",
        'yt': "MATbbK2i8rw",
        'mp3': "1odCqGbKwc3ii8BYiWUaUoJFCLpxFqCWd",
        'ng': "1226543",
        'multipletracks': false,
        'multipletrackpage': null,
    },
    {   // Enderiac - Altitude
        'title': "Altitude",
        'album': "Elevation",
        'art': "/music/res/Elevation.jpg",
        'artist': "Enderiac",
        'year': "2023",
        'dl': "https://drive.google.com/uc?export=download&id=1mneHpf1A_g8I5eSnKriJCIZObI0gQTV8",
        'sc': "enderiac1/altitude",
        'yt': false,
        'mp3': "1mneHpf1A_g8I5eSnKriJCIZObI0gQTV8",
        'ng': "1232927",
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
