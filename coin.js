var player1= prompt("player name for heads");
var Player2= prompt("player name for tails");

var upper1=(player1.slice(0,1)).toUpperCase();
var upper2=(Player2.slice(0,1)).toUpperCase();


var randomnumber=Math.floor (Math.random()*12)+1;
if(randomnumber == 1 || randomnumber == 4 || randomnumber == 6 || randomnumber == 7 || randomnumber == 10){
document.querySelector(".img1").setAttribute("src","images/head.png");
document.querySelector("h1").innerHTML=upper1+player1.slice(1,player1.length)+" - won";
document.querySelector("p").innerHTML=" Heads";
}else if(randomnumber == 2 || randomnumber == 3 || randomnumber == 5 || randomnumber == 8 || randomnumber == 11){
    document.querySelector(".img1").setAttribute("src","images/tail.png");
    document.querySelector("h1").innerHTML=upper2+Player2.slice(1,Player2.length)+" - won";
    document.querySelector("p").innerHTML=" Tails";
 } 
else{
    document.querySelector(".img1").setAttribute("src","images/coin.png")
}