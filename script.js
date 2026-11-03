(function () {
  var links = window.ZTALK_LINKS || {};

  // Point every data-link element at its configured URL.
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var key = el.getAttribute("data-link");
    var url = links[key];
    if (!url) {
      // No listing yet (mobile stores): keep the slot but say so.
      el.setAttribute("aria-disabled", "true");
      el.removeAttribute("href");
      el.removeAttribute("rel");
      if (/^Open the App Store/.test(el.textContent || "")) el.textContent = "App Store — soon";
      if (el.classList.contains("chip")) {
        el.title = "Coming soon";
      }
      return;
    }
    el.setAttribute("href", url);
    if (/^https?:/.test(url)) el.setAttribute("rel", "noopener noreferrer");
    el.setAttribute("target", "_blank");
  });

  // Lightweight mobile menu.
  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
    });
    mobileNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      }
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
