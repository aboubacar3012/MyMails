//! Nombre de message
function compteur() {
  const compteur = document.querySelectorAll(".card").length;
//   console.log(compteur);
//   console.log();
//   if (!compteur) {
//     document.querySelector(".main h2").remove();
//     console.log("vous n'avez aucun message");
//     const h2 = document.createElement("h2");
//     const text = document.createTextNode("Oupps!, Vous n'avez aucun message");
//     document.querySelector(".main").appendChild(h2.appendChild(text));
//   } else if(compteur > 0) {
    document.getElementById("totalMessage").textContent = compteur;
//   }
}

//* console.log(nbMessage.textContent);

//! Suppression de message

function deleteMessage() {
  document.querySelectorAll(".trash img").forEach((element) => {
    element.addEventListener("click", function () {
      // console.log(this.parentElement.parentElement);
      this.parentElement.parentElement.remove();
      compteur();
    });
  });
}

//! Button envoie message
function envoieMessage() {
  document.getElementById("button").addEventListener("click", function () {
    let card = document.createElement("div");
    card.classList.add("card");

    let avatar = document.createElement("div");
    avatar.classList.add("avatar");
    let imgAvatar = document.createElement("img");
    imgAvatar.setAttribute("src", "./assets/avatar-1.jpg");
    imgAvatar.setAttribute("alt", "avatar");
    avatar.appendChild(imgAvatar);

    let messageInfo = document.createElement("div");
    messageInfo.classList.add("message-info");
    let name = document.createElement("h6");
    name.textContent = document.getElementById("nomComplet").value;
    let msg = document.createElement("p");
    msg.textContent = document.getElementById("message").value;
    document.getElementById("message").value = ""
    document.getElementById("nomComplet").value = ""
    messageInfo.appendChild(name);
    messageInfo.appendChild(msg);

    let trash = document.createElement("div");
    trash.classList.add("trash");
    let imgTrash = document.createElement("img");
    imgTrash.classList.add("trash-img");
    imgTrash.setAttribute("src", "./assets/trash.png");
    imgTrash.setAttribute("alt", "trash");
    trash.appendChild(imgTrash);

    card.appendChild(avatar);
    card.appendChild(messageInfo);
    card.appendChild(trash);

    let messages = document.getElementById("message_list");
    if(msg.textContent.trim() === "" || name.textContent.trim() === "") return;
    if (messages) {
      messages.insertBefore(card, messages.children[0]);
    } else {
      messages.appendChild(card);
    }
    compteur();
    deleteMessage();
  });
}

compteur();
deleteMessage();
envoieMessage();
