---
name: Landing Page Style — 簡約風
description: 白底與極淡石板灰交替的區段、石板灰文字、單一深青強調色、細邊框的扁平卡片、點陣網格底紋。像量測儀器的面板，只在關鍵讀數上用顏色。
# 來源：一個活動頁的 html（Tailwind CDN v3 + tailwind.config brand 色階）。2026-11-26 抽取。
# 2026-11-26 修訂：主色由原檔的翡翠綠（brand #047857 系）改為 #05556C（原始品牌規格的 accent）。50 / 600 / 900 沿用手繪風（hand-drawn-style）的 teal 色階，100 由 teal-600 與白 20% 混合。
# 標記：[enertrack] 為 html 內明寫的值；[tw] 為 Tailwind v3 預設值換算；[gap] 為 html 裡寫了但實際沒有生效的 class（見檔尾）。
colors:
  # ── 強調色：深青（取代原檔 brand 翡翠綠，角色一對一對應）──────
  teal-50: "#e6f2f4"        # [base] 取代 brand-50：標籤底、架構圖軟體節點圖示底、成功訊息框底
  teal-100: "#cce4e8"       # [derived] 取代 brand-100：文字選取底色、輸入框 focus 光暈、成功訊息框邊框
  teal-600: "#00788c"       # [base] 取代 brand-600：logo 圓點、清單圓點、輸入框 focus 邊框、focus 外框
  teal-700: "#05556c"       # [user] 主色，取代 brand-700：區段眉標、hero 副標、標籤文字、步驟編號、主要按鈕 hover 底
  teal-900: "#033d4e"       # [base] 取代 brand-900：文字選取字色
  # ── 中性色：石板灰（Tailwind slate）────────────────────────
  white: "#ffffff"             # [tw] 頁面底、卡片底
  slate-50: "#f8fafc"          # [tw] 交替區段底（實際以 70% 不透明度疊在白上）、頁尾底、次要按鈕 hover
  slate-100: "#f1f5f9"         # [tw] 數字小標底、硬體圖示底、卡片內分隔線
  slate-200: "#e2e8f0"         # [tw] 卡片邊框、區段分隔線（80%）、hero 徽章邊框
  slate-300: "#cbd5e1"         # [tw] 次要按鈕與輸入框邊框、hover 卡片邊框、點陣網格的點、連接線
  slate-400: "#94a3b8"         # [tw] 只剩 modal 關閉鈕圖示；不用於文字（見 Don'ts）
  slate-500: "#64748b"         # [tw] 輔助說明、頁尾、指標說明、架構面板英文標題、導覽副標
  slate-600: "#475569"         # [tw] 內文、導覽連結、數字小標文字
  slate-700: "#334155"         # [tw] 表單標籤、徽章文字
  slate-800: "#1e293b"         # [tw] 次要按鈕文字
  slate-900: "#0f172a"         # [enertrack] 標題、主要按鈕底、全頁預設字色
typography:
  display:
    fontFamily: "Inter, Noto Sans TC, system-ui, -apple-system, sans-serif"
    fontSize: "30px → 36px (sm) → 42px (lg)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, Noto Sans TC, system-ui, -apple-system, sans-serif"
    fontSize: "24px → 30px (sm)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Inter, Noto Sans TC, system-ui, -apple-system, sans-serif"
    fontSize: "18px → 20px (sm)"
    fontWeight: 500
    lineHeight: 1.625
  title:
    fontFamily: "Inter, Noto Sans TC, system-ui, -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.375
  body:
    fontFamily: "Inter, Noto Sans TC, system-ui, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Inter, Noto Sans TC, system-ui, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, Noto Sans TC, system-ui, -apple-system, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.333
    letterSpacing: "0.05em"
  micro:
    fontFamily: "Inter, Noto Sans TC, system-ui, -apple-system, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.45
rounded:
  xs: "4px"      # 硬體／軟體節點上的小標籤
  sm: "6px"      # 數字小標（痛點 01）、modal 標籤
  md: "8px"      # 導覽列按鈕、輸入框、圖示方塊、關閉鈕
  lg: "12px"     # CTA 按鈕、送出鈕、架構圖節點、成功訊息框
  xl: "16px"     # 所有內容卡片、hero 架構面板、modal
  full: "9999px" # 徽章、技術標籤、圓點
