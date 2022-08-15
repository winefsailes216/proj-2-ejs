// // When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//    myFunction();
// };

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//    if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky");
//    } else {
//       navbar.classList.remove("sticky");
//    }
// }

let image_array = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
function get_random_image() {
   random_index = Math.floor(Math.random() * image_array.length);

   document.getElementById("image_shower").innerHTML =
      '<img class="img-fluid" src="http://localhost:3000/static/img/' +
      images[Math.floor(Math.random() * images.length)] +
      '">';
}
get_random_image().appendTo("#image_shower");
