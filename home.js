(function () {
  var STORAGE_KEY = 'scm-language';

  var copy = {
    zh: {
      brand: '永續漁獲地圖',
      kicker: 'SUSTAINABLE CATCH MAP',
      nav: [
        { label: '我們的理念', href: '/pages/about.html' },
        { label: '友善海鮮地圖', href: '/pages/map.html' },
        { label: 'AR 與永續標籤', href: '/pages/sustainability.html' }
      ],
      eyebrow: 'OCEAN · BEACH · SUNSHINE',
      headline: '從白色沙灘出發，看見海鮮選擇與海洋永續的連結',
      intro: 'Sustainable Catch Map 希望整合 AI 推薦、漁獲資訊與永續標籤，幫助消費者找到友善海鮮，也讓漁業、餐飲與教育場域一起支持海洋資源管理。',
      noSpin: '靜態首頁設計：不旋轉、不暈眩、網路不穩也容易讀取',
      visualTitle: '輕鬆、簡潔、開心的永續海岸入口',
      visualText: '以固定海景、沙灘色塊與清楚的大型按鈕建立沉浸感；不再依賴 720° 旋轉與 3D 模型，讓現場展示、手機操作與海鮮市場弱網路環境都更穩定。',
      visualTags: ['不可旋轉背景', '純 HTML/CSS/JS', '手機與電腦分版'],
      actionTitle: '選擇你想探索的永續路線',
      actionHint: '三個選項皆改為純 input[type=button]，保留原本文案與連結功能。',
      actions: [
        {
          tone: 'blue',
          href: '/pages/about.html',
          number: '01',
          title: '我們的理念',
          subtitle: '看見永續初衷',
          badge: '3D眼睛導覽',
          description: '了解我們的理念：以 AI、資料地圖與互動教育，讓每一次海鮮選擇更透明、更友善海洋。'
        },
        {
          tone: 'orange',
          href: '/pages/map.html',
          number: '02',
          title: '附近的友善海鮮地圖',
          subtitle: '找附近友善餐廳',
          badge: '3D友善小魚',
          description: '跟著小魚游向附近友善海鮮據點，探索推薦路線與在地永續資訊。'
        },
        {
          tone: 'pink',
          href: '/pages/sustainability.html',
          number: '03',
          title: 'AR互動與永續標籤',
          subtitle: '理解永續標籤',
          badge: '3D牛頓擺球組',
          description: '透過像牛頓擺一樣有節奏的互動，理解海鮮來源、標籤與永續價值。'
        }
      ],
      stats: [
        { value: 'AI', label: '推薦友善選擇' },
        { value: 'MAP', label: '連結附近據點' },
        { value: 'AR', label: '理解永續標籤' }
      ]
    },
    en: {
      brand: 'Sustainable Catch Map',
      kicker: 'SUSTAINABLE CATCH MAP',
      nav: [
        { label: 'Our Philosophy', href: '/pages/about.html' },
        { label: 'Friendly Seafood Map', href: '/pages/map.html' },
        { label: 'AR & Sustainability Labels', href: '/pages/sustainability.html' }
      ],
      eyebrow: 'OCEAN · BEACH · SUNSHINE',
      headline: 'Start from the white beach and see how seafood choices connect with ocean sustainability',
      intro: 'Sustainable Catch Map brings together AI recommendations, seafood information, and sustainability labels to help consumers find ocean-friendly seafood while connecting fisheries, restaurants, and education with better resource stewardship.',
      noSpin: 'Static home design: no rotation, no dizziness, and easier loading on unstable networks',
      visualTitle: 'A light, simple, joyful coastal entrance',
      visualText: 'A fixed coastal background, beach-inspired color blocks, and clear large buttons create immersion without 720° rotation or 3D modules, making demos, mobile use, and weak market networks more stable.',
      visualTags: ['Non-rotating background', 'Pure HTML/CSS/JS', 'Desktop and mobile layouts'],
      actionTitle: 'Choose your sustainability route',
      actionHint: 'All three entries are pure input[type=button] controls while keeping the original copy and links.',
      actions: [
        {
          tone: 'blue',
          href: '/pages/about.html',
          number: '01',
          title: 'Our Philosophy',
          subtitle: 'See the purpose of sustainability',
          badge: '3D philosophy guide',
          description: 'Learn our philosophy: using AI, data maps, and interactive education to make every seafood choice clearer and kinder to the ocean.'
        },
        {
          tone: 'orange',
          href: '/pages/map.html',
          number: '02',
          title: 'Nearby Friendly Seafood Restaurants',
          subtitle: 'Find nearby friendly seafood',
          badge: '3D friendly fish',
          description: 'Follow the little fish to nearby friendly seafood spots and explore recommended routes and local sustainability information.'
        },
        {
          tone: 'pink',
          href: '/pages/sustainability.html',
          number: '03',
          title: 'AR Interaction & Sustainability Labels',
          subtitle: 'Understand sustainability labels',
          badge: '3D Newton cradle',
          description: 'Use rhythmic interaction inspired by a Newton cradle to understand seafood origin, labels, and sustainability value.'
        }
      ],
      stats: [
        { value: 'AI', label: 'Recommend better choices' },
        { value: 'MAP', label: 'Connect nearby spots' },
        { value: 'AR', label: 'Explain labels' }
      ]
    }
  };

  function currentLang() {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'zh';
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function navTemplate(items) {
    return items.map(function (item) {
      return '<a href="' + escapeHtml(item.href) + '">' + escapeHtml(item.label) + '</a>';
    }).join('');
  }

  function actionsTemplate(actions) {
    return actions.map(function (item) {
      var aria = item.title + ' / ' + item.subtitle + ' / ' + item.badge;
      return [
        '<article class="route-card route-' + escapeHtml(item.tone) + '" data-href="' + escapeHtml(item.href) + '">',
          '<div class="route-meta">',
            '<span class="route-number">' + escapeHtml(item.number) + '</span>',
            '<span class="route-badge">' + escapeHtml(item.badge) + '</span>',
          '</div>',
          '<input type="button" class="route-button" value="' + escapeHtml(item.title) + '" aria-label="' + escapeHtml(aria) + '" data-href="' + escapeHtml(item.href) + '">',
          '<h2>' + escapeHtml(item.subtitle) + '</h2>',
          '<p>' + escapeHtml(item.description) + '</p>',
        '</article>'
      ].join('');
    }).join('');
  }

  function statsTemplate(stats) {
    return stats.map(function (item) {
      return '<div class="stat-pill"><strong>' + escapeHtml(item.value) + '</strong><span>' + escapeHtml(item.label) + '</span></div>';
    }).join('');
  }

  function tagsTemplate(tags) {
    return tags.map(function (tag) {
      return '<span>' + escapeHtml(tag) + '</span>';
    }).join('');
  }

  function render() {
    var root = document.getElementById('root');
    if (!root) return;

    var lang = currentLang();
    var text = copy[lang];
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant';

    root.innerHTML = [
      '<div class="page-home">',
        '<header class="site-nav" aria-label="Main navigation">',
          '<a class="brand-mark" href="/" aria-label="' + escapeHtml(text.brand) + '">',
            '<span class="brand-sun" aria-hidden="true"></span>',
            '<span class="brand-text">',
              '<span class="brand-kicker">' + escapeHtml(text.kicker) + '</span>',
              '<strong>' + escapeHtml(text.brand) + '</strong>',
            '</span>',
          '</a>',
          '<nav class="nav-links" aria-label="Homepage links">' + navTemplate(text.nav) + '</nav>',
        '</header>',
        '<main class="home-hero">',
          '<section class="hero-copy" aria-labelledby="home-title">',
            '<p class="eyebrow">' + escapeHtml(text.eyebrow) + '</p>',
            '<h1 id="home-title">' + escapeHtml(text.headline) + '</h1>',
            '<p class="hero-intro">' + escapeHtml(text.intro) + '</p>',
            '<div class="no-spin-note">' + escapeHtml(text.noSpin) + '</div>',
            '<div class="hero-stats" aria-label="Sustainable Catch Map features">' + statsTemplate(text.stats) + '</div>',
          '</section>',
          '<section class="coast-panel" aria-label="Static coastal design summary">',
            '<div class="coast-sky" aria-hidden="true">',
              '<span class="static-sun"></span>',
              '<span class="cloud cloud-one"></span>',
              '<span class="cloud cloud-two"></span>',
            '</div>',
            '<div class="coast-water" aria-hidden="true"></div>',
            '<div class="coast-sand" aria-hidden="true"></div>',
            '<div class="coast-card">',
              '<h2>' + escapeHtml(text.visualTitle) + '</h2>',
              '<p>' + escapeHtml(text.visualText) + '</p>',
              '<div class="coast-tags">' + tagsTemplate(text.visualTags) + '</div>',
            '</div>',
          '</section>',
          '<section class="route-panel" aria-labelledby="route-title">',
            '<div class="route-heading">',
              '<p class="eyebrow">SELECT ROUTE</p>',
              '<h2 id="route-title">' + escapeHtml(text.actionTitle) + '</h2>',
              '<p>' + escapeHtml(text.actionHint) + '</p>',
            '</div>',
            '<div class="route-grid">' + actionsTemplate(text.actions) + '</div>',
          '</section>',
        '</main>',
      '</div>'
    ].join('');
  }

  function goTo(href) {
    if (!href) return;
    window.location.href = href;
  }

  document.addEventListener('click', function (event) {
    var input = event.target.closest && event.target.closest('input[type="button"][data-href]');
    if (input) {
      goTo(input.getAttribute('data-href'));
      return;
    }

    var card = event.target.closest && event.target.closest('.route-card[data-href]');
    if (card) {
      goTo(card.getAttribute('data-href'));
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    var card = event.target.closest && event.target.closest('.route-card[data-href]');
    if (!card || event.target.matches('input, button, a')) return;
    event.preventDefault();
    goTo(card.getAttribute('data-href'));
  });

  render();
})();
