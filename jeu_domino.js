var dominos = new Array();
dominos[0]="Dominos/[6,6].png"; //les chiffres correspondent à leur index dans le tableau 
dominos[1]="Dominos/[5,6].png"; //(l'index étant sa position),
dominos[2]="Dominos/[5,5].png";  //0 corrsespond au premier élément
dominos[3]="Dominos/[4,6].png";  //1 au deuxième,etc ...
dominos[4]="Dominos/[4,5].png"; 
dominos[5]="Dominos/[4,4].png"; 
dominos[6]="Dominos/[3,6].png"; 
dominos[7]="Dominos/[3,5].png"; 
dominos[8]="Dominos/[3,4].png"; 
dominos[9]="Dominos/[3,3].png"; 
dominos[10]="Dominos/[2,6].png"; 
dominos[11]="Dominos/[2,5].png"; 
dominos[12]="Dominos/[2,4].png"; 
dominos[13]="Dominos/[2,3].png"; 
dominos[14]="Dominos/[2,2].png"; 
dominos[15]="Dominos/[1,6].png"; 
dominos[16]="Dominos/[1,5].png"; 
dominos[17]="Dominos/[1,4].png"; 
dominos[18]="Dominos/[1,3].png"; 
dominos[20]="Dominos/[1,1].png"; 
dominos[21]="Dominos/[0,6].png"; 
dominos[22]="Dominos/[0,5].png"; 
dominos[23]="Dominos/[0,4].png"; 
dominos[24]="Dominos/[0,3].png"; 
dominos[25]="Dominos/[0,2].png"; 
dominos[26]="Dominos/[0,1].png"; 
dominos[27]="Dominos/[0,0].png"; 
//je crée mon tableau avec mes 28 dominos

var turn = 0;


var selectedHand1 = []; //correspond à la main du joueur 1,à ce stade le tableau est vide
var selectedHand2 = []; //joueur 2

var distributionMode1 = function(x) { //ma fonction de distribution des dominos dans les tableaux correspondant aux mains des joueurs pour le mode 1,c'est à dire deux joueurs
  
  for (var i = 0; i < 7; i++) {
    var randomTuile = Math.floor(Math.random()*dominos.length);//je sélectionne un index aléatoirement par rapport à la taille du tableau
    var domino = dominos[randomTuile];
//on stocke la valeur de notre tableau principal "dominos" qui a pour index, l'index aléatoire récupéré au préalable dans la variable randomTuile, puis on la stocke dan une variable "domino"
    x.push(domino);
//ensuite on pousse une copie de notre domino séléctionné dans la variable x qui correspondra aux paramètres que l'on passe à la fonction

    dominos.splice(randomTuile, 1);
//ensuite on supprime ce domino du tableau principal "dominos" pour qu'il ne soit pas resélectionné
 
}}

distributionMode1(selectedHand1); //on appelle la function avec en paramètre le tableau qui doit être rempli
distributionMode1(selectedHand2); //même chose pour le deuxième tableau
console.log(selectedHand1); //on vérifie que le tableau est bien rempli
console.log(selectedHand2); //même chose
console.log(dominos); //ça se passe dans l'inspecteur côté console, et puis normalement le domino sélectionné n'est plus dans le tableau principal "dominos"
document.getElementById("zone1").innerHTML = '<img src="' + selectedHand1.join('" /><img src="') + '" />';
document.getElementById("zone2").innerHTML = '<img src="' + selectedHand2.join('" /><img src="') + '" />';

var btn1 = document.getElementById("mode1");
var btn2 = document.getElementById("mode2");
var btn3 = document.getElementById("mode3");
var btn4 = document.getElementById("pioche");


btn1.addEventListener ("click", function() {
    var displayMode1 = document.getElementById("mode2joueurs").style.display;
   if (displayMode1 == "none") {
      document.getElementById("mode2joueurs").style.display = "block";
   } else {
       document.getElementById("mode2joueurs").style.display = "none";
   }
   
});
btn2.addEventListener ("click", function() {
    var displayMode2 = document.getElementById("mode3joueurs").style.display;
   if (displayMode2 == "none") {
      document.getElementById("mode3joueurs").style.display = "block";
   } else {
       document.getElementById("mode3joueurs").style.display = "none";
   }
   
});
btn3.addEventListener ("click", function() {
    var displayMode3 = document.getElementById("mode4joueurs").style.display;
   if (displayMode3 == "none") {
      document.getElementById("mode4joueurs").style.display = "block";
   } else {
       document.getElementById("mode4joueurs").style.display = "none";
   }
   
});
btn4.addEventListener ("click", function() {
  
    var randomTuile = Math.floor(Math.random()*dominos.length);//je sélectionne un index aléatoirement par rapport à la taille du tableau
    var domino = dominos[randomTuile];
//on stocke la valeur de notre tableau principal "dominos" qui a pour index, l'index aléatoire récupéré au préalable dans la variable randomTuile, puis on la stocke dan une variable "domino"
    selectedHand1.push(domino);
//ensuite on pousse une copie de notre domino séléctionné dans la variable "selectedHand1" qui correspondra aux tableaux de la main du joueur 1

    dominos.splice(randomTuile, 1);
//ensuite on supprime ce domino du tableau principal "dominos" pour qu'il ne soit pas resélectionné
 console.log(dominos);
 console.log(selectedHand1);
    document.getElementById("zone1").innerHTML = '<img src="' + selectedHand1.join('" /><img src="') + '" />';
    
});