document.addEventListener("DOMContentLoaded", function(event) {

var dropdownTriggers = document.querySelectorAll('.dropbtn');
console.log(dropdownTriggers);

const Dropdowns = {
  init: function() {
    Dropdowns.bindEvents();
  },

  bindEvents: function() {
    dropdownTriggers = document.querySelectorAll('.dropbtn');
    console.log(dropdownTriggers);


    for (var i = 0; i < dropdownTriggers.length; i++) {
      dropdownTriggers[i].addEventListener('click', function(){
          this.classList.toggle("show");
        console.log('curious', this);

      });
    }
  }
};





// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.description.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


setTimeout(function(){

  console.log('start dropping');
  Dropdowns.init()

}, 4000);

});
