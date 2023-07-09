let statusEl=document.getElementById("status")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let cards=[]
let hasblackjack=false;
let sum=0;
let message="";
let isAliveAlive=false;

function getRandomNumber(){
    let randomnumber=Math.floor(Math.random()*13)+1
    if(randomnumber==1){
        return randomnumber=11;
    }
    else if(randomnumber==11 || randomnumber==12 || randomnumber==13){
        randomnumber=10;
    }
    return randomnumber
}
function startGame(){
    isAlive=true;
    let first=getRandomNumber();
    let second=getRandomNumber();
    cards=[first,second]
    sum=first+second;
    renderGame();
}
function renderGame(){
    cardEl.textContent="Cards: ";
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+ " ";
    }
    sumEl.textContent="Sum: "+sum;
    if(sum==21){
        message="You Got a black jack"
        hasblackjack=true;
    }
    else if(sum<21){
        message="want new card ?"
    }
    else{
        message="you lost"
        isAlive=false;
    }
    statusEl.textContent=message;
}
function newCard(){
    if(isAlive==true && hasblackjack==false){
        let newcard=getRandomNumber();
        sum+=newcard;
        cards.push(newcard);
        renderGame();
    }
}