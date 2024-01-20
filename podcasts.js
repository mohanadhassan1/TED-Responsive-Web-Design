document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    // var bodyHeight = document.body.offsetHeight;

    if (scrollPosition > 500) {
      body.classList.add("scroll-bg-change");
    } else {
      body.classList.remove("scroll-bg-change");
    }

    if (scrollPosition + windowHeight > 1750) {
      body.classList.add("scroll-bg-bottom");
    } else {
      body.classList.remove("scroll-bg-bottom");
    }
  });
});
