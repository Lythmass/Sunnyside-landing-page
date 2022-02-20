const images = document.querySelectorAll(".images img");
const size = window.matchMedia("(min-width: 871px)");
let currentAttribute = "";
let replacedAttribute = "";

changeSize(size);

// Change image Sizes according to the correct screen resolution
size.addEventListener("change", function() {
     changeSize(size);
});


function changeSize(size) {
     // Check for desktop size
     if(size.matches) {
          images.forEach(function(image) {
               currentAttribute = image.getAttribute("src");

               // Replace mobile with desktop
               replacedAttribute = currentAttribute.replace("mobile", "desktop");
               image.setAttribute("src", replacedAttribute);
          });
     } else { // Check for mobile size
          images.forEach(function(image) {
               currentAttribute = image.getAttribute("src");

               // Replace desktop with mobile
               replacedAttribute = currentAttribute.replace("desktop", "mobile");
               image.setAttribute("src", replacedAttribute);
          });
     }
}
