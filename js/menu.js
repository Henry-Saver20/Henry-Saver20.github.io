// $(document).ready(function() {
//     if (document.documentElement.clientWidth > 480) {
//       $("#myNav").addClass("navbar-fixed-top");
//     } else {
//       $("#myNav").removeClass("navbar-fixed-top");
//     }
//   });
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }