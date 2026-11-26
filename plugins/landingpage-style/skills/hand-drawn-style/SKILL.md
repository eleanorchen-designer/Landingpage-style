---
name: hand-drawn-style
description: "手繪風（hand-drawn style）— 白底、柔影大圓角卡片、單一高飽和青色 #00788c、實體按鍵感按鈕、Jost + Noto Sans TC，搭配 riso 網點手繪插畫放在粉彩 tint 面板上。Use when the user asks for a landing page, campaign page or section \"用手繪風／手繪風格／明亮柔和的風格\", or wants a light, friendly B2B page with spot illustrations. Not for dark / AI-looking pages (use tech-style) or plain dashboard-like pages without illustrations (use minimal-style)."
---

# 手繪風

明亮、柔和，但每一塊內容都落在規格與證明上。白底、多層極淡的柔影、大圓角卡片，一個高飽和青色只給可以按的東西；插畫是 riso 網點手繪風，站在粉彩 tint 面板上。

**動手前先讀完 [DESIGN.md](DESIGN.md)。** frontmatter 是 token（色彩、字級、圓角、陰影、動態、元件），正文是規則。本檔只講流程與最常出錯的規則。

## 適合

- 活動頁、landing page、法規或方案說明頁
- 給企業買家、系統整合商、經銷商看，要親切但可信
- 需要用插畫說明步驟、年度計畫、流程

## 流程

1. **讀 DESIGN.md**，把 frontmatter 的 Semantic token 寫成 `:root` CSS 變數（`--text-primary`、`--accent`、`--bg-subtle`…）。頁面只用 Semantic／Component token，不直接寫色碼。
2. **載入字體**：Google Fonts 的 `Jost:wght@400;500`、`Noto Sans TC:wght@400;500`、`IBM Plex Mono`。字體堆疊 `"Jost", "Noto Sans TC", system-ui, sans-serif`。
3. **排版面**：容器 1200px + 24px gutter（手機 16px）；區段上下 128px（首屏與重點區段 160px，手機 64px），白底與 `bg-subtle` 交替；流動字級照 DESIGN.md 的 `clamp()` 公式，斷點 <768／768–1023／1024–1199／≥1200。
4. **組元件**：照 DESIGN.md 的 Components 一節：柔影卡片、實體按鍵感主按鈕（`button-tactile`）、玻璃導覽膠囊、tint 標籤、stat 數據列、頁尾 CTA 區塊。
5. **插畫**：用同一個 plugin 的 **`riso-illustration`** skill 畫。要一次產出一整組（步驟圖、年度圖）時，照 [illustrations/build.mjs](illustrations/build.mjs) 的寫法：

   ```bash
   node <本 skill 資料夾>/illustrations/build.mjs --out=./assets/illustrations
   node <本 skill 資料夾>/illustrations/build.mjs step-1-inventory --out=./assets/illustrations   # 只產一張
   ```

   需要 Node 18+ 與 Chrome／Chromium（找不到時設 `CHROME_PATH`）。範例裡的主題是示意，換主題時改 `art` 物件裡的函式，保留 `hero()`／`grey()`／`cobalt()`／`line()`／`lime()` 的組法與色票 `C`。
   插畫放進 tint 底、`md`–`2xl` 圓角的面板（DESIGN.md「Illustration」），PNG 用 2×。
6. **自查**：逐條對照 DESIGN.md 的 Do's and Don'ts 與 Accessibility，再交付。

## 最常出錯的規則

- `accent` #00788c 只給連結、主按鈕、焦點環；**不要鋪成區段背景**。
- 陰影一律用 token 的多層極淡柔影；不要純黑、硬陰影、發光陰影，也不要陰影疊陰影。
- 不用任何漸層（文字、按鈕、多色漸層都不要）；`blur` 只用在 DESIGN.md 列出的四處。
- 中文標題行高不低於 1.15，不加負字距；英文頁才用 Latin 那組字距。
- 一個畫面一顆實心主按鈕。
- 插畫物件本身不加陰影，只有它所在的面板有；一張圖最多三張漂浮 UI 卡，卡上不放編造的讀數。
- **不編造**產品名稱、規格、認證、客戶、數據；沒有真實內容就留空或標「示意」。
- 每個動畫都寫 `prefers-reduced-motion` 降級；只動 `transform` 與 `opacity`。
