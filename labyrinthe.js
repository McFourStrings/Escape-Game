document.addEventListener("DOMContentLoaded", function () {
    console.log("Document Chargé");

    const reponse = document.getElementById("reponse");
    const valider = document.getElementById("valider");
    const perdu = document.getElementById("perdu");
    const resolution = document.getElementById("resolution");
    const intro = document.getElementById("intro");
    const labyrinthe = document.getElementById("labyrinthe");

    valider.addEventListener("click", function () {
        const solution = "droite droite haut gauche haut gauche haut droite droite bas bas droite droite droite haut gauche haut droite bas gauche bas gauche bas bas droite droite haut droite haut gauche haut haut haut gauche haut droite";
      
valider.addEventListener("click", function () {

    let reponseJoueur = reponse.value
        .toLowerCase()          // tout en minuscule
        .trim()                 // enlève espaces début/fin
        .replace(/\n/g, " ")    // remplace retours ligne par espace
        .replace(/\s+/g, " ");  // remplace espaces multiples par 1 seul
       

    if (reponseJoueur === solution) {
        resolution.style.display = "flex";
        resolution.style.flexDirection = "column";
        resolution.style.alignItems = "center";
        resolution.style.justifyContent = "center";
        perdu.style.display = "none";
        intro.style.display = "none";
        labyrinthe.style.display = "none";
        reponse.style.display = "none";
        valider.style.display = "none";
    } else {
        perdu.style.display = "block";
        resolution.style.display = "none";
        reponse.value = "";
    }
});
    });



});