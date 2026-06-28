(function () {
  'use strict';

  var active = (function () {
    try {
      return localStorage.getItem('fishfull-language') || localStorage.getItem('scm-language') || 'zh';
    } catch (error) {
      return 'zh';
    }
  })();
  active = active === 'en' ? 'en' : 'zh';

  var brandLogoSrc = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20361%20415%22%3E%3Crect%20width%3D%22361%22%20height%3D%22415%22%20fill%3D%22white%22/%3E%3Ccircle%20cx%3D%22181%22%20cy%3D%22165%22%20r%3D%22150%22%20fill%3D%22none%22%20stroke%3D%22%23006d77%22%20stroke-width%3D%2212%22/%3E%3Cpath%20d%3D%22M52%20242c44-74%20123-69%20158-14%2035%2056%20106%2048%20148-12-22%2089-97%20125-172%20110C111%20312%2060%20285%2052%20242z%22%20fill%3D%22%23006d77%22/%3E%3Cpath%20d%3D%22M78%20220c46-44%20103-34%20134%2010-50-30-96-22-134%2017z%22%20fill%3D%22white%22/%3E%3Cpath%20d%3D%22M154%20115c58-39%20133%2016%20118%2068-10%2032-70%2047-113%2027-28-13-48-60-5-95z%22%20fill%3D%22%23168a49%22/%3E%3Cpath%20d%3D%22M253%20112c33-13%2042-36%2032-71%2037%2032%2032%2078%203%20107%22%20fill%3D%22%23168a49%22/%3E%3Cpath%20d%3D%22M270%20180c32%2017%2050%2039%2054%2071-32-19-59-20-88-8%22%20fill%3D%22%23168a49%22/%3E%3Ccircle%20cx%3D%22174%22%20cy%3D%22131%22%20r%3D%227%22%20fill%3D%22white%22/%3E%3Cpath%20d%3D%22M209%20205v88M230%20205v88M251%20205v88M209%20245c14%2010%2028%2010%2042%200%22%20stroke%3D%22%23006d77%22%20stroke-width%3D%229%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22/%3E%3Ctext%20x%3D%22180%22%20y%3D%22370%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2239%22%20font-weight%3D%22800%22%20letter-spacing%3D%229%22%20fill%3D%22%23006d77%22%3EFISHFULL%3C/text%3E%3Ctext%20x%3D%22180%22%20y%3D%22403%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2220%22%20letter-spacing%3D%228%22%20fill%3D%22%23168a49%22%3EGreen%20Seafood%3C/text%3E%3C/svg%3E';
  var copyrightZh = 'Copyright © 2026Fishfull漁有料版權所有';
  var copyrightEn = 'Copyright © 2026 Fishfull 漁有料. All rights reserved.';

  var englishPages = {
    about: {
      title: 'The Idea',
      metaTitle: 'FishFull | The idea',
      description: 'FishFull turns seafood shopping into a clear path: featured fish, nearby seafood spots, easy recipes, and quick feedback.',
      eyebrow: 'Green seafood, made practical',
      headline: 'From “I do not know fish” to “I can buy one tonight”',
      lead: 'FishFull keeps sustainable seafood close to real life. Shoppers get a clear pick, fishmongers get easy words to explain it, and fisheries partners see what people actually want to buy and cook.',
      badges: ['Featured fish first', 'Nearby spots', 'No-stress recipes', 'Fast feedback'],
      sections: [
        { kind: 'cards', eyebrow: 'One clean buying route', title: 'Not just an idea — a next step people can tap', body: 'The site leads people from picking a fish to finding a spot, cooking dinner, and leaving one useful note.', cards: [
          { icon: '🐟', title: 'Pick one fish first', body: 'Start with a fish that fits tonight’s table, with taste, portion, vendor talk, and recipe ideas.' },
          { icon: '📍', title: 'Find where to buy', body: 'Markets, seafood restaurants, ports, and fish markets are grouped into a simple buying map.' },
          { icon: '🍳', title: 'Cook with less stress', body: 'Steam, pan-fry, or make soup with short steps that first-time seafood buyers can follow.' },
          { icon: '⚡', title: 'Leave one real note', body: 'Bought or not, one quick note helps vendors and partners understand what worked.' }
        ] },
        { kind: 'links', eyebrow: 'Start here', title: 'Jump straight into the useful pages', body: 'No long reading required. Pick the page that matches what you want to do now.', links: [
          { icon: '🐟', title: 'Featured Fish', body: 'See today’s friendly fish pick and what to ask at the stall.', href: '/pages/fish.html' },
          { icon: '📍', title: 'Buy Nearby', body: 'Find seafood spots and open the address for navigation.', href: '/pages/map.html' },
          { icon: '🍳', title: 'Easy Recipes', body: 'Simple cooking paths for tonight.', href: '/pages/recipes.html' },
          { icon: '🎮', title: 'AR Game', body: 'View the whole fish first, then ask and buy with more confidence.', href: '/ar.html' }
        ] }
      ]
    },
    fish: {
      title: 'Featured Fish',
      metaTitle: 'FishFull | Featured fish',
      description: 'A simple featured-fish page for shoppers, fishmongers, and seafood partners.',
      eyebrow: 'Today’s fish pick',
      headline: 'Start with one fish: fourfinger threadfin',
      lead: 'Less scrolling, less awkward guessing. The featured fish gives shoppers a clear starting point and gives vendors a short, friendly way to explain taste, portion, and cooking.',
      badges: ['Tender bite', 'Steam or pan-fry', 'Family-friendly', 'Easy vendor talk'],
      sections: [
        { kind: 'cards', eyebrow: '30 seconds before buying', title: 'Check three things and skip the guesswork', body: 'No need to memorize seafood jargon. Look, ask, and choose a cooking style.', cards: [
          { icon: '👀', title: 'Look at chill and body', body: 'A complete, springy body and a clean smell are easier signs to start with.' },
          { icon: '份', title: 'Ask portion clearly', body: 'Ask whether one fish is enough for two people or whether it should be cut for a family meal.' },
          { icon: '🍳', title: 'Choose the cooking route', body: 'Steam for clean flavor, pan-fry for aroma, soup for a safe dinner save.' }
        ] },
        { kind: 'links', eyebrow: 'Next taps', title: 'Use the featured fish with the map and recipes', body: 'A fish pick works best when it connects to where to buy and how to cook.', links: [
          { icon: '📍', title: 'Buy Nearby', body: 'Find markets, fish markets, restaurants, and ports.', href: '/pages/map.html' },
          { icon: '🍳', title: 'Easy Recipes', body: 'Try steaming, pan-frying, or soup.', href: '/pages/recipes.html' },
          { icon: '⚡', title: 'Quick Feedback', body: 'Leave one note after buying or browsing.', href: '/pages/feedback.html' }
        ] }
      ]
    },
    map: {
      title: 'Buy Nearby',
      metaTitle: 'FishFull | Buy nearby',
      description: 'Find real seafood spots and open addresses for navigation.',
      eyebrow: 'Seafood spot map',
      headline: 'Find a good seafood spot near you',
      lead: 'Use the map route after you check the featured fish or recipe. Each spot is written for real shoppers, fishmongers, and seafood teams — clear, practical, and mobile-friendly.',
      badges: ['Real addresses', 'Easy navigation', 'Pairs with recipes', 'Feedback-ready'],
      locations: [
        { type: 'Market', name: 'Banqiao Huangshi Market', area: 'New Taipei City', address: 'No. 11, Beimen St., Banqiao Dist., New Taipei City', species: 'Fresh fish, sashimi, home-cooking seafood', tag: 'Starter market spot', note: 'Great for catch cards that help shoppers understand species, season, and simple cooking.' },
        { type: 'Restaurant / market', name: 'Addiction Aquatic Development', area: 'Taipei City', address: 'No. 18, Aly. 2, Ln. 410, Minzu E. Rd., Zhongshan Dist., Taipei City', species: 'Fresh seafood, sashimi, cooked seafood', tag: 'Good fish on the table', note: 'Useful for showing how one easy recipe turns interest into dinner.' },
        { type: 'Port', name: 'Bisha Fishing Port', area: 'Keelung City', address: 'No. 211, Beining Rd., Zhongzheng Dist., Keelung City', species: 'Local seasonal catch, cuttlefish, belt fish, seafood meals', tag: 'Origin story spot', note: 'Connects ports, vendors, and shoppers so people know where the fish comes from.' },
        { type: 'Fish market', name: 'Taipei Fish Market', area: 'Taipei City', address: 'No. 20, Aly. 2, Ln. 410, Minzu E. Rd., Zhongshan Dist., Taipei City', species: 'Traceable seafood, frozen seafood, family seafood shopping', tag: 'Clear source, easier trust', note: 'Turns origin and cooking ideas into simple buying reasons.' }
      ],
      sections: []
    },
    recipes: {
      title: 'Easy Recipes',
      metaTitle: 'FishFull | Easy seafood recipes',
      description: 'Easy seafood recipes for shoppers who want to cook fish with less stress.',
      eyebrow: 'Cook tonight',
      headline: 'Pick a recipe before buying, then dinner feels doable',
      lead: 'These recipes are built for real kitchens, not chef flexing. Short steps, clear timing, and rescue tips help people buy fish again.',
      badges: ['15–20 minutes', 'Short steps', 'Rescue tips', 'Featured-fish ready'],
      sections: [
        { kind: 'cards', eyebrow: 'Recipe cards', title: 'Three low-stress seafood routes', body: 'Each card includes time, ingredients, steps, and a rescue tip.', cards: [
          { icon: '蒸', title: 'Ginger-scallion steamed fish', body: 'Clean flavor, about 15 minutes, great for first-time fish buyers.' },
          { icon: '煎', title: 'Salt-crisp pan-fried fish', body: 'Best aroma, about 18 minutes, good with rice or lunch boxes.' },
          { icon: '湯', title: 'Miso fish soup', body: 'A 20-minute dinner saver for small fish or soup nights.' }
        ] }
      ]
    },
    feedback: {
      title: 'Quick Feedback',
      metaTitle: 'FishFull | Quick feedback',
      description: 'A quick feedback page for seafood stalls, restaurants, community events, and shoppers.',
      eyebrow: '10-second feedback',
      headline: 'Bought or not, one real note is enough',
      lead: 'Feedback should not feel like homework. Capture whether people bought, what helped, what blocked them, and one quote from the seafood counter.',
      badges: ['Fast notes', 'Market-ready', 'Vendor-friendly', 'Useful next round'],
      sections: [
        { kind: 'cards', eyebrow: 'Three tiny questions', title: 'Keep the feedback simple', body: 'Ask only what helps the next seafood recommendation get better.', cards: [
          { icon: '買', title: 'Did they buy?', body: 'Yes, maybe later, or not today.' },
          { icon: '句', title: 'What helped?', body: 'Origin, price, portion, cooking idea, or vendor explanation.' },
          { icon: '回', title: 'What should improve?', body: 'Record one honest sentence from the shopper or vendor.' }
        ] }
      ]
    },
    sustainability: {
      title: 'Label Missions',
      metaTitle: 'FishFull | Label missions',
      description: 'Turn seafood labels into small missions that shoppers can understand and use.',
      eyebrow: 'Learn by playing',
      headline: 'Turn seafood labels into buying missions',
      lead: 'A label should do more than explain. FishFull turns fish status, catch method, origin, recipe, and feedback into a small mission that leads to a real purchase.',
      badges: ['Readable labels', 'Mission vibe', 'Photo-friendly', 'Back to buying'],
      sections: [
        { kind: 'cards', eyebrow: 'Mission route', title: 'Four quick steps that make labels useful', body: 'Every step is short enough for a phone screen and useful enough for a seafood counter.', cards: [
          { icon: '🔍', title: 'Scan to unlock', body: 'Open the featured fish and simple status cue.' },
          { icon: '🎖️', title: 'Earn a badge', body: 'Answer one origin or catch-method question.' },
          { icon: '🍽️', title: 'Grab a recipe', body: 'Choose steam, pan-fry, soup, or another easy route.' },
          { icon: '🧾', title: 'Leave feedback', body: 'One note helps the next shopper choose better.' }
        ] }
      ]
    },
    field: {
      title: 'Field Notes',
      metaTitle: 'FishFull | Field notes',
      description: 'On-site seafood notes that show how people scan, ask, buy, cook, and share feedback.',
      eyebrow: 'On-site notes',
      headline: 'Good fish should be seen, bought, cooked, and remembered',
      lead: 'Field notes keep the action short: scan, check the featured fish, find a spot, cook one dish, and leave quick feedback. Shoppers ask better questions and fishmongers get easier ways to explain.',
      badges: ['Partner spots', 'Vendor stories', 'Buying feedback', 'Tasting missions'],
      sections: [
        { kind: 'cards', eyebrow: 'Market card', title: 'One card supports five buying moments', body: 'Do not make shoppers read too much at the stall. Help them understand, ask, cook, buy, and leave one note.', cards: [
          { icon: '掃', title: 'Scan the fish pick', body: 'Start with one recommended fish.' },
          { icon: '問', title: 'Ask the vendor', body: 'Origin, size, taste, price, and cooking style become easy questions.' },
          { icon: '煮', title: 'Choose an easy dish', body: 'Steam, pan-fry, or soup before taking it home.' },
          { icon: '回', title: 'Leave a quick note', body: 'Tell the next round what helped or what was confusing.' }
        ] }
      ]
    }
  };

  function current() { return active; }

  function escapeHtml(value) {
    return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function updateButtons() {
    var nextLabel = active === 'en' ? '中文' : 'EN';
    var title = active === 'en' ? '切換成中文' : 'Switch to English';
    document.querySelectorAll('.language-toggle').forEach(function (button) {
      button.setAttribute('aria-label', title);
      button.setAttribute('title', title);
      var icon = button.querySelector('[data-lang-icon]');
      if (icon) icon.textContent = nextLabel;
      else button.textContent = nextLabel;
    });
  }

  function injectTheme() {
    if (document.getElementById('fishfull-blue-green-theme')) return;
    var style = document.createElement('style');
    style.id = 'fishfull-blue-green-theme';
    style.textContent = [
      ':root{--fishfull-blue:#006d77;--fishfull-green:#168a49;--fishfull-white:#ffffff;--fishfull-mint:#e8fbf8;--fishfull-ink:#0b3034;--ink:var(--fishfull-ink)!important;--ink-soft:#2e5d61!important;--sea:var(--fishfull-blue)!important;--sea-deep:#005b63!important;--sky:#e6fbff!important;--sun:var(--fishfull-green)!important;--sand:#f4fffd!important;--sand-deep:#c9f2e7!important;--paper:rgba(255,255,255,.86)!important;--paper-solid:#ffffff!important;--line:rgba(0,109,119,.14)!important;--shadow:0 26px 70px rgba(0,109,119,.18)!important;}',
      'body{background:#f6fffd!important;color:var(--fishfull-ink)!important;}',
      '.page-home{background:radial-gradient(circle at 78% 12%,rgba(255,255,255,.98) 0 10%,rgba(255,255,255,0) 24%),linear-gradient(135deg,#ffffff 0%,#eefdfa 34%,#b9eee6 68%,#006d77 100%)!important;}',
      '.page-home::before{background:linear-gradient(120deg,rgba(255,255,255,.86),rgba(232,251,248,.38) 45%,rgba(0,109,119,.16))!important;}',
      '.page-home::after{background:radial-gradient(ellipse at 18% 100%,rgba(255,255,255,.9) 0 19%,transparent 20%),radial-gradient(ellipse at 55% 100%,rgba(255,255,255,.75) 0 17%,transparent 18%),linear-gradient(90deg,rgba(0,109,119,.18),rgba(22,138,73,.18))!important;}',
      '.site-nav,.topbar,.mobile-social-dock,.desktop-social-dock{background:rgba(255,255,255,.84)!important;border-color:rgba(0,109,119,.16)!important;box-shadow:0 18px 46px rgba(0,109,119,.14)!important;}',
      '.brand-sun,.brand-symbol,.sun-dot{display:none!important;}',
      '.brand-mark,.brand{gap:12px!important;}',
      '.brand-logo-img{width:52px;height:52px;object-fit:contain;border-radius:16px;background:#fff;box-shadow:0 10px 28px rgba(0,109,119,.16);flex:0 0 auto;}',
      '.brand-mark .brand-logo-img{width:54px;height:54px;}',
      '.brand-text strong,.brand strong,.brand-mark strong{color:var(--fishfull-ink)!important;}',
      '.brand-kicker,.brand small,.eyebrow{color:var(--fishfull-blue)!important;}',
      '.nav-links a,.topnav a{background:rgba(255,255,255,.7)!important;border-color:rgba(0,109,119,.12)!important;color:#0c545c!important;}',
      '.nav-links a:hover,.topnav a:hover,.topnav a[aria-current="page"]{background:#e8fbf8!important;color:#005b63!important;}',
      '.hero-copy,.coast-panel,.route-panel,.page-hero,.content-section,.hero-card,.info-card,.action-card,.recipe-card,.location-card,.spotlight-main,.spotlight-facts article,.feedback-form{background:rgba(255,255,255,.9)!important;border-color:rgba(0,109,119,.14)!important;box-shadow:0 20px 58px rgba(0,109,119,.13)!important;}',
      '.coast-sky{background:linear-gradient(180deg,#e6fbff,#ffffff)!important;}',
      '.static-sun{background:radial-gradient(circle at 35% 30%,#ffffff 0 16%,#8de0cd 17% 58%,#168a49 100%)!important;box-shadow:0 20px 60px rgba(22,138,73,.28)!important;}',
      '.coast-water{background:linear-gradient(180deg,#51c8d2,#006d77)!important;}',
      '.coast-sand{background:linear-gradient(180deg,#ffffff,#e8fbf8)!important;}',
      '.route-blue,.route-orange,.route-pink{background:linear-gradient(180deg,#f7fffe,#ffffff 58%,#e8fbf8)!important;}',
      '.route-blue .route-button,.route-orange .route-button,.route-pink .route-button,.feedback-save,.map-action{background:linear-gradient(135deg,#006d77,#168a49)!important;color:#fff!important;}',
      '.route-badge,.coast-tags span,.badge-row span,.filter-chip,.card-icon,.mini-link{background:#e8fbf8!important;color:#006d77!important;border-color:rgba(0,109,119,.14)!important;}',
      '.filter-chip.is-active{background:linear-gradient(135deg,#006d77,#168a49)!important;color:#fff!important;}',
      '.social-instagram,.circle-link{background:linear-gradient(135deg,#006d77,#168a49)!important;color:#fff!important;}',
      '.social-language{background:#ffffff!important;color:#006d77!important;border:1px solid rgba(0,109,119,.18)!important;}',
      '.site-footer,.fishfull-global-footer{margin:30px auto 0;padding:22px 18px;text-align:center;color:#0b545c;background:rgba(255,255,255,.9);border:1px solid rgba(0,109,119,.14);border-radius:26px;box-shadow:0 18px 44px rgba(0,109,119,.12);font-weight:900;line-height:1.6;}',
      '.site-footer strong,.site-footer span,.fishfull-global-footer strong,.fishfull-global-footer span{display:block;color:#0b545c!important;}',
      '.page-shell .site-footer,.page-shell .fishfull-global-footer{max-width:1180px;}',
      '.page-home .fishfull-global-footer{max-width:min(1180px,calc(100% - 28px));margin-bottom:26px;}',
      '.fishfull-en-page .location-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;}',
      '@media(max-width:720px){.brand-logo-img,.brand-mark .brand-logo-img{width:42px;height:42px;border-radius:13px;}.site-footer,.fishfull-global-footer{margin:18px 10px 0;border-radius:22px;font-size:13px;}.page-home .fishfull-global-footer{margin-bottom:92px;}}'
    ].join('');
    document.head.appendChild(style);
  }

  function enhanceBrandNodes() {
    document.querySelectorAll('.brand-mark,.brand').forEach(function (brand) {
      if (!brand.querySelector('.brand-logo-img')) {
        var img = document.createElement('img');
        img.className = 'brand-logo-img';
        img.src = brandLogoSrc;
        img.alt = 'FishFull Green Seafood logo';
        img.width = 54;
        img.height = 62;
        img.decoding = 'async';
        img.loading = 'eager';
        brand.insertBefore(img, brand.firstChild);
      }
      var small = brand.querySelector('.brand-kicker,.brand small');
      if (small) small.textContent = 'Green Seafood';
    });
  }

  function ensureFooter() {
    var root = document.getElementById('root');
    var host = root && root.firstElementChild ? root.firstElementChild : root;
    if (!host) return;
    var footer = host.querySelector('.site-footer,.fishfull-global-footer');
    if (!footer) {
      footer = document.createElement('footer');
      footer.className = 'fishfull-global-footer';
      host.appendChild(footer);
    }
    footer.classList.add('fishfull-global-footer');
    footer.innerHTML = '<strong>FishFull Green Seafood</strong><span>' + escapeHtml(active === 'en' ? copyrightEn : copyrightZh) + '</span>';
  }

  function navHtml(currentKey) {
    var labels = { home: 'Home', about: 'Idea', fish: 'Featured Fish', map: 'Buy Nearby', recipes: 'Easy Recipes', feedback: 'Feedback', field: 'Field Notes', sustainability: 'Label Missions', ar: 'AR Game' };
    var links = [
      { key: 'about', href: '/pages/about.html' }, { key: 'fish', href: '/pages/fish.html' }, { key: 'map', href: '/pages/map.html' }, { key: 'recipes', href: '/pages/recipes.html' }, { key: 'feedback', href: '/pages/feedback.html' }, { key: 'field', href: '/pages/field.html' }, { key: 'sustainability', href: '/pages/sustainability.html' }, { key: 'ar', href: '/ar.html' }
    ];
    return '<header class="topbar"><a class="brand" href="/"><span><small>Green Seafood</small><strong>FishFull</strong></span></a><nav class="topnav" aria-label="Main navigation"><a href="/">Home</a>' + links.map(function (item) { return '<a href="' + escapeHtml(item.href) + '"' + (item.key === currentKey ? ' aria-current="page"' : '') + '>' + escapeHtml(labels[item.key]) + '</a>'; }).join('') + '</nav><div class="nav-actions"><a class="circle-link" href="https://www.instagram.com/fishfull_2025/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a><button class="circle-link language-toggle" type="button"><span data-lang-icon>中文</span></button></div></header>';
  }

  function heroHtml(data) {
    return '<section class="page-hero"><div class="hero-text"><p class="eyebrow">' + escapeHtml(data.eyebrow) + '</p><h1>' + escapeHtml(data.headline) + '</h1><p>' + escapeHtml(data.lead) + '</p><div class="badge-row">' + (data.badges || []).map(function (badge) { return '<span>' + escapeHtml(badge) + '</span>'; }).join('') + '</div></div><div class="hero-card" aria-hidden="true"><strong>' + escapeHtml(data.title) + '</strong><em>FishFull Green Seafood</em><div class="wave-lines"><i></i><i></i><i></i></div></div></section>';
  }

  function cardsHtml(section) {
    return '<section class="content-section"><div class="section-heading"><p class="eyebrow">' + escapeHtml(section.eyebrow) + '</p><h2>' + escapeHtml(section.title) + '</h2><p>' + escapeHtml(section.body) + '</p></div><div class="info-grid">' + section.cards.map(function (card) { return '<article class="info-card"><span class="card-icon" aria-hidden="true">' + escapeHtml(card.icon) + '</span><h3>' + escapeHtml(card.title) + '</h3><p>' + escapeHtml(card.body) + '</p></article>'; }).join('') + '</div></section>';
  }

  function linksHtml(section) {
    return '<section class="content-section link-section"><div class="section-heading"><p class="eyebrow">' + escapeHtml(section.eyebrow) + '</p><h2>' + escapeHtml(section.title) + '</h2><p>' + escapeHtml(section.body) + '</p></div><div class="link-grid">' + section.links.map(function (item) { return '<a class="action-card" href="' + escapeHtml(item.href) + '"><span class="card-icon" aria-hidden="true">' + escapeHtml(item.icon) + '</span><h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.body) + '</p><strong>Open →</strong></a>'; }).join('') + '</div></section>';
  }

  function locationsHtml(data) {
    if (!data.locations) return '';
    return '<section class="content-section map-section"><div class="section-heading"><p class="eyebrow">Real seafood spots</p><h2>Choose a spot, then bring the recipe</h2><p>Open an address in your map app and keep the buying route simple.</p></div><div class="location-list">' + data.locations.map(function (item) { var link = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(item.name + ' ' + item.address); return '<article class="location-card"><div><strong>' + escapeHtml(item.name) + '</strong><span>' + escapeHtml(item.type) + '｜' + escapeHtml(item.area) + '</span></div><p>' + escapeHtml(item.species) + '</p><a class="address-link" href="' + escapeHtml(link) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(item.address) + '<b aria-hidden="true">↗</b></a><small>' + escapeHtml(item.tag) + '</small><em>' + escapeHtml(item.note) + '</em></article>'; }).join('') + '</div></section>';
  }

  function sectionsHtml(data) {
    return (data.sections || []).map(function (section) { return section.kind === 'links' ? linksHtml(section) : cardsHtml(section); }).join('');
  }

  function renderEnglishContentPage() {
    if (active !== 'en') return;
    var key = document.body && document.body.dataset ? document.body.dataset.page : '';
    if (!key || key === 'ar-game') return;
    var data = englishPages[key];
    var root = document.getElementById('root');
    if (!data || !root) return;
    if (root.dataset.fishfullRuntimeLang === 'en' && root.dataset.fishfullRuntimePage === key) return;
    document.title = data.metaTitle;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', data.description);
    root.innerHTML = '<div class="page-shell fishfull-en-page page-' + escapeHtml(key) + '">' + navHtml(key) + '<main>' + heroHtml(data) + locationsHtml(data) + sectionsHtml(data) + '</main><footer class="site-footer"><strong>FishFull Green Seafood</strong><span>' + escapeHtml(copyrightEn) + '</span></footer></div>';
    root.dataset.fishfullRuntimeLang = 'en';
    root.dataset.fishfullRuntimePage = key;
  }

  var decorateTimer = 0;
  function decorateSoon() {
    clearTimeout(decorateTimer);
    decorateTimer = window.setTimeout(decorate, 0);
  }

  function decorate() {
    injectTheme();
    renderEnglishContentPage();
    enhanceBrandNodes();
    ensureFooter();
    updateButtons();
  }

  function set(next) {
    active = next === 'en' ? 'en' : 'zh';
    try {
      localStorage.setItem('fishfull-language', active);
      localStorage.setItem('scm-language', active);
    } catch (error) {}
    document.documentElement.lang = active === 'en' ? 'en' : 'zh-Hant';
    updateButtons();
    document.dispatchEvent(new Event('fishfull-language-change'));
    document.dispatchEvent(new Event('scm-language-change'));
    decorateSoon();
  }

  function toggle() {
    set(active === 'en' ? 'zh' : 'en');
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest && event.target.closest('.language-toggle');
    if (!button) return;
    event.preventDefault();
    toggle();
  });

  window.FishFullLanguage = {
    current: current,
    set: set,
    toggle: toggle,
    escapeHtml: escapeHtml,
    site: 'FishFull Map'
  };
  window.SCMLanguage = window.FishFullLanguage;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      var root = document.getElementById('root') || document.body;
      if (root && window.MutationObserver) {
        new MutationObserver(decorateSoon).observe(root, { childList: true, subtree: true });
      }
      set(active);
      decorateSoon();
    });
  } else {
    set(active);
    decorateSoon();
  }
})();
