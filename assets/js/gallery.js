/* ============================================================
   gallery.js — category filtering + lightbox viewer
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var filterBtns = document.querySelectorAll(".filter-btn");
    var items = document.querySelectorAll(".gallery-item");
    var lightbox = document.getElementById("lightbox");
    if (!items.length) return;

    var visibleItems = Array.prototype.slice.call(items);
    var currentIndex = 0;

    /* ---------- Filtering ---------- */
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        var filter = btn.getAttribute("data-filter");

        items.forEach(function (item) {
          var category = item.getAttribute("data-category");
          var show = filter === "all" || filter === category;
          item.style.display = show ? "" : "none";
        });
      });
    });

    /* ---------- Lightbox ---------- */
    if (!lightbox) return;
    var lbTitle = lightbox.querySelector(".lightbox-caption");
    var lbClose = lightbox.querySelector(".lightbox-close");
    var lbPrev = lightbox.querySelector(".lightbox-prev");
    var lbNext = lightbox.querySelector(".lightbox-next");
    var lbImg = document.getElementById("lightbox-img");

    function getVisible() {
      return Array.prototype.filter.call(items, function (item) {
        return item.style.display !== "none";
      });
    }

    function openLightbox(index) {
      visibleItems = getVisible();
      currentIndex = index;
      updateLightbox();
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function updateLightbox() {
      var item = visibleItems[currentIndex];
      if (!item) return;
      var caption = item.getAttribute("data-caption") || "";
      if (lbTitle) lbTitle.textContent = caption;

      if (lbImg) {
        var sourceImg = item.querySelector("img");
        var realSrc = sourceImg ? sourceImg.getAttribute("src") : "";
        lbImg.classList.remove("is-loaded");
        lbImg.src = realSrc;
        lbImg.alt = caption;
        if (lbImg.complete) {
          lbImg.classList.add("is-loaded");
        } else {
          lbImg.onload = function () {
            lbImg.classList.add("is-loaded");
          };
        }
      }
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    items.forEach(function (item, idx) {
      item.addEventListener("click", function () {
        var visible = getVisible();
        var visIndex = visible.indexOf(item);
        openLightbox(visIndex >= 0 ? visIndex : 0);
      });
    });

    if (lbClose) lbClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    if (lbNext) {
      lbNext.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % visibleItems.length;
        updateLightbox();
      });
    }
    if (lbPrev) {
      lbPrev.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
        updateLightbox();
      });
    }
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight" && lbNext) lbNext.click();
      if (e.key === "ArrowLeft" && lbPrev) lbPrev.click();
    });
  });
})();
