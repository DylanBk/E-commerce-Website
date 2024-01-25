function myFunction() {
    let x = document.getElementsByClassName("navbar-item") [0]
    x.innerHTML = "<b>Button Pressed</b>"
}

function changeButtonStyle() { //change button to alt style when clicked
    let x = document.getElementsByClassName("navbar-item")
    x.innerHTML = 0
}

window.onscroll = function() {scrollFunction()}; //makes navbar change size when scrolling

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.height = "6rem";
  } else {
    document.getElementById("navbar").style.height = "2rem";
  }
}