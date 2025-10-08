let gamSeq=[];
let usrSeq=[];
let h2=document.querySelector("h2");
let btns=["red","yello","blue","green"];
let body =document.querySelector("body");

let started= false;
let level= 0;
document.addEventListener("keypress", function(){
    if (started==false){
        console.log("game is started!");
        started=true;
        levelUp();  
    }
});

function levelUp(){
    usrSeq =[];
    level++;
    h2.innerText=`level ${level}`;
    let ranINx =Math.floor(Math.random()*3);
    let ranColor= btns[ranINx];
    let ranBtn=document.querySelector(`.${ranColor}`);
    gamSeq.push(ranColor);
    console.log(`game sequnce is`,gamSeq);
    // console.log(ranColor);
    gameFlash(ranBtn);
};
// game flash function
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },250);
};

// user press btn function

let allBtn=document.querySelectorAll(".btn");
for( btn of allBtn) {
    btn.addEventListener("click",userPress);
};

function userPress(){
    let btn=this;
    // console.log(btn);
    userFlash(btn);
    let usrColor =btn.getAttribute("id");
    usrSeq.push(usrColor);
    console.log(`user sequnce is`,usrSeq);
    checkAns(usrSeq.length-1);
};
function checkAns(idx){
    // console.log (idx);
    if(usrSeq[idx]===gamSeq[idx]){
        if(usrSeq.length === gamSeq.length){
            setTimeout(levelUp,1000);   
        }
    }else{
        h2.innerHTML=`Game is Over! your score was <b>${level}</b> <br>press any key for Start.`;
        body.classList.add("bodyflash");
        setTimeout( function(){
            body.classList.remove("bodyflash");
        },200);
        reset();
    };

};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash");
    },250);
}; 
function reset(){
    started=false;
    gamSeq=[];
    usrSeq=[];
    level=0;
}


 