spacing:
  gutter: "20px"          # 容器左右留白，sm 起 32px
  container: "1152px"     # max-w-6xl
  container-narrow: "1024px" # 文字置中的底部 CTA，max-w-4xl
  measure: "672px"        # 區段標題塊與 hero 說明的最大寬，max-w-2xl
  section-y: "80px"       # 區段上下，sm 起 96px
  section-head-gap: "48px" # 區段標題塊到內容，sm 起 64px
  card-pad: "24px"        # 卡片內距，sm 起 32px
  grid-gap: "24px"        # 卡片網格間距，痛點區 sm 起 32px
  header-h: "64px"
components:
  button-primary:
    backgroundColor: "{colors.slate-900}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.teal-700}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.slate-800}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "14px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.slate-50}"
  button-compact:
    backgroundColor: "{colors.slate-900}"
    textColor: "{colors.white}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.slate-900}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "{spacing.card-pad}"
  tag-pill:
    backgroundColor: "{colors.teal-50}"
    textColor: "{colors.teal-700}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  number-chip:
    backgroundColor: "{colors.slate-100}"
    textColor: "{colors.slate-600}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  badge:
    backgroundColor: "{colors.slate-100}"
    textColor: "{colors.slate-700}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
---

# Design System: 簡約風

## Overview

**Creative North Star: "The Quiet Instrument"（安靜的儀表板）**

這是一塊量測儀器的面板。整頁以白和極淡的石板灰鋪底，文字從深石板灰到中灰分出層級，邊框都是 1px 的細線。唯一的顏色是深青，而且只出現在「讀數」的位置：區段眉標、技術標籤、清單圓點、hero 副標、步驟編號。按鈕平常是近黑，滑過才亮起青色，像儀器上被按下的那顆鍵。

版面密度中等偏鬆。每個區段都是同一個節奏：英文大寫眉標 → 粗體標題 → 一行灰色說明 → 卡片網格。卡片扁平、白底、細邊框、16px 圓角，彼此之間靠邊框和區段底色的交替分出前後，幾乎不用陰影。唯一的紋理是 hero 右側面板的點陣網格（24px 間距的 1px 點），讓那塊架構示意圖讀起來像繪圖紙。

整頁沒有任何圖片，所有視覺都是文字、細線、圓點與兩個線條圖示。

**Key Characteristics:**
- 白與 slate-50 交替的全寬區段，區段之間一條 slate-200 細線
- 單一深青強調色，只標示讀數與狀態，不鋪大面積
- 1px 細邊框的扁平白卡，圓角統一 16px
- 近黑主按鈕，hover 轉深青
- 每個區段開頭都有英文大寫、字距放寬的青色眉標
- 點陣網格只用在一處：hero 的系統架構面板

## Colors

一個冷調的石板灰中性色階，加上一個深青。青色是信號，不是背景。

### Primary
- **儀表青 Instrument Teal**（teal-700）：這套系統的主色 #05556C。所有「青色文字」都用這一階：白底 8.33:1、slate-50 上 7.96:1、teal-50 上 7.28:1。用在區段眉標、hero 副標、技術標籤字、步驟編號、「解法」小標，也是主要按鈕的 hover 底色（白字 8.33:1）。
- **指示燈青 Pilot Teal**（teal-600）：只用在不承載閱讀的地方——logo 圓點、清單前的 6px 圓點、輸入框 focus 邊框、focus 外框。
- **淡青底 Teal Wash**（teal-50）：技術標籤與軟體節點圖示的底。
- **選取色**（teal-100 底 / teal-900 字）：全頁文字選取。

### Neutral
- **墨石板 Ink Slate**（slate-900）：標題、全頁預設字色、主要按鈕底。
- **內文石板**（slate-600）：所有段落內文與導覽連結，白底 7.6:1。
- **輔助石板**（slate-500）：頁尾、指標說明、架構節點描述、架構面板英文標題、導覽列副標，白底 4.8:1、slate-50 上 4.55:1，剛好過 AA。
- **標籤石板**（slate-700 / slate-800）：表單標籤、徽章文字、次要按鈕字。
- **線條石板**（slate-200 / slate-300）：200 是卡片與區段的邊框；300 是可互動元件（輸入框、次要按鈕）的邊框、卡片 hover 邊框、點陣的點。
- **底面石板**（slate-50 / slate-100）：50 以 70% 不透明度鋪交替區段；100 是小標與圖示方塊的底、卡片內的分隔線。

