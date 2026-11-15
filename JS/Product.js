const produits = [
  { id: 1, nom: 'Clavier', prix: 250, stock: 4 },
  { id: 2, nom: 'Souris', prix: 90, stock: 0 },
  { id: 3, nom: 'Écran', prix: 1400, stock: 2 }
];  

console.log(produits[1].nom)
console.log(produits[2].prix);


function creerFiche(produits) {
    const article = document.createElement('article')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    h2.textContent = produits.nom
    p.textContent = produits.prix
    

    article.classList.add('border', 'p-4', 'rounded') 

    article.append(h2 , p )

    if (produits.stock === 0 ) {
        const stock = document.createElement('p')
        stock.textContent = 'Rupture'
        stock.classList.add('text-red-500')

        article.append(stock)
    }

    return article
}

const catalogue = document.querySelector('#catalogue')

const fiches = produits.map(creerFiche);

catalogue.append(...fiches);