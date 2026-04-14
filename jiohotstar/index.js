// Content data used to render hero slides and carousel cards.
const CONTENT = {
  hero: [
    {
      title: 'Jawan',
      badge: 'Action · Thriller',
      year: '2023',
      lang: 'Hindi',
      rating: '8.1',
      genre: 'Action · Thriller · Drama',
      desc: 'A jail warden recruits a group of women to take on a destructive force with a mission that circles back to a traumatic past.',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&q=80'
    },
    {
      title: 'Pathaan',
      badge: 'Action · Spy',
      year: '2023',
      lang: 'Hindi',
      rating: '5.9',
      genre: 'Action · Adventure',
      desc: 'An exiled spy returns to India to take on a mercenary organisation called OUTFIT X and their ruthless leader.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80'
    },
    {
      title: 'Leo',
      badge: 'Action · Tamil',
      year: '2023',
      lang: 'Tamil',
      rating: '7.1',
      genre: 'Action · Thriller',
      desc: 'A mild-mannered restaurant owner is forced to confront his buried past when a drug cartel attacks his family.',
      image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=1600&q=80'
    },
    {
      title: 'Rocky Aur Rani',
      badge: 'Romance · Drama',
      year: '2023',
      lang: 'Hindi',
      rating: '7.2',
      genre: 'Romance · Drama · Comedy',
      desc: 'A love story about two contrasting personalities — Rocky, a rich Punjabi boy, and Rani, an intellectual Bengali girl.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80'
    }
  ],
  trending: [
    { title: 'Animal', sub: '2023 · Hindi', image: 'https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?w=300&q=75', badge: 'new' },
    { title: 'Dunki', sub: '2023 · Hindi', image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=300&q=75', badge: '' },
    { title: 'Sam Bahadur', sub: '2023 · Hindi', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=75', badge: 'hd' },
    { title: 'Tiger 3', sub: '2023 · Hindi', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&q=75', badge: '' },
    { title: '12th Fail', sub: '2023 · Hindi', image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=300&q=75', badge: 'hd' },
    { title: 'Salaar', sub: '2023 · Telugu', image: 'https://images.unsplash.com/photo-1605538032404-d7f073ee1a09?w=300&q=75', badge: 'new' },
    { title: 'Fukrey 3', sub: '2023 · Hindi', image: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?w=300&q=75', badge: '' },
    { title: 'Gadar 2', sub: '2023 · Hindi', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&q=75', badge: '' }
  ],
  sports: [
    { title: 'IND vs SA', sub: 'T20 · Live Now', image: 'https://images.unsplash.com/photo-1540747913346-19212a4b423e?w=300&q=75', live: true },
    { title: 'IPL 2024', sub: 'CSK vs MI · 7:30 PM', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=300&q=75', live: false },
    { title: 'La Liga', sub: 'Real vs Barca', image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=300&q=75', live: true },
    { title: 'Pro Kabaddi', sub: 'Season 10 · Live', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=300&q=75', live: false },
    { title: 'India Open', sub: 'Badminton 2024', image: 'https://images.unsplash.com/photo-1605235186583-a8272b61f9fe?w=300&q=75', live: false },
    { title: 'Formula 1', sub: 'GP Highlights', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&q=75', live: false }
  ],
  specials: [
    { title: 'Aarya', sub: 'Season 3 · Drama', image: 'https://images.unsplash.com/photo-1603189343302-e603f7add05a?w=300&q=75', badge: 'new' },
    { title: 'The Night Manager', sub: 'Thriller · Hindi', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&q=75', badge: 'hd' },
    { title: 'Special Ops', sub: 'Action · Hindi', image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=300&q=75', badge: '' },
    { title: 'Human', sub: 'Medical Thriller', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&q=75', badge: '' },
    { title: 'Hostages', sub: 'Season 2', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&q=75', badge: 'hd' },
    { title: 'Out of Love', sub: 'Drama Series', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&q=75', badge: '' },
    { title: 'Grahan', sub: 'Period Drama', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=75', badge: 'new' }
  ],
  bollywood: [
    { title: 'Dream Girl 2', sub: '2023 · Comedy', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&q=75', badge: '' },
    { title: 'OMG 2', sub: '2023 · Drama', image: 'https://images.unsplash.com/photo-1493804714600-6edb1cd93080?w=300&q=75', badge: 'hd' },
    { title: 'Adipurush', sub: '2023 · Mythology', image: 'https://images.unsplash.com/photo-1545431781-3e1b506e9a37?w=300&q=75', badge: '' },
    { title: 'Bholaa', sub: '2023 · Action', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=300&q=75', badge: '' },
    { title: 'Kisi Ka Bhai', sub: '2023 · Action', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&q=75', badge: 'hd' },
    { title: 'Tu Jhoothi', sub: '2023 · Romance', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&q=75', badge: '' },
    { title: 'Pathaan', sub: '2023 · Spy', image: 'https://images.unsplash.com/photo-1548986341-62be0feaba0a?w=300&q=75', badge: 'new' }
  ],
  webseries: [
    { title: 'Mirzapur', sub: 'Season 3 · Crime', image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=300&q=75', badge: 'new' },
    { title: 'Scam 1992', sub: 'True Story · Drama', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&q=75', badge: '' },
    { title: 'Panchayat', sub: 'Season 3 · Comedy', image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=300&q=75', badge: 'hd' },
    { title: 'Criminal Justice', sub: 'Season 3 · Thriller', image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&q=75', badge: '' },
    { title: 'City of Dreams', sub: 'Season 3 · Political', image: 'https://images.unsplash.com/photo-1468254095679-bbcba94a7066?w=300&q=75', badge: 'hd' },
    { title: 'Undekhi', sub: 'Season 3 · Crime', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=75', badge: '' },
    { title: 'Grahan', sub: 'Period Drama', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=75', badge: 'new' }
  ]
};

// App-level constants and frequently accessed DOM elements.
const HERO_ROTATION_MS = 5500;
const CAROUSEL_SCROLL_OFFSET = 500;
const SEARCH_FOCUS_DELAY_MS = 180;

const elements = {
  heroBg: document.getElementById('heroBg'),
  heroContent: document.getElementById('heroContent'),
  heroDots: document.getElementById('heroDots'),
  sidebarNav: document.querySelector('.sidebar-nav'),
  navItems: [...document.querySelectorAll('.nav-item')],
  topSearch: document.getElementById('top-search'),
  topSearchInput: document.getElementById('topSearchInput'),
  searchEmptyState: document.getElementById('searchEmptyState'),
  showcaseSection: document.querySelector('.top-showcase'),
  heroSection: document.querySelector('.hero'),
  carousels: [...document.querySelectorAll('.carousel')]
};

// UI state for hero rotation and search focus timing.
let heroIndex = 0;
let heroTimerId = 0;
let searchFocusTimerId = 0;

// Small helper functions for generating reusable markup.
const createFallbackImage = title => `https://placehold.co/300x200/181c28/445?text=${encodeURIComponent(title)}`;

function createHeroDotsMarkup(activeIndex) {
  return CONTENT.hero
    .map((_, index) => `<button class="hero-dot${index === activeIndex ? ' active' : ''}" type="button" data-hero-index="${index}" aria-label="Go to slide ${index + 1}"></button>`)
    .join('');
}

function createHeroMarkup(item) {
  return `
    <div class="hero-badge">✦ ${item.badge}</div>
    <h1 class="hero-title">${item.title}</h1>
    <div class="hero-meta">
      <span>${item.year}</span>
      <span class="dot"></span>
      <span class="rating">★ ${item.rating}</span>
      <span class="dot"></span>
      <span class="lang-b">${item.lang}</span>
      <span class="dot"></span>
      <span>${item.genre}</span>
    </div>
    <p class="hero-desc">${item.desc}</p>
    <div class="hero-btns">
      <button class="btn-play" type="button">
        <i class="bi bi-play-fill btn-icon" aria-hidden="true"></i>
        Watch Now
      </button>
      <button class="btn-more" type="button">
        <i class="bi bi-info-circle btn-icon" aria-hidden="true"></i>
        More Info
      </button>
    </div>
  `;
}

// Hero section rendering and autoplay controls.
function renderHero() {
  const heroItem = CONTENT.hero[heroIndex];

  elements.heroBg.style.backgroundImage = `url('${heroItem.image}')`;
  elements.heroContent.innerHTML = createHeroMarkup(heroItem);
  elements.heroDots.innerHTML = createHeroDotsMarkup(heroIndex);
}

function startHeroTimer() {
  clearInterval(heroTimerId);
  heroTimerId = window.setInterval(() => {
    heroIndex = (heroIndex + 1) % CONTENT.hero.length;
    renderHero();
  }, HERO_ROTATION_MS);
}

function setHeroIndex(nextIndex) {
  heroIndex = nextIndex;
  renderHero();
  startHeroTimer();
}

// Card helpers used by the middle carousel sections.
function createBadgeMarkup(item) {
  if (item.live) {
    return '<span class="badge b-live">● LIVE</span>';
  }

  if (item.badge === 'new') {
    return '<span class="badge b-new">NEW</span>';
  }

  if (item.badge === 'hd') {
    return '<span class="badge b-hd">HD</span>';
  }

  return '';
}

function createSearchText(item) {
  return `${item.title} ${item.sub || ''} ${item.badge || ''} ${item.live ? 'live sports' : ''}`.trim().toLowerCase();
}

function createCard(item, sizeClass) {
  const card = document.createElement('article');
  const image = document.createElement('img');

  card.className = `card ${sizeClass}`;
  card.dataset.searchText = createSearchText(item);

  image.src = item.image;
  image.alt = item.title;
  image.loading = 'lazy';
  image.addEventListener('error', () => {
    image.src = createFallbackImage(item.title);
  }, { once: true });

  card.innerHTML = `
    ${createBadgeMarkup(item)}
    <div class="card-play-btn">
      <i class="bi bi-play-fill card-play-icon" aria-hidden="true"></i>
    </div>
    <div class="card-overlay">
      <div class="card-title">${item.title}</div>
      <div class="card-sub">${item.sub || ''}</div>
    </div>
  `;

  card.prepend(image);
  return card;
}

// Build every carousel row from the CONTENT object.
function populateCarousels() {
  return elements.carousels.map(carousel => {
    const fragment = document.createDocumentFragment();
    const items = CONTENT[carousel.id] || [];
    const sizeClass = carousel.dataset.size;

    items.forEach(item => {
      fragment.appendChild(createCard(item, sizeClass));
    });

    carousel.replaceChildren(fragment);

    return {
      carousel,
      section: carousel.closest('.section'),
      cards: [...carousel.querySelectorAll('.card')]
    };
  });
}

const carouselEntries = populateCarousels();

// Search behavior: filter cards and hide non-matching sections.
function applySearch(query) {
  const normalizedQuery = query.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;
  let totalMatches = 0;

  carouselEntries.forEach(({ section, cards }) => {
    let sectionMatches = 0;

    cards.forEach(card => {
      const matches = !isSearching || card.dataset.searchText.includes(normalizedQuery);
      card.hidden = !matches;
      sectionMatches += matches ? 1 : 0;
    });

    if (section) {
      section.hidden = isSearching && sectionMatches === 0;
    }

    totalMatches += sectionMatches;
  });

  elements.showcaseSection.hidden = isSearching;
  elements.heroSection.hidden = isSearching;
  elements.searchEmptyState.hidden = !(isSearching && totalMatches === 0);
}

// Top search open/close helpers.
function focusSearchInput() {
  clearTimeout(searchFocusTimerId);
  searchFocusTimerId = window.setTimeout(() => {
    elements.topSearchInput.focus();
  }, SEARCH_FOCUS_DELAY_MS);
}

function showTopSearch() {
  elements.topSearch.classList.add('visible');
  elements.topSearch.setAttribute('aria-hidden', 'false');
  elements.topSearch.scrollIntoView({ behavior: 'smooth', block: 'start' });
  focusSearchInput();
}

function resetSearch() {
  elements.topSearchInput.value = '';
  applySearch('');
}

function hideTopSearch() {
  elements.topSearch.classList.remove('visible');
  elements.topSearch.setAttribute('aria-hidden', 'true');
  resetSearch();
}

// Sidebar navigation behavior.
function setActiveNav(link) {
  elements.navItems.forEach(item => {
    item.classList.toggle('active', item === link);
  });
}

function scrollToTarget(selector) {
  const target = selector ? document.querySelector(selector) : null;

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function handleNavClick(event) {
  const link = event.target.closest('.nav-item');

  if (!link) {
    return;
  }

  event.preventDefault();
  setActiveNav(link);

  if (link.dataset.navAction === 'search') {
    showTopSearch();
    return;
  }

  hideTopSearch();
  scrollToTarget(link.getAttribute('href'));
}

// Carousel buttons and hero dots interactions.
function handleCarouselButtonClick(event) {
  const button = event.target.closest('.car-btn[data-direction]');

  if (!button) {
    return;
  }

  const carousel = button.parentElement.querySelector('.carousel');
  const direction = Number(button.dataset.direction || 0);

  carousel.scrollBy({
    left: direction * CAROUSEL_SCROLL_OFFSET,
    behavior: 'smooth'
  });
}

function handleHeroDotClick(event) {
  const dot = event.target.closest('.hero-dot[data-hero-index]');

  if (!dot) {
    return;
  }

  setHeroIndex(Number(dot.dataset.heroIndex));
}

// Search input listeners.
function handleSearchInput() {
  applySearch(elements.topSearchInput.value);
}

function handleSearchKeydown(event) {
  if (event.key === 'Escape') {
    hideTopSearch();
  }
}

// Initial event bindings and first render.
elements.sidebarNav.addEventListener('click', handleNavClick);
document.addEventListener('click', handleCarouselButtonClick);
elements.heroDots.addEventListener('click', handleHeroDotClick);
elements.topSearchInput.addEventListener('input', handleSearchInput);
elements.topSearchInput.addEventListener('search', handleSearchInput);
elements.topSearchInput.addEventListener('keydown', handleSearchKeydown);

renderHero();
startHeroTimer();