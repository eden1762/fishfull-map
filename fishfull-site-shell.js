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
        img.width = 48;
        img.height = 48;
        img.loading = 'eager';
        img.decoding = 'async';
        mark.appendChild(img);
      }
      img.src = logoSrc;
      img.alt = logoAlt();
    });
  }

  function footerParent() {
    return document.querySelector('.page-shell') || document.querySelector('.page-home') || document.getElementById('root') || document.body;
  }

  function ensureFooter() {
    var footers = document.querySelectorAll('footer.site-footer');
    var footer = footers[0] || null;

    if (footers.length > 1) {
      Array.prototype.slice.call(footers, 1).forEach(function (extraFooter) {
        extraFooter.parentNode.removeChild(extraFooter);
      });
    }

    if (!footer) {
      footer = document.createElement('footer');
      footer.className = 'site-footer';
      footerParent().appendChild(footer);
    } else if (footer.parentNode !== footerParent() && document.body.getAttribute('data-page') === 'ar-game') {
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
    window.setTimeout(applyShell, 120);
  }

  document.addEventListener('DOMContentLoaded', scheduleApply);
  document.addEventListener('scm-language-change', scheduleApply);
  window.addEventListener('load', scheduleApply);
})();