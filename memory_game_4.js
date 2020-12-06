const cards = document.querySelectorAll('.card');







window.onload = choosePic;

var myPix = new Array("sharkPh_1.jpg","sharkPh_2.jpg","sharkPh_3.jpg","sharkPh_4.jpg","sharkPh_5.jpg","sharkPh_6.jpg","sharkPh_4.jpg","sharkPh_1.jpg","sharkPh_1.jpg","sharkPh_2.jpg","sharkPh_3.jpg","sharkPh_4.jpg","sharkPh_5.jpg","sharkPh_6.jpg","sharkPh_3.jpg","sharkPh_6.jpg");

function choosePic() {
    var randomNum = Math.floor(Math.random() * 8);
    console.log(randomNum);
     document.getElementById("pic_1").src = myPix[randomNum];
     document.getElementById("pic_2").src = myPix[randomNum+1];
     document.getElementById("pic_4").src = myPix[randomNum];
     document.getElementById("pic_3").src = myPix[randomNum+1];
}








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
        if(firstCard.id-secondCard.id === 2 || secondCard.id-firstCard.id === 2){
            firstCard.removeEventListener('click',flipCard);
            secondCard.removeEventListener('click', flipCard);
            // console.log(++count);
            count = count+1;
            document.getElementById('score').innerHTML = count;
        }

        else if(firstCard.id-secondCard.id === 0 || secondCard.id-firstCard.id === 0){
            count = count+0;
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