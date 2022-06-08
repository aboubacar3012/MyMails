//! Nombre de message
function compteur(){
    const compteur = document.getElementsByClassName("card").length;
    if(compteur <= 0){
        document.querySelector(".main h2").remove();
        console.log("vous n'avez aucun message");
        const h2 = document.createElement("h2");
        const text = document.createTextNode("Oupps!, Vous n'avez aucun message");
        document.querySelector(".main").appendChild(h2.appendChild(text));
    }else{
        document.getElementById("totalMessage").textContent = compteur;
    }
    
}
compteur();
//* console.log(nbMessage.textContent);

//! Suppression de message

document.querySelectorAll(".trash img").forEach(element => {
    element.addEventListener("click",function(){
        // console.log(this.parentElement.parentElement);
        this.parentElement.parentElement.remove()
        compteur();
    });
})

