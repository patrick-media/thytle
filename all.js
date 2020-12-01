/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showdropdown() {
    document.getElementById("dropcontent").classList.toggle("sort-show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (!openDropdown.classList.contains('sort-show')) {
          openDropdown.classList.remove('sort-show');
        }
      }
    }
  }