// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.querySelector(".in-slider");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {
//     myIndex = 1;
//   }
//   x[myIndex - 1].style.display = "block";
//   setTimeout(carousel, 5000); // Change image every 2 seconds
// }
let center_slider = document.querySelector(".medium-slider");
let in_slider = document.querySelector(".in-slider");
let the_index = 0;

slider();

function slider() {
  var i;
  for (i = 0; i < the_index.length; i++) {
    the_index[i].syle.display = "none";
  }
  the_index++;
  if (the_index > the_index.length) {
    the_index = 1;
  }
  the_index[the_index - 1].style.display = "block ";
  setTimeout(slider, 10000);
}
