var player1 = prompt("player 1 name");
var player2 = prompt("player 2 name");

var upper1 = (player1.slice(0,1)).toUpperCase();
var upper2 = (player2.slice(0,1)).toUpperCase();

document.querySelector(".Player1 ").innerHTML=upper1+player1.slice(1,player1.length);
document.querySelector(".Player2").innerHTML=upper2+player2.slice(1,player2.length);



var randomnumber1 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "dice"+randomnumber1+".png");

// if (randomnumber1 == 1) {
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png");
// } else if (randomnumber1 == 2) {
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png");
// } else if (randomnumber1 == 3) {
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png");
// } else if (randomnumber1 == 4) {
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png");
// } else if (randomnumber1 == 5) {
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png");
// } else if (randomnumber1 == 6) {
//     document.querySelector(".img1").setAttribute("src", "images/dice6.png");
// }



var randomnumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "dice"+randomnumber2+".png");

// if (randomnumber2 == 1){
//     document.querySelector(".img2").setAttribute("src","images/dice1.png")
// }else if (randomnumber2 == 2){
//     document.querySelector(".img2").setAttribute("src","images/dice2.png")
// }else if (randomnumber2 == 3){
//     document.querySelector(".img2").setAttribute("src","images/dice3.png")
// }else if (randomnumber2 == 4){
//     document.querySelector(".img2").setAttribute("src","images/dice4.png")
// }else if (randomnumber2 == 5){
//     document.querySelector(".img2").setAttribute("src","images/dice5.png")
// }else if (randomnumber2 == 6){
//     document.querySelector(".img2").setAttribute("src","images/dice6.png")
// }

 

if(randomnumber1 < randomnumber2){
document.querySelector("h1").innerHTML=player2.toUpperCase() +" Wins!🏆";
} else if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML=player1.toUpperCase() +" Wins!🏆";
}else {
    document.querySelector("h1").innerHTML="Draw!⛔";
}



