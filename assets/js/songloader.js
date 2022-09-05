//[imgLink, mp3Link]
var images = [
    { img: "", mp3: "" },
]

var get = "https://drive.google.com/uc?export=download&id=";
var prefabId = "#song-prefab"
var listParentId = "#song-list"
var idListId = "1MCxQQZ6R-MO0vqknckh9T3RbhyjXiQ30"


function OnLoad() {
    var Ids = GetIds();
}

function GetIds() {
    var fileUrl = get + idListId;
    var url = URL(fileUrl);

    var req = File(fileUrl);
    req
}