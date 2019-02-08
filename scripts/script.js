var character = document.getElementById("character");
var picCharDir = "./pictures/characters/"; //percorso delle directory delle immagini dei personaggi
var inMov = false;

function Character(speed, strenght, health) {
	this.speed = speed;
	this.strenght = strenght;
	this.health = health;

	this.x = 20;
	this.y = 20;

	this.movimento = function(event) {
		console.log(this);
		inMov = true;
		console.log(inMov);
		switch(event.keyCode) {
			/*
					case 38: //su
						y=y-3;
						champ.style.top=y+"px";
						if(y<=0) {
							alert("hai toccato il tetto");
							y=200;
							document.getElementById("ogg").style.top=y+"px";
						}
					break;
					case 40: //giu

						y=y+3;
						document.getElementById("ogg").style.top=y+"px";

						if(y>window.innerHeight-40) {
							alert("hai toccato il fondo");
							y=200;
							document.getElementById("ogg").style.top=y+"px";
						}
					break;*/
					case 37: //SINISTRA
						this.x-=speed;
						console.log(this.x);
						character.style.left=this.x;

						character.src = picCharDir+"goku/movSinistra.png";

					break;
					case 39: //DESTRA
						this.x+=speed;
						console.log(this.x);
						character.style.left=this.x;

						character.src = picCharDir+"goku/movDestra.png";
					break;
				}
	}

	this.movimentoFermo = function() { //L'animazione di default quando il personaggio e' fermo

		if(inMov){
			setTimeout(function(){character.src = character.src }, 1500);
		} else {
			character.src = picCharDir+"goku/fermo.png";
			setTimeout(function(){character.src = picCharDir+"goku/pronto1.png"; }, 200);
			setTimeout(function(){character.src = picCharDir+"goku/pronto2.png"; }, 800);
		}
		inMov = false;
	}

}


var champ = new Character(20, 1, 30); //creo l'oggetto
window.document.onkeydown=function(event){champ.movimento(event)}; //quando si clicca un tasto chiamo il metodo che fa muovere il personaggio

var interval = setInterval(champ.movimentoFermo, 500);
