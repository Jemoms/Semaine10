var affichage = document.querySelector("#affichage"),
	multiplicateur = document.querySelector("#multiplicateur"),
	clicker = document.querySelector("#bouton"),
	autoclick = document.querySelector("#autoclick"),
	score = 0,
	compteur = 1,
	prix = 50,
	prix2 = 2000,
	cps = 0;
		
function afficherScore () {
	affichage.innerHTML = "Score : " + score;
}

function afficherMulti () {
	multiplicateur.innerHTML = "Multiplicateur x" + compteur + " <br>(Coût suivant : " + prix + ")" ;
}

function afficherAutoClick () {
	autoclick.innerHTML = "Autoclick : " + cps + "CpS <br>(Coût suivant : " + prix2 + ")" ;
}

function clicking () {
	score += compteur;
	afficherScore();
}

function incrementer () {
	if(score>=prix) {
		compteur ++;
		score -= prix;
		prix *= 2;
		afficherMulti();
	}
	else{
		alert('La maison ne fait pas crédit !');
	}
	afficherScore();
}

function autoClicker () {
	if(score>=prix2) { //si le score est suffisant pour acheter l'autoclick
		cps++;  //nombre de click/second +1
		score -= prix2; //score moins le prix de l'autoclick
		prix2 *=2; //prix de l'autoclick doublé
		afficherAutoClick();//afficher les nouvelles valeurs du bouton autoclick
	}
	else{ //si le score n'est pas suffisant pour acheter l'autoclick
		alert('La maison ne fait pas crédit pour ça non plus.');
		}

}
setInterval(function(){score+=cps;afficherScore();},1000); //un autoclick à 0 click/seconde vu que cps vaut 0 au début
clicker.addEventListener('click', clicking, false);
multiplicateur.addEventListener('click', incrementer, false);
autoclick.addEventListener('click', autoClicker, false);
afficherMulti();
afficherAutoClick();