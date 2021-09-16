const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);
const pamatka = pamatky[id];

document.title += pamatka.name; 
document.getElementById("BG").style.backgroundImage = "url(\"../assets/photos/" + pamatka.pic + "\")"; 
document.getElementById("photo-link").href = "../assets/photos/" + pamatka.pic; 
document.getElementById("content").innerHTML = pamatka.longDescription; 
document.getElementById("header").innerHTML = pamatka.name; 
document.getElementById("subheader").innerHTML = pamatka.shortDescription; 
document.getElementById("sources").innerHTML = pamatka.sources.map(sourceToHTML).join("");

if (!pamatka.sources)
    document.getElementById("sourcesParent").style.display = "none"; 

// Render traffic info
document.getElementById("traffic").innerHTML = pamatka.traffic.map(
    method => '<div class="method"><b>' + method.method + ':</b>' + method.ways.map(
        way => '<div class="way">' + way.lines.map(
            line => '<span class="line-id">' + line + '</span>'
        ).join("") + 
        '<span class="material-icons-outlined icon">arrow_forward</span>' + way.stop + '<br><div class="walk">' + way.distance + '</div></div>'
        ).join("") + "</div>"
    ).join("")

function sourceToHTML(source) {
    return("<a href=" + source + ">" + source + "</a>")
}

function home() {
    window.location.href = "../index.html?picId=" + id;
}
