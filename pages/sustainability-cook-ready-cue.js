(function () {
  'use strict';

  var COPY = {
    bream: {
      zhTitle: '下鍋前快看',
      enTitle: 'Cook-ready cue',
      zhSteps: ['眼亮鰓紅再買', '清蒸 8～10 分鐘', '薑絲、蔥、少醬油就很鮮'],
      enSteps: ['Bright eyes and red gills', 'Steam 8–10 minutes', 'Ginger, scallion, light soy keeps it sweet'],
      zhAsk: '跟魚販說：想清蒸，請幫我挑肉細、今天狀態穩的。',
      enAsk: 'Tell the fishmonger: I want to steam it; pick one with delicate flesh and a solid fresh look.'
    },
    mackerel: {
      zhTitle: '下鍋前快看',
      enTitle: 'Cook-ready cue',
      zhSteps: ['魚腹銀亮不軟爛', '擦乾後乾煎到皮酥', '鹽、檸檬、白胡椒就很頂'],
      enSteps: ['Silver belly, not mushy', 'Pat dry, sear until crisp', 'Salt, lemon, white pepper—chef’s kiss'],
      zhAsk: '跟魚販說：我要乾煎，今天哪尾油脂比較香？',
      enAsk: 'Ask: I’m pan-searing— which one is fattier and better today?'
    },
    mahi: {
      zhTitle: '下鍋前快看',
      enTitle: 'Cook-ready cue',
      zhSteps: ['切面乾淨不出水', '中火香煎避免過乾', '檸檬、黑胡椒收尾很清爽'],
      enSteps: ['Clean cut, not watery', 'Medium heat keeps it juicy', 'Finish with lemon and black pepper'],
      zhAsk: '跟魚販說：想切片香煎，請幫我挑肉厚、切面乾淨的。',
      enAsk: 'Ask: I want fillets for searing—please pick a thick, clean-cut piece.'
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
    var cue = stage.querySelector('[data-cook-ready-cue]');
    if (!cue) {
      cue = document.createElement('section');
      cue.className = 'ar-cook-ready-cue';
      cue.setAttribute('data-cook-ready-cue', '');
      cue.setAttribute('aria-live', 'polite');
      var panel = stage.querySelector('[data-species-panel]');
      stage.insertBefore(cue, panel || stage.firstChild);
    }

    cue.innerHTML = [
      '<div class="ar-cook-ready-head">',
      '  <strong>' + esc(pick(item, 'Title')) + '</strong>',
      '  <a href="recipes.html">' + esc(lang() === 'en' ? 'Recipe' : '看食譜') + '</a>',
      '</div>',
      '<ol>',
      pick(item, 'Steps').map(function (step) { return '<li>' + esc(step) + '</li>'; }).join(''),
      '</ol>',
      '<p>' + esc(pick(item, 'Ask')) + '</p>'
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