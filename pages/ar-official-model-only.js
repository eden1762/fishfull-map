(function () {
  'use strict';

  var noteTimer = 0;

  function isEnglish() {
    return localStorage.getItem('scm-language') === 'en' || document.documentElement.lang === 'en';
  }

  function t(zh, en) {
    return isEnglish() ? en : zh;
  }

  function removeFallbackFish() {
    document.querySelectorAll('.ar-fallback-fish').forEach(function (node) {
      node.remove();
    });
  }

  function modelReady(stage) {
    return stage && stage.classList.contains('is-model-ready') && !stage.classList.contains('is-model-error');
  }

  function showNote(stage) {
    if (!stage) return;
    var note = stage.querySelector('[data-official-model-note]');
    if (!note) {
      note = document.createElement('div');
      note.className = 'ar-photo-model-wait';
      note.setAttribute('data-official-model-note', '');
      note.setAttribute('role', 'status');
      note.setAttribute('aria-live', 'polite');
      stage.appendChild(note);
    }
    note.textContent = t('先等完整 3D 魚出現再拍照，畫面不使用替代魚圖。', 'Please wait for the full 3D fish before taking a photo. No substitute fish art is used.');
    window.clearTimeout(noteTimer);
    noteTimer = window.setTimeout(function () {
      if (note && note.parentNode) note.parentNode.removeChild(note);
    }, 3200);
  }

  function sync() {
    removeFallbackFish();
    document.querySelectorAll('.ar-stage').forEach(function (stage) {
      var button = stage.querySelector('[data-ar-photo]');
      if (!button) return;
      button.setAttribute('aria-disabled', modelReady(stage) ? 'false' : 'true');
    });
  }

  document.addEventListener('click', function (event) {
    var button = event.target && event.target.closest ? event.target.closest('[data-ar-photo]') : null;
    if (!button) return;
    var stage = button.closest('.ar-stage');
    if (modelReady(stage)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    showNote(stage);
    sync();
  }, true);

  document.addEventListener('DOMContentLoaded', sync);
  window.addEventListener('load', sync);
  document.addEventListener('scm-language-change', sync);
  window.setInterval(sync, 900);
})();
