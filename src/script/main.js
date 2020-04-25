import AOS from "aos";
import "aos/dist/aos.css";

$(document).ready(function() {
  AOS.init({
    duration: 1000,
    easing: "ease-out-quart"
  });
  window.addEventListener("load", AOS.refresh);
  $("#page").on("scroll", function() {
    // AOS.init();
  });
});
