(function () {
  'use strict';

  var timer = 0;

  function isTightPhoneViewport() {
    return window.matchMedia && window.matchMedia('(max-width: 640px), (max-height: 620px)').matches;
  }

  function applyFullFishGuard() {
    var models = Array.prototype.slice.call(document.querySelectorAll('.page-ar-game model-viewer.ar-model'));
    models.forEach(function (model) {
      if (!model.dataset.fishfullBaseOrbit) {
        model.dataset.fishfullBaseOrbit = model.getAttribute('camera-orbit') || '68deg 78deg 3.2m';
        model.dataset.fishfullBaseFov = model.getAttribute('field-of-view') || '27deg';
      }

      if (isTightPhoneViewport()) {
        model.setAttribute('camera-orbit', model.dataset.fishfullBaseOrbit.replace(/\s[0-9.]+m$/, ' 3.9m'));
        model.setAttribute('field-of-view', '31deg');
        model.setAttribute('min-camera-orbit', 'auto auto 3.2m');
        model.setAttribute('max-camera-orbit', 'auto auto 5.8m');
      } else {
        model.setAttribute('camera-orbit', model.dataset.fishfullBaseOrbit);
        model.setAttribute('field-of-view', model.dataset.fishfullBaseFov);
        model.setAttribute('min-camera-orbit', 'auto auto 2.4m');
        model.setAttribute('max-camera-orbit', 'auto auto 5m');
      }
    });
  }

  function scheduleGuard() {
    window.clearTimeout(timer);
    timer = window.setTimeout(applyFullFishGuard, 90);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleGuard);
  else scheduleGuard();

  window.addEventListener('resize', scheduleGuard, { passive: true });
  window.addEventListener('orientationchange', scheduleGuard, { passive: true });
  new MutationObserver(scheduleGuard).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'camera-orbit'] });
})();
