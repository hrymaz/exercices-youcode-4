const produits = [
  { nom: 'Clavier', prixHT: 250 },
  { nom: 'Souris', prixHT: 90 },
  { nom: 'Écran', prixHT: 1400 }
];
const produitsTTC = produits.map((produits) => {
    const nom =   produits.nom
    const prixTTC = produits.prixHT * 1.20
    console.log(nom);
    
    console.log(produits);
    console.log(prixTTC);
    
    
    return {
        ...produits,
        prixTTC: prixTTC
    };
    
});

const textes = produitsTTC.map((produits) => {
    return  `${produits.nom} : ${produits.prixTTC} DH TTC`
})
console.log(textes);

const etiquettes = document.querySelector('#etiquettes')
    textes.forEach((textes) => {
     const li = document.createElement('li')
     li.textContent = textes
     etiquettes.append(li)
})
