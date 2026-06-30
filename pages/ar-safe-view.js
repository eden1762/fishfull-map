(function () {
  'use strict';

  var STYLE_ID = 'fishfull-ar-safe-status-style';

  function isEnglish() {
    return document.documentElement.lang === 'en';
  }

  function text() {
    return isEnglish() ? 'Keep the whole fish in view' : '完整魚身留在框內';
  }

  function statusText(state) {
    if (state === 'ready') return isEnglish() ? '3D fish ready. Spin, zoom, then ask one smart question at the stall.' : '3D 魚已準備好。先轉動看清楚，再帶一句好問題去魚攤。';
    if (state === 'error') return isEnglish() ? 'The fish view is taking a break. Use the green, yellow, and red cards below first.' : '魚模型暫時沒出現，先看下方綠、黃、紅任務卡也能開始選魚。';
    return isEnglish() ? 'Bringing up the full fish. Slow connection? You can still use the cards below.' : '完整魚身準備中。網路慢也沒關係，可以先看下方任務卡。';
  }

  function ensureStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = [
      '.ar-safe-status{position:absolute;left:50%;bottom:calc(10px + env(safe-area-inset-bottom));transform:translateX(-50%);z-index:7;max-width:min(86%,380px);padding:8px 12px;border:1px solid rgba(8,93,117,.16);border-radius:999px;background:rgba(255,255,255,.9);color:#085d75;font-size:12px;font-weight:800;line-height:1.45;text-align:center;box-shadow:0 10px 24px rgba(7,54,77,.1);pointer-events:none}',
      '.ar-safe-status[data-state="ready"]{opacity:.86}',
      '.ar-safe-status[data-state="error"]{border-color:rgba(213,91,91,.26);color:#8f3f3f;background:rgba(255,248,246,.94)}',
      '@media(max-width:560px){.ar-safe-status{bottom:calc(6px + env(safe-area-inset-bottom));max-width:calc(100% - 28px);font-size:11px;border-radius:16px;padding:7px 10px}}',
      '@media(max-height:620px){.ar-safe-status{position:relative;left:auto;bottom:auto;transform:none;margin:6px auto 0}}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function setLabel(frame) {
    var label = frame.querySelector('.ar-safe-view__label');
    if (!label) return;
    label.textContent = text();
  }

  function setStatus(stage, state) {
    ensureStyle();
    var status = stage.querySelector('[data-ar-safe-status]');
    if (!status) {
      status = document.createElement('p');
      status.className = 'ar-safe-status';
      status.setAttribute('data-ar-safe-status', '1');
      status.setAttribute('aria-live', 'polite');
      stage.appendChild(status);
    }
    status.setAttribute('data-state', state);
    status.textContent = statusText(state);
  }

  function watchModel(stage) {
    var model = stage.querySelector('model-viewer');
    if (!model) {
      setStatus(stage, 'loading');
      window.setTimeout(function () { watchModel(stage); }, 220);
      return;
    }
    if (model.dataset.safeStatusBound === '1') return;
    model.dataset.safeStatusBound = '1';
    setStatus(stage, model.loaded ? 'ready' : 'loading');
    model.addEventListener('load', function () { setStatus(stage, 'ready'); });
    model.addEventListener('error', function () { setStatus(stage, 'error'); });
  }

  function run() {
    var stage = document.querySelector('.ar-stage');
    if (!stage) {
      window.setTimeout(run, 160);
      return;
    }

    var frame = stage.querySelector('[data-ar-safe-view]');
    if (!frame) {
      frame = document.createElement('div');
      frame.className = 'ar-safe-view';
      frame.setAttribute('aria-hidden', 'true');
      frame.setAttribute('data-ar-safe-view', '1');
      frame.innerHTML = '<span class="ar-safe-view__corner"></span><span class="ar-safe-view__corner"></span><span class="ar-safe-view__corner"></span><span class="ar-safe-view__corner"></span><span class="ar-safe-view__line"></span><span class="ar-safe-view__label"></span>';
      stage.appendChild(frame);
    }

    setLabel(frame);
    watchModel(stage);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  document.addEventListener('scm-language-change', run);
})();