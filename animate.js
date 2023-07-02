let sprite = new Image();
let enemy = new Image();
let defsprite = new Image();
var initiated = 0;
thisBGM = document.getElementById("bgm");
sprite.src = 'https://archive.org/download/5SecondsOfSilence/mario_punching.png';
defsprite.src = 'https://ia902700.us.archive.org/1/items/mario_hammer_def_20230701/mario_hammer_def.png';
enemy.src = 'https://archive.org/download/5SecondsOfSilence/bandana_green.png';

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

function init(){
    if(!initiated){
        initiated = 1;
        animd();
	    enemy_init();
        play_bgm();
        document.getElementsByClassName("controls")[0].style.display = "block";
    }
}

function swapbg(){
    document.getElementById("battlebg").className = document.getElementById("bg").value;
}

function play_bgm(){
    setTimeout(function bgmMusic(){
        if(thisBGM.currentTime = 2.176){
            thisBGM.currentTime = 2.176;
        }
        thisBGM.play();
        setTimeout(bgmMusic,57714);
    },2176);
}

function enemy_init(){
	anime();
	setTimeout(del, 100);
	setTimeout(animf, 100);
	setTimeout(del, 200);
	setTimeout(animg, 200);
	setTimeout(del, 300);
	setTimeout(enemy_init,300);
}

function punch(){
	document.getElementById('punch').play();
	setTimeout(clear, 50);
	setTimeout(anim2, 50);
	setTimeout(clear, 100);
	setTimeout(anim3, 100);
	setTimeout(clear, 150);
	setTimeout(anim4, 150);
	setTimeout(clear, 200);
	setTimeout(anim5, 200);
	setTimeout(clear, 250);
	setTimeout(anim6, 250);
	setTimeout(clear, 300);
	setTimeout(anim7, 300);
	setTimeout(clear, 350);
	setTimeout(anim8, 350);
	setTimeout(clear, 400);
	setTimeout(anim9, 400);
	setTimeout(clear, 450);
	setTimeout(anima, 450);
	setTimeout(clear, 500);
	setTimeout(animb, 500);
	setTimeout(clear, 550);
	setTimeout(animc, 550);
	setTimeout(clear, 600);
	setTimeout(animd, 600);
}

function hammer(){
    document.getElementById('hammer').play();
    setTimeout(clear, 50);
    setTimeout(animh, 50);
    setTimeout(clear, 100);
	setTimeout(animi, 100);
    setTimeout(clear, 150);
	setTimeout(animj, 150);
    setTimeout(clear, 200);
	setTimeout(animk, 200);
    setTimeout(clear, 250);
	setTimeout(animl, 250);
    setTimeout(clear, 300);
	setTimeout(animm, 300);
    setTimeout(clear, 350);
	setTimeout(animn, 350);
    setTimeout(clear, 400);
	setTimeout(animo, 400);
    setTimeout(clear, 450);
	setTimeout(animp, 450);
    setTimeout(clear, 500);
	setTimeout(animq, 500);
}

function defense(){
    setTimeout(clear, 50);
    setTimeout(animr, 50);
}

function anim1(){
	context.drawImage(sprite, 0, 0, 42, 40, 80, 110, 42, 40);
}

function anim2(){
	context.drawImage(sprite, 38, 0, 45, 42, 80, 110, 45, 42);
}

function anim3(){
	context.drawImage(sprite, 75, 0, 30, 40, 90, 110, 30, 40);
}

function anim4(){
	context.drawImage(sprite, 100, 0, 28, 40, 92, 110, 28, 40);
}

function anim5(){
	context.drawImage(sprite, 125, 0, 32, 40, 92, 110, 32, 40);
}

function anim6(){
	context.drawImage(sprite, 155, 0, 30, 40, 93, 110, 30, 40);
}

function anim7(){
	context.drawImage(sprite, 185, 0, 42, 42, 95, 110, 42, 42);
}

function anim8(){
	context.drawImage(sprite, 0, 40, 40, 42, 80, 110, 40, 42);
}

function anim9(){
	context.drawImage(sprite, 36, 40, 25, 42, 93, 110, 25, 42);
}

function anima(){
	context.drawImage(sprite, 61, 40, 29, 42, 93, 110, 29, 42);
}

function animb(){
	context.drawImage(sprite, 89, 40, 27, 42, 94, 110, 27, 42);
}

function animc(){
	context.drawImage(sprite, 113, 40, 27, 42, 94, 110, 27, 42);
}

function animd(){
	context.drawImage(sprite, 134, 40, 31, 42, 92, 110, 31, 42);
}

function clear(){
	context.clearRect(78, 85, 55, 65);
}

function anime(){
	context.drawImage(enemy, 0, 0, 35, 40, 125, 85, 35, 40);
}

function animf(){
	context.drawImage(enemy, 31, 0, 34, 40, 128, 85, 34, 40);
}

function animg(){
	context.drawImage(enemy, 61, 0, 34, 40, 128, 85, 34, 40);
}

function animh(){
    context.drawImage(defsprite, 25, 0, 40, 60, 73, 88, 40, 60);
}

function animi(){
    context.drawImage(defsprite, 64, 0, 40, 65, 76, 90, 40, 65);
}

function animj(){
    context.drawImage(defsprite, 100, 0, 32, 65, 90, 90, 32, 65);
}

function animk(){
    context.drawImage(defsprite, 132, 0, 30, 60, 96, 90, 30, 60);
}

function animl(){
    context.drawImage(defsprite, 163, 0, 35, 60, 96, 90, 35, 60);
}

function animm(){
    context.drawImage(defsprite, 203, 0, 35, 60, 96, 90, 35, 60);
}

function animn(){
    context.drawImage(defsprite, 239, 0, 35, 60, 94, 90, 35, 60);
}

function animo(){
    context.drawImage(defsprite, 274, 0, 35, 60, 95, 90, 35, 60);
}

function animp(){
    context.drawImage(defsprite, 307, 0, 34, 60, 94, 90, 34, 60);
}

function animq(){
    context.drawImage(defsprite, 339, 0, 35, 60, 94, 88, 35, 60);
}

function animr(){
    context.drawImage(defsprite, 0, 10, 30, 50, 90, 105, 30, 50);
}

function del(){
	context.clearRect(130, 85, 45, 45);
}