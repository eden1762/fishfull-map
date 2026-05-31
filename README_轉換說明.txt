本版本已將原本 Vite/React 專案中的 .jsx 原始檔編譯成瀏覽器可執行的 index.html。

內容：
1. index.html：已內嵌 CSS 與正式 build 後的 JavaScript，沒有 JSX 檔案。
2. vercel.json：保留 SPA 路由 rewrite，部署到 Vercel 後 /、/guide、/map、/sustainability 可正常導向。
3. api/webhook.js：保留原專案的 Vercel Serverless API 檔案；若只需要純前端顯示，可忽略。

注意：
- 3D 場景、Leaflet 地圖、model-viewer 與 OpenStreetMap 圖磚仍需網路連線。
- 建議用本機 HTTP Server 或 Vercel 開啟，不建議直接用 file:// 雙擊開啟，因為原專案使用 BrowserRouter 路由。
