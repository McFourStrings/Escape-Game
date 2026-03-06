document.addEventListener("DOMContentLoaded", function () {
    console.log("Document Chargé");

    const porte= document.getElementById("porte");
    let nombremetres = document.getElementById("nombremetres");
    const ouverture = document.getElementById("ouverture");

    let nombremetresValue = parseInt(nombremetres.value);
    nombremetresValue = 10;
    nombremetres.textContent = "A " + nombremetresValue + " mètres devant vous se trouve une autre porte entrouverte.";
    porte.addEventListener("click", function () {
        nombremetresValue--;
    nombremetres.textContent = "A " + nombremetresValue + " mètres devant vous se trouve une autre porte entrouverte.";
    if (nombremetresValue === 0) {
        ouverture.style.display = "block";
        porte.style.display = "none";
        nombremetres.style.display = "none";
    }       

    });

});