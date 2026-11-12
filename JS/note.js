const ajouter = document.querySelector('#ajouter')
const notes = document.querySelector('#notes')

let compteur = 0 ; 
function ajouterNote() {
  const li =  document.createElement('li');
    notes.textContent = `Note n° ${compteur}` ;
    li.classList.add('p-2', 'bg-yellow-100', 'rounded')
    console.log(li);
    notes.appendChild(li)
    console.log(li);
     
}
ajouter.addEventListener('click' , () => {
    compteur ++
   ajouterNote()
})

