    let cross=true;
    let score = 0;
    let isGameOver=false;
    document.onkeydown=function(e){
    console.log("keyCode is ",e.key)
    const dino=document.querySelector('.dino');
     let obstacle = document.querySelector('.obstacle');
     let gameOver=document.querySelector('.gameOver');

    if(e.key==='ArrowUp'&& !dino.classList.contains('animateDino')){
        if(gameOver.style.visibility==="visible"){
            score=0;
            updateScore(score)
        }
        dino.classList.add('animateDino');
        obstacle.classList.add('obstacleAni');
        gameOver.style.visibility='hidden';
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 600);
    }
     if(e.key==='ArrowRight'){

       let dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinox+212+'px';
        
    }
    if(e.key==='ArrowLeft'){

       let dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinox-212)+'px';
        
    }
}
window.onload = function () {
    let obstacle = document.querySelector('.obstacle');
    obstacle.classList.add('obstacleAni');

    
}

setInterval(() => {
    let obstacle = document.querySelector('.obstacle');
    const dino=document.querySelector('.dino');
    let gameOver=document.querySelector('.gameOver');
    
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    if(offsetX<70&&offsetY<10){
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleAni');
        updateScore(score)
        isGameOver = true;
    }
    else if(offsetX < 123 && cross && !isGameOver){
        score+=5;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        let aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'))
        newDur=aniDur-0.1;
        obstacle.style.animationDuration=newDur+'s';
        console.log(obstacle.style.animationDuration)
    }
}, 100);

const updateScore=(s)=>{
    const scorecnt=document.querySelector('.score');
    scorecnt.innerHTML="score "+s;
     
    
}


