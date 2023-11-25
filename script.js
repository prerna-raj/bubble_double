var clutter="";
var timer = 60;
var score=0;
var newhit =0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
     newhit = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=newhit;
}


function makeBubble(){
clutter="";
for(var i=1; i<=102; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;            
        }
        else{
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`
        }
    },1000)
    
}

document.querySelector("#pbtm").
addEventListener("click", function (details) {
    var clickedNum = Number(details.target.textContent);
    if (clickedNum === newhit) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});


runTimer()
makeBubble()
getNewHit()
