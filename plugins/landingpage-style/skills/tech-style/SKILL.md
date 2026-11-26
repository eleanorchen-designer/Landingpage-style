---
name: tech-style
description: "科技風格（tech / AI style）— 帶青的深色虛空底、primary #2aabb0 圓點組成的馬賽克紋路、玻璃卡片、Geist Mono 等寬字標籤、逐字串流文字；所有視覺由 CSS／SVG／Canvas 程式生成，不用插畫、不用漸層。Use when the user asks for a page \"用科技風格／AI 風格／深色科技感／AI 感\", or a dark, data-heavy, futuristic campaign page. Not for light pages (use hand-drawn-style or minimal-style) or pages that need illustrations."
---

# 科技風格

把能源數據畫成「正在被運算的訊號」：黑底、primary 點陣、玻璃卡片、等寬字。2026-11-26 起不使用任何漸層，也不使用插畫。

**動手前先讀完 [DESIGN.md](DESIGN.md)**（token 在 frontmatter，規則在正文）。**[specimen.html](specimen.html)** 是完整的風格範例頁：每個元件、馬賽克 Canvas、七種生成式視覺、動態的實作都在裡面，寫頁面時直接照抄它的 CSS 與 JS。

## 適合

- 強調數據、平台、AI 或智能分析的活動頁、產品頁
- 想要強烈科技感、深色的單頁

## 流程

1. **先讀 DESIGN.md 的 Content rules。** 這一節先於所有視覺規則：不宣稱沒有的 AI 能力、prompt bar 只能是真功能或標明「示意」、console 數值不編造。
2. **寫 token**：frontmatter 的 Semantic token 寫成 `:root` 變數。頁面底是 `bg-page` #030a0c，文字是 `frost` 色階，不用純白、純黑。
3. **載入字體**：Google Fonts 的 `Geist:wght@400;500`、`Geist Mono:wght@400;500`、`Noto Sans TC:wght@400;500`。eyebrow、數值、單位、狀態都用 Geist Mono。
4. **排版面**：Bento 格（7/5、5/7、5/3/4），格距 16px；斷點 <768／768–1023／1024–1199／≥1200。
5. **生成視覺**：馬賽克、節點網路、波形、資料流、點陣球，從 specimen.html 取對應的 Canvas／SVG 程式；每個都要有靜態版。
6. **自查**：對照 DESIGN.md 的 Do's and Don'ts、Accessibility & performance，並在 `prefers-reduced-motion` 下檢查一次。

## 最常出錯的規則

- **不用任何漸層**：linear／radial／conic、漸層字、漸層按鈕、暗角、極光、模糊光暈都不要。層次靠點陣疏密、四個透明度級數（dim／mid／bright／peak）和 1px 線。
- **不用任何插畫**：等角插圖、riso／網點插畫、手繪、3D、AI 生成圖、圖庫插畫都不要，也**不要呼叫 `riso-illustration` skill**。
- 顏色只用 `primary` #2aabb0；不要紫、藍、洋紅。深青 teal-900／700／600 不當小字。分類圖表的色是唯一例外。
- 文字下方的馬賽克只能是 `mosaic-dim`；連續兩個區段不要都放馬賽克；表單、表格、長文後面不放。
- `text-highlight` 一個畫面最多兩處，不用在內文、連結、按鈕上。
- 馬賽克動態用 `steps()` 一步一格，不做平滑補間；串流、解碼的最終文字一開始就要在 DOM 裡。
- 超過 600 字的長文改用淺色版面（手繪風），或在本風格內換成 `bg-surface` 閱讀區。
