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














  

  document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const head = document.querySelector(".center-head");
    const txt = document.querySelector(".center-txt");

    // Show the default active tab on load
    const activeTab = document.querySelector(".tab-btn.active");
    if (activeTab) {
      head.textContent = activeTab.dataset.title;
      txt.textContent = activeTab.dataset.text;
    }

    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Remove active class from all
        tabButtons.forEach(btn => btn.classList.remove("active"));

        // Add active to current
        button.classList.add("active");

        // Update center content
        head.textContent = button.dataset.title;
        txt.textContent = button.dataset.text;
      });
    });
  });