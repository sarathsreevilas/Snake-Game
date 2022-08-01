// 1. variable CSSStyleDeclaration.
var cvs = document.getElementById("canvas").getContext("2d")
var sPosx=80;
var sPosy=80;
var nPosx=0;
var nPosy=0;






// 2.onload function

window.onload = function (){
    document.addEventListener("keydown",inputControl);
    setInterval(mainGame, 500);
    
}




// 3.Main function.
function mainGame(){


    //move snake
    sPosx += nPosx;
    sPosy += nPosy;



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
    cvs.fillRect(sPosx,sPosy,20,20)

    //fruit
    cvs.fillStyle ="yellow";
    cvs.fillRect(160,160,20,20)



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

}



