/**
 * @author Ryan Berthoud < ryan.berthoud@divtec.ch>
 * @version 0.1 (version actuelle)
 * @since 2024-08-20 (date de création)
 */


"use strict";
// Récupère le premier titre h2
// document.querySelector('h2').textContent = '20';

//  Déclaration du compteur de capture
let compteur = 0;

// Récupère l^élément avec l'identifiant 'compteur-el'
const compteurEl = document.getElementById('compteur-el');

const sauvegardeEl = document.getElementById('sauvegarde-el');

// Fonction qui incrémente le compteur et mets à jours le texte du <h2>
function capturer(){
    compteur+= 1;
    compteurEl.textContent = compteur;

    if (compteur < 5){
        compteurEl.style.color = 'green';
    } else if (compteur < 10){
        compteurEl.style.color = 'yellow';
    } else {
        compteurEl.style.color = 'red';
    }
}

// Fonction qui sauvegarde les captures et réinitialise le compteur
function sauvegarder (){
    // sauvegardeEl.textContent += compteur + ' Pokémons | ';

    sauvegardeEl.textContent += ` ${compteur} Pokémons | `;

    localStorage.setItem("captures", sauvegardeEl.textContent)
    compteur = 0;
    compteurEl.textContent = compteur;
}

// Ecouter les évenements et fait appelle à un callback
document.getElementById('capturer-btn').addEventListener('click', capturer);

document.getElementById('sauvegarder-btn').addEventListener('click', sauvegarder);

// Quand la fenêtre ou l'onglet à fini de se charger
window.addEventListener('load', () =>{
    sauvegardeEl.textContent = localStorage.getItem("captures") || "Mes captures:";
})