(function () {
  'use strict';

  var logoSrc = '/fishfull.jpg';
  var copyrightText = 'Copyright © 2026Fishfull漁有料版權所有';

  function currentLang() {
    return window.SCMLanguage && window.SCMLanguage.current ? window.SCMLanguage.current() : (localStorage.getItem('scm-language') === 'en' ? 'en' : 'zh');
  }

  function logoAlt() {
    return currentLang() === 'en' ? 'FishFull official logo' : 'FishFull 漁有料官方商標';
  }

  function applyLogo() {
    var marks = document.querySelectorAll('.brand-sun, .brand-symbol');
    Array.prototype.forEach.call(marks, function (mark) {
      mark.classList.add('fishfull-logo-mark');
      mark.setAttribute('aria-hidden', 'false');
      var img = mark.querySelector('img');
      if (!img) {
        mark.textContent = '';
        img = document.createElement('img');
        img.src = logoSrc;
        img.width = 48;
        img.height = 48;
        img.loading = 'eager';
        img.decoding = 'async';
        mark.appendChild(img);
      }
      img.alt = logoAlt();
    });
  }

  function footerParent() {
    return document.querySelector('.page-shell') || document.querySelector('.page-home') || document.getElementById('root') || document.body;
  }

  function ensureFooter() {
    var footer = document.querySelector('footer.site-footer');
    if (!footer) {
      footer = document.createElement('footer');
      footer.className = 'site-footer';
      footerParent().appendChild(footer);
    }
    footer.setAttribute('aria-label', currentLang() === 'en' ? 'Copyright' : '版權聲明');
    footer.textContent = copyrightText;
  }

  function applyShell() {
    applyLogo();
    ensureFooter();
  }

  function scheduleApply() {
    window.setTimeout(applyShell, 0);
  }

  document.addEventListener('DOMContentLoaded', scheduleApply);
  document.addEventListener('scm-language-change', scheduleApply);
  window.addEventListener('load', scheduleApply);
})();
