// _-_ Recupération _-_ //

// Recupération des Boutons
const Pierre = document.getElementById("Pierre")
const Feuille = document.getElementById("Feuille")
const Ciseau = document.getElementById("Ciseau")
const rejouer = document.getElementById("rejouer")
// Récupération P 
let moi = document.getElementById("moi")
let cpl = document.getElementById("cpl")
let c_a = document.getElementById("ca")
let verdict = document.getElementById("verdict")
// Score 
let me = document.getElementById("me")
let he = document.getElementById("he")

//////////////////////

// _-_ Outils pour la suite _-_ //

// List des Choix
let choix = ["Pierre", "Feuille", "Ciseau"]

//Score 
let user = Number(0)
let computer = Number(0)

/////////////////////////

// _-_ Fonction _-_ //
function game(Utilisateur) {
    // Choix ordinateur
    let choix_Ordi = Math.floor(Math.random() * 3)
    let choix_ordi_final = choix[choix_Ordi]

    // Choix Utilisateur
    moi.textContent = "Votre Choix : " + Utilisateur
    let i = 3
    cpl.textContent = "Compteur : " + i
    let compter = setInterval(() => {
        cpl.textContent = "Compteur : " + i
        i--
        if (i < 0) {
            clearInterval(compter)
        }
    }, 1000)
    c_a.textContent = "Choix Adversaire : "
    verdict.textContent="Verdict :"
    setTimeout(() => {
        c_a.textContent = "Votre Adversaire :" + choix_ordi_final
        if ((choix_ordi_final === "Pierre" && Utilisateur === "Ciseau") ||
           ( choix_ordi_final === "Pierre" && Utilisateur === "Ciseau") ||
            (choix_ordi_final === "Feuille" && Utilisateur === "Pierre")
        ) {
            verdict.textContent = "Dommage! Tu as Perdu"
            computer++
            he.textContent = computer
        } else if (choix_ordi_final === Utilisateur) {
            verdict.textContent = "Ohh Match Nul"
        } else {
            verdict.textContent = "Bravo! Tu as Gagné"
            user++
            me.textContent = user
        }
    }, 3000)
}



// _-_ Bouton _-_ //

// Jeux
Pierre.addEventListener("click", function () {
    game("Pierre")
})
Feuille.addEventListener("click", function () {
    game("Feuille")
})
Ciseau.addEventListener("click", function () {
    game("Ciseau")
})
rejouer.addEventListener("click", function () {
    moi.textContent = "Tu as Choisi :"
    cpl.textContent = "Compteur : " + 3
    c_a.textContent = "Choix Adversaire : "
    verdict.textContent = "Verdict : "
    user = 0
    computer = 0
    me.textContent = user
    he.textContent = computer
})