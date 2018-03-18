$(document).ready(function(){
  AOS.init();
   $('.parallax').parallax();
   $('.collapsible').collapsible();
   $('.scrollspy').scrollSpy();
   $('.tooltipped').tooltip({delay: 50});
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
