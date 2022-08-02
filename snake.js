// 1. variable CSSStyleDeclaration.
var cvs = document.getElementById("canvas").getContext("2d")
var sPosx=80;
var sPosy=80;
var nPosx=0;
var nPosy=0;
var fPosx=160;
var fPosy=160;
var snakeTail=[];
var snakeSize=1;
var score=0;
var gameStatus="Ready";





// 2.onload function

window.onload = function (){
    document.addEventListener("keydown",inputControl);
    game = setInterval(mainGame, 100);
    
}




// 3.Main function.
function mainGame(){
    document.getElementById("game-status").innerHTML= gameStatus;
    document.getElementById("score").innerHTML= score;

    //move snake
    sPosx += nPosx;
    sPosy += nPosy;

    // control snake movement

    if(sPosx > 400){
        sPosx = 0;
    }

    if(sPosy > 400){
        sPosy = 0;
    }

    if(sPosx < 0){
        sPosx = 400;
    }

    if(sPosy < 0){
        sPosy = 400;
    }
   



    //game area


    //background color

    cvs.fillStyle = "black";
    cvs.fillRect(0,0,400,400);


    //Grid line

    for(var y = 0; y < 400; y+=20){
        cvs.moveTo(y,0);
        cvs.lineTo(y,400);
    }

    cvs.stroke();

    for(var  z= 0; z < 400; z+=20){
        cvs.moveTo(0,z);
        cvs.lineTo(400,z);
    }

    cvs.strokeStyle = "gray"
    cvs.stroke();




    //snake

    cvs.fillStyle ="red";
    //cvs.fillRect(sPosx,sPosy,20,20);
    for (var i=0; i<snakeTail.length; i++){

            cvs.fillRect(
                snakeTail[i].x, snakeTail[i].y,20,20
            );

            //if snake touch its tail
                if(sPosx == snakeTail[i].x && sPosy == snakeTail[i].y && snakeSize>1){
                    clearInterval(game);
                    
                    //alert('Game Over');
                    gameStatus = "Game Over";
                document.getElementById("game-status").innerHTML = gameStatus;

                }
                
                
        }



    //fruit
    cvs.fillStyle ="yellow";
    cvs.fillRect(fPosx,fPosy,20,20);



    //if snake eat fruit
    if(sPosx == fPosx && sPosy == fPosy){
        snakeSize++;
        score+=3;
    fPosx = Math.floor(Math.random()*20)*20;
    fPosy = Math.floor(Math.random()*20)*20;

    }         

    snakeTail.push({x:sPosx, y:sPosy});
    while(snakeTail.length>snakeSize){
        snakeTail.shift();
    }

}





// 4. Input control

function inputControl(e) {

    switch (e.keyCode) {
        case 38:
            nPosy -= 20;
            nPosx = 0;
            break;
        case 39:
            nPosx += 20;
            nPosy =0;
            break;
        case 40:
            nPosy += 20;
            nPosx =0;
            break;
        case 37:
            nPosx -= 20;
            nPosy =0;
            break;
    }
            if(e.keyCode == 37 ||e.keyCode == 38 ||e.keyCode ==	39||e.keyCode == 40 ){
                gameStatus = "Game Started";
                document.getElementById("game-status").innerHTML = gameStatus;
            }

}



