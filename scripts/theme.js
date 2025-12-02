(function () {
  const root = document.documentElement;
  const STORAGE_KEY = "resourceHue";

  function hsl(h, s, l) {
    return `hsl(${h} ${s}% ${l}%)`;
  }

  function applyHue(hue) {
    const h = Number(hue) || 24;
    root.style.setProperty("--accent", hsl(h, 90, 55));
    root.style.setProperty("--accent-soft", hsl(h, 80, 85));
    root.style.setProperty("--surface", hsl(h, 35, 97));
    root.style.setProperty("--surface-soft", hsl(h, 35, 93));
  }

  function initThemePicker() {
    const hueInput = document.querySelector("[data-theme-hue]");
    if (!hueInput) return;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    const startHue = stored !== null ? Number(stored) : 24;
    hueInput.value = String(startHue);
    applyHue(startHue);

    hueInput.addEventListener("input", (e) => {
      const value = e.target.value;
      applyHue(value);
    });

    hueInput.addEventListener("change", (e) => {
      window.localStorage.setItem(STORAGE_KEY, e.target.value);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemePicker);
  } else {
    initThemePicker();
  }
})();
