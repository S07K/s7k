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
    
    window.onscroll = function() {myFunction()};

    function myFunction() {
        if (document.body.scrollTop >= 520  || document.documentElement.scrollTop >= 520) {
            document.getElementById("shubham").classList.add("slideright");
            document.getElementById("info").classList.add("slideleft");
        }

        if(document.body.scrollTop >= 1037  || document.documentElement.scrollTop >= 1037){
            document.getElementById("about-me").classList.add("slideright");
        }
        if(document.body.scrollTop >= 1388  || document.documentElement.scrollTop >= 1388){
            document.getElementById("heading").classList.add("slideleft");
            let card = document.querySelectorAll("#card");
            for(crd of card)
            {
                crd.classList.add("popup");
            }
        }
        if(document.body.scrollTop >= 2649  || document.documentElement.scrollTop >= 2649){
            document.getElementById("brand").classList.add("slideright");
            let icons = document.querySelectorAll("#ctc");
            for(i of icons)
            {
                i.classList.add("popup");
            }
        }
    }
}

if(window.innerWidth <= 675 )
{
    document.querySelector("#links").classList.add("nav-links");
}

const navslide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links div");

    
    burger.addEventListener("click", function slide() {
        //Toggle Navlinks
        nav.classList.toggle("nav-active");

        //Transform Links
        navLinks.forEach((link, i)=>{
            if(link.style.animation){
                link.style.animation = "";
            }
            else{
                link.style.animation = 'navLinkFade 1.5s ease forwards' ;
            }
        });

        //burger animation
        burger.classList.toggle("toggle")
    });

}
navslide();

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });