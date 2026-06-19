# Vercel Deploy Notes

這份版本是根目錄靜態網站部署，不再產生或使用 `dist/`。

## 建議 Vercel 設定
- Framework Preset：Other
- Build Command：留空，或使用 `echo Static site - no build required`
- Output Directory：留空
- Install Command：可留空；若 Vercel 自動執行 `npm install` 也不影響，因為沒有外部前端依賴。

## 重要提醒
如果 Vercel Dashboard 之前有設定 Output Directory = `dist`，即使 repo 裡刪除 `dist/`，Vercel 仍可能依照 Dashboard 設定找 `dist`。請到 Vercel 專案 Settings → Build & Development Settings，將 Output Directory 清空。

## 路由
`vercel.json` 保留下列 rewrite：
- `/about` → `/pages/about.html`
- `/map` → `/pages/map.html`
- `/sustainability` → `/pages/sustainability.html`
- `/api/(.*)` → `/api/$1`
