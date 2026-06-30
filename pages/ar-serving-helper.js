(function () {
  'use strict';

  var copy = {
    zh: {
      safe: {
        title: '份量小提醒',
        body: '兩人份先抓一尾約手掌到小盤大小；想煮湯或清蒸，可以請魚販幫你挑肉厚、魚身完整的一尾。'
      },
      daily: {
        title: '份量小提醒',
        body: '日常晚餐可請魚販抓一餐剛好的量，回家先擦乾再煎烤，香氣比較穩，也比較不浪費。'
      },
      pause: {
        title: '份量小提醒',
        body: '資訊不清楚時先不要加大份量。先買來源、保存、氣味都清楚的魚，餐桌比較安心。'
      },
      party: {
        title: '份量小提醒',
        body: '多人分享可以請魚販挑厚度平均的部位，切片或厚煎都好分食，桌面也更有存在感。'
      }
    },
    en: {
      safe: {
        title: 'Serving size cue',
        body: 'For two people, start with a palm-to-small-plate sized whole fish. Ask for a firm, intact fish if you plan to steam it or make soup.'
      },
      daily: {
        title: 'Serving size cue',
        body: 'For a weeknight meal, ask for just-enough portions. Pat the fish dry before grilling or pan-frying for better aroma and less waste.'
      },
      pause: {
        title: 'Serving size cue',
        body: 'When the info is unclear, do not size up. Pick fish with clear origin, clean handling, and a fresh smell first.'
      },
      party: {
        title: 'Serving size cue',
        body: 'For sharing, ask for evenly thick cuts. They sear better, slice cleaner, and bring more table presence.'
      }
    }
  };

  var confidence = {
    zh: '買魚小判斷：來源、冰存與料理方式都問清楚，再決定份量，今晚比較穩。',
    en: 'Buying cue: confirm origin, chilling, and cooking method before sizing up for tonight.'
  };

  function lang() {
    return window.SCMLanguage && window.SCMLanguage.current ? window.SCMLanguage.current() : 'zh';
  }

  function esc(value) {
    return window.SCMLanguage && window.SCMLanguage.escapeHtml ? window.SCMLanguage.escapeHtml(value) : String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function ensureStyle() {
    if (document.getElementById('ar-serving-helper-style')) return;
    var style = document.createElement('style');
    style.id = 'ar-serving-helper-style';
    style.textContent = [
      '.ar-serving-helper{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;margin:12px 0;padding:14px;border-radius:18px;background:rgba(255,255,255,.82);border:1px solid rgba(20,88,100,.14);box-shadow:0 10px 24px rgba(20,88,100,.08)}',
      '.ar-serving-helper strong{display:grid;place-items:center;min-width:42px;height:42px;border-radius:14px;background:rgba(255,159,28,.16);color:#7a4b00;font-size:.92rem;line-height:1.2;text-align:center}',
      '.ar-serving-helper p{margin:0;color:#2d4b53;line-height:1.65;font-size:.98rem}',
      '.ar-serving-helper .ar-serving-confidence{margin-top:8px;padding:8px 10px;border-radius:14px;background:rgba(57,170,118,.13);border:1px solid rgba(57,170,118,.24);color:#12623d;font-weight:800}',
      '@media (max-width:560px){.ar-serving-helper{grid-template-columns:1fr;margin:10px 0;padding:13px;max-width:100%;box-sizing:border-box}.ar-serving-helper strong{width:100%;min-height:40px;height:auto}.ar-serving-helper p{font-size:.95rem}.ar-serving-helper .ar-serving-confidence{text-align:center}}'
    ].join('');
    document.head.appendChild(style);
  }

  function enhance() {
    ensureStyle();
    var currentLang = lang();
    var text = copy[currentLang] || copy.zh;
    var cue = confidence[currentLang] || confidence.zh;
    Array.prototype.slice.call(document.querySelectorAll('.ar-coach-result')).forEach(function (card) {
      var key = card.getAttribute('data-result');
      var data = text[key];
      if (!data) return;
      var existing = card.querySelector('.ar-serving-helper');
      if (!existing) {
        existing = document.createElement('div');
        existing.className = 'ar-serving-helper';
        var askCard = card.querySelector('.ar-coach-ask-card');
        if (askCard) askCard.insertAdjacentElement('afterend', existing);
        else card.appendChild(existing);
      }
      existing.innerHTML = '<strong>' + esc(data.title) + '</strong><div><p>' + esc(data.body) + '</p><p class="ar-serving-confidence">' + esc(cue) + '</p></div>';
    });
  }

  function schedule() {
    window.setTimeout(enhance, 80);
    window.setTimeout(enhance, 360);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', schedule);
  else schedule();
  document.addEventListener('scm-language-change', schedule);
})();