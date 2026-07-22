/* ============================================================
   counter.js — animated number counters (stats section)
   ============================================================ */
(function () {
  "use strict";

  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var duration = 1600;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); /* ease-out cubic */
      var current = Math.floor(eased * target);
      el.textContent = current.toLocaleString("en-IN");
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString("en-IN");
      }
    }
    window.requestAnimationFrame(step);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      counters.forEach(animateCount);
    }
  });
})();
