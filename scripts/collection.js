(function () {
  const data = window.resourceData;
  const params = new URLSearchParams(window.location.search);
  const state = {
    categoryId: params.get("category") || data.categories[0].id
  };

  const copy = data.ui;
  const breadcrumb = document.querySelector("[data-copy=\"breadcrumb\"]");
  const titleEl = document.querySelector("[data-collection-title]");
  const descriptionEl = document.querySelector("[data-collection-description]");
  const footerNote = document.querySelector('[data-copy="footerNote"]');
  const backBtn = document.querySelector('[data-copy="backHome"]');
  const copyBtn = document.querySelector('[data-copy-btn]');
  const listEl = document.querySelector("[data-resource-list]");
  const cardTemplate = document.getElementById("resource-card-template");
  const heroSection = document.querySelector(".collection-hero");

  function renderCollection() {
    const category = data.categories.find((cat) => cat.id === state.categoryId);
    const resources = data.resources[state.categoryId];

    breadcrumb.textContent = category ? `${copy.breadcrumb} - ${category.label}` : copy.breadcrumb;
    footerNote.textContent = copy.footerNote;
    backBtn.textContent = copy.backHome;
    copyBtn.textContent = copy.copyList;

    if (!category || !resources) {
      titleEl.textContent = copy.emptyState;
      descriptionEl.textContent = "";
      listEl.innerHTML = "";
      copyBtn.disabled = true;
      return;
    }

    titleEl.textContent = category.label;
    descriptionEl.textContent = category.meta;
    listEl.innerHTML = "";

    resources.forEach((item, index) => {
      const clone = cardTemplate.content.cloneNode(true);
      const link = clone.querySelector("[data-resource-link]");
      const desc = clone.querySelector("[data-resource-description]");
      const tagsWrap = clone.querySelector("[data-resource-tags]");
      const cornerLink = clone.querySelector("[data-resource-corner]");

      link.textContent = item.name;
      link.href = item.url;
      desc.textContent = item.description;
      tagsWrap.innerHTML = item.tags
        .map((tagKey) => `<span class="tag">${data.tags[tagKey] || tagKey}</span>`)
        .join("");

      if (cornerLink) {
        cornerLink.href = item.url;
      }

      listEl.appendChild(clone);
    });

    copyBtn.disabled = false;
    attachCardHoverEffects();
    initHeroLightEffect();

    requestAnimationFrame(() => {
      document
        .querySelectorAll(".collection-hero .stagger-item")
        .forEach((el) => el.classList.add("is-visible"));

      document
        .querySelectorAll(".resource-card")
        .forEach((card, index) => {
          card.classList.add("stagger-item");
          card.style.setProperty("--stagger-delay", `${index * 70}ms`);
          card.classList.add("is-visible");
        });
    });
  }

  function handleCopy() {
    const resources = data.resources[state.categoryId];
    if (!resources) return;
    const lines = resources.map((item) => `${item.name} - ${item.url}`).join("\n");
    navigator.clipboard
      .writeText(lines)
      .then(() => {
        copyBtn.textContent = copy.copySuccess;
        setTimeout(() => {
          copyBtn.textContent = copy.copyList;
        }, 1800);
      })
      .catch(() => {
        copyBtn.textContent = "Clipboard blocked";
      });
  }

  function attachCardHoverEffects() {
    const cards = document.querySelectorAll(".resource-card");
    cards.forEach((card) => {
      const updatePosition = (event) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mouse-x", `${x}%`);
        card.style.setProperty("--mouse-y", `${y}%`);
      };

      card.addEventListener("mousemove", updatePosition);
      card.addEventListener("mouseenter", () => {
        if (card._resetTimer) {
          clearTimeout(card._resetTimer);
          card._resetTimer = null;
        }
        card.classList.add("is-hover");
      });
      card.addEventListener("mouseleave", () => {
        card.classList.remove("is-hover");
        if (card._resetTimer) {
          clearTimeout(card._resetTimer);
        }
        card._resetTimer = setTimeout(() => {
          card.style.setProperty("--mouse-x", "50%");
          card.style.setProperty("--mouse-y", "50%");
          card._resetTimer = null;
        }, 350);
      });
    });
  }

  let heroLightInitialized = false;

  function initHeroLightEffect() {
    if (!heroSection || heroLightInitialized) return;
    const updateHeroLight = (event) => {
      const rect = heroSection.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      heroSection.style.setProperty("--hero-x", `${x}%`);
      heroSection.style.setProperty("--hero-y", `${y}%`);
    };

    let resetTimer = null;

    heroSection.addEventListener("mousemove", updateHeroLight);
    heroSection.addEventListener("mouseenter", () => {
      if (resetTimer) {
        clearTimeout(resetTimer);
        resetTimer = null;
      }
      heroSection.classList.add("is-hover");
    });
    heroSection.addEventListener("mouseleave", () => {
      heroSection.classList.remove("is-hover");
      if (resetTimer) clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        heroSection.style.setProperty("--hero-x", "50%");
        heroSection.style.setProperty("--hero-y", "50%");
        resetTimer = null;
      }, 400);
    });

    heroLightInitialized = true;
  }

  copyBtn.addEventListener("click", handleCopy);
    renderCollection();
})();
