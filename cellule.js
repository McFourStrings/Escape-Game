document.addEventListener("DOMContentLoaded", function () {
    console.log("Document Chargé");

    const numbers = document.querySelectorAll(".buttonsNumber");
    const deleteButton = document.getElementById("Delete");
    const valider = document.getElementById("valider");
    const ouverture = document.getElementById("ouverture");
    let result = document.getElementById("result");
    

    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        element.addEventListener("click", function () {
            result.textContent += element.textContent;
        });
    }

    deleteButton.addEventListener("click", function () {
        result.textContent = "";
    }
    );
    valider.addEventListener("click", function () {
        if (result.textContent === "75000") {
            ouverture.style.display = "block";
            for (let index = 0; index < numbers.length; index++) {
                const element = numbers[index];
                element.style.display = "none";
            }
            result.style.display = "none";
            deleteButton.style.display = "none";
            valider.style.display = "none";

        } else {
            alert("Rien ne se passe, essayez un autre code");
        }
    }
    );

});





