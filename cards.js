var i = 0;
var cardsContainer = document.getElementById("cards");
i = 0;

shuffle(pamatky).forEach(pamatka => {
    cardsContainer.innerHTML = cardsContainer.innerHTML + "<div onclick=\"openPamatka(pamatky[" + (pamatka.id) + "])\" class=\"card\" style=\"flex-grow:" + (Math.random() * 10) + " \"><head1 style=\"background-image: url('assets/photos/" + pamatka.pic + "')\"> <head1inner>" + pamatka.name + "<\/head1inner><\/head1><underhead>" + pamatka.shortDescription + "<\/underhead><\/div>";
})

// Updating --scrolled CSS variable
let root = document.documentElement;
window.addEventListener("scroll", e => {
    root.style.setProperty('--scrolled', window.scrollY + "px");
    root.style.setProperty('--scrolledNum', window.scrollY);
});

function shuffle(originalArray) {
    // Copy array to not overwrite original array.
    array = originalArray.slice();


    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }


    return array;
}
