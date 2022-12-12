let ouvrir = document.getElementById('open');
let fermer = document.getElementById('close');

//Ouverture d'une nouvelle page google dans une nouvelle fenêtre du navigateur
ouvrir.addEventListener('click', function () {
    let features = "menubar=no, scrollbars=yes, width=500, height=500, status=no, toolbar=no";
    let myWindow = window.open('https://fr.wikipedia.org/wiki/Chien', '', features);

    //On redimensinne la fenêtre en spécifiant x et y en px
    myWindow.resizeTo(500, 500);

    //On place la fenêtre à X et à Y
    myWindow.moveTo(520, 230);

    //On ferme la fenêtre
    fermer.addEventListener('click', function () {
        myWindow.close();
    });
});

