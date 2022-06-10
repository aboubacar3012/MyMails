// Reload page
$("#reset").click(function(){
  location.reload();
})

//! Nombre de message
function compteur() {
  $("#totalMessage").text($(".card").length);
}

//* console.log(nbMessage.textContent);

//! Suppression de message

function deleteMessage() {
  $(".trash img").click(function(){
    $(this).parent().parent().remove();
    compteur()
  })
}

//! Button envoie message
function envoieMessage() {
  document.getElementById("button").addEventListener("click", function () {
    if($("#message").val() === "" || $("#nomComplet").val() === "") return;
    $("#message_list").before(`<div class='card'>
      <div class='avatar'><img src='./assets/avatar-1.jpg' alt='avatar' /></div>
      <div class='message-info'><h6${$("#nomComplet").val()}></h6$><p>${$("#message").val()}</p></div>
      <div class='trash'><img class='trash-img' src='./assets/trash.png' alt='trash' /> </div>
    </div>`)
    $("#message").val("");
    $("#nomComplet").val("");

    compteur();
    deleteMessage();
  });
}

//! Rechercher
function search(){
  const oldTabList =  $(".message-info h6");
  $("#search-button").click(function(){
    const search = $("#search").val();
    oldTabList.each(function(){
      const tab = $(this).text().split(" ");
      if(search === tab[0] || search === tab[1] || 
        search === $(this).text() || search === tab[0].toLowerCase() || 
        search === tab[1].toLowerCase() || search === $(this).text().toLowerCase() || 
        tab[0].toLowerCase().startsWith(search) || tab[1].toLowerCase().startsWith(search)){
        $("#message_list").children().remove();
        $("#message_list").append($(this).parent().parent());
        $("#search").val("");
        compteur();
      }
    })
  })
}

search();
compteur();
deleteMessage();
envoieMessage();
