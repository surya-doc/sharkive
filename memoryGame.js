const cards = document.querySelectorAll('.card');

let hasFlipCard = false;
let firstCard, secondCard;
let count = 0;

function flipCard(){
    this.classList.toggle('flip');

    if(!hasFlipCard){
        hasFlipCard = true;
        firstCard = this;
    }
    else{
        hasFlipCard = false;
        secondCard = this;
        console.log(firstCard.id-secondCard.id);
        if(firstCard.id-secondCard.id === 6 || secondCard.id-firstCard.id === 6){
            firstCard.removeEventListener('click',flipCard);
            secondCard.removeEventListener('click', flipCard);
            // console.log(++count);
            count = count+1;
            document.getElementById('score').innerHTML = count;
        }
        else{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            // console.log(--count);
            count = count-1
            document.getElementById('score').innerHTML = count;
            
        }
        console.log(count);
    }
    if(count === 6){
        document.getElementById('score').innerHTML = "Winner!!";
    }
}
cards.forEach(card => card.addEventListener('click', flipCard));
function timedText() {
    var x = document.querySelectorAll('.card');
    setTimeout(function(){ console.log(x.id)}, 2000);
  }
  timedText();