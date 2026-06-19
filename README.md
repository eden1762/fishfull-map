# Sustainable Catch Map - Static HTML/CSS/JS Version

這份版本已整理成「根目錄直接部署」的靜態網站架構，首頁改為不可旋轉的海洋、沙灘、陽光設計，避免 720 度旋轉造成暈眩，也降低弱網路環境下的載入負擔。

## 本次完成內容
- 首頁 `/` 改成純 `index.html` + `home.css` + `home.js`。
- 首頁移除 model-viewer、Three.js、WebGL、720 度可旋轉背景與原本 3D 模組首頁設計。
- 三個首頁入口改為純 `input[type=button]`，並保留原本三組文案與連結功能：
  - 我們的理念 / 看見永續初衷 / 3D眼睛導覽
  - 附近的友善海鮮地圖 / 找附近友善餐廳 / 3D友善小魚
  - AR互動與永續標籤 / 理解永續標籤 / 3D牛頓擺球組
- 首頁保留電腦版與手機版響應式設計。
- 保留 Instagram 與中英文切換功能。
- 保留 `api/webhook.js` Vercel Serverless Function。
- 移除無用 `dist/`、`src/`、`source_reference_only/`，避免 Vercel 部署來源混亂。

## 檔案結構
```text
index.html
home.css
home.js
site-i18n.js
pages/
  about.html / about.css / about.js
  map.html / map.css / map.js
  sustainability.html / sustainability.css / sustainability.js / sustainability-ar.*
api/
  webhook.js
vercel.json
```

## 本機預覽
```bash
python3 -m http.server 4173
```
然後開啟：
```text
http://localhost:4173/
```

## Vercel 部署提醒
此版本不需要 `dist`，也不需要 JSX/Vite build。若 Vercel Dashboard 曾設定 Output Directory 為 `dist`，請清空 Output Directory，避免部署仍讀取舊資料夾。
