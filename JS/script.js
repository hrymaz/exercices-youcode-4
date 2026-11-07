function calculerTTC(prixHT) {
    const tva = prixHT * 0.20;
    const prixTTC = prixHT + tva;

    return prixTTC;
}

function afficherPrix(selecteur, prixHT) {
    const element = document.querySelector(selecteur);
    const ttc = calculerTTC(prixHT);

    element.textContent = `HT : ${prixHT} DH · TTC : ${ttc} DH`;
}

afficherPrix("#p1", 100);
afficherPrix("#p2", 45);
afficherPrix("#p3", 320);