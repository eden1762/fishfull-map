(function () {
  'use strict';

  var COPY = {
    bream: {
      zhTitle: '魚紋快看：偏紅、細鱗、眼亮',
      enTitle: 'Skin cue: red tone, fine scales, bright eyes',
      zhBody: '看到偏紅魚身與細緻鱗光，再搭配魚鰓鮮紅，買魚信心會更穩。',
      enBody: 'Look for a red body, fine scale shine, and bright gills before you buy.'
    },
    mackerel: {
      zhTitle: '魚紋快看：藍背、銀腹、條紋清楚',
      enTitle: 'Skin cue: blue back, silver belly, crisp stripes',
      zhBody: '花腹鯖靠條紋與彈性加分，魚身銀亮、沒有軟爛感就很可以。',
      enBody: 'Mackerel gets a yes when the stripes are sharp, the belly shines, and the flesh feels springy.'
    },
    mahi: {
      zhTitle: '魚紋快看：亮黃綠、肉厚、切面乾淨',
      enTitle: 'Skin cue: yellow-green glow, thick cut, clean flesh',
      zhBody: '鬼頭刀看色澤與厚度，切面乾爽、不出水，香煎或烤魚都比較穩。',
      enBody: 'For mahi-mahi, clean color and a dry, firm cut make searing or grilling feel safer.'
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

  function pick(item, key) {
    return lang() === 'en' ? item['en' + key] : item['zh' + key];
  }

  function render(stage) {
    if (!stage) return;
    var tone = stage.dataset.fishTone || 'bream';
    var item = COPY[tone] || COPY.bream;
    var guide = stage.querySelector('[data-texture-guide]');
    if (!guide) {
      guide = document.createElement('div');
      guide.className = 'ar-texture-guide';
      guide.setAttribute('data-texture-guide', '');
      guide.setAttribute('aria-live', 'polite');
      var toolbar = stage.querySelector('.ar-toolbar');
      stage.insertBefore(guide, toolbar || stage.firstChild);
    }
    guide.innerHTML = [
      '<strong>' + esc(pick(item, 'Title')) + '</strong>',
      '<div class="ar-texture-swatches" aria-hidden="true">',
      '  <i class="ar-texture-swatch is-red"></i>',
      '  <i class="ar-texture-swatch is-stripe"></i>',
      '  <i class="ar-texture-swatch is-gold"></i>',
      '</div>',
      '<span>' + esc(pick(item, 'Body')) + '</span>'
    ].join('');
  }

  function boot() {
    var stage = document.querySelector('.ar-stage');
    if (!stage) {
      window.setTimeout(boot, 140);
      return;
    }
    render(stage);
    var observer = new MutationObserver(function (mutations) {
      if (mutations.some(function (mutation) { return mutation.attributeName === 'data-fish-tone'; })) render(stage);
    });
    observer.observe(stage, { attributes: true });
    document.addEventListener('click', function (event) {
      if (event.target.closest && event.target.closest('.language-toggle')) {
        window.setTimeout(function () { render(stage); }, 120);
        window.setTimeout(function () { render(stage); }, 320);
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
