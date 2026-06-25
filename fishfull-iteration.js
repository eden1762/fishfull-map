(function () {
  'use strict';

  var storageKey = 'fishfull-purchase-feedback-v1';

  var copy = {
    zh: {
      eyebrow: '低碳好魚循環',
      title: '掃碼不是終點，重點是讓好魚真的被買走',
      body: 'FishFull 把一件事做到最短：掃 QR Code 看紅黃綠燈、選一種零失敗料理、在店家完成購買，再用 10 秒回饋讓魚販與漁業夥伴知道哪種友善漁獲更有市場。這不是只衝流量，而是把「看懂」變成「願意買」。',
      loop: [
        ['消費者', '少踩雷：看懂魚種狀態、漁法、產地與料理方式，敢把友善海鮮帶回家。'],
        ['魚販 / 餐飲店', '好介紹：用 QR 牌卡說清楚好魚故事，記錄詢問、試買與回購狀況。'],
        ['漁業從業者', '有誘因：看見低碳漁法魚種的需求變化，讓好做法有機會被市場支持。'],
        ['推廣者 / 年輕人', '玩中學：用地圖、AR 任務、拍照分享，把永續選魚變成可以揪朋友一起做的行動。']
      ],
      measuresTitle: '這一輪開始量「行為改變」',
      measures: ['QR 掃描數', '食譜點擊', '友善魚種詢問量', '實際購買 / 回購', '店家觀察紀錄', '消費者 10 秒回饋'],
      evidenceTitle: '現場證據放哪裡？',
      evidence: ['MOU / 合作意向', '魚販與漁業訪談紀錄', '市場或餐廳現場照片', '社區與校園試用回饋', '6–11 月每月進度截圖'],
      cta: '下一步：到合作點位放 QR Code 牌卡，先跑一條魚、一家店、一份食譜的最小實測。',
      pulseTitle: '10 秒買魚回饋',
      pulseBody: '先不用做很重的問卷。現場只問三件事，就能判斷使用者是不是從「看看而已」往「真的購買」前進。',
      pulseQuestions: [
        ['01', '今天有買這條魚嗎？', '已購買 / 考慮中 / 沒買，想先學料理'],
        ['02', '是什麼讓你敢買？', '紅黃綠燈、店家推薦、零失敗食譜、價格或產地'],
        ['03', '下次還會回來買嗎？', '會 / 可能會 / 需要更清楚的料理或價格資訊']
      ],
      pulseNote: '店家只要每天記錄 3–5 筆，就能比較 QR 牌卡前後的詢問量、試買量與回購感覺，讓永續不只好聽，而是有生意感。',
      pulseButton: '我買了，留下 10 秒回饋',
      formTitle: '現場回饋小卡',
      formBody: '給魚販、餐飲店、社區或校園試用：每筆回饋存在這台裝置，先能現場統計，之後再接雲端資料庫。',
      placeLabel: '點位 / 店家',
      placePlaceholder: '例如：黃石市場 A 攤',
      fishLabel: '魚種或料理',
      fishPlaceholder: '例如：白帶魚、清蒸午仔魚',
      boughtLabel: '今天有買嗎？',
      boughtOptions: ['已購買', '考慮中', '沒買，想先學料理'],
      reasonLabel: '讓你更敢買的原因',
      reasonOptions: ['紅黃綠燈', '店家推薦', '零失敗食譜', '價格清楚', '產地 / 漁法故事'],
      revisitLabel: '下次會回來買嗎？',
      revisitOptions: ['會', '可能會', '需要更清楚的料理或價格'],
      saveButton: '存一筆回饋',
      saved: '已存入這台裝置，下一筆可以繼續記。',
      summaryTitle: '目前本機累積',
      summaryEmpty: '尚未記錄，先從 1 筆開始。',
      exportLabel: '複製摘要給團隊',
      exportCopied: '摘要已複製，可以貼到工作紀錄。',
      exportFallback: '瀏覽器無法自動複製，請直接選取摘要。'
    },
    en: {
      eyebrow: 'Low-carbon seafood loop',
      title: 'A scan is not the goal. Real purchase change is.',
      body: 'FishFull keeps the path short: scan a QR Code, read traffic-light seafood guidance, pick a zero-failure recipe, buy at the store, then leave 10-second feedback so vendors and fisheries partners know which friendly catches have real demand.',
      loop: [
        ['Shoppers', 'Choose with less anxiety: species status, method, origin, and cooking ideas are clear at the buying moment.'],
        ['Vendors / restaurants', 'Explain better with QR cards, then track questions, trial purchases, and repeat demand.'],
        ['Fisheries workers', 'See whether low-carbon methods create demand, so better practices get market support.'],
        ['Promoters / young users', 'Learn by doing through maps, AR missions, photos, and shareable buying actions.']
      ],
      measuresTitle: 'Measure behavior, not only traffic',
      measures: ['QR scans', 'Recipe clicks', 'Friendly-species questions', 'Purchases / repeat buys', 'Store notes', '10-second shopper feedback'],
      evidenceTitle: 'Field proof slots',
      evidence: ['MOU / partner intent', 'Vendor and fisheries interviews', 'Market or restaurant photos', 'Community and campus pilot feedback', 'June–November monthly progress screenshots'],
      cta: 'Next move: place QR cards at partner points and test one fish, one store, and one recipe first.',
      pulseTitle: '10-second purchase feedback',
      pulseBody: 'Skip heavy surveys at the start. Ask only three questions on site to see whether users move from “just looking” to real purchase action.',
      pulseQuestions: [
        ['01', 'Did you buy this fish today?', 'Bought / Thinking / Not yet, I need cooking help'],
        ['02', 'What made you more ready to buy?', 'Traffic light, vendor tip, zero-failure recipe, price, or origin'],
        ['03', 'Would you come back for it?', 'Yes / Maybe / Need clearer recipe or price info']
      ],
      pulseNote: 'If a store records only 3–5 notes a day, FishFull can compare questions, trial purchases, and repeat-buy signals before and after QR cards. Sustainability becomes useful for business, not just nice words.',
      pulseButton: 'I bought it — leave 10-second feedback',
      formTitle: 'On-site feedback card',
      formBody: 'For vendors, restaurants, communities, or campus trials: each note is saved on this device first, then can later connect to a cloud database.',
      placeLabel: 'Place / store',
      placePlaceholder: 'Example: Huangshi Market stall A',
      fishLabel: 'Fish or dish',
      fishPlaceholder: 'Example: cutlassfish, steamed threadfin',
      boughtLabel: 'Did they buy today?',
      boughtOptions: ['Bought', 'Thinking', 'Not yet, needs cooking help'],
      reasonLabel: 'What made buying easier?',
      reasonOptions: ['Traffic light', 'Vendor tip', 'Zero-failure recipe', 'Clear price', 'Origin / fishing story'],
      revisitLabel: 'Would they come back?',
      revisitOptions: ['Yes', 'Maybe', 'Need clearer recipe or price'],
      saveButton: 'Save feedback',
      saved: 'Saved on this device. Ready for the next note.',
      summaryTitle: 'Saved on this device',
      summaryEmpty: 'No notes yet. Start with one.',
      exportLabel: 'Copy summary for team',
      exportCopied: 'Summary copied. Paste it into your work log.',
      exportFallback: 'Auto-copy is not available. Please select the summary text.'
    }
  };

  function currentLang() {
    return window.SCMLanguage ? window.SCMLanguage.current() : (localStorage.getItem('scm-language') === 'en' ? 'en' : 'zh');
  }

  function escapeHtml(value) {
    return window.SCMLanguage ? window.SCMLanguage.escapeHtml(value) : String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function readFeedback() {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || '[]');
    } catch (error) {
      return [];
    }
  }

  function writeFeedback(items) {
    localStorage.setItem(storageKey, JSON.stringify(items.slice(-300)));
  }

  function summarize(items, text) {
    if (!items.length) return text.summaryEmpty;
    var bought = items.filter(function (item) { return item.bought === text.boughtOptions[0]; }).length;
    var maybe = items.filter(function (item) { return item.revisit === text.revisitOptions[1]; }).length;
    var yes = items.filter(function (item) { return item.revisit === text.revisitOptions[0]; }).length;
    var latest = items[items.length - 1];
    return [
      'Total: ' + items.length,
      'Bought: ' + bought,
      'Come back yes/maybe: ' + yes + '/' + maybe,
      'Latest: ' + (latest.place || '-') + ' / ' + (latest.fish || '-') + ' / ' + latest.bought + ' / ' + latest.reason
    ].join('\n');
  }

  function optionTags(name, options) {
    return options.map(function (label, index) {
      var id = 'fishfull-' + name + '-' + index;
      return '<label class="fishfull-feedback__choice" for="' + id + '"><input id="' + id + '" type="radio" name="' + name + '" value="' + escapeHtml(label) + '"' + (index === 0 ? ' checked' : '') + '> <span>' + escapeHtml(label) + '</span></label>';
    }).join('');
  }

  function injectStyle() {
    if (document.getElementById('fishfull-iteration-style')) return;
    var style = document.createElement('style');
    style.id = 'fishfull-iteration-style';
    style.textContent = [
      '.fishfull-loop{margin:clamp(28px,5vw,64px) auto 0;max-width:1120px;padding:clamp(22px,4vw,42px);border-radius:32px;background:linear-gradient(135deg,rgba(255,255,255,.92),rgba(224,247,255,.86));box-shadow:0 24px 70px rgba(38,95,120,.16);border:1px solid rgba(66,148,178,.18)}',
      '.fishfull-loop__eyebrow{margin:0 0 10px;font-size:.82rem;letter-spacing:.16em;text-transform:uppercase;font-weight:800;color:#0f7898}',
      '.fishfull-loop h2{margin:0;font-size:clamp(1.8rem,4vw,3.1rem);line-height:1.08;color:#12354a}',
      '.fishfull-loop__body{max-width:820px;margin:16px 0 0;color:#3b5967;font-size:1.03rem;line-height:1.85}',
      '.fishfull-loop__grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:24px}',
      '.fishfull-loop__card{padding:18px;border-radius:24px;background:rgba(255,255,255,.78);border:1px solid rgba(31,115,143,.12)}',
      '.fishfull-loop__card strong{display:block;margin-bottom:8px;color:#0d4861;font-size:1.05rem}',
      '.fishfull-loop__card p{margin:0;color:#46616d;line-height:1.65}',
      '.fishfull-loop__proof{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:22px}',
      '.fishfull-loop__proof-box{padding:18px;border-radius:24px;background:rgba(255,255,255,.6);border:1px dashed rgba(15,120,152,.25)}',
      '.fishfull-loop__proof-box h3{margin:0 0 12px;color:#12354a;font-size:1.05rem}',
      '.fishfull-loop__chips{display:flex;flex-wrap:wrap;gap:10px}',
      '.fishfull-loop__chips span{padding:8px 12px;border-radius:999px;background:#fff;color:#24576a;font-weight:700;font-size:.9rem;box-shadow:0 8px 20px rgba(31,92,120,.08)}',
      '.fishfull-loop__cta{margin:22px 0 0;padding:14px 16px;border-radius:18px;background:#12354a;color:#fff;font-weight:800;line-height:1.55}',
      '.fishfull-pulse{margin-top:22px;padding:20px;border-radius:26px;background:rgba(255,250,235,.9);border:1px solid rgba(222,151,54,.22)}',
      '.fishfull-pulse h3{margin:0;color:#6a3d09;font-size:1.3rem}',
      '.fishfull-pulse p{margin:10px 0 0;color:#684f2d;line-height:1.7}',
      '.fishfull-pulse__questions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:16px}',
      '.fishfull-pulse__question{padding:14px;border-radius:20px;background:#fff;box-shadow:0 10px 24px rgba(129,84,27,.08)}',
      '.fishfull-pulse__question span{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:999px;background:#ffefc8;color:#714507;font-weight:900}',
      '.fishfull-pulse__question strong{display:block;margin-top:10px;color:#3b2b16}',
      '.fishfull-pulse__question small{display:block;margin-top:6px;color:#765f3d;line-height:1.5}',
      '.fishfull-pulse__button{display:inline-flex;margin-top:16px;padding:11px 16px;border-radius:999px;background:#f29b2e;color:#fff;text-decoration:none;font-weight:900;box-shadow:0 10px 24px rgba(242,155,46,.24);border:0;cursor:pointer}',
      '.fishfull-feedback{margin-top:18px;padding:18px;border-radius:24px;background:#fff;border:1px solid rgba(15,120,152,.16)}',
      '.fishfull-feedback h4{margin:0;color:#12354a;font-size:1.1rem}',
      '.fishfull-feedback p{margin:8px 0 0;color:#51656f;line-height:1.6}',
      '.fishfull-feedback__grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px}',
      '.fishfull-feedback label{font-weight:800;color:#284c5a}',
      '.fishfull-feedback input[type="text"]{width:100%;box-sizing:border-box;margin-top:6px;padding:11px 12px;border-radius:14px;border:1px solid rgba(31,92,120,.18);font:inherit}',
      '.fishfull-feedback__group{margin-top:14px}',
      '.fishfull-feedback__choices{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}',
      '.fishfull-feedback__choice{display:inline-flex;align-items:center;gap:6px;padding:8px 10px;border-radius:999px;background:#f3fbff;border:1px solid rgba(31,92,120,.12);font-size:.9rem}',
      '.fishfull-feedback__actions{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:14px}',
      '.fishfull-feedback__save{padding:11px 16px;border-radius:999px;border:0;background:#0f7898;color:#fff;font-weight:900;cursor:pointer}',
      '.fishfull-feedback__export{padding:10px 14px;border-radius:999px;border:1px solid rgba(15,120,152,.24);background:#fff;color:#0f7898;font-weight:900;cursor:pointer}',
      '.fishfull-feedback__status{font-weight:800;color:#217a46}',
      '.fishfull-feedback__summary{margin-top:12px;padding:12px;border-radius:16px;background:#f6fbfd;white-space:pre-wrap;color:#315160;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:.9rem}',
      '@media (max-width:860px){.fishfull-loop__grid,.fishfull-loop__proof,.fishfull-pulse__questions,.fishfull-feedback__grid{grid-template-columns:1fr}.fishfull-loop{border-radius:24px}}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function feedbackForm(text) {
    return [
      '<form class="fishfull-feedback" id="fishfull-feedback-form">',
        '<h4>' + escapeHtml(text.formTitle) + '</h4>',
        '<p>' + escapeHtml(text.formBody) + '</p>',
        '<div class="fishfull-feedback__grid">',
          '<label>' + escapeHtml(text.placeLabel) + '<input type="text" name="place" placeholder="' + escapeHtml(text.placePlaceholder) + '"></label>',
          '<label>' + escapeHtml(text.fishLabel) + '<input type="text" name="fish" placeholder="' + escapeHtml(text.fishPlaceholder) + '"></label>',
        '</div>',
        '<div class="fishfull-feedback__group"><label>' + escapeHtml(text.boughtLabel) + '</label><div class="fishfull-feedback__choices">' + optionTags('bought', text.boughtOptions) + '</div></div>',
        '<div class="fishfull-feedback__group"><label>' + escapeHtml(text.reasonLabel) + '</label><div class="fishfull-feedback__choices">' + optionTags('reason', text.reasonOptions) + '</div></div>',
        '<div class="fishfull-feedback__group"><label>' + escapeHtml(text.revisitLabel) + '</label><div class="fishfull-feedback__choices">' + optionTags('revisit', text.revisitOptions) + '</div></div>',
        '<div class="fishfull-feedback__actions"><button class="fishfull-feedback__save" type="submit">' + escapeHtml(text.saveButton) + '</button><button class="fishfull-feedback__export" type="button" data-fishfull-export>' + escapeHtml(text.exportLabel) + '</button><span class="fishfull-feedback__status" aria-live="polite"></span></div>',
        '<div class="fishfull-feedback__summary" data-fishfull-summary aria-label="' + escapeHtml(text.summaryTitle) + '"></div>',
      '</form>'
    ].join('');
  }

  function bindFeedback(text) {
    var form = document.getElementById('fishfull-feedback-form');
    if (!form || form.dataset.bound === 'true') return;
    form.dataset.bound = 'true';
    var summary = form.querySelector('[data-fishfull-summary]');
    var status = form.querySelector('.fishfull-feedback__status');

    function refresh(message) {
      summary.textContent = summarize(readFeedback(), text);
      status.textContent = message || '';
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var items = readFeedback();
      var data = new FormData(form);
      items.push({
        time: new Date().toISOString(),
        place: String(data.get('place') || '').trim(),
        fish: String(data.get('fish') || '').trim(),
        bought: String(data.get('bought') || ''),
        reason: String(data.get('reason') || ''),
        revisit: String(data.get('revisit') || '')
      });
      writeFeedback(items);
      form.reset();
      form.querySelector('input[name="bought"]').checked = true;
      form.querySelector('input[name="reason"]').checked = true;
      form.querySelector('input[name="revisit"]').checked = true;
      refresh(text.saved);
    });

    form.querySelector('[data-fishfull-export]').addEventListener('click', function () {
      var output = summarize(readFeedback(), text);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(output).then(function () { refresh(text.exportCopied); }, function () { refresh(text.exportFallback); });
      } else {
        refresh(text.exportFallback);
      }
    });

    refresh();
  }

  function renderLoop() {
    injectStyle();
    var root = document.querySelector('.page-home .home-hero') || document.querySelector('.page-shell main') || document.querySelector('main') || document.getElementById('root');
    if (!root) return;

    var text = copy[currentLang()];
    var existing = document.getElementById('fishfull-behavior-loop');
    var cards = text.loop.map(function (item) {
      return '<article class="fishfull-loop__card"><strong>' + escapeHtml(item[0]) + '</strong><p>' + escapeHtml(item[1]) + '</p></article>';
    }).join('');
    var measures = text.measures.map(function (item) { return '<span>' + escapeHtml(item) + '</span>'; }).join('');
    var evidence = text.evidence.map(function (item) { return '<span>' + escapeHtml(item) + '</span>'; }).join('');
    var pulseQuestions = text.pulseQuestions.map(function (item) {
      return '<article class="fishfull-pulse__question"><span>' + escapeHtml(item[0]) + '</span><strong>' + escapeHtml(item[1]) + '</strong><small>' + escapeHtml(item[2]) + '</small></article>';
    }).join('');

    var html = [
      '<section class="fishfull-loop" id="fishfull-behavior-loop" aria-labelledby="fishfull-loop-title">',
        '<p class="fishfull-loop__eyebrow">' + escapeHtml(text.eyebrow) + '</p>',
        '<h2 id="fishfull-loop-title">' + escapeHtml(text.title) + '</h2>',
        '<p class="fishfull-loop__body">' + escapeHtml(text.body) + '</p>',
        '<div class="fishfull-loop__grid">' + cards + '</div>',
        '<div class="fishfull-loop__proof">',
          '<div class="fishfull-loop__proof-box"><h3>' + escapeHtml(text.measuresTitle) + '</h3><div class="fishfull-loop__chips">' + measures + '</div></div>',
          '<div class="fishfull-loop__proof-box"><h3>' + escapeHtml(text.evidenceTitle) + '</h3><div class="fishfull-loop__chips">' + evidence + '</div></div>',
        '</div>',
        '<section class="fishfull-pulse" aria-labelledby="fishfull-pulse-title">',
          '<h3 id="fishfull-pulse-title">' + escapeHtml(text.pulseTitle) + '</h3>',
          '<p>' + escapeHtml(text.pulseBody) + '</p>',
          '<div class="fishfull-pulse__questions">' + pulseQuestions + '</div>',
          '<p>' + escapeHtml(text.pulseNote) + '</p>',
          '<a class="fishfull-pulse__button" href="#fishfull-feedback-form">' + escapeHtml(text.pulseButton) + '</a>',
          feedbackForm(text),
        '</section>',
        '<p class="fishfull-loop__cta">' + escapeHtml(text.cta) + '</p>',
      '</section>'
    ].join('');

    if (existing) {
      existing.outerHTML = html;
    } else {
      root.insertAdjacentHTML('beforeend', html);
    }
    bindFeedback(text);
  }

  function scheduleRender() {
    window.requestAnimationFrame(function () {
      window.setTimeout(renderLoop, 0);
    });
  }

  document.addEventListener('DOMContentLoaded', scheduleRender);
  document.addEventListener('scm-language-change', scheduleRender);
  scheduleRender();
})();