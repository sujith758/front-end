var timer = 10;
var score = 0;
var hitRn = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#score-val").textContent = score;
}

function getNewHit(){
    hitRn = Math.floor(Math.random()*10);
    document.querySelector("#hit-value").textContent = hitRn;
};

function makeCircle(){
    var clutter = "";
    for(var i = 1; i<=225; i++){
        var rand = Math.random()*10;
        var floorRand = Math.floor(rand);
        clutter += `<div class="circles">${floorRand}</div>`;
    };
    document.querySelector("#panel-bottom").innerHTML = clutter;
};

function runTimer(){
    var timerInterval = setInterval(function(){
        if (timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector("#panel-bottom").innerHTML = `<h1 id="game-over">GAME OVER!</h1><h1>Score: ${score}</h1>`;
        }
    }, 1000);
};

document.querySelector("#panel-bottom").addEventListener("click", function(details){
    var hitNumber = Number(details.target.textContent);
    if (hitNumber === hitRn){
        increaseScore();
    }
    makeCircle();
    getNewHit();
});

makeCircle();
getNewHit();
runTimer();
