(function () {
  'use strict';

  var copy = {
    zh: {
      eyebrow: 'AR 選魚小教練',
      title: '看完 3D 魚，直接知道下一步怎麼買、怎麼煮',
      body: '在魚攤前先選今天的情境，FishFull 會把魚種、燈號、問法和零失敗料理接起來。手機上這一段固定放在魚模型下方，不會蓋住完整魚身。',
      pickLabel: '今天比較像哪一種？',
      options: [
        {
          key: 'safe',
          label: '第一次買，想穩穩煮好',
          fish: '赤鯮',
          light: '綠燈',
          lightText: '魚眼清亮、魚鰓鮮紅、魚身有光澤就可以安心往下一步。',
          ask: '這條今天適合清蒸還是乾煎？兩個人吃大概挑多大？',
          cook: '建議先走清蒸或乾煎，調味簡單，魚肉甜味比較不會被蓋掉。',
          cta: '接零失敗食譜',
          href: '/pages/recipes.html'
        },
        {
          key: 'daily',
          label: '想買日常好吃又不踩雷',
          fish: '花腹鯖',
          light: '黃燈',
          lightText: '油脂香很適合日常餐桌，但要多問保存時間、來源與今天建議做法。',
          ask: '這批是今天進的嗎？回家鹽烤或乾煎哪個更穩？',
          cook: '建議鹽烤、乾煎或氣炸，先把表面水分擦乾，香氣會更漂亮。',
          cta: '看主推魚資訊',
          href: '/pages/fish.html'
        },
        {
          key: 'party',
          label: '想做有存在感的一餐',
          fish: '鬼頭刀',
          light: '綠燈',
          lightText: '肉厚、口感明顯，適合做香煎、烤魚、餐盒或多人分享。',
          ask: '這塊適合切厚煎嗎？今天有沒有更適合多人吃的部位？',
          cook: '建議香煎或烤魚，搭檸檬、胡椒、橄欖油就很有餐廳感。',
          cta: '找友善通路',
          href: '/pages/map.html'
        }
      ]
    },
    en: {
      eyebrow: 'AR buying coach',
      title: 'After the 3D fish view, know what to buy and how to cook it',
      body: 'Pick your market moment and FishFull connects fish choice, color cue, fishmonger question, and an easy cooking next step. On mobile, this stays below the fish model, so it never covers the full body.',
      pickLabel: 'What are you buying for today?',
      options: [
        {
          key: 'safe',
          label: 'First-time buy, keep it foolproof',
          fish: 'Crimson sea bream',
          light: 'Green',
          lightText: 'Clear eyes, red gills, and glossy skin? You are good to ask the next step.',
          ask: 'Is this better steamed or pan-fried today, and what size works for two?',
          cook: 'Start with steaming or pan-frying. Keep seasoning simple so the sweet, delicate meat can shine.',
          cta: 'Open easy recipes',
          href: '/pages/recipes.html'
        },
        {
          key: 'daily',
          label: 'Everyday tasty, low-risk dinner',
          fish: 'Pacific mackerel',
          light: 'Yellow',
          lightText: 'Rich and great for daily meals, but ask about holding time, origin, and the best cooking style today.',
          ask: 'Did this arrive today? Would grilling or pan-frying be the safer move?',
          cook: 'Try grilling, pan-frying, or air-frying. Pat it dry first for better aroma and texture.',
          cta: 'View featured fish',
          href: '/pages/fish.html'
        },
        {
          key: 'party',
          label: 'Make a dinner-table moment',
          fish: 'Mahi-mahi',
          light: 'Green',
          lightText: 'Firm, meaty, and easy to share. Great for searing, roasting, bowls, and group meals.',
          ask: 'Is this good for thick-cut searing, and do you have a better piece for sharing?',
          cook: 'Sear or roast it with lemon, pepper, and olive oil for a clean restaurant-style vibe.',
          cta: 'Find friendly channels',
          href: '/pages/map.html'
        }
      ]
    }
  };

  function lang() {
    return window.SCMLanguage ? window.SCMLanguage.current() : 'zh';
  }

  function esc(value) {
    return window.SCMLanguage ? window.SCMLanguage.escapeHtml(value) : String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function card(option) {
    return [
      '<div class="ar-coach-result" data-result="' + esc(option.key) + '">',
        '<div class="ar-coach-main">',
          '<span>' + esc(option.light) + '</span>',
          '<h3>' + esc(option.fish) + '</h3>',
          '<p>' + esc(option.lightText) + '</p>',
        '</div>',
        '<div class="ar-coach-detail">',
          '<strong>Q</strong>',
          '<p>' + esc(option.ask) + '</p>',
        '</div>',
        '<div class="ar-coach-detail">',
          '<strong>🍳</strong>',
          '<p>' + esc(option.cook) + '</p>',
        '</div>',
        '<a href="' + esc(option.href) + '">' + esc(option.cta) + ' →</a>',
      '</div>'
    ].join('');
  }

  function bind(section) {
    var buttons = Array.prototype.slice.call(section.querySelectorAll('[data-coach-pick]'));
    var results = Array.prototype.slice.call(section.querySelectorAll('[data-result]'));
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var key = button.getAttribute('data-coach-pick');
        buttons.forEach(function (item) { item.setAttribute('aria-pressed', item === button ? 'true' : 'false'); });
        results.forEach(function (item) { item.hidden = item.getAttribute('data-result') !== key; });
      });
    });
  }

  function render() {
    var root = document.getElementById('root');
    if (!root) return;
    var stage = root.querySelector('#fishfull-ar-stage');
    if (!stage || root.querySelector('.ar-fish-coach')) return;

    var text = copy[lang()] || copy.zh;
    var section = document.createElement('section');
    section.className = 'content-section ar-fish-coach';
    section.innerHTML = [
      '<div class="section-heading">',
        '<p class="eyebrow">' + esc(text.eyebrow) + '</p>',
        '<h2>' + esc(text.title) + '</h2>',
        '<p>' + esc(text.body) + '</p>',
      '</div>',
      '<div class="ar-coach-panel">',
        '<div class="ar-coach-picks" aria-label="' + esc(text.pickLabel) + '">',
          '<strong>' + esc(text.pickLabel) + '</strong>',
          text.options.map(function (option, index) {
            return '<button type="button" data-coach-pick="' + esc(option.key) + '" aria-pressed="' + (index === 0 ? 'true' : 'false') + '">' + esc(option.label) + '</button>';
          }).join(''),
        '</div>',
        '<div class="ar-coach-results">',
          text.options.map(function (option, index) {
            var html = card(option);
            return index === 0 ? html : html.replace('<div class="ar-coach-result"', '<div class="ar-coach-result" hidden');
          }).join(''),
        '</div>',
      '</div>'
    ].join('');

    stage.insertAdjacentElement('afterend', section);
    bind(section);
  }

  function scheduleRender() {
    window.setTimeout(render, 0);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleRender);
  else scheduleRender();
  document.addEventListener('scm-language-change', function () {
    var old = document.querySelector('.ar-fish-coach');
    if (old) old.remove();
    scheduleRender();
  });
})();