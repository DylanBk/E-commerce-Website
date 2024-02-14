window.onscroll = function() {scrollFunction()};

function scrollFunction() { //function to change navbar height when scrolling
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  document.getElementById("navbar").style.height = "6rem";
} else {
  document.getElementById("navbar").style.height = "2rem";
}
}

function searchBar() { // UNFINISHED. function to allow users to search products and view the returned items
  let search_term = document.querySelector("#search-bar").value;
  let item = document.querySelector("#item-focused");
  item.classList.toggle("item-focused-show");
  let image = document.querySelector("#shoe-image");
  image.src = "/images/"
  document.querySelector("#shoe-name").value = search_term;

  alert(search_term)
}

function showContacts() { //function to show contact details when 'contact us' button is pressed
  let overlay = document.querySelector(".overlay");
  let contact_details = document.querySelector(".contact-details");
  let button_style_2 = document.querySelector("#contact-button");
  overlay.classList.toggle("show");
  contact_details.classList.toggle("show");
  button_style_2.classList.toggle("navbar-item-alt");
}