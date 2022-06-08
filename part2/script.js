//! Nombre de message
const compteur = document.getElementsByClassName("card").length;
const nbMessage = document.getElementById("totalMessage").textContent = compteur;
//* console.log(nbMessage.textContent);

//! Suppression de message

document.querySelectorAll(".trash img").forEach(element => {
    element.addEventListener("click",function(){
        // console.log(this.parentElement.parentElement);
        this.parentElement.parentElement.remove()
    });
})

