(function () {
  'use strict';

  var COPY = {
    bream: {
      zhScore: '信心 72：先問來源與今天漁法，再決定要不要帶回家。',
      enScore: 'Confidence 72: ask origin and catch method before you take it home.',
      zhTip: '適合慢慢挑，問清楚就很穩。',
      enTip: 'Worth a closer look; ask once and you are good.',
      width: '72%'
    },
    mackerel: {
      zhScore: '信心 92：日常餐桌高勝率，魚販也好推薦。',
      enScore: 'Confidence 92: a high-win everyday pick that is easy to recommend.',
      zhTip: '看銀亮、聞味道、摸彈性，三步到位。',
      enTip: 'Check shine, smell, and springy touch. Three moves, done.',
      width: '92%'
    },
    mahi: {
      zhScore: '信心 88：肉厚好料理，香煎、餐盒、聚餐都能上。',
      enScore: 'Confidence 88: firm, flexible, and ready for searing, bowls, or dinner plans.',
      zhTip: '看切面是否乾淨，厚度夠就很好發揮。',
      enTip: 'Look for clean cuts and enough thickness for a solid cook.',
      width: '88%'
    }
  };

  function lang() {
    return localStorage.getItem('scm-language') === 'en' || document.documentElement.lang === 'en' ? 'en' : 'zh';
  }

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function render(stage) {
    var tone = stage.dataset.fishTone || 'bream';
    var item = COPY[tone] || COPY.bream;
    var isEn = lang() === 'en';
    var meter = stage.querySelector('[data-market-meter]');
    if (!meter) {
      meter = document.createElement('div');
      meter.className = 'ar-market-meter';
      meter.setAttribute('aria-live', 'polite');
      meter.dataset.marketMeter = '1';
      var freshStrip = stage.querySelector('[data-fresh-strip]');
      if (freshStrip && freshStrip.parentNode) freshStrip.parentNode.insertBefore(meter, freshStrip.nextSibling);
      else stage.appendChild(meter);
    }
    meter.style.setProperty('--meter-width', item.width);
    meter.innerHTML = [
      '<strong>' + esc(isEn ? 'Market confidence' : '市場信心條') + '</strong>',
      '<div class="market-meter-track" aria-hidden="true"><i class="market-meter-fill"></i></div>',
      '<span>' + esc(isEn ? item.enScore : item.zhScore) + '</span>',
      '<span>' + esc(isEn ? item.enTip : item.zhTip) + '</span>'
    ].join('');
  }

  function watch() {
    var stage = document.querySelector('.ar-stage');
    if (!stage) {
      window.setTimeout(watch, 140);
      return;
    }
    render(stage);
    new MutationObserver(function (mutations) {
      if (mutations.some(function (mutation) { return mutation.attributeName === 'data-fish-tone'; })) render(stage);
    }).observe(stage, { attributes: true });
    document.addEventListener('click', function (event) {
      if (event.target.closest && event.target.closest('.language-toggle')) {
        window.setTimeout(function () { render(stage); }, 90);
        window.setTimeout(function () { render(stage); }, 300);
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch);
  else watch();
})();
