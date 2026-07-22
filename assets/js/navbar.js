/* ============================================================
   navbar.js — sticky header, mobile hamburger menu, active link
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".site-header");
    var hamburger = document.querySelector(".hamburger");
    var mobileNav = document.querySelector(".mobile-nav");
    var mobileNavClose = document.querySelector(".mobile-nav-close");
    var backdrop = document.querySelector(".nav-backdrop");

    /* Sticky header shadow on scroll */
    function onScroll() {
      if (!header) return;
      if (window.scrollY > 12) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* Mobile menu open / close */
    function openMenu() {
      hamburger.classList.add("is-open");
      mobileNav.classList.add("is-open");
      backdrop.classList.add("is-open");
      hamburger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
    function closeMenu() {
      hamburger.classList.remove("is-open");
      mobileNav.classList.remove("is-open");
      backdrop.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    if (hamburger && mobileNav) {
      hamburger.addEventListener("click", function () {
        if (mobileNav.classList.contains("is-open")) {
          closeMenu();
        } else {
          openMenu();
        }
      });
    }
    if (mobileNavClose) mobileNavClose.addEventListener("click", closeMenu);
    if (backdrop) backdrop.addEventListener("click", closeMenu);

    /* Close mobile menu when a link is tapped */
    document.querySelectorAll(".mobile-nav a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    /* Close on Escape */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    /* Mark active nav link based on current page */
    var currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a, .mobile-nav a").forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("active");
      }
    });
  });
})();
