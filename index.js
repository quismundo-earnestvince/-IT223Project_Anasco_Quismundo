function menu() {  //menu js (stick on scroll and changes the bg color)
  window.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector(".menu-button");
    var menuList = document.querySelector("nav ul");

    menuButton.addEventListener("click", function () {
      menuList.classList.toggle("show");
    });
  });

  window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });
}

menu();

function Inputs(){ //form-submit js(console log the data inputted on form)
  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("consultation-form");
    var firstNameInput = document.getElementById("first-name");
    var submittedName = localStorage.getItem("submittedName");
    var nameUserElement = document.getElementById("nameUser");

    if (firstNameInput) {
      firstNameInput.addEventListener("input", function () {
        var submittedName = firstNameInput.value;
        localStorage.setItem("submittedName", submittedName);
      });
    }

    if (nameUserElement && submittedName) {
      nameUserElement.innerText = submittedName;
    }

    

    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
      
      localStorage.setItem("patientType", document.getElementById("patient-type").value);
      localStorage.setItem("middleName", document.getElementById("middle-name").value);
      localStorage.setItem("lastName", document.getElementById("last-name").value);
      localStorage.setItem("suffix", document.getElementById("suffix").value);
      localStorage.setItem("gender", document.getElementById("gender").value);
      localStorage.setItem("birthdate", document.getElementById("birthdate").value);
      localStorage.setItem("email", document.getElementById("email").value);
      localStorage.setItem("phone", document.getElementById("phone").value);
      localStorage.setItem("street", document.getElementById("street").value);
      localStorage.setItem("city", document.getElementById("city").value);
      localStorage.setItem("state", document.getElementById("state").value);
      localStorage.setItem("postalCode", document.getElementById("postal-code").value);
      localStorage.setItem("date", document.getElementById("date").value);

    
      form.reset();

  
      window.location.href = "form-submitted.html";
    });
  });

}

Inputs();



window.addEventListener('DOMContentLoaded', () => { //learn more js(redirects what text section you click on the categories page)
  const sectionId = window.location.hash.substr(1); 

  if (sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
      const windowHeight = window.innerHeight;
      const sectionTopOffset = section.getBoundingClientRect().top;
      const targetPosition = window.scrollY + sectionTopOffset - (windowHeight / 2);

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
});

