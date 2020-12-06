const cards = document.querySelectorAll('.card');







window.onload = choosePic;

var myPix = new Array("sharkPh_1.jpg","sharkPh_2.jpg","sharkPh_3.jpg","sharkPh_4.jpg","sharkPh_5.jpg","sharkPh_6.jpg","sharkPh_1.jpg","sharkPh_2.jpg","sharkPh_3.jpg","sharkPh_4.jpg","sharkPh_5.jpg","sharkPh_6.jpg");

function choosePic() {
    var randomNum = Math.floor(Math.random() * 6);
    console.log(randomNum);
    console.log(myPix[randomNum]);
    console.log(myPix[randomNum+1]);
    console.log(myPix[randomNum+2]);
    console.log(myPix[randomNum+3]);

     document.getElementById("pic_1").src = myPix[randomNum];
     document.getElementById("pic_5").src = myPix[randomNum];

     document.getElementById("pic_2").src = myPix[randomNum+1];
     document.getElementById("pic_6").src = myPix[randomNum+1];

     document.getElementById("pic_3").src = myPix[randomNum+2];
     document.getElementById("pic_7").src = myPix[randomNum+2];

     document.getElementById("pic_4").src = myPix[randomNum+3];
     document.getElementById("pic_8").src = myPix[randomNum+3];

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
        if(firstCard.id-secondCard.id === 4 || secondCard.id-firstCard.id === 4){
            firstCard.removeEventListener('click',flipCard);
            secondCard.removeEventListener('click', flipCard);

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

            count = count-1;
            document.getElementById('score').innerHTML = count;
            
        }
    }
    if(count === 6){
        document.getElementById('score').innerHTML = "Winner!!";
    }
}
cards.forEach(card => card.addEventListener('click', flipCard));