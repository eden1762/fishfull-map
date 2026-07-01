(function () {
  'use strict';

  var copy = {
    zh: {
      title: '魚攤前 30 秒：先看魚、再問人、最後決定',
      body: '這張小卡放在 AR 小教練旁邊，讓你看完整 3D 魚後，馬上把現場判斷壓成三個動作。人多、攤位忙也不慌，穩穩買就對了。',
      steps: [
        ['看魚身', '眼睛、鰓色、魚身彈性先對起來'],
        ['問來源', '來源、進貨時間、冰存方式問清楚'],
        ['接料理', '份量與做法確認，再開零失敗食譜']
      ]
    },
    en: {
      title: '30 seconds at the fish counter: look, ask, decide',
      body: 'This quick card sits beside the AR coach. After viewing the full 3D fish, it turns the market moment into three easy moves, so buying feels calm even when the counter is busy.',
      steps: [
        ['Look', 'Check eyes, gills, body firmness'],
        ['Ask', 'Confirm origin, arrival time, and ice handling'],
        ['Cook', 'Match portion and method, then open an easy recipe']
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

  function template(text) {
    return [
      '<article class="ar-market-30sec" aria-label="' + esc(text.title) + '">',
        '<div>',
          '<h3>' + esc(text.title) + '</h3>',
          '<p>' + esc(text.body) + '</p>',
        '</div>',
        '<div class="ar-market-30sec-grid">',
          text.steps.map(function (step) {
            return '<div class="ar-market-30sec-step"><strong>' + esc(step[0]) + '</strong><span>' + esc(step[1]) + '</span></div>';
          }).join(''),
        '</div>',
      '</article>'
    ].join('');
  }

  function render() {
    var coach = document.querySelector('.page-ar-game .ar-fish-coach .ar-coach-panel');
    if (!coach || document.querySelector('.page-ar-game .ar-market-30sec')) return;
    var text = copy[lang()] || copy.zh;
    coach.insertAdjacentHTML('beforebegin', template(text));
  }

  function rerender() {
    var old = document.querySelector('.page-ar-game .ar-market-30sec');
    if (old) old.remove();
    window.setTimeout(render, 80);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { window.setTimeout(render, 180); });
  else window.setTimeout(render, 180);
  document.addEventListener('scm-language-change', rerender);
})();
