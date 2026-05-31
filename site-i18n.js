(function () {
  var STORAGE_KEY = 'scm-language';
  var isApplying = false;

  var zhToEn = {
    '永續漁獲地圖': 'Sustainable Catch Map',
    '我們的理念': 'Our Philosophy',
    '友善海鮮地圖': 'Friendly Seafood Map',
    '附近的友善海鮮地圖': 'Nearby Friendly Seafood Map',
    'AR 與永續標籤': 'AR & Sustainability Labels',
    'AR互動與永續標籤': 'AR Interaction & Sustainability Labels',
    '從白色沙灘出發，看見海鮮選擇與海洋永續的連結': 'Start from the white beach and see how seafood choices connect with ocean sustainability',
    'Sustainable Catch Map 希望整合 AI 推薦、漁獲資訊與永續標籤， 幫助消費者找到友善海鮮，也讓漁業、餐飲與教育場域一起支持海洋資源管理。': 'Sustainable Catch Map brings together AI recommendations, seafood information, and sustainability labels to help consumers find ocean-friendly seafood while connecting fisheries, restaurants, and education with better resource stewardship.',
    '看見永續初衷': 'Discover our purpose',
    '找附近友善海鮮': 'Find friendly seafood nearby',
    '理解永續標籤': 'Understand sustainability labels',
    '3D 理念導覽': '3D philosophy guide',
    '3D 友善小魚': '3D friendly fish',
    '3D 牛頓擺球組': '3D Newton cradle',
    '了解我們的理念：以 AI、資料地圖與互動教育，讓每一次海鮮選擇更透明、更友善海洋。': 'Learn our philosophy: using AI, data maps, and interactive education to make every seafood choice clearer and kinder to the ocean.',
    '跟著小魚游向附近友善海鮮據點，探索推薦路線與在地永續資訊。': 'Follow the little fish to nearby friendly seafood spots and explore recommended routes and local sustainability information.',
    '透過像牛頓擺一樣有節奏的互動，理解海鮮來源、標籤與永續價值。': 'Use rhythmic interaction inspired by a Newton cradle to understand seafood origin, labels, and sustainability value.',
    'Sustainable Catch Map（永續漁人地圖）的核心理念，是把「海洋永續」轉化成一般人看得懂、找得到、願意行動的日常選擇。 我們運用 AI、大數據與 AR/VR 互動體驗，整合漁獲季節、產地來源、永續標籤與友善店家資訊， 讓消費者、漁民、餐飲業者與教育單位都能用更直覺的方式參與永續漁業。': 'The core idea of Sustainable Catch Map is to turn ocean sustainability into everyday choices that people can understand, find, and act on. We use AI, data, and AR/VR interaction to connect seafood seasons, origins, sustainability labels, and friendly stores so consumers, fishers, restaurants, and educators can all take part more intuitively.',
    '回到沉浸式首頁': 'Back to immersive home',
    '探索友善海鮮據點': 'Explore friendly seafood spots',
    '理念一：看見海洋壓力': 'Idea 1: See the pressure on the ocean',
    '過度捕撈、氣候變遷與來源標示不清，讓消費者難以判斷哪些海鮮真正友善環境；因此我們希望先把複雜資訊轉化為清楚、可理解的判斷依據。': 'Overfishing, climate change, and unclear origin labels make it hard for consumers to know which seafood is truly ocean-friendly. We first turn complex information into clear and understandable guidance.',
    '理念二：用科技降低門檻': 'Idea 2: Use technology to lower the barrier',
    '我們結合 AI 分析、季節漁獲資料、永續標準與在地據點，協助大眾理解當季適合選擇的魚種、產地來源與友善消費路徑。': 'We combine AI analysis, seasonal seafood data, sustainability standards, and local locations to help people understand suitable seasonal species, origins, and friendly consumption routes.',
    '理念三：讓選擇形成改變': 'Idea 3: Turn choices into change',
    '透過友善海鮮地圖、AR 互動標籤與教育內容，讓永續海鮮不只是專業議題，而是日常生活中看得懂、找得到、也願意支持的行動。': 'Through a friendly seafood map, AR interactive labels, and educational content, sustainable seafood becomes more than an expert topic: it becomes an action people can understand, find, and support in daily life.',
    '理念實踐方向': 'How we put the idea into practice',
    '先用清楚文字、視覺化資料與互動場景，降低民眾理解永續海鮮的門檻。': 'Use clear writing, visualized data, and interactive scenes to make sustainable seafood easier to understand.',
    '再透過地圖與標籤資訊，串接餐廳、超市、市場與在地漁港等友善據點。': 'Use maps and label information to connect friendly restaurants, supermarkets, markets, and local fishing ports.',
    '最後以 AI 推薦與 AR 教育模組，推動更透明、更有參與感、也更容易被採納的永續消費模式。': 'Use AI recommendations and AR education modules to promote a more transparent, engaging, and adoptable model of sustainable consumption.',
    '即時據點': 'Live locations',
    '資料透明': 'Transparent data',
    '教育互動': 'Interactive education',
    '附近友善海鮮據點': 'Nearby friendly seafood spots',
    '探索附近友善海鮮據點': 'Explore nearby friendly seafood spots',
    '用互動地圖探索附近友善海鮮據點。': 'Explore nearby friendly seafood locations with an interactive map.',
    '透過 AR 互動與 3D 模型理解永續標籤。': 'Understand sustainability labels through AR interaction and 3D models.',
    '更多聯絡方式': 'More contact options',
    '切換中文英文': 'Switch Chinese / English',
    '目前聚焦': 'Current Focus',
    '透過地圖快速找到身邊支持永續漁法、友善養殖與產地透明的海鮮店家。從漁獲來源、販售品項到店家位置一目了然，讓你安心選購新鮮海味，也用每一次消費支持海洋永續與在地漁民。': 'Quickly find nearby seafood stores that support sustainable fishing, responsible aquaculture, and transparent origins. See seafood sources, product types, and store locations at a glance, so every purchase can support ocean sustainability and local fishers.',
    '掃描永續標籤，開啟專屬 AR 海洋互動任務！玩家可透過手機探索漁獲故事、解鎖知識徽章、完成永續挑戰，讓海鮮選購不只是消費，更像一場有趣的海洋冒險。用遊戲化體驗提升參與感，讓永續觀念自然被看見、被分享。': 'Scan sustainability labels to start your own AR ocean mission. Players can use their phones to explore seafood stories, unlock knowledge badges, and complete sustainability challenges, turning seafood shopping into an engaging ocean adventure.',
    '提示：滑鼠拖曳可 720° 環視，移到 3D 物件上會觸發動態效果。': 'Tip: drag to view the scene in 720 degrees. Hover over 3D objects to trigger animations.',
  };

  var enToZh = Object.keys(zhToEn).reduce(function (acc, key) {
    acc[zhToEn[key]] = key;
    return acc;
  }, {});

  function normalizeText(text) {
    return text.replace(/\s+/g, ' ').trim();
  }

  function translateTextNode(node, lang) {
    var raw = node.nodeValue;
    var trimmed = normalizeText(raw);
    if (!trimmed) return;
    var dict = lang === 'en' ? zhToEn : enToZh;
    var translated = dict[trimmed];
    if (translated && translated !== trimmed) {
      node.nodeValue = raw.replace(trimmed, translated);
    }
  }

  function walkTextNodes(root, lang) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        var tag = parent.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) { translateTextNode(node, lang); });
  }

  function setDocumentMeta(lang) {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant';
    if (lang === 'en') {
      document.title = document.title
        .replace('永續漁獲地圖', 'Sustainable Catch Map')
        .replace('我們的理念', 'Our Philosophy')
        .replace('附近的友善海鮮地圖', 'Nearby Friendly Seafood Map')
        .replace('AR互動與永續標籤', 'AR Interaction & Sustainability Labels');
    } else {
      document.title = document.title
        .replace('Sustainable Catch Map', '永續漁獲地圖')
        .replace('Our Philosophy', '我們的理念')
        .replace('Nearby Friendly Seafood Map', '附近的友善海鮮地圖')
        .replace('AR Interaction & Sustainability Labels', 'AR互動與永續標籤');
    }
  }

  function updateLanguageButtons(lang) {
    var nextLabel = lang === 'en' ? '中' : 'EN';
    var aria = lang === 'en' ? 'Switch to Chinese' : '切換成英文';
    document.querySelectorAll('.language-toggle').forEach(function (btn) {
      btn.setAttribute('aria-label', aria);
      btn.setAttribute('title', lang === 'en' ? '中文' : 'English');
      var icon = btn.querySelector('[data-lang-icon]') || btn;
      icon.textContent = nextLabel;
    });
  }

  function removeAboutHomeButton() {
    if (!/\/pages\/about\.html$|\/pages\/about\.html[?#]/.test(location.pathname + location.search)) return;
    document.querySelectorAll('a.primary-btn').forEach(function (a) {
      if (a.getAttribute('href') === '/' || a.textContent.indexOf('回到沉浸式首頁') !== -1 || a.textContent.indexOf('Back to immersive home') !== -1) {
        a.remove();
      }
    });
  }

  function applyLanguage(lang) {
    if (isApplying) return;
    isApplying = true;
    try {
      setDocumentMeta(lang);
      walkTextNodes(document.body, lang);
      updateLanguageButtons(lang);
      removeAboutHomeButton();
    } finally {
      isApplying = false;
    }
  }

  function currentLang() {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'zh';
  }

  function initLanguageToggle() {
    document.addEventListener('click', function (event) {
      var btn = event.target.closest && event.target.closest('.language-toggle');
      if (!btn) return;
      event.preventDefault();
      var next = currentLang() === 'en' ? 'zh' : 'en';
      localStorage.setItem(STORAGE_KEY, next);
      applyLanguage(next);
    });
  }

  function initObserver() {
    var scheduled = false;
    var observer = new MutationObserver(function () {
      if (scheduled || isApplying) return;
      scheduled = true;
      window.requestAnimationFrame(function () {
        scheduled = false;
        applyLanguage(currentLang());
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    initLanguageToggle();
    applyLanguage(currentLang());
    initObserver();
  });
})();
