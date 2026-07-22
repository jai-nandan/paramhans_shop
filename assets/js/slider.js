/* ============================================================
   slider.js — lightweight testimonial slider (mobile) &
   brand marquee pause-on-hover
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    /* ---------- Testimonial slider (mobile: one at a time with dots) ---------- */
    var track = document.querySelector(".testimonial-track");
    var dotsWrap = document.querySelector(".testimonial-dots");
    if (track && dotsWrap) {
      var cards = track.querySelectorAll(".testimonial-card");
      cards.forEach(function (_, i) {
        var dot = document.createElement("button");
        dot.className = "t-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", "Show testimonial " + (i + 1));
        dot.addEventListener("click", function () {
          var card = cards[i];
          card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
          dotsWrap.querySelectorAll(".t-dot").forEach(function (d) {
            d.classList.remove("active");
          });
          dot.classList.add("active");
        });
        dotsWrap.appendChild(dot);
      });
    }

    /* ---------- Brand marquee: pause animation on hover / touch ---------- */
    var marquee = document.querySelector(".brand-track");
    if (marquee) {
      marquee.addEventListener("mouseenter", function () {
        marquee.style.animationPlayState = "paused";
      });
      marquee.addEventListener("mouseleave", function () {
        marquee.style.animationPlayState = "running";
      });
    }
  });
})();
