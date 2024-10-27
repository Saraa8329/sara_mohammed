function prixFinal() {
    let pht = document.getElementById('pht').value;
    let tva = document.getElementById('tva').value;

    pht = Number(pht);
    tva = Number(tva);
   
    if (isNaN(pht) || isNaN(tva)) {
        alert("Veuillez ne saisir que des nombres !");
    } else {
        let cal = pht * (1 + tva / 100);
        document.getElementById('cal').innerHTML = cal.toFixed(2);
        document.getElementById('resultat').style.visibility = "visible";
    }
}

function Effacer() {
    document.getElementById('resultat').style.visibility = "hidden";
    document.getElementById('pht').value = "";
    document.getElementById('tva').value = "";
}
