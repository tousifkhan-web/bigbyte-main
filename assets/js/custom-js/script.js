document.addEventListener("DOMContentLoaded", function () {
  let circle = document.getElementById("circle_head");
  let circle_text = document.getElementById("circle_text");

  // List of clickable cards and their text updates
  const cardData = [
    [
      "card1",
      "Cloud Services & Platform",
      "Build scalable, secure cloud infrastructure that grows with your business. Reduce infrastructure costs by 40% while improving performance and security with enterprise-grade solutions.",
    ],
    [
      "card2",
      "Enterprise Consulting",
      "Get expert guidance through digital transformation with clear roadmaps that align technology investments with business goals. Maximize ROI and competitive positioning with proven strategies.",
    ],
    [
      "card3",
      "Product Engineering",
      "Build innovative AI-powered products that create new revenue streams and enhance customer experiences. Bring products to market 60% faster with our proven development methodologies.",
    ],
    [
      "card4",
      "Network & Infrastructure",
      "Build high-performance network infrastructure that supports AI workloads with 99.9% uptime. Ensure maximum performance, security, and resilience for mission-critical operations.",
    ],
    [
      "card5",
      "Big Data, Analytics & BI",
      "Turn your data into actionable insights that drive profitable decisions. Our analytics solutions help clients increase revenue by 25% through data-driven strategies and predictive intelligence.",
    ],
    [
      "card6",
      "LLMs & Gen AI Strategy",
      "Automate complex processes and enhance decision-making with custom AI that reduces manual work by 50% and improves accuracy by 90%. Get intelligent automation that works reliably from day one.",
    ],
    [
      "cardr1",
      "LLMs & Gen AI Strategy",
      "Automate complex processes and enhance decision-making with custom AI that reduces manual work by 50% and improves accuracy by 90%. Get intelligent automation that works reliably from day one.",
    ],
    [
      "cardr2",
      "Big Data, Analytics & BI",
      "Turn your data into actionable insights that drive profitable decisions. Our analytics solutions help clients increase revenue by 25% through data-driven strategies and predictive intelligence.",
    ],
    [
      "cardr3",
      "Network & Infrastructure",
      "Build high-performance network infrastructure that supports AI workloads with 99.9% uptime. Ensure maximum performance, security, and resilience for mission-critical operations.",
    ],
    [
      "cardr4",
      "Product Engineering",
      "Build innovative AI-powered products that create new revenue streams and enhance customer experiences. Bring products to market 60% faster with our proven development methodologies.",
    ],
    [
      "cardr5",
      "Enterprise Consulting",
      "Get expert guidance through digital transformation with clear roadmaps that align technology investments with business goals. Maximize ROI and competitive positioning with proven strategies.",
    ],
    [
      "cardr6",
      "Cloud Services & Platform",
      "Build scalable, secure cloud infrastructure that grows with your business. Reduce infrastructure costs by 40% while improving performance and security with enterprise-grade solutions.",
    ],
  ];

  // Attach click events safely
  cardData.forEach(([id, title, text]) => {
    const el = document.getElementById(id);
    if (el && circle && circle_text) {
      el.addEventListener("click", () => {
        circle.innerText = title;
        circle_text.innerText = text;
      });
    }
  });

  // Initialize Owl Carousel if available
  if (
    typeof $ !== "undefined" &&
    $(".package-slider").length &&
    typeof $(".package-slider").owlCarousel === "function"
  ) {
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
        0: { items: 1 },
        769: { items: 2 },
        992: { items: 3 },
        1441: { items: 4 },
      },
    });
  }

  // Highlight active nav link
  let currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Counter animation if available
  if (
    typeof $ !== "undefined" &&
    $(".counter").length &&
    typeof $(".counter").countUp === "function"
  ) {
    $(".counter").countUp({ time: 1000, delay: 10 });
  }
});
