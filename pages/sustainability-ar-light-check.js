(function () {
  'use strict';

  var COPY = {
    bream: {
      zhTitle: '光線快檢',
      enTitle: 'Light check',
      zhBadge: '魚身反光',
      enBadge: 'Skin shine',
      zhLead: '讓光從側上方進來，避開背光，赤鯮紅亮魚身才看得準。',
      enLead: 'Let light hit from the upper side and avoid backlight so the red sheen reads true.',
      zhChips: ['側光', '紅亮不灰', '眼鰓不過曝'],
      enChips: ['Side light', 'Red not dull', 'Eye and gill clear'],
      zhFoot: '如果魚身整片白亮到看不出顏色，稍微斜拍一點。',
      enFoot: 'If the body turns too white to read, shoot from a slight angle.'
    },
    mackerel: {
      zhTitle: '光線快檢',
      enTitle: 'Light check',
      zhBadge: '條紋清楚',
      enBadge: 'Stripe detail',
      zhLead: '花腹鯖要看藍背銀腹，光線太暗會讓條紋糊掉。',
      enLead: 'Mackerel needs readable blue back and silver belly; dim light can blur the stripes.',
      zhChips: ['補一點光', '銀腹有亮', '條紋分明'],
      enChips: ['Add light', 'Silver belly', 'Sharp stripes'],
      zhFoot: '把手機移到魚身斜前方，條紋和油亮感會更好辨識。',
      enFoot: 'Move the phone slightly toward the front angle to catch stripes and oily shine.'
    },
    mahi: {
      zhTitle: '光線快檢',
      enTitle: 'Light check',
      zhBadge: '切面乾淨',
      enBadge: 'Clean cut',
      zhLead: '鬼頭刀常看切片，讓切面有柔光，不要被冰櫃燈打到死白。',
      enLead: 'For mahi-mahi cuts, keep soft light on the cut surface and avoid harsh case glare.',
      zhChips: ['柔光', '肉色乾淨', '水痕可看'],
      enChips: ['Soft light', 'Clean color', 'Moisture visible'],
      zhFoot: '切面如果反光太強，退半步再拍，厚度和肉色會更自然。',
      enFoot: 'If glare is too strong, step back a little so thickness and color look natural.'
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

  function get(item, key) {
    return lang() === 'en' ? item['en' + key] : item['zh' + key];
  }

  function render(stage) {
    if (!stage) return;
    var tone = stage.dataset.fishTone || 'bream';
    var item = COPY[tone] || COPY.bream;
    var card = stage.querySelector('[data-ar-light-check]');
    if (!card) {
      card = document.createElement('aside');
      card.className = 'ar-light-check';
      card.setAttribute('data-ar-light-check', '');
      card.setAttribute('aria-live', 'polite');
      var toolbar = stage.querySelector('.ar-toolbar');
      stage.insertBefore(card, toolbar || null);
    }

    card.innerHTML = [
      '<span class="ar-light-check__beam" aria-hidden="true"></span>',
      '<div class="ar-light-check__head">',
      '  <strong>' + esc(get(item, 'Title')) + '</strong>',
      '  <span class="ar-light-check__badge">' + esc(get(item, 'Badge')) + '</span>',
      '</div>',
      '<p>' + esc(get(item, 'Lead')) + '</p>',
      '<div class="ar-light-check__chips">' + get(item, 'Chips').map(function (chip) { return '<span>' + esc(chip) + '</span>'; }).join('') + '</div>',
      '<em>' + esc(get(item, 'Foot')) + '</em>'
    ].join('');
  }

  function boot() {
    var stage = document.querySelector('.ar-stage');
    if (!stage) {
      window.setTimeout(boot, 140);
      return;
    }
    render(stage);
    new MutationObserver(function (mutations) {
      if (mutations.some(function (mutation) { return mutation.attributeName === 'data-fish-tone'; })) render(stage);
    }).observe(stage, { attributes: true });
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