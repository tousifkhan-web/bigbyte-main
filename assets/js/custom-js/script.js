$(".package-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navContainer: ["#package-carousel-nav"],
  navText: [$("#package-nav-left"), $("#package-nav-right")],
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplaySpeed: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    769: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1441: {
      items: 4,
    },
  },
});

//this is coment
document.addEventListener("DOMContentLoaded", function () {
  let currentPath = window.location.pathname.split("/").pop();

  if (currentPath === "") currentPath = "index.html";

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// counter js
$(".counter").countUp({
  time: 1000,
  delay: 10,
});
