const moins = document.querySelector('#moins')
const valeur = document.querySelector('#valeur')
const plus = document.querySelector('#plus')
const reset = document.querySelector('#reset')

let compteur = 0 ; 
function afficher() {
    valeur.textContent = compteur 
}
moins.addEventListener('click', () => {
    if (compteur > 0) {
        compteur--
        afficher()
    }
})

plus.addEventListener('click', () => {
    compteur++
    afficher()
})
reset.addEventListener('click' , () => {
     compteur = 0
     afficher()
})