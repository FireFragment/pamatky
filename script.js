var BGpamatka;

function changeBG(BGpamatka_) {
    BGpamatka = BGpamatka_
    document.getElementById("examplepamatkadeschead").innerHTML = BGpamatka.name;
    document.getElementById("examplepamatkadescunderhead").innerHTML = BGpamatka.shortDescription;
    document.getElementById("BG").style.backgroundImage = "url(\"" + BGpamatka.pic + "\")";
}

function updateBG() {
    const urlParams = new URLSearchParams(window.location.search);
    const picturePamatkaId = urlParams.get('picId');

    // If there is URL param picId, choose picture of sight with ID in it. If there isn't URL param picId, choose picture randomly.
    // changeBG(pamatky[picturePamatkaId == null ? picturePamatkaId - 1 : Math.round(Math.random() * (pamatky.length - 1))]);
    
    changeBG(pamatky[Math.round(Math.random() * (pamatky.length - 1))]);
}

updateBG();

function openPamatka(pamatka) {
    openPamatkaID(pamatka.id);
}

function openPamatkaID(id) {
    window.location.href = "Pamatka/index.html?id=" + id;
}

function openBGPamatka() {
    openPamatka(BGpamatka)
}
