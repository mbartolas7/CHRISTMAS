const input = document.getElementById("dateInput");

function checkDate() {
    const date = input.value
    if(date == "06.05") {
        window.location.href = "./mainPage.html";
    } else if(date == "") {
        alert("Il faut écrire quelque chose !")
    } else {
        alert("C'est quoi ça ! Pas la bonne date !")
    }
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkDate()
    }
});