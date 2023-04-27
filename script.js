
// dropdown fra https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.querySelectorAll("faq-info").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('faqContainer')) {
      var dropdowns = document.getElementsByClassName("faq-info");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }