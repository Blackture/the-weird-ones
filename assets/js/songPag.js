var currentPage = 1;
const lastPage = 3;
var songAmount = 3;
var beforeSearch = 1;
var isBeforeSearchSet = false;

function SetRow(q) {
    if (q != 0) {
        switch (songAmount) {
            case 3:
                HideAllRows()
                ShowRow(q);
                break;
            case 6:
                HideAllRows()
                ShowRow(q);
                if (q + 1 <= lastPage) {
                    ShowRow(q + 1);
                }
                break;
            case 9:
                HideAllRows()
                ShowRow(q);
                if (q + 1 <= lastPage) {
                    ShowRow(q + 1);
                }
                if (q + 2 <= lastPage) {
                    ShowRow(q + 2);
                }
                break;

        }

        currentPage = q;
    }
}

function HideAllRows() {
    for (let i = 1; i <= lastPage; i++) {
        document.getElementById("tr" + i.toString()).style.display = "none";
        document.getElementById("pb" + i.toString()).disabled = false;
    }
}

function ShowRow(r) {
    document.getElementById("tr" + r.toString()).style.display = "flex";
    document.getElementById("pb" + r.toString()).disabled = true;
}

function SetRowByArrow(r) {
    switch (r) {
        case "left":
            if (currentPage - 1 >= 1) {
                SetRow(currentPage - 1);
            }
            break;
        case "right":
            if (currentPage + 1 <= lastPage) {
                SetRow(currentPage + 1);
            }
    }
}

function SetSongAmount(r) {
    document.getElementById("sa" + (songAmount / 3).toString()).disabled = false;
    document.getElementById("sa" + (r / 3).toString()).disabled = true;
    songAmount = r;
    SetRow(currentPage)
}

function Load() {
    currentPage = 1;
    SetSongAmount(3);
}

function filterTable(e) {
    if (document.querySelector("#SongTable") == null)
        return;

    for (var t = e.target.value.toUpperCase(), o = document.querySelector("#SongTable").rows, l = 0; l < o.length; l++) {
        for (var a = o[l].cells, s = !1, n = 0; n < a.length; n++) {
            o[l].cells[n].textContent.toUpperCase().indexOf(t) > -1 && (s = !0)
        }
        //o[l].style.display = !0 === s ? "" : "none"
        var isInRow = !0 === s ? true : false

        if (isInRow) {
            SetRow(l + 1); //+1 because didn't create a zero-indexed table.
        }
    }
}

document.querySelector("#song-search-field")?.addEventListener("keyup", filterTable, !1)