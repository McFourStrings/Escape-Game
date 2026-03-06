document.addEventListener("DOMContentLoaded", function () {
    console.log("Document Chargé");
const boutons = document.getElementById("boutons");
const entree = document.getElementById("entree");
const porte1 = document.getElementById("porte1");
const porte2 = document.getElementById("porte2");
const porte3 = document.getElementById("porte3");
const bouton1 = document.getElementById("bouton1");
const bouton2 = document.getElementById("bouton2");
const bouton3 = document.getElementById("bouton3");
const grenouilles = document.getElementById("grenouilles");
const vagues = document.getElementById("vagues");
const vent = document.getElementById("vent");
const mauvaisOrdre = document.getElementById("mauvaisOrdre");
const bonOrdre = document.getElementById("bonOrdre");
const encart1 = document.getElementById("encart1");
const encart2 = document.getElementById("encart2");
const encart3 = document.getElementById("encart3");

porte1.addEventListener("click", function () {
    grenouilles.style.display = "block";
    grenouilles.style.color = "green";
});
porte2.addEventListener("click", function () {
    vagues.style.display = "block";
    vagues.style.color = "green";
});
porte3.addEventListener("click", function () {
    vent.style.display = "block";
    vent.style.color = "green";
});

let bouton1Clique = false;
let bouton2Clique = false;
let bouton3Clique = false;
let nombreclicks = 0;
let ordreCorrect = "";

bouton1.addEventListener("click", function () {
    bouton1Clique = true;
    nombreclicks++;
    ordreCorrect += "bouton1";
    mauvaisOrdre.style.display = "none";

    if (nombreclicks === 3) {
        verifierOrdre();
    }
});

bouton2.addEventListener("click", function () {
    bouton2Clique = true;
    nombreclicks++;
    ordreCorrect += "bouton2";
    mauvaisOrdre.style.display = "none";

      if (nombreclicks === 3) {
        verifierOrdre();
    }
});
bouton3.addEventListener("click", function () {
    bouton3Clique = true;
    nombreclicks++;
    ordreCorrect += "bouton3";
    mauvaisOrdre.style.display = "none";
      if (nombreclicks === 3) {
        verifierOrdre();
    }
 });

 function verifierOrdre() {
    if (ordreCorrect === "bouton3bouton1bouton2") {
        entree.style.display = "none";
        encart1.style.display = "none";
        encart2.style.display = "none";
        encart3.style.display = "none";
        boutons.style.display = "none";
        mauvaisOrdre.style.display = "none";
        bonOrdre.style.display = "flex";
        bonOrdre.style.flexDirection = "column";
        bonOrdre.style.alignItems = "center";
        bonOrdre.style.justifyContent = "center";
        bonOrdre.style.color = "green";
    }else{
        mauvaisOrdre.style.display = "block";
        mauvaisOrdre.style.color = "red";
        nombreclicks = 0;
        ordreCorrect = "";
    }

     
 }

});