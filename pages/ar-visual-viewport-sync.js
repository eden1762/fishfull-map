(function () {
  'use strict';

  var raf = 0;
  var lastHeight = '';
  var lastWidth = '';

  function readViewport() {
    var vv = window.visualViewport;
    return {
      width: Math.max(320, Math.round((vv && vv.width) || window.innerWidth || document.documentElement.clientWidth || 390)),
      height: Math.max(420, Math.round((vv && vv.height) || window.innerHeight || document.documentElement.clientHeight || 720))
    };
  }

  function writeVars() {
    raf = 0;
    var size = readViewport();
    var height = size.height + 'px';
    var width = size.width + 'px';
    if (height === lastHeight && width === lastWidth) return;
    lastHeight = height;
    lastWidth = width;

    document.documentElement.style.setProperty('--fishfull-ar-visible-height', height);
    document.documentElement.style.setProperty('--fishfull-ar-visible-width', width);
    Array.prototype.slice.call(document.querySelectorAll('.page-ar-game .ar-stage, .page-ar-game .model-stage')).forEach(function (stage) {
      stage.style.setProperty('--fishfull-ar-visible-height', height);
      stage.style.setProperty('--fishfull-ar-visible-width', width);
    });
  }

  function schedule() {
    if (raf) return;
    raf = window.requestAnimationFrame ? window.requestAnimationFrame(writeVars) : window.setTimeout(writeVars, 16);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', schedule);
  else schedule();

  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('orientationchange', schedule, { passive: true });
  window.addEventListener('pageshow', schedule, { passive: true });
  document.addEventListener('scm-language-change', schedule);
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', schedule, { passive: true });
    window.visualViewport.addEventListener('scroll', schedule, { passive: true });
  }
})();
