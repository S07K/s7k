var cards = document.querySelectorAll("#card");

for(var i = 0 ; i< cards.length ; i++)
{
    cards[i].classList.add("blur");
}

var infop = document.querySelectorAll("#info p");

infop[3].style.margin = "5px";

var heading = document.querySelector("#heading span");

if(window.innerWidth >= 1000 )
{
    infop[0].style.margin = "5px";
    infop[1].style.margin = "5px";
    infop[2].style.margin = "5px";
    infop[0].style.fontSize = "70px";
    infop[1].style.fontSize = "40px";
    infop[2].style.fontSize = "38px";
    infop[3].style.fontSize = "28px";
    infop[2].querySelector("img").style.width = "45px";
    infop[2].querySelector("img").style.height = "45px";
    heading.innerHTML = "HERE ARE SOME OF MY PROJECTS";
}

var links = document.querySelectorAll("#links div a");

if(window.innerWidth <= 650 )
{
    links[0].innerHTML = "👨‍💼";
    links[1].innerHTML = "💪";
    links[2].innerHTML = "👨‍💻";
    links[3].innerHTML = "💼";
}