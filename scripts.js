var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
 
 
function draw() {
 
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}  
 
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
 
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
 
function keyDownHandler(e) {
   if (e.key == "Right" || e.key == "ArrowRight") {
       rightPressed = true;
   }
   else if (e.key == "Left" || e.key == "ArrowLeft") {
       leftPressed = true;
   }
   else if (e.key == "Up" || e.key == "ArrowUp") {
       upPressed = true;
   }
   else if (e.key == "Down" || e.key == "ArrowDown") {
       downPressed = true;
   }
}
 
function keyUpHandler(e) {
   if (e.key == "Right" || e.key == "ArrowRight") {
       rightPressed = false;
   }
   else if (e.key == "Left" || e.key == "ArrowLeft") {
       leftPressed = false;
   }
   else if (e.key == "Up" || e.key == "ArrowUp") {
       upPressed = false;
   }
   else if (e.key == "Down" || e.key == "ArrowDown") {
       downPressed = false;
   }
}
 
 
function interactDoor() {
 
   if (charXposition <= doorHeight && charXposition > 0 && charYposition <= 230 && charYposition > 190) {
       window.open('bridge1barren.html','_self', false)
   }
}
 
var charXposition = 100;
var charYposition = 200;
var charRadius = 20;
 
function drawCharacter() {
 
   ctx.beginPath();
   ctx.arc(charXposition, charYposition, charRadius, 0,  Math.PI*2);
   ctx.fillStyle = "#C68642";
   ctx.fill();
   ctx.closePath();
 
   if(rightPressed) {
       charXposition += 3;
       if (charXposition  + charRadius > canvas.width) {
           //unless it is an etrance or exit
           charXposition = canvas.width - charRadius;
       }
   }
 
   if (leftPressed) {
       charXposition -= 3;
       if (charXposition < 0) {
           charXposition = charRadius;
       }
   }
 
   if (upPressed) {
       charYposition -= 3;
       if (charYposition < 0) {
           charYposition = charRadius;
       }
   }
 
   if (downPressed) {
       charYposition += 3;
       if (charYposition - charRadius > canvas.height) {
           charYposition = canvas.height - charRadius;
       }
   }
}
 
function character() {
   setInterval(draw,10);
   setInterval(drawCharacter,10);   
}
