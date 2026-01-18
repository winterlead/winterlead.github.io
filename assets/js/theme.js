(function () {
  var button = document.querySelector(".theme-toggle");
  if (!button) {
    return;
  }

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") || "light";
  }

  function setTheme(next, persist) {
    document.documentElement.setAttribute("data-theme", next);
    if (persist) {
      try {
        localStorage.setItem("theme", next);
      } catch (err) {
        // Ignore storage errors for this session.
      }
    }
  }

  function syncButton() {
    var isDark = getTheme() === "dark";
    button.setAttribute("aria-pressed", isDark ? "true" : "false");
    button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  }

  button.addEventListener("click", function () {
    var next = getTheme() === "dark" ? "light" : "dark";
    setTheme(next, true);
    syncButton();
  });

  syncButton();
})();
