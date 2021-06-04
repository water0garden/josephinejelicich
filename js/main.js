document.addEventListener("DOMContentLoaded", function(event) {

  var dropdownTrigger = document.querySelector('.dropbtn');

  dropdownTrigger.addEventListener('click', myFunction);

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

})
