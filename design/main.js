var rating= document.querySelector(".rating")
var submit = document.querySelector(".submit")
var oculto = document.querySelector(".oculto")
var card = document.querySelector(".card")
var thanks = document.querySelector(".thanks")



rating.addEventListener('click' , function(event){
    var Numeros= event.target.innerText;
    oculto.innerHTML = "<p>You selected "+ Numeros +" out of 5</p>"
    if(Numeros >0 || Numeros <=5){
        submit.addEventListener("click", ()=>{
            card.style.display= "none";
            thanks.style.display="block";
        })
    }
})