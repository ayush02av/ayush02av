const burger_container = document.getElementById("top-nav-right");
const burger_button = document.getElementById("burger-button");
const top_nav_bar = document.getElementById("top-nav");
const screen_threshold = 800;
var burger_container_closed = 1;

function ToggleBurger(){
  if(burger_container_closed){
    burger_container_closed = 0;
  }else{
    burger_container_closed = 1;
  }
}

function MaintainResponsive(){
  if(top_nav_bar.offsetWidth > screen_threshold){
    burger_container.style.display = "flex";
  }else if(burger_container_closed){
    burger_container.style.display = "none";
    burger_button.className = "fa fa-bars";
  }else{
    burger_container.style.display = "flex";
    burger_button.className = "fa fa-times";
  }
}

setInterval(MaintainResponsive, 100);