### Named Rules
**The Reading-Teal Rule.** 會被讀的青字一律用 teal-700；teal-600 是它的亮階，只給圓點、邊框與 focus 外框，不拿來寫字、也不當按鈕底。一個畫面只有一種青色字色。

**The Signal-Not-Surface Rule.** 深青不鋪任何超過一個標籤大小的面。最大的青色面積就是 hover 中的按鈕。

## Typography

**Display / Body Font:** Inter（拉丁字）＋ Noto Sans TC（中文），後備 system-ui、-apple-system、sans-serif
**權重只用 400 / 500 / 600 / 700。**

**Character:** 單一無襯線家族撐全頁。層級靠字重與字色拉開，不靠換字體：標題 700 + 墨石板，內文 400 + 內文石板，眉標 600 + 青色 + 大寫。

### Hierarchy
- **Display**（700，30px → sm 36px → lg 42px，行高 1.2，字距 -0.025em）：只有 hero 主標題。
- **Headline**（700，24px → sm 30px，字距 -0.025em）：每個區段的 h2、底部 CTA 標題。
- **Lead**（500，18px → sm 20px，行高 1.625，teal-700）：hero 副標，全頁唯一的青色大字。
- **Title**（700，18px，行高 1.375）：痛點卡片標題。架構卡片標題放大到 20px → sm 24px；步驟卡片標題縮到 16px；modal 標題 20px。
- **Body**（400，16px，行高 1.625，slate-600）：區段說明、hero 說明，寬度上限 672px。
- **Body-sm**（400，14px，行高 1.625，slate-600）：卡片內所有說明文字、導覽連結（500）。
- **Label**（600，12px，大寫，字距 0.05em）：英文眉標、數字小標、技術標籤、表單標籤（500、不大寫）。
- **Micro**（500，11px）：架構面板裡的節點標籤、連接線說明、指標說明。只出現在 hero 架構面板。

### Named Rules
**The Eyebrow Rule.** 每個區段標題上方一定有一行英文大寫眉標（12px、600、字距 0.05em、teal-700），下方 8px 接中文標題。眉標是英文、標題是中文，這個雙語節奏是全頁的固定拍子。

## Layout

- **容器：** 最大寬 1152px 置中；左右留白 20px，sm（640px）起 32px。文字置中的底部 CTA 改用 1024px。
- **區段節奏：** 上下 80px，sm 起 96px。hero 為 64/80px，sm 起 96/112px。區段底色白與 slate-50（70%）交替，每段底部一條 slate-200（80%）細線。
- **區段標題塊：** 最大寬 672px、靠左，距內容 48px，sm 起 64px。只有底部 CTA 置中。
- **網格：**
  - Hero：lg 起 12 欄，左文 7 欄、右側架構面板 5 欄，欄距 40px；以下單欄、間距 48px。
  - 痛點：md（768px）起 2×2，間距 24px，sm 起 32px。
  - 雙核心架構：lg（1024px）起 2 欄，間距 32px。
  - 四步流程：單欄 → sm 起 2 欄 → lg 起 4 欄，間距 24px。
- **按鈕組：** 手機上直排、撐滿寬度；sm 起橫排，間距 14px。
- **導覽：** 64px 高，sticky；md 以下隱藏錨點連結，只留 logo 與一顆按鈕。
- **斷點：** sm 640px / md 768px / lg 1024px（Tailwind 預設）。

## Elevation & Depth

幾乎全平。深度靠三件事：區段底色交替、1px 邊框、以及 sticky 導覽列的半透明白底加模糊（白 90%、backdrop-blur 12px）。

### Shadow Vocabulary
- **Hairline lift**（`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`）：hero 架構面板的兩個節點卡、主要 CTA 按鈕。
- **Hover lift**（`box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`）：主要 CTA 按鈕 hover。
- **Dialog**（`box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`）：modal 視窗，底下是 slate-900 50% 的遮罩。

### Named Rules
**The Flat Card Rule.** 內容卡片沒有陰影。hover 只把邊框從 slate-200 換到 slate-300，不浮起、不位移。

## Shapes

