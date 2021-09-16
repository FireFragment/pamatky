const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);
const pamatka = pamatky[id];

document.title += pamatka.name; 
document.getElementById("BG").style.backgroundImage = "url(\"" + pamatka.pic + "\")"; 
document.getElementById("content").innerHTML = pamatka.longDescription; 
document.getElementById("header").innerHTML = pamatka.name; 
document.getElementById("subheader").innerHTML = pamatka.shortDescription; 
document.getElementById("sources").innerHTML = pamatka.sources.map(sourceToHTML).join("");

if (!pamatka.sources)
    document.getElementById("sourcesParent").style.display = "none"; 

// Render gallery
document.getElementById("gallery").innerHTML = pamatka.minorPics.map(
    pic => "<img src='" + pic.src + "' onclick='showFullscreenImg(" + JSON.stringify(pic) + ")'>")
    .join("");

// Render traffic info
document.getElementById("traffic").innerHTML = pamatka.traffic.map(
    method => '<div class="method"><b>' + method.method + ':</b>' + method.ways.map(
        way => '<div class="way">' + way.lines.map(
            line => '<span class="line-id">' + line + '</span>'
        ).join("") + 
        '<span class="material-icons-outlined icon">arrow_forward</span>' + way.stop + '<br><div class="walk">' + way.distance + '</div></div>'
        ).join("") + "</div>"
    ).join("")

/*document.getElementById("traffic").innerHTML */

function sourceToHTML(source) {
    return("<a href=" + source + ">" + source + "</a>")
}

function home() {
    window.location.href = "../index.html?picId=" + id;
}

//showFullscreenImg(pamatka.minorPics[0]);

function showFullscreenImg(img) {
    document.getElementById("fullscreen-img").src                     = img.src;
    document.getElementById("fullscreen-img-name").innerHTML          = img.name;
    document.getElementById("fullscreen-img-description").innerHTML   = img.description;
    document.getElementById("fullscreen-img-author").innerHTML        = img.author;
    document.getElementById("fullscreen-img-attribution").innerHTML   = img.attribution;
    
    document.getElementById("fullscreen-img-container").style.display = "flex";
}

function hideFullscreenImg() {
    document.getElementById("fullscreen-img-container").style.display = "none";
}
