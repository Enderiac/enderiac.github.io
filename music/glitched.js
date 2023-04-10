var tracks = [
    {   // Enderiac - Get Glitchy
        'title': "Get Glitchy",
        'album': "Glitched",
        'art': "/music/res/Glitched.jpg",
        'artist': "Enderiac",
        'year': "2020",
        'dl': "https://drive.google.com/uc?export=download&id=1Z8FdLG-uLZNxuQD5n2g26jukMoIuLiWc",
        'sc': "enderiac1/get-glitchy",
        'yt': "90h-01IG5ec",
        'mp3': "1Z8FdLG-uLZNxuQD5n2g26jukMoIuLiWc",
        'ng': false,
        'multipletracks': false,
        'multipletrackpage': null,
    },
    {   // Enderiac - Seagull
        'title': "Seagull",
        'album': "Glitched",
        'art': "/music/res/Glitched.jpg",
        'artist': "Enderiac",
        'year': "2021",
        'dl': "https://drive.google.com/uc?export=download&id=1JX3tMYfkDKMnGjFefPx6nvFscAtqzEyI",
        'sc': "enderiac1/seagull",
        'yt': "Nz30e1_mOJM",
        'mp3': "1JX3tMYfkDKMnGjFefPx6nvFscAtqzEyI",
        'ng': false,
        'multipletracks': false,
        'multipletrackpage': null,
  },
  {     // Enderiac - Get Glitchy Pt. 2
        'title': "Get Glitchy Pt. 2",
        'album': "Glitched",
        'art': "/music/res/Glitched.jpg",
        'artist': "Enderiac",
        'year': "2021",
        'dl': "https://drive.google.com/uc?export=download&id=1nBUgRguCwau5ihdRG8x8kSnjIsS7TaiZ",
        'sc': "enderiac1/get-glitchy-pt-2",
        'yt': "nEyMvMbpIPA",
        'mp3': "1nBUgRguCwau5ihdRG8x8kSnjIsS7TaiZ/",
        'ng': false,
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