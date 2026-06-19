# Home Redesign Notes

本次首頁全盤翻新重點：

1. 取消首頁 720 度海洋沙灘陽光可旋轉功能。
2. 移除首頁 model-viewer / Three.js / WebGL 依賴，不再使用原本 3D 模組首頁。
3. 改成不可旋轉的靜態海洋、沙灘、陽光背景，降低暈眩感與弱網路載入負擔。
4. 三個首頁入口改為純 `input[type=button]`。
5. 保留原本功能連結與文案。
6. 針對電腦版與手機版分別設計版面。
7. 專案交付版刪除無用 `dist/`、`src/`、`source_reference_only/`，改為根目錄 HTML/CSS/JS 直接部署。
