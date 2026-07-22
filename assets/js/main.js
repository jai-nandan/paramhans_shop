/* ============================================================
   main.js — smooth scroll, back-to-top, scroll reveal,
   FAQ accordion, contact form UI, current year
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    /* ---------- Smooth scroll for in-page anchors ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var targetId = this.getAttribute("href");
        if (targetId.length < 2) return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var headerOffset = 90;
          var top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({ top: top, behavior: "smooth" });
        }
      });
    });

    /* ---------- Back to top button ---------- */
    var fabTop = document.querySelector(".fab-top");
    if (fabTop) {
      window.addEventListener(
        "scroll",
        function () {
          if (window.scrollY > 480) {
            fabTop.classList.add("is-visible");
          } else {
            fabTop.classList.remove("is-visible");
          }
        },
        { passive: true }
      );
      fabTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    /* ---------- Scroll reveal animations ---------- */
    var revealEls = document.querySelectorAll("[data-reveal]");
    if ("IntersectionObserver" in window && revealEls.length) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }

    /* ---------- FAQ accordion ---------- */
    document.querySelectorAll(".faq-item").forEach(function (item) {
      var question = item.querySelector(".faq-question");
      var answer = item.querySelector(".faq-answer");
      if (!question || !answer) return;
      question.addEventListener("click", function () {
        var isOpen = item.classList.contains("is-open");
        document.querySelectorAll(".faq-item.is-open").forEach(function (openItem) {
          if (openItem !== item) {
            openItem.classList.remove("is-open");
            openItem.querySelector(".faq-answer").style.maxHeight = null;
            openItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          }
        });
        if (isOpen) {
          item.classList.remove("is-open");
          answer.style.maxHeight = null;
          question.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("is-open");
          answer.style.maxHeight = answer.scrollHeight + "px";
          question.setAttribute("aria-expanded", "true");
        }
      });
    });

    /* ---------- Contact form UI (no backend — demo submit) ---------- */
    var contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var successBox = document.getElementById("form-success");
        var name = document.getElementById("cf-name");
        var message = "Thanks! Your message has been prepared. Please tap \"Send via WhatsApp\" below to deliver it instantly, or we will reply to your details soon.";
        if (successBox) {
          successBox.querySelector("span") && (successBox.querySelector("span").textContent = message);
          successBox.classList.add("is-visible");
          successBox.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        /* Build a WhatsApp deep link pre-filled with the form content */
        var nameVal = (document.getElementById("cf-name") || {}).value || "";
        var phoneVal = (document.getElementById("cf-phone") || {}).value || "";
        var subjectVal = (document.getElementById("cf-subject") || {}).value || "";
        var messageVal = (document.getElementById("cf-message") || {}).value || "";
        var waText = encodeURIComponent(
          "Hello Shri Param Hans Electrical, my name is " + nameVal +
          (phoneVal ? " (Phone: " + phoneVal + ")" : "") +
          ". Subject: " + subjectVal + ". Message: " + messageVal
        );
        var waLink = document.getElementById("cf-whatsapp-link");
        if (waLink) {
          waLink.href = "https://wa.me/918527074300?text=" + waText;
        }
      });
    }

    /* ---------- Footer current year ---------- */
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();
