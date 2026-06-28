# FishFull Map 漁有料

買對一條魚，也能讓海更有魚。

本版本將網站文案統一為 FishFull Map，主軸是「掃碼看懂魚、找到友善店家、用小任務學會選、買後留下回饋」。受眾包含漁產消費者、魚販、漁業從業者、餐飲店、社區與年輕人。

## 本次重點

- **漁業專業**：聚焦當季魚種、低碳漁法、產地故事、友善捕撈與料理建議。
- **行銷專業**：用「掃碼 → 看懂 → 選購 → 料理 → 回饋」帶動真實買魚行為。
- **互動體驗**：AR 遊戲先顯示完整 3D 魚，手機可開相機看魚、拍照與放到現場。
- **使用者語氣**：網站畫面改用消費者、魚販、漁業從業者與年輕人看得懂的字詞。
- **英文語氣**：英文版改用歐美漁產消費者、魚販、漁業從業者與年輕人可理解的市場用語。
- **友善海鮮地圖**：使用開放地圖展示真實地址；點店家可在地圖置中，點地址可另開導航。
- **維護清楚**：保留單一來源檔案，不新增 dist、public、build output 或重複頁面檔案。

## 檔案結構

```text
index.html                 # 首頁
ar.html                    # AR 遊戲入口
home.css                   # 首頁樣式
home.js                    # 首頁文案與互動
site-i18n.js               # 全站語系切換
pages/about.html           # 我們的理念
pages/fish.html            # 主推魚
pages/map.html             # 去附近買魚
pages/recipes.html         # 零失敗食譜
pages/feedback.html        # 十秒回饋
pages/field.html           # 看現場紀錄
pages/sustainability.html  # 玩標籤
pages/ar-page.js           # AR 遊戲頁文案與版面
pages/ar-page.css          # AR 遊戲頁手機優先樣式
pages/pages.js             # 子頁共用 renderer
pages/site-pages.css       # 子頁共用樣式
pages/action-pages.css     # 子頁行動頁共用樣式
api/webhook.js             # LINE webhook API
vercel.json                # clean URL rewrites
```

## 部署方式

此專案保持靜態頁面架構，不需要額外產生重複輸出資料夾。

1. 將整包檔案放在 repository 根目錄。
2. 確認 repository 內沒有舊的 `dist/`、`public/` 或重複的子頁檔案。
3. Push 到 GitHub。
4. Vercel 直接以根目錄靜態檔案部署；`vercel.json` 只負責乾淨網址與 rewrites。

## 本機預覽

```bash
npm run preview
# open http://localhost:4173
```

也可以直接執行：

```bash
python3 -m http.server 4173
```
