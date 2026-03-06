document.addEventListener("DOMContentLoaded", function () {
    console.log("Document Chargé");


    const entree = document.getElementById("entree");
    const mauvaisereponse = document.getElementById("mauvaisereponse");
    const enigme1 = document.getElementById("enigme1");
    const reponse1 = document.getElementById("reponse1");
    const valider1 = document.getElementById("valider1");
    const enigme2 = document.getElementById("enigme2");
    const reponse2 = document.getElementById("reponse2");
    const valider2 = document.getElementById("valider2");
    const enigme3 = document.getElementById("enigme3");
    const reponse3 = document.getElementById("reponse3");
    const valider3 = document.getElementById("valider3");
    const enigme4 = document.getElementById("enigme4");
    const reponse4 = document.getElementById("reponse4");
    const valider4 = document.getElementById("valider4");
    const resolution = document.getElementById("resolution");
    const homme = document.getElementById("homme");
    const bonnereponse = document.getElementById("bonnereponse");


    valider1.addEventListener("click", function () {
        if (reponse1.value.toLowerCase() === "le savoir" || reponse1.value.toLowerCase() === "savoir") {
            enigme1.style.display = "none";
            entree.style.display = "none";
            bonnereponse.style.display = "block";
            enigme2.style.display = "flex";
            enigme2.style.flexDirection = "column";
            mauvaisereponse.style.display = "none";
        } else {
            entree.style.display = "none";
            mauvaisereponse.style.display = "block";
        }
    });

    valider2.addEventListener("click", function () {
        if (reponse2.value.toLowerCase() === "Des souvenirs" || reponse2.value.toLowerCase() === "souvenirs" ||
            reponse2.value.toLowerCase() === "des souvenir" || reponse2.value.toLowerCase() === "souvenir" ||
            reponse2.value.toLowerCase() === "les souvenirs" || reponse2.value.toLowerCase() === "souvenir"||
           reponse2.value.toLowerCase() === "des souvenir"||reponse2.value.toLowerCase() === "les souvenir") {
            enigme2.style.display = "none";
            bonnereponse.style.display = "block";
            enigme3.style.display = "flex";
            enigme3.style.flexDirection = "column";
        } else {
            enigme2.style.display = "none";
            bonnereponse.style.display = "none";
            mauvaisereponse.style.display = "block";
            enigme1.style.display = "flex";
            enigme1.style.flexDirection = "column";
        }

    });

    valider3.addEventListener("click", function () {
        if (reponse3.value.toLowerCase() === "Seulement moi" || reponse3.value.toLowerCase() === " seulement toi" ||
            reponse3.value.toLowerCase() === "moi" || reponse3.value.toLowerCase() === "toi" ||
            reponse3.value.toLowerCase() === "une seule" || reponse3.value.toLowerCase() === "une seule personne" ||
            reponse3.value.toLowerCase() === "une personne" || reponse3.value.toLowerCase() === "une " ||
            reponse3.value.toLowerCase() === "un" || reponse3.value.toLowerCase() === "1" ||
            reponse3.value.toLowerCase() === "seulement vous" || reponse3.value.toLowerCase() === "vous") {
            enigme3.style.display = "none";
            bonnereponse.style.display = "block";
            enigme4.style.display = "flex";
            enigme4.style.flexDirection = "column";
        } else {
            enigme3.style.display = "none";
            bonnereponse.style.display = "none";
            mauvaisereponse.style.display = "block";
            enigme1.style.display = "flex";
            enigme1.style.flexDirection = "column";
        }
    });

    valider4.addEventListener("click", function () {
        if (reponse4.value.toLowerCase() === "La lettre E" || reponse4.value.toLowerCase() === "un e" ||
            reponse4.value.toLowerCase() === "e") {
            enigme4.style.display = "none";
            resolution.style.display = "flex";
            resolution.style.flexDirection = "column";
            resolution.style.alignItems = "center";
            resolution.style.justifyContent = "center";
            resolution.style.color = "green";
            homme.style.display = "none";
            bonnereponse.style.display = "none";
        } else {
            enigme4.style.display = "none";
            bonnereponse.style.display = "none";
            mauvaisereponse.style.display = "block";
            enigme1.style.display = "flex";
            enigme1.style.flexDirection = "column";
        }
    });

});

