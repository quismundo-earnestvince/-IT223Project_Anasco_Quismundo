

window.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.querySelector(".menu-button");
    var menuList = document.querySelector("nav ul");

    menuButton.addEventListener("click", function() {
      menuList.classList.toggle("show");
    });
  });

window.addEventListener("scroll", function() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("consultation-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    window.location.href = "form-submitted.html";
  });
});


 
