(function () {
  const data = window.resourceData;
  const copy = data.ui;
  const heroEyebrow = document.querySelector('[data-copy="heroEyebrow"]');
  const heroSub = document.querySelector('[data-copy="heroSub"]');
  const ctaExplore = document.querySelector('[data-copy="ctaExplore"]');
  const ctaJump = document.querySelector('[data-copy="ctaJump"]');
  const categoryEyebrow = document.querySelector('[data-copy="categoryEyebrow"]');
  const categoryTitle = document.querySelector('[data-copy="categoryTitle"]');
  const footerNote = document.querySelector('[data-copy="footerNote"]');
  const grid = document.querySelector('[data-category-grid]');

  function renderCopy() {
    heroEyebrow.textContent = copy.heroEyebrow;
    heroSub.textContent = copy.heroSub;
    ctaExplore.textContent = copy.ctaExplore;
    ctaJump.textContent = copy.ctaJump;
    categoryEyebrow.textContent = copy.categoryEyebrow;
    categoryTitle.textContent = copy.categoryTitle;
    footerNote.textContent = copy.footerNote;

    requestAnimationFrame(() => {
      document
        .querySelectorAll(".hero .stagger-item")
        .forEach((el) => el.classList.add("is-visible"));
    });
  }

  function renderCategories() {
    grid.innerHTML = data.categories
      .map(
        (cat, index) => `
        <a
          class="category-card stagger-item"
          href="collection.html?category=${cat.id}"
          aria-label="${cat.label}"
          style="--stagger-delay: ${index * 80}ms"
        >
          <span class="category-icon">${cat.icon}</span>
          <span class="category-label">${cat.label}</span>
          <span class="category-meta">${cat.meta}</span>
        </a>
      `
      )
      .join("");

    requestAnimationFrame(() => {
      document
        .querySelectorAll(".category-card.stagger-item")
        .forEach((card) => card.classList.add("is-visible"));
    });
  }

  function initRandomJump() {
    ctaJump.addEventListener("click", (event) => {
      event.preventDefault();
      const randomCategory = data.categories[Math.floor(Math.random() * data.categories.length)];
      window.location.href = `collection.html?category=${randomCategory.id}`;
    });
  }

  renderCopy();
  renderCategories();
  initRandomJump();
})();
