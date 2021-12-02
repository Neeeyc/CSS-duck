let duck = document.getElementById("duck");

function duckJump(){
    duck.animate([
        {transform: 'translateY(0)'},
        {transform: 'translateY(-400px)'},
        {transform: 'translateY(0)'}
    ],{
        duration: 2000
    });
}


function changeText(){
    document.getElementById("clickme").innerHTML = "Wohoooo!";
}