var displayYes = document.getElementById('hamburgher-clik');
displayYes.addEventListener("click",
function(){
  var apparizioneMenu = document.getElementById("menu-xs-apparizione");
  apparizioneMenu.classList.remove("display-none-menu");
}
)
var displayNo = document.getElementById('close');
displayNo.addEventListener("click",
function() {
  var sparizioneMenu = document.getElementById('menu-xs-apparizione');
  sparizioneMenu.classList.add("display-none-menu");
}
)
