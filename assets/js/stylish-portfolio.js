(function ($) {
  ("use strict"); // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper,.dark-mode").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
      "fa-bars fa-times"
    );
    // $(this).toggleClass("active");
    // $(".dark-mode").toggleClass("active");
  });
  // Closes the sidebar menu
  $("#sidebar-nav a").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper,.dark-mode").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
      "fafa-bars"
    );
    // $(this).toggleClass("active");
    // $(".dark-mode").toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $("#sidebar-wrapper .js-scroll-trigger").click(function () {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
      "fa-bars fa-times"
    );
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });
})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function (event) {
  var that = $(this);
  that.on("click", onMapClickHandler);
  that.off("mouseleave", onMapMouseleaveHandler);
  that.find("iframe").css("pointer-events", "none");
};
var onMapClickHandler = function (event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off("click", onMapClickHandler);
  // Enable scrolling zoom
  that.find("iframe").css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on("mouseleave", onMapMouseleaveHandler);
};
// Enable map zooming with mouse scroll when the user clicks the map
$(".map").on("click", onMapClickHandler);
let inputs = document.querySelectorAll(".inpts");
let checkbox = document.querySelector("#form .form-check-input");
let form_btn = document.querySelector("#form button.btn.visible.main-btn");
let form = document.querySelector("#form form");
const patterns = {
  name: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

//validation function
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "form-control valid";
  } else {
    field.className = "form-control invalid";
  }
}
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    console.log(e.target, e.target.attributes.name.value, patterns["name"]);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

form.addEventListener("change", () => {
  if (!checkbox.checked) {
    form_btn.setAttribute("disabled", "disabled");
  } else{
     form_btn.removeAttribute("disabled");
  }
});
