function Character(speed, strenght, health) {
	this.speed = speed;
	this.strenght = strenght;
	this.health = health;
	
	this.x = 20;
	this.y = 20;
	
	this.movimento = function(event) {
		console.log(this);
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
					case 37: //sinistra
						this.x-=speed;
						console.log(this.x);
						document.getElementById("character").style.left=this.x;
						
						
					break;
					case 39: //destra
						this.x+=speed;
						console.log(this.x);
						document.getElementById("character").style.left=this.x;
					break;

				}
	}
}

var champ = new Character(20, 1, 30);
window.document.onkeydown=function(event){champ.movimento(event)};

