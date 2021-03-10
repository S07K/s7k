document.getElementById("head").classList.add("blur");

var cards = document.querySelectorAll("#card");
for(var i = 0 ; i< cards.length ; i++)
{
    cards[i].classList.add("blur");
}