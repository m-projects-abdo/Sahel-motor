function selectCategory() {
  // document.getElementById("category").classList.toggle("show");
  alert("hi");
}
function selectBrand() {
  document.getElementById("brand").classList.toggle("show");
}
function selectType() {
  document.getElementById("type").classList.toggle("show");
}
function selectYear() {
  document.getElementById("year").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}