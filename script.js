document.getElementById("head").classList.add("blur");

var cards = document.querySelectorAll("#card");
for(var i = 0 ; i< cards.length ; i++)
{
    cards[i].classList.add("blur");
}

var link = document.querySelectorAll("#ctc") ;

link[1].addEventListener("click", function(){
    window.open("https://wa.me/7289873431", "_blank")
});

link[2].addEventListener("click", function(){
    window.open("https://www.facebook.com/profile.php?id=100012603552078", "_blank")
});


link[3].addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/shubham-kumar-957a33200", "_blank")
});


link[4].addEventListener("click", function(){
    window.open("https://www.instagram.com/s_7_kumar/", "_blank")
});