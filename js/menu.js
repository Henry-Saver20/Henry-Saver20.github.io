$(document).ready(function() {
    if (document.documentElement.clientWidth > 480) {
      return;
    } else {
      document.getElementById("myNav").style.visibility = "hidden";
    }
  });
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }