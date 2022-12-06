let voiture = {
    "Nom" : "Eggo",
    "imgUrl" : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    "nombresRoues" : 4,
    "Couleur" : "Marron",
    "Contructeur" : "Citroen",
    "Carburant" : "Solaire",
    "nombrePortes" : 3,
    "Autonomie" : "450km",
    "vitesseMaxi" : "120km/h"
};
//pour ajouter limage dans l'html
function demarrage () {
    let monImage = document.createElement('img')
    monImage.src = voiture["imgUrl"]
    let maDiv = document.getElementById('presentation')
    maDiv.appendChild(monImage)
    monImage.style.width = '200px';
}
//pour que l'image s'affiche dans l'html
window.addEventListener("load",demarrage)


//le nom + constructeur + image de la voiture
let presentation = document.createElement('h1')
presentation.innerHTML = voiture["Nom"] + " de " + voiture["Contructeur"]
let Madiv = document.getElementById('presentation')
Madiv.appendChild(presentation)


let caracteristique = document.createElement('p')
caracteristique.innerHTML = "la voitures a " + voiture["nombresRoues"]+ " et " + voiture["nombrePortes"] + ", " +
"sa couleur est " + voiture["Couleur"] + "la voiture a une autonomie de " + voiture["Autonomie"] +
"pour une vitesse de pointe de " + voiture["vitesseMaxi"]

let autreDiv = document.getElementById('caracteristique')
autreDiv.appendChild(caracteristique)

