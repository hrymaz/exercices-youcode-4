
const message = '<strong>Promo</strong> : -20 % sur les claviers';

const button = document.querySelector('#go');
const Texte = document.querySelector('#zoneTexte');
const Html = document.querySelector('#zoneHtml');

button.addEventListener('click', () => {
    Texte.textContent = message;

    Html.innerHTML = message;
    Html.innerHTML += 'Fin';

    console.log(Html.innerHTML);
});

// textContent : pour afficher du texte sans interpréter le HTML.
// innerHTML : pour créer des éléments HTML avec du contenu fiable.
