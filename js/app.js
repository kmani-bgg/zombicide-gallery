    function escapeHtml(value) {
      return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function listItems(items) {
      if (!items || items.length === 0) {
        return `<div class="empty-list">No data</div>`;
      }
      return `<ul class="skill-list">${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
    }

    function skillBlock(color, title, items) {
      return `
        <section class="skill-block">
          <h3 class="skill-title ${color}">${escapeHtml(title)}</h3>
          ${listItems(items)}
        </section>
      `;
    }


        function getKoreanName(name) {
      return koreanNameMap[name] || name;
    }

    function renderCharacterName(name) {
      return `<span class="name-ko">${escapeHtml(getKoreanName(name))}</span><span class="name-en">${escapeHtml(name)}</span>`;
    }

    function fitNameLines() {
      document.querySelectorAll('.name-ko, .name-en').forEach((el) => {
        const computed = window.getComputedStyle(el);
        const baseSize = parseFloat(computed.fontSize) || (el.classList.contains('name-ko') ? 20 : 11);
        const minSize = el.classList.contains('name-ko') ? 10 : 7;
        el.style.fontSize = baseSize + 'px';
        let size = baseSize;
        while (el.scrollWidth > el.clientWidth && size > minSize) {
          size -= 0.5;
          el.style.fontSize = size + 'px';
        }
      });
    }

    function fitSingleLineElements() {
      document.querySelectorAll('.category, .type-row').forEach((el) => {
        const computed = window.getComputedStyle(el);
        const baseSize = parseFloat(computed.fontSize) || 10;
        const minSize = el.classList.contains('category') ? 6 : 7;
        el.style.fontSize = baseSize + 'px';
        let size = baseSize;
        while (el.scrollWidth > el.clientWidth && size > minSize) {
          size -= 0.5;
          el.style.fontSize = size + 'px';
        }
      });
    }

    function renderCard(character, index) {
      const typePills = character.type && character.type.length
        ? `<div class="type-row">${character.type.map(type => `<span class="pill">${escapeHtml(type)}</span>`).join("")}</div>`
        : `<div class="type-row"><span class="pill empty-pill">Type: No data</span></div>`;

      const bodyText = character.body
        ? `Body: ${escapeHtml(character.body)}`
        : "Body: No data";

      const imageMarkup = character.characterArt
        ? `
          <img
            id="image-${index}"
            class="character-image"
            alt="${escapeHtml(character.name)}"
            referrerpolicy="no-referrer"
            src="${localImagePath(character.characterArt)}"
          />
        `
        : `<div class="missing-image">No image name</div>`;

      const loadingMarkup = character.characterArt
        ? `<div id="loading-${index}" class="loading">Loading image...</div>`
        : "";

      return `
        <article class="character-card">
          <section class="top-info">
            <div class="category">${escapeHtml(character.category)}</div>
            <h2 class="name">${renderCharacterName(character.name)}</h2>
          </section>

          <section class="visual-area">
            ${imageMarkup}
            <div class="fade-overlay"></div>

            <div class="overlay-content">
              <div class="overlay-spacer"></div>

              <div class="meta">
                ${typePills}
                <span class="pill body-pill">${bodyText}</span>
              </div>

              <div class="skills">
                ${skillBlock("blue", "Blue", character.blue)}
                ${skillBlock("yellow", "Yellow", character.yellow)}
                ${skillBlock("orange", "Orange", character.orange)}
                ${skillBlock("red", "Red", character.red)}
              </div>
            </div>

            ${loadingMarkup}
            <div id="error-${index}" class="error" style="display:none"></div>
          </section>
        </article>
      `;
    }

    function localImagePath(fileName) {
      return "./images/" + encodeURIComponent(fileName);
    }

    function loadImage(character, index) {
      if (!character.characterArt) return;

      const imageEl = document.getElementById(`image-${index}`);
      const loadingEl = document.getElementById(`loading-${index}`);
      const errorEl = document.getElementById(`error-${index}`);

      imageEl.onload = () => {
        imageEl.classList.add("loaded");
        if (loadingEl) loadingEl.style.display = "none";
        if (errorEl) errorEl.style.display = "none";
      };

      imageEl.onerror = () => {
        if (loadingEl) loadingEl.style.display = "none";
        if (errorEl) {
          errorEl.style.display = "block";
          errorEl.textContent = "Local image not found: " + character.characterArt;
        }
      };

      imageEl.src = localImagePath(character.characterArt);
    }

    function populateFilters() {
      const categoryFilter = document.getElementById("categoryFilter");
      const categories = [...new Set(characters.map(c => c.category).filter(Boolean))];

      categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
      });
    }

    function renderGallery() {
      const searchText = document.getElementById("searchInput").value.trim().toLowerCase();
      const selectedCategory = document.getElementById("categoryFilter").value;
      const selectedRole = document.getElementById("roleFilter").value;

      const filtered = characters.filter(character => {
        const matchesSearch = !searchText || character.name.toLowerCase().includes(searchText) || getKoreanName(character.name).toLowerCase().includes(searchText);
        const matchesCategory = !selectedCategory || character.category === selectedCategory;
        const matchesRole = !selectedRole || (character.type || []).includes(selectedRole);
        return matchesSearch && matchesCategory && matchesRole;
      });

      const gallery = document.getElementById("gallery");
      gallery.innerHTML = filtered.map(renderCard).join("");
      fitNameLines();
      fitSingleLineElements();

      document.getElementById("summary").textContent =
        `Showing ${filtered.length} of ${characters.length} survivors`;

      filtered.forEach(loadImage);
    }

    function initializeSizeOption() {
      const savedSize = localStorage.getItem("zombicide-card-size") || "size-medium";
      const sizeSelect = document.getElementById("sizeSelect");
      document.body.classList.remove("size-small", "size-medium", "size-large");
      document.body.classList.add(savedSize);
      if (sizeSelect) sizeSelect.value = savedSize;
    }

    initializeSizeOption();
    populateFilters();
    renderGallery();
    window.addEventListener("resize", () => { fitNameLines(); fitSingleLineElements(); });

    document.getElementById("searchInput").addEventListener("input", renderGallery);
    document.getElementById("categoryFilter").addEventListener("change", renderGallery);
    document.getElementById("roleFilter").addEventListener("change", renderGallery);
    document.getElementById("sizeSelect").addEventListener("change", (event) => {
      document.body.classList.remove("size-small", "size-medium", "size-large");
      document.body.classList.add(event.target.value);
      localStorage.setItem("zombicide-card-size", event.target.value);
      fitNameLines();
      fitSingleLineElements();
    });
