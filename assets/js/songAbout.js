function LoadSong() {
    if (document.URL.includes("song.html")) {
        ShowSong();
    }
}

function ShowSong() {
    var sid = GetSID();
    var title = GetTitle(sid);
    $("#songTitle").text(title);
    SetData(sid)
}

function GetTitle(sid) {
    var asid = sid.split("-");
    var title = "";
    asid.forEach(e => {
        var l = e[0];
        var s = e.replace(l, l.toUpperCase());
        title += s + " ";
    });
    title.trimEnd();
    return title;
}

function GetSID() {
    var url = document.baseURI;
    if (url.includes("?")) {
        var splitUri = url.split("?");
        if (splitUri[1].includes("sid")) {
            return splitUri[1].replace("sid=", "");
        }
    }
}

function SetData(_sid) {
    songs.forEach(e => {
        if (e.sid == _sid) {
            $("#cover").attr("src", e.cover);
            $("#desc").text(e.desc);
            $("#bg").text(e.background);
            $("#mood").text(e.mood);
            $("#title").text(GetTitle(_sid));
            $(document).attr("title", GetTitle(_sid) + " - Shattered Texture");
            $("#availability").text(e.availability);

            for (let i = 0; i < e.platforms.length; i++) {
                var _n = e.platforms[i].Name.replace(" ", "-");
                if (e.platforms[i].Available) {
                    $("#p_" + _n).prop("disabled", false);
                    $("#p_" + _n).on("click", function () {
                        window.open(e.platforms[i].Link);
                    });
                }
                else {
                    $("#p_" + _n).prop("disabled", true);
                }
            }
        }
    })
}

const songs = [
    {
        "sid": "absolutely-weird",
        "cover": "https://drive.google.com/uc?export=download&id=1_fN-HZBdXmt_xDCSQO3BST7yFEWBTdZ1",
        "desc": "",
        "background": "",
        "mood": ""
    },
    {
        "sid": "nonsense",
        "cover": "https://drive.google.com/uc?export=download&id=1_fN-HZBdXmt_xDCSQO3BST7yFEWBTdZ1",
        "desc": "",
        "background": "",
        "mood": "This song is quirky!"
    },
    {
        "sid": "scary-monsters",
        "cover": "https://drive.google.com/uc?export=download&id=1ASg1fDK4PLz6VNL9Db4J8yUO_qTjylZG",
        "desc": "The track was made up using an alternative, rock, acoustic soul and indie style. The song's kept relatively deep and the chord pattern is somewhat weird.",
        "background": "This song was made for Halloween. The title refers to Halloween because it was an approaching upcoming event when we created it.",
        "mood": "The first part of the song tries to give the listener the feeling of a silent and dark environment. Progressing with adding the creepy feeling of being observed. All in all, the mood of the song is kept rather dark and creepy due to its background.",
        "availability": "This song is available on Spotify, Apple Music, Amazon Music, YouTube, Deezer, Soundcloud,...",
        "platforms": [
            {
                "Name": "YouTube",
                "Available": true,
                "Link": "https://youtu.be/JnA3rwGD28M"
            },
            {
                "Name": "Spotify",
                "Available": true,
                "Link": "https://open.spotify.com/album/39tPU4ma89hXssDqI2ey8B?si=MNGQIYwgR8Cg0Yx87MxIzQ"
            },
            {
                "Name": "Apple Music",
                "Available": true,
                "Link": "https://music.apple.com/de/album/scary-monsters/1653763070?i=1653763071"
            },
            {
                "Name": "Amazon Music",
                "Available": true,
                "Link": "https://music.amazon.de/albums/B0BLYCPLX7?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_OsgGzgw1iwa286XHQuatAuubt&trackAsin=B0BLXVNGXP"
            },
            {
                "Name": "Deezer",
                "Available": true,
                "Link": "https://deezer.page.link/wKwYaYDZk7hqvGB86"
            },
            {
                "Name": "SoundCloud",
                "Available": true,
                "Link": "https://soundcloud.com/shatteredtexture/scary-monsters-nhd"
            }
        ]
    },
    {
        "sid": "pressure",
        "cover": "https://drive.google.com/uc?export=download&id=1W7d4oHM6MoMUSN1OeO9UThzH1js1nmdq",
        "desc": "The song is a groovy alternative indie rock style instrumental and uses instruments like electric guitar, drum kit, bass and an organ.",
        "background": "The idea of the song was developed after there was a relief of a lot of pressure in my life. It felt great, so I tried to capture those feelings building pressure and the relief afterwards in a song.",
        "mood": "This song expresses pressure and the relief afterwards, which makes it quite aggressive, energetic, intense and dark.",
        "availability": "This song is available on YouTube and SoundCloud right now.",
        "platforms": [
            {
                "Name": "YouTube",
                "Available": true,
                "Link": "https://youtu.be/Tp5UefQJp1E"
            },
            {
                "Name": "Spotify",
                "Available": false,
                "Link": "https://open.spotify.com/album/39tPU4ma89hXssDqI2ey8B?si=MNGQIYwgR8Cg0Yx87MxIzQ"
            },
            {
                "Name": "Apple Music",
                "Available": false,
                "Link": "https://music.apple.com/de/album/scary-monsters/1653763070?i=1653763071"
            },
            {
                "Name": "Amazon Music",
                "Available": false,
                "Link": "https://music.amazon.de/albums/B0BLYCPLX7?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_OsgGzgw1iwa286XHQuatAuubt&trackAsin=B0BLXVNGXP"
            },
            {
                "Name": "Deezer",
                "Available": false,
                "Link": "https://deezer.page.link/wKwYaYDZk7hqvGB86"
            },
            {
                "Name": "SoundCloud",
                "Available": true,
                "Link": "https://soundcloud.com/shatteredtexture/pressure-nhd"
            }
        ]
    }
]