圓角從小到大對應元件大小：4px 小標籤 → 6px 數字小標 → 8px 輸入框與小按鈕 → 12px 主要按鈕 → 16px 卡片與 modal → 全圓的徽章、技術標籤與圓點。所有邊框 1px。

圓點是全頁的重複幾何：logo 前 10px 青點（hover 放大 1.25 倍）、清單前 6px 青點、眉標旁「● 即時雙無線架構」、hero 面板底的點陣網格。

## Components

### Buttons
冷靜、一按就亮。
- **Shape:** 12px 圓角（導覽列的小按鈕 8px）。
- **Primary:** slate-900 底、白字、500 字重，內距 14×24px（底部 CTA 為 14×28px），14px → sm 16px 字。帶 Hairline lift 陰影。
- **Hover:** 底色轉 teal-700（白字 8.33:1），陰影換 Hover lift，`transition-colors` 150ms `cubic-bezier(0.4, 0, 0.2, 1)`。
- **Secondary:** 白底、slate-800 字、1px slate-300 邊框；hover 底轉 slate-50。
- **Compact（導覽列）:** 同 primary 配色與 hover，內距 8×16px，12px → sm 14px 字，8px 圓角。
- **Focus:** 鍵盤 focus（`:focus-visible`）顯示 2px teal-600 外框，offset 2px，外框跟著按鈕圓角走；滑鼠點擊不顯示。青色外框對白底 5.17:1，過非文字元件的 3:1。

### Chips / Tags
- **技術標籤（tag-pill）:** teal-50 底、teal-700 字、600 字重、全圓角，內距 4×12px。用在雙核心卡片頂部（「硬體端 ｜ 跨案場重複周轉」）。
- **節點小標:** 同配色但 4px 圓角、11px 字，用在 hero 架構節點。
- **數字小標（number-chip）:** slate-100 底、slate-600 字（6.92:1）、700 字重、字距 0.05em、6px 圓角，「痛點 01」。
- **Hero 徽章:** slate-100 底、slate-200 邊框、slate-700 字、全圓角。

### Cards / Containers
- **Corner Style:** 16px。
- **Background:** 白；放在 slate-50 區段上時靠底色差浮出。
- **Border:** 1px slate-200；痛點卡 hover 轉 slate-300。
- **Internal Padding:** 24px，sm 起 32px（步驟卡固定 24px）。
- **痛點卡結構:** 數字小標 → 痛點標題（Title）→ slate-100 細線 → 青色「解法」小標 → 說明。上下兩段用 `justify-between` 撐開，同列卡片底部對齊。
- **雙核心卡結構:** 技術標籤 → 標題（20–24px）→ 摘要 → slate-100 細線 → 功能清單（6px 青點 + 粗體名稱 + 說明，項目間距 16px）。

### Inputs / Fields
- **Style:** 白底、1px slate-300 邊框、8px 圓角、內距 10×14px、14px 字。標籤在上方，12px、500、slate-700，間距 4px。
- **Focus:** 邊框換成 teal-600，外加兩圈 box-shadow：1px teal-600 讓青邊變成 2px 實線（白底 5.17:1），再一圈 4px teal-100 淡青光暈。同時設 `outline: 2px solid transparent`，讓 Windows 高對比模式仍看得到 focus。
- **Error / Disabled:** 未定義，只靠原生 `required` 驗證。

### Navigation
- 64px sticky 白底（90%）＋背景模糊，底部 slate-200（80%）細線。
- 左：10px 青點 + 「產品名稱」18px 粗體 + sm 起以左邊框隔出的 slate-500 副標（12px、500，白底 4.76:1）。
- 中：14px、500、slate-600 錨點連結，間距 32px，hover 轉 slate-900；md 以下隱藏。
- 右：Compact 按鈕。

### Modal
- slate-900 50% 遮罩，置中，最大寬 448px，16px 圓角，1px slate-200 邊框，Dialog 陰影，內距 24px → sm 32px。
- 由上而下：technical tag → 20px 標題 → 14px 說明 → 表單（間距 16px，姓名與電話 sm 起並排）→ 撐滿寬的主要按鈕。
- 送出成功後表單隱藏，換成 teal-50 底、置中的成功訊息框。
- 右上 32px 關閉鈕，slate-400 圖示，hover 轉 slate-700 + slate-100 底。Esc 與點遮罩都可關閉。

