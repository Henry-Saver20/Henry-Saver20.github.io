$(document).ready(function() {
    if (document.documentElement.clientWidth > 480) {
      $("#myNav").addClass("navbar-fixed-top");
    } else {
      $("#myNav").removeClass("navbar-fixed-top");
    }
  });