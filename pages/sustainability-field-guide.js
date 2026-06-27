(function () {
  'use strict';

  var COPY = {
    crimsonBream: {
      zhTitle: '魚攤 10 秒小抄',
      enTitle: '10-sec fish counter guide',
      zhSteps: [
        ['看眼', '清亮、不霧，才有新鮮感。'],
        ['問源', '問今天哪裡來、怎麼捕。'],
        ['煮法', '清蒸或乾煎，別把甜味蓋掉。']
      ],
      enSteps: [
        ['Eyes', 'Clear, not cloudy. Freshness first.'],
        ['Origin', 'Ask where it came from and how it was caught.'],
        ['Cook', 'Steam or pan-fry; keep the sweet taste clean.']
      ]
    },
    mackerel: {
      zhTitle: '魚攤 10 秒小抄',
      enTitle: '10-sec fish counter guide',
      zhSteps: [
        ['看紋', '藍背銀腹、條紋清楚。'],
        ['摸感', '按下會回彈，不軟爛。'],
        ['煮法', '擦乾再煎，皮酥就很讚。']
      ],
      enSteps: [
        ['Stripes', 'Blue back, silver belly, clear marks.'],
        ['Touch', 'Springy flesh, not mushy.'],
        ['Cook', 'Pat dry, sear hot, crisp the skin.']
      ]
    },
    mahiMahi: {
      zhTitle: '魚攤 10 秒小抄',
      enTitle: '10-sec fish counter guide',
      zhSteps: [
        ['看色', '切面乾淨，不暗沉。'],
        ['聞味', '沒有刺鼻味才安心。'],
        ['煮法', '中火香煎，檸檬收尾很清爽。']
      ],
      enSteps: [
        ['Color', 'Clean cut, not dull.'],
        ['Smell', 'No harsh smell. That is the vibe.'],
        ['Cook', 'Medium sear; lemon finish keeps it bright.']
      ]
    }
  };

  var KEYS = ['crimsonBream', 'mackerel', 'mahiMahi'];

  function lang() {
    return localStorage.getItem('scm-language') === 'en' || document.documentElement.lang === 'en' ? 'en' : 'zh';
  }

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function activeKey(stage) {
    var selected = stage.querySelector('[data-fish].is-selected');
    return selected && COPY[selected.dataset.fish] ? selected.dataset.fish : 'crimsonBream';
  }

  function render(stage) {
    var guide = stage.querySelector('[data-field-guide]');
    if (!guide) return;
    var item = COPY[activeKey(stage)] || COPY.crimsonBream;
    var isEn = lang() === 'en';
    var steps = isEn ? item.enSteps : item.zhSteps;
    guide.innerHTML = [
      '<strong>' + esc(isEn ? item.enTitle : item.zhTitle) + '</strong>',
      '<ul>',
      steps.map(function (step) {
        return '<li><b>' + esc(step[0]) + '</b><span>' + esc(step[1]) + '</span></li>';
      }).join(''),
      '</ul>'
    ].join('');
  }

  function install() {
    var stage = document.querySelector('.ar-stage');
    if (!stage) {
      window.setTimeout(install, 160);
      return;
    }
    if (stage.dataset.fieldGuideReady === '1') return;
    stage.dataset.fieldGuideReady = '1';

    var guide = document.createElement('div');
    guide.className = 'ar-field-guide';
    guide.setAttribute('data-field-guide', '');
    guide.setAttribute('aria-live', 'polite');
    stage.appendChild(guide);
    render(stage);

    stage.addEventListener('click', function (event) {
      if (event.target.closest && event.target.closest('[data-fish], .sustainability-copy .label-card')) {
        window.setTimeout(function () { render(stage); }, 80);
      }
    });

    document.addEventListener('click', function (event) {
      if (event.target.closest && event.target.closest('.language-toggle')) {
        window.setTimeout(function () { render(stage); }, 120);
        window.setTimeout(function () { render(stage); }, 320);
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
})();