### System Architecture Panel（招牌元件）
hero 右側那塊「繪圖紙」：
- slate-50（70%）底 + 點陣網格（`radial-gradient(#cbd5e1 1px, transparent 1px)`，24px 間距），1px slate-200 邊框，16px 圓角，內距 24px → sm 32px。
- 頂列：左邊 slate-500 英文大寫標題（面板底上 4.62:1），右邊 teal-600 的「● 狀態」文字。
- 兩張節點卡（白底、12px 圓角、Hairline lift），卡內左文右圖示：硬體節點圖示用 slate-100 底，軟體節點用 teal-50 底，暗示資料從灰流向青。
- 節點之間：16px 垂直細線 → 白底全圓角說明膠囊 → 16px 垂直細線。
- 底部：slate-200 細線上方三欄指標，中欄左右各一條分隔線；數字 14px 粗體 slate-900，最後一個關鍵數字改用 teal-700。

## Do's and Don'ts

### Do:
- **Do** 每個區段都用「青色英文眉標 → 粗體中文標題 → 灰色說明 → 卡片網格」這個順序。
- **Do** 讓區段底色在白與 slate-50 之間交替，並在區段底部加一條 slate-200 細線。
- **Do** 青字一律用 teal-700；teal-600 只用在圓點與邊框。
- **Do** 卡片保持白底、1px slate-200 邊框、16px 圓角、無陰影。
- **Do** 主要按鈕用 slate-900，hover 才轉 teal-700。每組 CTA 一顆主要、一顆次要。
- **Do** 每個可互動元件都有看得見的鍵盤 focus：按鈕與連結用 2px teal-600 外框（offset 2px），輸入框用 2px 青邊加 teal-100 光暈。
- **Do** 清單項目用 6px 的青色圓點，不用勾勾圖示或編號圓圈。

### Don't:
- **Don't** 用 slate-400 寫需要被讀的字。它在白底只有 2.56:1、在 slate-100 上 2.34:1；原檔的架構面板英文標題、導覽副標、數字小標都用了它，本系統已分別改為 slate-500、slate-500、slate-600。
- **Don't** 混用兩種青色當字色或按鈕底。teal-600 只給圓點、邊框、focus 外框；文字與按鈕 hover 底一律 teal-700。
- **Don't** 只靠 1px 邊框變色表示 focus，也不要拿掉 outline 卻沒有補上替代樣式。每個可互動元件都照 Components 裡 Buttons 與 Inputs 的 Focus 規格處理。
- **Don't** 把點陣網格鋪到其他區段。它只屬於架構示意圖。
- **Don't** 加入漸層、插圖或照片底圖；這套系統的視覺全部由文字、細線與圓點構成。

---

### 附註：html 裡沒有生效的 class [gap]
抽取時發現原始檔用 Tailwind CDN v3，以下 class 實際不會產生樣式，移植前要決定保留或補上：
- `border-brand-200`（成功訊息框）：config 只定義了 brand 50/100/500/600/700/900，沒有 200，邊框會退回 Tailwind 預設灰 `#e5e7eb`。
- `shadow-2xs`（架構連接線膠囊）與 `backdrop-blur-xs`（modal 遮罩）：這兩個是 Tailwind v4 才有的 class，v3 CDN 不認得。
- 架構面板英文標題、導覽副標：原檔為 `text-slate-400`（白底 2.56:1），本系統已改為 slate-500，移植時要一併改。
- 數字小標：原檔為 `text-slate-400`（slate-100 底 2.34:1），本系統已改為 slate-600，移植時要一併改。
- Focus：原檔的按鈕沒有 focus 樣式、輸入框是 `focus:outline-none focus:border-brand-600`。本系統已補上 Buttons 與 Inputs 的 Focus 規格，移植時要一併加上。
- 主色：原檔 tailwind.config 的 brand 是翡翠綠（50 #ecfdf5 / 100 #d1fae5 / 600 #059669 / 700 #047857 / 900 #064e3b），本系統改為上方 teal 色階，移植時把 config 的 brand 換成這五個值即可，class 名稱不用動。
- 主要按鈕 hover：原檔寫 `hover:bg-brand-600`（翡翠綠白字 3.77:1），本系統改為 teal-700，移植時要一併改。
- `brand-500 #10b981` 在 config 裡有定義，但全頁沒有用到，未列入 tokens。
