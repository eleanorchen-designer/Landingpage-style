---
name: minimal-style
description: "簡約風（minimal style）— 白與極淡石板灰交替的區段、石板灰文字、單一深青 #05556C 只標示讀數、1px 細框扁平卡片、Inter + Noto Sans TC，整頁沒有圖片，只有文字、細線、圓點。Use when the user asks for a page \"用簡約風／簡潔／像儀表板一樣安靜\", or a clean, text-and-spec-driven B2B product or campaign page without illustrations. Not for illustrated pages (use hand-drawn-style) or dark AI-looking pages (use tech-style)."
---

# 簡約風

像一塊量測儀器的面板：白與 slate-50 交替鋪底，文字從深石板灰到中灰分層，邊框都是 1px，唯一的顏色是深青，而且只出現在「讀數」的位置。

**動手前先讀完 [DESIGN.md](DESIGN.md)**（token 在 frontmatter，規則在正文）。**[specimen.html](specimen.html)** 是完整的風格範例頁：按鈕、標籤、痛點卡、表單、modal、系統架構面板都有實作，寫頁面時直接照抄它的 CSS。範例頁裡的產品文案只是示範，不要沿用到別的產品。

## 適合

- 以規格、痛點、解法、流程為主的產品頁或活動頁
- 沒有插畫或照片素材，只靠文字與結構撐起來的頁面

## 流程

1. **寫 token**：frontmatter 的色彩寫成 `:root` 變數。中性色是 Tailwind slate 色階，強調色是 teal 色階。
2. **載入字體**：Google Fonts 的 `Inter:wght@400;500;600;700`、`Noto Sans TC:wght@400;500;600;700`。
3. **排版面**：容器 1152px（左右留白 20px，640px 起 32px）；區段上下 80px（640px 起 96px）；每個區段同一個節奏：**青色英文大寫眉標 → 粗體中文標題 → 一行灰色說明 → 卡片網格**。區段底色白與 slate-50 交替，底部一條 slate-200 細線。
4. **組元件**：照 DESIGN.md 的 Components（Buttons、Chips、Cards、Inputs、Navigation、Modal、System Architecture Panel）。
5. **自查**：對照 DESIGN.md 的 Do's and Don'ts，並用鍵盤 Tab 一遍確認每個互動元件都有 focus 樣式。

## 最常出錯的規則

- 青色文字一律 **teal-700 #05556C**；teal-600 只給圓點、邊框、focus 外框。不要混用兩種青當字色或按鈕底。
- 青色只標示讀數與狀態（眉標、標籤、清單圓點、步驟編號），不鋪大面積。
- 卡片白底、1px slate-200 邊框、16px 圓角、**無陰影**。
- 主要按鈕 slate-900，hover 才轉 teal-700；每組 CTA 一顆主要、一顆次要。
- **slate-400 不寫需要被讀的字**（白底只有 2.56:1）。
- 點陣網格只用在 hero 的系統架構面板，不鋪到其他區段。
- 不加漸層、插圖、照片底圖。
- 清單用 6px 青色圓點，不用勾勾或編號圓圈。
