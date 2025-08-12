let circle = document.getElementById("circle_head");
let circle_text = document.getElementById("circle_text");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");

card6.addEventListener("click", () => {
circle.innerText = "LLMs & Gen AI Strategy";
circle_text.innerText = "Automate complex processes and enhance decision-making with custom AI that reduces manual work by 50% and improves accuracy by 90%. Get intelligent automation that works reliably from day one.";
})
card5.addEventListener("click", () => {
circle.innerText = "Big Data, Analytics & BI";
circle_text.innerText = "Turn your data into actionable insights that drive profitable decisions. Our analytics solutions help clients increase revenue by 25% through data-driven strategies and predictive intelligence.";
})
card4.addEventListener("click", () => {
circle.innerText = "Network & Infrastructure";
circle_text.innerText = "Build high-performance network infrastructure that supports AI workloads with 99.9% uptime. Ensure maximum performance, security, and resilience for mission-critical operations.";
})
card3.addEventListener("click", () => {
circle.innerText = "Product Engineering";
circle_text.innerText = "Build innovative AI-powered products that create new revenue streams and enhance customer experiences. Bring products to market 60% faster with our proven development methodologies.";
})
card2.addEventListener("click", () => {
circle.innerText = "Enterprise Consulting";
circle_text.innerText = "Get expert guidance through digital transformation with clear roadmaps that align technology investments with business goals. Maximize ROI and competitive positioning with proven strategies.";
})
card1.addEventListener("click", () => {
circle.innerText = "Cloud Services & Platform";
circle_text.innerText = "Build scalable, secure cloud infrastructure that grows with your business. Reduce infrastructure costs by 40% while improving performance and security with enterprise-grade solutions.";
})


const cardr1 = document.getElementById("cardr1");
const cardr2 = document.getElementById("cardr2");
const cardr3 = document.getElementById("cardr3");
const cardr4 = document.getElementById("cardr4");
const cardr5 = document.getElementById("cardr5");
const cardr6 = document.getElementById("cardr6");

cardr1.addEventListener("click", () => {
circle.innerText = "LLMs & Gen AI Strategy";
circle_text.innerText = "Automate complex processes and enhance decision-making with custom AI that reduces manual work by 50% and improves accuracy by 90%. Get intelligent automation that works reliably from day one.";
})
cardr2.addEventListener("click", () => {
circle.innerText = "Big Data, Analytics & BI";
circle_text.innerText = "Turn your data into actionable insights that drive profitable decisions. Our analytics solutions help clients increase revenue by 25% through data-driven strategies and predictive intelligence.";
})
cardr3.addEventListener("click", () => {
circle.innerText = "Network & Infrastructure";
circle_text.innerText = "Build high-performance network infrastructure that supports AI workloads with 99.9% uptime. Ensure maximum performance, security, and resilience for mission-critical operations.";
})
cardr4.addEventListener("click", () => {
circle.innerText = "Product Engineering";
circle_text.innerText = "Build innovative AI-powered products that create new revenue streams and enhance customer experiences. Bring products to market 60% faster with our proven development methodologies.";
})
cardr5.addEventListener("click", () => {
circle.innerText = "Enterprise Consulting";
circle_text.innerText = "Get expert guidance through digital transformation with clear roadmaps that align technology investments with business goals. Maximize ROI and competitive positioning with proven strategies.";
})
cardr6.addEventListener("click", () => {
circle.innerText = "Cloud Services & Platform";
circle_text.innerText = "Build scalable, secure cloud infrastructure that grows with your business. Reduce infrastructure costs by 40% while improving performance and security with enterprise-grade solutions.";
})


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
// $(".counter").countUp({
//   time: 1000,
//   delay: 10,
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const tabButtons = document.querySelectorAll(".tab-btn");
//   const head = document.querySelector(".center-head");
//   const txt = document.querySelector(".center-txt");

//   // Show the default active tab on load
//   const activeTab = document.querySelector(".tab-btn.active");
//   if (activeTab) {
//     head.textContent = activeTab.dataset.title;
//     txt.textContent = activeTab.dataset.text;
//   }

//   tabButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       // Remove active class from all
//       tabButtons.forEach((btn) => btn.classList.remove("active"));

//       // Add active to current
//       button.classList.add("active");

//       // Update center content
//       head.textContent = button.dataset.title;
//       txt.textContent = button.dataset.text;
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   // Select both .tab-btn and .inner-box-item
//   const clickableItems = document.querySelectorAll(".tab-btn, .inner-box-item");
//   const head = document.querySelector(".center-head");
//   const txt = document.querySelector(".center-txt");
//   const centerImage = document.querySelector(".center-box-1 img");

//   // Load default active item on page load
//   const activeItem = document.querySelector(".tab-btn.active, .inner-box-item.active");
//   if (activeItem) {
//     head.textContent = activeItem.dataset.title;
//     txt.textContent = activeItem.dataset.text;
//     if (activeItem.dataset.img) {
//       centerImage.src = activeItem.dataset.img;
//     }
//   }

//   clickableItems.forEach((item) => {
//     item.addEventListener("click", () => {
//       // Remove active class from all clickable items
//       clickableItems.forEach((el) => el.classList.remove("active"));

//       // Add active to clicked item
//       item.classList.add("active");

//       // Update content
//       head.textContent = item.dataset.title;
//       txt.textContent = item.dataset.text;

//       // Update image if data-img exists
//       if (item.dataset.img) {
//         centerImage.src = item.dataset.img;
//       }
//     });
//   });
// });