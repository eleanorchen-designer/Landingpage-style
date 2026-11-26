---
name: Landing Page Style — 科技風格
description: 帶青的深色虛空底、以 primary-color #2aabb0 點陣組成的馬賽克紋路、玻璃卡片、等寬字標籤、逐字串流的文字。全部視覺由程式生成，不使用任何插畫，也不使用漸層。
# 來源標記：[手繪風] 沿用 hand-drawn-style 的 DESIGN.md；[base] 沿用原始品牌規格；[proposed] 為本檔推導，尚未經使用者確認。
# 所有對比值由 WCAG 相對亮度公式算出（腳本見檔尾註解）。
# 2026-11-17 修訂：使用者要求「顏色還是使用原本的綠色」。紫、藍、洋紅的光譜全部拿掉，發光色只用原本的青綠色階。
# 2026-11-26 修訂：使用者要求「移除漸層，改用馬賽克作為紋路」，顏色維持 primary-color；名稱與檔名都改為「科技風格」（原 Neural Signal／DESIGN-neural-signal.md）。
#   所有 linear／radial／conic 漸層、極光、暗角、雜訊、模糊光暈全部拿掉，改成 primary-color 的方格點陣（mosaic）與純色。
colors:
  # ── Primitive ──────────────────────────────────────────
  void-950: "#030a0c"            # [proposed] 頁面底，帶青的近黑（與 [base] dark-bg #0f1b25 同色相、更暗）
  void-900: "#071215"            # [proposed] 區段面、卡片底
  void-800: "#0d1b1f"            # [proposed] 凸起面
  void-700: "#13252a"            # [proposed] 浮層、tooltip
  code-950: "#050d10"            # [proposed] console／程式碼區塊
  frost: "#edf6f5"               # [proposed] 帶青的前景色，取代純白；void-950 上 18.15
  teal-900: "#033d4e"            # [base] 只當面積，不當文字（1.69）
  teal-700: "#05556c"            # [base] 原 accent；只當面積（2.40）
  teal-600: "#00788c"            # [手繪風] accent；深底上 3.86，只當面積，不當小字
  product-teal: "#2aabb0"        # [base] primary-color，馬賽克與強調色都用它；7.17
  teal-400: "#3ddbd0"            # [proposed] 11.63
  teal-300: "#5ee6dc"            # [proposed] 13.14；只剩 console 關鍵字、行內程式碼
  teal-200: "#a3efe6"            # [proposed] 15.24
  teal-100: "#dcf0f0"            # [base] product-teal-100；16.88
  product-orange: "#f28f3b"      # [base] 8.33，青綠外唯一的暖色
  orange-300: "#ffb27a"          # [proposed] 11.31
  brand-logo: "#2b5068"          # [base] 只用在淺色版 logo；深底上改用 frost 單色 logo
  # ── Semantic ───────────────────────────────────────────
  primary: "#2aabb0"             # product-teal；= [base] product-primary
  bg-page: "#030a0c"             # void-950
  bg-surface: "#071215"          # void-900
  bg-raised: "#0d1b1f"           # void-800
  bg-overlay: "#13252a"          # void-700
  bg-code: "#050d10"             # code-950
  bg-glass: "rgba(7,18,21,0.62)"           # 導覽、浮層；搭配 backdrop-filter: blur(16px) saturate(1.4)
  bg-glass-fill: "rgba(237,246,245,0.04)"  # 玻璃卡片的填色，疊在 bg-surface 上
  text-primary: "#edf6f5"        # frost 100%：bg 18.15／surface 17.26／raised 16.00／overlay 14.41
  text-secondary: "#abb4b4"      # frost 72%：9.42／8.97／8.31／7.48
  text-tertiary: "#868e8e"       # frost 56%：5.96／5.67／5.26／4.73
  text-disabled: "#616869"       # frost 40%：3.51（停用文字不要求對比）
  text-inverse: "#030a0c"        # 放在 frost 與 primary 上的字
  text-highlight: "#2aabb0"      # 取代漸層字：標題關鍵詞、stat 數字；bg 7.17／surface 6.82／overlay 5.70／mosaic-dim 5.84
  text-link: "#2aabb0"           # primary；一律加底線，與 text-highlight 區分（2026-11-26 由 teal-300 改）
  line-subtle: "rgba(237,246,245,0.08)"    # 玻璃卡片外框、格線
  line-default: "rgba(237,246,245,0.12)"   # 分隔線、表格列
  line-strong: "rgba(237,246,245,0.20)"    # 表頭、時間軸
  line-control: "#7d8585"        # frost 52%：bg 5.29／overlay 4.20，輸入框外框
  accent: "#2aabb0"              # primary：連結、焦點環、選取指示、eyebrow 編號、console 提示符號
  accent-strong: "#3ddbd0"       # teal-400：狀態圓點
  focus-ring: "#2aabb0"          # bg 7.17／surface 6.82／overlay 5.70（非文字只需 3:1）
  overlay-hover: "rgba(237,246,245,0.06)"
  overlay-press: "rgba(237,246,245,0.10)"
  # 馬賽克（取代漸層、極光、網格、雜訊、暗角）
  # 一律是 primary 的「純色圓點」，靠點的大小、透明度與疏密做層次；不做任何漸層過渡。
  # 括號內：點的解析色（疊在 bg-page 上）／點與 bg 的對比／text-primary、text-secondary、text-tertiary 疊在點上的對比
  mosaic-dim: "rgba(42,171,176,0.16)"      # 直徑 2px；#092426／1.23／14.79、7.68、4.86 → 文字下方唯一允許的級數
  mosaic-mid: "rgba(42,171,176,0.28)"      # 直徑 3px；#0e373a／1.54／11.75、6.10、3.86
  mosaic-bright: "rgba(42,171,176,0.40)"   # 直徑 3.5px；#134a4e／2.01／9.02、4.69、2.96
  mosaic-peak: "rgba(42,171,176,0.64)"     # 直徑 4.5px；#1c7175／3.48／5.21、2.70、1.71 → 只放在沒有文字的格子
  mosaic-pitch: "8px"            # 點陣間距（格子邊長）；點畫在格子中央，對齊裝置像素
  mosaic-pitch-fine: "6px"       # 卡片內、sparkline 面積、虛點線
  # 資料視覺不受「無漸層」影響以外的部分沿用；見 Data visualization
  # 語意色（深底上的亮色版）
  positive: "#34d399"            # 10.38
  positive-bg: "rgba(52,211,153,0.12)"
  negative: "#f87171"            # 7.21
  negative-bg: "rgba(248,113,113,0.12)"
  warning: "#fbbf24"             # 11.95
  warning-bg: "rgba(251,191,36,0.12)"
  info: "#9cb8ff"                # 10.18
  info-bg: "rgba(91,140,255,0.12)"
  # 資料視覺（色盲檢查見 Data visualization；分類圖表需要不同色相，是青綠以外唯一的例外）
  viz-1: "#3ddbd0"               # teal-400，11.63
  viz-2: "#f28f3b"               # product-orange，8.33
  viz-3: "#6f8cff"               # 6.53
  viz-4: "#f06fd0"               # 7.50
  viz-5: "#edf6f5"               # frost，18.15
  viz-6: "#fbe36b"               # 15.49
  viz-other: "#616869"           # frost 40%，3.51，只給「其他」與基準線
  viz-grid: "rgba(237,246,245,0.06)"
mosaic:
  # 馬賽克紋路的生成參數（Generative visuals 第 1 項）
  shape: "圓點（circle），直徑 2／3／3.5／4.5px 對應 dim／mid／bright／peak（2026-11-26 使用者決定由方點改為圓點）"
  noise: "2D value noise，3 個 octave，基礎尺度 1/240px（卡片、小圖塊內 1/120px）；每個區段一個固定 seed"
  regions: "noise > 0.62 的地方填滿成塊（級數依 noise 高低分 mid／bright／peak），塊內隨機留空 25%"
  contours: "noise 落在 0.50 ± 0.014 與 0.38 ± 0.010 的格子畫成等高線（mid／dim），形成地形般的曲線"
  scatter: "其餘格子 1.5% 機率出現 dim 單點"
  quietZone: "與文字、表格、卡片重疊的格子（外擴 16px）一律降到 mosaic-dim"
  caps: "主視覺最高 peak；其他有內容的區段最高 mid；表格、表單、FAQ、長文的區段不放"
typography:
  # lineHeight / letterSpacing 為中文預設；*Latin 為 :lang(en) 覆寫值。中文規則沿用 [手繪風]。
  display:
    fontFamily: "Geist, Noto Sans TC, system-ui, sans-serif"     # [proposed]
    fontSize: "clamp(2.75rem, 1.2727rem + 6.3030vw, 6rem)"       # 44 → 96px [proposed]
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "0"
    lineHeightLatin: 0.95
    letterSpacingLatin: "-0.045em"                               # [proposed] Geist 是窄幾何體，可收得比 Jost 緊
  h1:
    fontFamily: "Geist, Noto Sans TC, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.4545rem + 3.3939vw, 4rem)"       # 36 → 64px [手繪風]
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0"
    lineHeightLatin: 1.0
    letterSpacingLatin: "-0.035em"
  h2:
    fontFamily: "Geist, Noto Sans TC, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.2955rem + 1.9394vw, 2.75rem)"    # 28 → 44px [手繪風]
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0"
    lineHeightLatin: 1.1
    letterSpacingLatin: "-0.025em"
  h3:
    fontFamily: "Geist, Noto Sans TC, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.2045rem + 0.7273vw, 1.75rem)"   # 22 → 28px
    fontWeight: 500
    lineHeight: 1.35
    lineHeightLatin: 1.25
    letterSpacingLatin: "-0.015em"
  h4:
    fontFamily: "Geist, Noto Sans TC, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.0682rem + 0.2424vw, 1.25rem)"   # 18 → 20px
    fontWeight: 500
    lineHeight: 1.4
  lead:
    fontFamily: "Geist, Noto Sans TC, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.0682rem + 0.2424vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "Geist, Noto Sans TC, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75                                             # :lang(en) 1.55
  small:
    fontFamily: "Geist, Noto Sans TC, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
  eyebrow:
    fontFamily: "Geist Mono, IBM Plex Mono, ui-monospace, monospace"   # [proposed] 區段小標一律等寬
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"                                      # 英文全大寫才加
    textTransform: "uppercase"
  mono:
    fontFamily: "Geist Mono, IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeatureSettings: "'tnum' 1, 'zero' 1"
  button:
    fontFamily: "Geist, Noto Sans TC, system-ui, sans-serif"
    fontSize: "0.9375rem"                                        # 15px
    fontWeight: 500
    lineHeight: 1
  stat:
    fontFamily: "Geist, Noto Sans TC, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.3636rem + 4.8485vw, 5rem)"        # 40 → 80px [proposed]
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeatureSettings: "'tnum' 1"
rounded:
  xs: "4px"       # 勾選框、高亮框
  sm: "8px"       # tooltip、chip 內圖示、程式碼行內
  md: "12px"      # 輸入框、FAQ 列、console、按鈕外的小卡
  lg: "16px"      # 玻璃卡片內的面板、浮層
  xl: "24px"      # 玻璃卡片（主力）、prompt bar、裝置框
  2xl: "32px"     # bento 大格、區段容器
  full: "999px"   # 按鈕、徽章、導覽項
spacing:
  space-1: "4px"    # 全部沿用 [base]
  space-2: "8px"
  space-3: "16px"
  space-4: "24px"
  space-5: "32px"
  space-6: "48px"
  space-7: "64px"
  space-8: "96px"
  space-9: "128px"
  space-10: "160px"
elevation:
  # 深底上的層次靠「1px 內緣線 + 實心外環 + 馬賽克」，不用模糊光暈。黑色投影只用來把浮層從底上分開。
  none: "none"
  hairline: "inset 0 0 0 1px rgba(237,246,245,0.08)"
  glass: "inset 0 1px 0 rgba(237,246,245,0.08), inset 0 0 0 1px rgba(237,246,245,0.08), 0 24px 48px -24px rgba(0,0,0,0.6)"
  float: "inset 0 1px 0 rgba(237,246,245,0.06), 0 32px 64px -16px rgba(0,0,0,0.7)"
  ring-sm: "0 0 0 1px rgba(42,171,176,0.6)"                          # 取代 glow-sm
  ring-md: "0 0 0 1px #2aabb0, 0 0 0 4px rgba(42,171,176,0.16)"      # 取代 glow-md：實心雙環，沒有模糊
  device: "0 0 0 1px rgba(237,246,245,0.10), 0 40px 80px -20px rgba(0,0,0,0.8)"   # 背後的光改成 mosaic-halo
motion:
  duration-instant: "80ms"
  duration-micro: "160ms"
  duration-swap: "240ms"
  duration-enter: "600ms"
  duration-reveal: "800ms"
  duration-decode: "600ms"       # 亂碼解碼
  duration-scan: "1200ms"        # 掃描列
  duration-pulse: "2000ms"       # 狀態圓點脈衝
  duration-trail: "6000ms"       # 點陣光點繞邊一圈
  duration-orb: "8000ms"         # 點陣球呼吸
  mosaic-fps: "8"                # 馬賽克的所有變化都以每秒 8 格跳動，不做平滑補間
  stream-token: "28ms"           # 逐字串流，每個 token 的間隔
  stagger-item: "60ms"           # [base]
  easing-out: "cubic-bezier(0.16, 1, 0.3, 1)"        # [proposed] expo-out，快進慢停
  easing-in-out: "cubic-bezier(0.65, 0, 0.35, 1)"
  easing-step: "steps(n)"        # 馬賽克、光點、掃描列一律用 steps，一步 = 一格 mosaic-pitch
  easing-linear: "linear"
  enter-offset: "12px"
  enter-blur: "8px"              # 標題的模糊進場
  press-scale: "0.97"
components:
  button-primary:
    backgroundColor: "{colors.frost}"         # 白鍵，最強對比
    textColor: "{colors.text-inverse}"        # 18.08
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    height: "48px"
    padding: "0 22px"
    shadow: "{elevation.none}"
    shadowHover: "{elevation.ring-md}"        # 外環層 opacity 0 → 1
    pressScale: "{motion.press-scale}"
  button-signal:
    backgroundColor: "{colors.primary}"       # 純色，不做漸層
    textColor: "{colors.text-inverse}"        # 7.17
    rounded: "{rounded.full}"
    height: "48px"
    padding: "0 24px"
    shadow: "{elevation.ring-md}"
    hover: "frost 35% 的 6px 點陣由左往右一格一格蓋過按鈕（8 步、600ms）"
    icon: "sparkle（左側 16px）"
  button-glass:
    backgroundColor: "{colors.bg-glass-fill}"
    textColor: "{colors.text-primary}"
    border: "1px solid {colors.line-default}"
    rounded: "{rounded.full}"
    height: "48px"
    padding: "0 22px"
    backdropFilter: "blur(12px)"
    overlayHover: "{colors.overlay-hover}"
  button-ghost:
    textColor: "{colors.text-secondary}"
    textColorHover: "{colors.text-primary}"
    trailingIcon: "arrow-right，hover 右移 2px"
  button-sizes:
    lg: { height: "48px", padding: "0 22px" }
    md: { height: "40px", padding: "0 18px" }
    sm: { height: "32px", padding: "0 14px", fontSize: "0.8125rem" }   # 點擊範圍外擴到 44px
  nav:
    backgroundColor: "{colors.bg-glass}"
    backdropFilter: "blur(16px) saturate(1.4)"
    height: "64px"
    borderBottom: "1px solid {colors.line-subtle}"
    position: "sticky top 0，滿寬"
    textColor: "{colors.text-secondary}"
    textColorActive: "{colors.text-primary}"
    bottomEdge: "dotted-rule（mosaic-bright），捲動後才出現"
  dotted-rule:
    # 取代 gradient-hairline
    dot: "2px 圓點"
    pitch: "{colors.mosaic-pitch-fine}"
    color: "{colors.mosaic-bright}"
    use: "區段分隔、導覽下緣、stat-row 直線"
  badge-ai:
    backgroundColor: "{colors.bg-glass-fill}"
    border: "1px solid {colors.primary}"
    textColor: "{colors.text-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    height: "28px"
    padding: "0 12px"
    leadingIcon: "sparkle 12px，填 primary"
  eyebrow:
    typography: "{typography.eyebrow}"
    textColor: "{colors.text-tertiary}"
    format: "[ 01 ] SIGNAL — 編號用 accent，其餘 text-tertiary"
  glass-card:
    backgroundColor: "{colors.bg-glass-fill}"
    rounded: "{rounded.xl}"
    padding: "32px"
    shadow: "{elevation.glass}"
    backdropFilter: "none（卡片後面是純色或 mosaic-dim，不需要）"
  beam-card:
    extends: "glass-card"
    border: "SVG 圓角矩形：底層 2px 圓點虛線（mosaic-mid，間距 6px）＋一段 10 顆 primary 實心點沿邊框跑"
    trailDuration: "{motion.duration-trail}，steps(周長 ÷ 6)"
    limit: "一個視窗最多一張"
  spotlight-card:
    extends: "glass-card"
    spotlight: "游標周圍半徑 120px 的硬邊圓（clip-path: circle），圓內露出 mosaic-mid 的 6px 點陣"
    borderHover: "{elevation.ring-sm}"
    trigger: "pointermove，只在 @media (hover: hover)"
  prompt-bar:
    backgroundColor: "{colors.bg-glass}"
    backdropFilter: "blur(16px)"
    rounded: "{rounded.xl}"
    minHeight: "64px"
    padding: "12px 12px 12px 20px"
    border: "1px solid {colors.line-default}"
    borderFocus: "1px solid {colors.primary} + {elevation.ring-md}"
    leadingIcon: "sparkle 20px"
    submit: "40px 圓形 button-primary，arrow-up 圖示"
    suggestions: "下方一排 chip，最多四顆"
    caret: "2px 寬、accent 色、1s steps(2) 閃爍"
  console:
    backgroundColor: "{colors.bg-code}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.line-subtle}"
    headerHeight: "40px"
    headerContent: "左：三個 8px 圓點（frost 20%）；中：檔名或指令，mono、text-tertiary；右：狀態圓點 + 狀態字"
    padding: "20px 24px"
    typography: "{typography.mono}"
    promptPrefix: "› （accent）"
    syntax: "關鍵字 teal-300、字串 teal-100、數字 orange-300、註解 text-tertiary"
  response-card:
    extends: "glass-card"
    avatar: "28px 圓形，底 primary，中間 sparkle 14px（text-inverse）"
    header: "名稱 + mono 時間戳"
    body: "逐字串流進場，結尾閃爍游標"
    sources: "底部 chip 列，每顆是一個真實來源（頁面、規格書、報告）"
  status-dot:
    size: "8px"
    color: "{colors.accent-strong}"
    pulse: "外圈 scale 1 → 2.4、opacity 0.6 → 0，{motion.duration-pulse}"
    label: "右側 mono 文字，例如 LIVE、ONLINE、SYNCING"
  stat-row:
    numberTypography: "{typography.stat}"
    numberColor: "{colors.text-highlight}"
    unitTypography: "{typography.h3}"
    captionTypography: "{typography.mono}"
    captionColor: "{colors.text-tertiary}"
    divider: "直向 dotted-rule"
    columns: "4；手機 2"
  metric-tile:
    extends: "glass-card"
    padding: "20px"
    label: "eyebrow"
    value: "h2 + mono 單位"
    sparkline: "1.5px 折線 primary，下方面積填 6px 點陣（mosaic-bright）"
  device-frame:
    backgroundColor: "{colors.bg-surface}"
    rounded: "{rounded.xl}"
    shadow: "{elevation.device}"
    barHeight: "40px"
    barBackground: "{colors.bg-raised}"
    border: "1px solid {colors.line-default}"
    behind: "mosaic-halo：框外一圈點陣，越靠近框越密（peak → dim 分四級，每級一圈）"
  chip:
    backgroundColor: "{colors.bg-glass-fill}"
    textColor: "{colors.text-secondary}"
    border: "1px solid {colors.line-subtle}"
    rounded: "{rounded.full}"
    height: "32px"
    padding: "0 14px"
    selectedBorder: "1px solid {colors.accent}"
    selectedTextColor: "{colors.text-primary}"
  input:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    placeholderColor: "{colors.text-tertiary}"
    rounded: "{rounded.md}"
    height: "48px"
    padding: "0 16px"
    border: "1px solid {colors.line-control}"
    focusBorder: "1px solid {colors.accent} + {elevation.ring-sm}"
    errorBorder: "1px solid {colors.negative}"
  faq-item:
    backgroundColor: "transparent"
    borderBottom: "1px solid {colors.line-default}"
    padding: "24px 0"
    question: "h4，text-primary"
    marker: "mono 編號 01／02…（text-tertiary）+ 右側加號"
    answerEnter: "逐字串流（最多 400 字；更長的直接淡入）"
  data-tooltip:
    backgroundColor: "{colors.bg-overlay}"
    textColor: "{colors.text-primary}"            # 14.57
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    shadow: "{elevation.float}"
    border: "1px solid {colors.line-default}"
    valueTypography: "{typography.mono}"
---

<!-- 2026-11-17 建立，2026-11-26 改版（移除漸層、改用馬賽克、點形改為圓點）。由手繪風推導出的第二套風格，目標是「AI 感非常重」且不使用任何插畫。對比值依 WCAG 2.x 相對亮度、Machado 2009 色盲模擬、CIE76 ΔE 計算；要重算時照檔內公式即可。馬賽克的對比以「點的解析色」計算：primary 依透明度疊在 bg-page 上的顏色。 -->

## Overview

**科技風格**（原名 Neural Signal）是一套 AI 風格。它把能源數據畫成「正在被運算的訊號」：帶青的黑色虛空底、由 primary-color #2aabb0 圓點組成的馬賽克紋路、玻璃卡片、沿邊跑的點陣光點、等寬字的標籤、一個字一個字串流出來的文字。目標是第一眼就讀成「AI 時代的能源平台」，而且這個感覺要很重，不是點綴。

2026-11-26 起本風格**不使用任何漸層**。原本的極光、漸層字、漸層按鈕、光束、暗角、雜訊與模糊光暈全部拿掉；層次改由馬賽克的疏密與四個透明度級數表現，像低解析度的資料地圖。

它與 手繪風 是兩套平行的風格，共用骨架（間距階、12 欄、流動字級公式、中文行高規則、不編造內容），換掉皮膚（底色、紋路、字體、動態、視覺素材）。

五條原則：

1. **黑底，點陣就是層次。** 頁面是 `void-950`。卡片靠內緣 1px 的線浮起；區段的氣氛靠背後的馬賽克（[proposed]）。
2. **只用 primary-color。** 馬賽克、強調字、主按鈕、外環全部是 `primary` #2aabb0 的純色或固定透明度，不做色彩過渡。唯一的暖色是 `product-orange`；唯一的例外是資料圖表的分類色。
3. **畫面都由程式生成，不用插畫、不用漸層。** 馬賽克、節點網路、波形、資料流、點陣球全部用 CSS／SVG／Canvas 依 token 產生。不畫等角插圖，不用任何插畫 skill（`riso-illustration` 或其他），也不放 AI 生成的圖片。見 Generative visuals。
4. **文字像在被運算。** 小標是等寬字的 `[ 01 ] SIGNAL`；重點詞用 `text-highlight`；說明文字可以逐字串流；數字先亂碼再解碼（[proposed]）。
5. **長得像 AI，不等於說自己是 AI。** 視覺語彙可以很重，宣稱必須是真的。沒有 AI 功能的產品不寫「AI 驅動」；prompt bar、console、回答卡裡的內容都是真實文案或真實資料（[base]「不編造」的延伸，見 Content rules）。

Token 分三層，與 手繪風 相同：Primitive → Semantic → Component。頁面寫 Semantic，元件寫 Component，不直接寫色碼。

## Content rules（AI 風格特有）

這一節先於所有視覺規則。

- **不宣稱沒有的能力。** 「AI」「智能預測」「自動優化」這類詞只能用在品牌方確認存在的功能上。視覺上的 sparkle、馬賽克、串流文字不代表功能，所以它們可以用在任何區段；但它們旁邊的文字要經得起查核。
- **Prompt bar 只有兩種合法用法：** 背後真的有功能（站內搜尋、能源健檢表單的第一題）；或者是標明「示意」的靜態展示，裡面的問題與回答是核可文案。不做假裝能輸入、實際沒反應的輸入框。
- **Console 與回答卡裡的數值**沿用 [base] 規則：只放規格書上的值、量測項目與單位、或狀態文字。範例資料要標「示意」，而且不帶具體讀數。
- **來源 chip 必須連到真的頁面或文件。**
- **串流文字只是進場方式。** 內容是固定文案，不是即時生成，也不暗示即時生成。
- **馬賽克是紋路，不是資料。** 背景點陣的形狀由雜訊產生，不代表任何地圖、案場分布或數據；不要在旁邊加會讓人這樣解讀的說明。真的要畫分布圖，用 Data visualization 的規則畫真實資料。

## Color

### 虛空與前景

| Token | 值 | 用途 | `text-primary` 在上面 |
|---|---|---|---|
| `bg-page` | #030a0c | 頁面底 | 18.15 |
| `bg-surface` | #071215 | 區段面、輸入框、裝置框 | 17.26 |
| `bg-raised` | #0d1b1f | 凸起面、裝置框頂列 | 16.00 |
| `bg-overlay` | #13252a | tooltip、下拉選單 | 14.41 |
| `bg-code` | #050d10 | console | — |

虛空底與前景色都往青綠偏一點（色相與 [base] 的深色區段 #0f1b25 相同），讓黑、白、點陣同一個色溫。前景色是 `frost` #edf6f5，不用純白：純白在黑底上會暈開（halation），長段內文尤其明顯。

**透明度系統**（[手繪風] 的做法，方向反過來：深底上的 `frost` 百分比）。

| Token | 混合比例 | 解析值 | bg | surface | raised | overlay | 用途 |
|---|---|---|---|---|---|---|---|
| `text-primary` | 100% | #edf6f5 | 18.15 | 17.26 | 16.00 | 14.41 | 標題、內文 |
| `text-secondary` | 72% | #abb4b4 | 9.42 | 8.97 | 8.31 | 7.48 | 說明文字 |
| `text-tertiary` | 56% | #868e8e | 5.96 | 5.67 | 5.26 | 4.73 | 圖說、時間戳、eyebrow |
| `line-control` | 52% | #7d8585 | 5.29 | 5.03 | 4.66 | 4.20 | 輸入框外框（≥ 3:1） |
| `text-disabled` | 40% | #616869 | 3.51 | — | — | — | 停用文字 |
| `line-strong` | 20% α | — | — | — | — | — | 表頭、時間軸 |
| `line-default` | 12% α | — | — | — | — | — | 分隔、表格列 |
| `line-subtle` | 8% α | — | — | — | — | — | 卡片外框、格線 |

線用 rgba 而不是解析值：它們常常疊在馬賽克上，要讓底下的點透出來。

### Primary 與青綠色階

| Token | 值 | bg 對比 | overlay 對比 | 角色 |
|---|---|---|---|---|
| `teal-900` | #033d4e | 1.69 | — | 熱力圖最低階（[base]） |
| `teal-700` | #05556c | 2.40 | — | 熱力圖（[base] 原 accent） |
| `teal-600` | #00788c | 3.86 | 3.07 | 熱力圖、照片疊色（[手繪風] accent） |
| **`primary`** = `product-teal` | #2aabb0 | 7.17 | 5.70 | **馬賽克、`text-highlight`、`accent`（連結、焦點環、選取）、`button-signal`、badge 外框、外環、sparkline**（[base] product-primary） |
| `teal-400` | #3ddbd0 | 11.63 | 9.23 | `accent-strong`：狀態圓點、`viz-1` |
| `teal-300` | #5ee6dc | 13.14 | 10.43 | console 關鍵字、行內程式碼 |
| `teal-200` | #a3efe6 | 15.24 | 12.10 | 熱力圖最高階 |
| `teal-100` | #dcf0f0 | 16.88 | 13.40 | console 字串（[base] product-teal-100） |

- 深的三階（900／700／600）在深底上對比不到 4.5，**只當面積**，不當文字，也不當唯一的邊界。
- `primary` 可以當任何大小的文字（bg 7.17、overlay 5.70、mosaic-dim 5.84）。
- `product-orange` #f28f3b（8.33）保留給「警示、尖峰、改善前」，是青綠外唯一的暖色（[base]）。
- 連結、焦點環、選取也統一用 `primary`（2026-11-26 使用者決定）。連結與 `text-highlight` 同色，所以**連結一律加底線**，強調字不加底線；焦點環是 2px 實線 + 2px 間距，與 `ring-md` 的外環形狀不同，不會混淆。

### 馬賽克（取代六種漸層）

本風格不用漸層。原本六種漸層各自的工作改由下面的做法接手：

| 原 token | 改成 | 做法 |
|---|---|---|
| `gradient-signal` | `primary` 純色 | `button-signal`、`badge-ai` 外框、回答卡頭像、prompt bar focus 外框 |
| `gradient-text` | `text-highlight` #2aabb0 | 標題裡的一個關鍵詞或一整行、stat 數字；一個畫面最多兩處 |
| `gradient-depth` | 馬賽克的 `peak`／`bright` 塊 | 大面積的「深度」靠點的密度，不靠色彩過渡 |
| `gradient-hairline` | `dotted-rule` | 2px 圓點、6px 間距、`mosaic-bright` |
| `gradient-beam` | 點陣光點（trail） | 圓點虛線外框，一段 primary 實心點沿邊框一格一格跑 |
| `gradient-vignette` | 拿掉 | 馬賽克本身在區段邊緣變稀疏，相鄰區段自然接起來 |

**四個級數。** 馬賽克只有四種點，全部是 `primary`：

| Token | 透明度 | 直徑 | 點的解析色 | 點／bg | 疊在點上：primary／secondary／tertiary | 用在 |
|---|---|---|---|---|---|---|
| `mosaic-dim` | 16% | 2px | #092426 | 1.23 | 14.79／7.68／4.86 | 文字下方、卡片後面（**唯一可以在文字下方的級數**） |
| `mosaic-mid` | 28% | 3px | #0e373a | 1.54 | 11.75／6.10／3.86 | 有內容區段的空白處、等高線、卡片內點陣 |
| `mosaic-bright` | 40% | 3.5px | #134a4e | 2.01 | 9.02／4.69／2.96 | 主視覺空白處、`dotted-rule`、sparkline 面積 |
| `mosaic-peak` | 64% | 4.5px | #1c7175 | 3.48 | 5.21／2.70／1.71 | 只在主視覺與裝置框外圈的空白處 |

- 點是**圓點**（2026-11-26 對照參考圖由方點改為圓點），圓心在 8px 格子的中央；Canvas 依 `devicePixelRatio` 縮放，同一級的點合成一條路徑一次填色。
- 級數之間沒有過渡：一格要嘛是某一級，要嘛是空的。
- 參考圖的質感：大部分格子是空的；有內容的地方成塊或成線，像低解析度的地形圖。

### 語意色

深底上的亮色版：`positive` #34d399（10.48）、`negative` #f87171（7.28）、`warning` #fbbf24（12.06）、`info` #9cb8ff（10.28）。底色是同色 12% 透明度。語意色只表示狀態。

## Fields（馬賽克紋路）

AI 感的主要來源。每個區段的背景只有兩層：

1. **底**：`bg-page` 或 `bg-surface`。
2. **馬賽克**：一張與區段同大的 Canvas（或預先輸出的 SVG／PNG），依 frontmatter `mosaic` 的參數畫點陣。

原本的極光、網格、雜訊、暗角全部拿掉。沒有漸層之後也不會有色階斷層，所以不需要雜訊。

**馬賽克怎麼畫（每個區段一個固定 seed，畫面穩定、可重現）：**

1. 每 8px 一格，算一次 2D value noise（3 個 octave，基礎尺度 1/240px；卡片、小圖塊內用 1/120px，塊才不會比容器大）。
2. **成塊**：noise > 0.62 的格子依高低分成 `mid`（0.62–0.74）、`bright`（0.74–0.85）、`peak`（> 0.85），塊內隨機留空 25%，邊緣才不會像色塊。
3. **等高線**：noise 落在 0.50 ± 0.014 的格子畫 `mid`、落在 0.38 ± 0.010 的格子畫 `dim`，形成參考圖那種彎曲的點線。
4. **散點**：其餘格子 1.5% 機率出現一顆 `dim`。
5. **安靜區**：與文字、表格、卡片重疊的格子（外擴 16px）一律降到 `mosaic-dim`。
6. **上限**：依下表把超過上限的格子降級。

**強度上限：**

| 位置 | 最高級數 | 驗算 |
|---|---|---|
| 主視覺 | `peak`（安靜區 `dim`） | 文字只會疊在 `dim` 上：`text-tertiary` 4.86 |
| 有內文、說明文字的區段 | `mid`（安靜區 `dim`） | 同上 |
| 表格、表單、FAQ、長文 | 不放 | — |

**哪些區段放馬賽克：** 主視覺一定放；之後每隔一個區段放一次，不連續兩段都放。頁尾前的收尾區段可以放一次點陣球（見 Generative visuals）。

## Typography

- **字體換成 Geist + Geist Mono**（[proposed]）。Geist 是窄的幾何無襯線體，負字距下仍然清楚，等寬版與比例版同一家族，是目前 AI 產品最常見的字體語彙。中文仍用 Noto Sans TC（[base]）。兩者都在 Google Fonts。要保留 Jost 的話，把 `fontFamily` 換回 Jost、Latin 字距放回 −0.03em 即可，其餘規則不變。
- **等寬字的角色變大。** 區段小標（`eyebrow`）、數值、單位、時間戳、狀態字、console 全部用 Geist Mono。這是本風格「在運算」的主要語氣，也和圓點的格子感一致。
- 字重：標題 500、內文 400、`eyebrow` 500。
- **Eyebrow 格式**：`[ 01 ] ENERGY SIGNAL` 或 `// 01 — 能源訊號`。編號用 `accent`，其餘 `text-tertiary`。中文 eyebrow 不加字距、不全大寫。
- **強調字**：`text-highlight`（primary 純色）用在標題的一個關鍵詞或一整行、stat 數字。不用在內文、連結、按鈕文字；一個畫面最多兩處。
- **中文行高與字距沿用 [手繪風]** 的兩組值：中文標題行高 1.15–1.35、字距 0；Latin 那組收得更緊（`display` −0.045em、`h1` −0.035em、`h2` −0.025em），因為 Geist 比 Jost 窄。
- 內文段落最寬 34em（[base]）。

### 流動字級

公式與區間同 [base]（375–1200px；斜率 =（最大 − 最小）÷ 825 × 100；截距 =（最小 − 斜率 ÷ 100 × 375）÷ 16）。只有兩個 token 比 手繪風 大：

| Token | `clamp()` | ≤375px | 768px | 1024px | ≥1200px |
|---|---|---|---|---|---|
| `display` | `clamp(2.75rem, 1.2727rem + 6.3030vw, 6rem)` | 44 | 68.8 | 84.9 | 96 |
| `stat` | `clamp(2.5rem, 1.3636rem + 4.8485vw, 5rem)` | 40 | 59.1 | 71.5 | 80 |

其餘（`h1`–`h4`、`lead`、`body`、`small`）沿用 手繪風。`display` 最大值是最小值的 2.18 倍，仍在 2.5 倍上限內。

## Spacing & Layout

- 間距階、12 欄、內容最寬 1200px、左右留邊 24／16px 全部沿用（[base]）。
- 主視覺可以滿版到 1440px，讓馬賽克延伸到視窗邊緣。
- **Bento 格**是主要的內容排法（[base] 的寬窄交錯 7/5、5/7、5/3/4 保留），格與格之間 16px（比 手繪風 的 24px 緊，玻璃卡片靠近才像一塊面板）。間距都是 8 的倍數，剛好落在馬賽克的格線上。
- **主視覺置中**：badge-ai → `display` 標題（一個 `text-highlight` 關鍵詞）→ `lead` → 按鈕或 prompt bar → 裝置框。馬賽克在文字四周成塊，文字正下方是安靜區。
- 其他區段標題靠左，eyebrow 在上。
- 斷點沿用 手繪風：<768／768–1023／1024–1199／≥1200。

## Elevation

深底上陰影幾乎看不見，原本靠模糊光暈；現在改成實心外環與馬賽克：

| Token | 做法 | 用在 |
|---|---|---|
| `none` | — | 頁面上的文字、圖表 |
| `hairline` | 1px 內緣線 8% | 表格容器、小面板 |
| `glass` | 上緣 1px 高光 + 1px 內緣線 + 一層往下的黑影 | 玻璃卡片（主力） |
| `float` | 上緣高光 + 大黑影 | tooltip、下拉選單、浮層 |
| `ring-sm` | 1px primary 60% 外框 | 輸入框 focus、chip hover、spotlight-card hover |
| `ring-md` | 1px primary 實心 + 4px primary 16% 外環（兩圈都是硬邊） | 主按鈕 hover、prompt bar focus、`button-signal` |
| `device` | 1px 外框 + 深黑影 | 裝框的平台截圖；框外的「光」改成 mosaic-halo |

規則：
- **外環用 opacity 動。** 把外環放在 `::after`，hover 時動 `opacity`，不直接改 `box-shadow`。
- **不用模糊光暈。** `box-shadow` 的模糊半徑只給黑色投影用；任何青綠色的東西都不模糊。
- **一個視窗最多一處 mosaic-halo。**
- **毛玻璃**（`backdrop-filter`）只用在：導覽、prompt bar、`button-glass`。一個視窗同時可見的毛玻璃元素不超過六個（效能）。

## Components

**Button。** 膠囊形、48／40／32px。

- `button-primary`：`frost` 底、`void` 字（18.15），平時沒有陰影；hover 時背後的 `ring-md` 外環淡入，按下縮到 0.97。
- `button-signal`：整顆是 `primary` 純色，左邊一顆 sparkle，平時就帶 `ring-md`。一頁一顆，用在最重要的那個動作。hover 時一層 frost 35% 的 6px 點陣由左往右一格一格蓋過按鈕（8 步、600ms），取代原本的白色高光掃過。
- `button-glass`：次按鈕。半透明填色、1px 外框、毛玻璃。
- `button-ghost`：文字加右箭頭，hover 時箭頭右移 2px。
- 一個畫面一顆實心按鈕（`primary` 或 `signal` 二選一）（[base]）。

**Nav。** 滿寬、64px、黏在頂端、`bg-glass` 加 `blur(16px) saturate(1.4)`。捲動超過 8px 後，下緣出現 `dotted-rule`。左邊 frost 單色 logo，中間選單，右邊語言切換與一顆 40px `button-primary`。手機收成漢堡，面板是全螢幕的 `bg-page`，選單項逐項串流進場。

**Dotted-rule。** 取代漸層細線：2px 圓點、6px 間距、`mosaic-bright`，橫向或直向。用在區段分隔、導覽下緣、stat-row 的直線。

**Badge-ai。** 28px 膠囊，1px `primary` 實線外框，左邊 12px sparkle（填 `primary`），文字是 `eyebrow`。用在主視覺標題上方，內容是一則真實的消息或分類（例如「ENERLYZER 平台」），不是空泛的「AI POWERED」。

**Glass-card。** `bg-glass-fill`、`xl` 圓角、`glass` 陰影、32px 內距。內容順序：eyebrow → `h3` → 一行 `small`（`text-secondary`）→ 視覺（生成式圖形、sparkline 或截圖局部）。

**Beam-card。** 玻璃卡片的外框換成 SVG 圓角矩形：底層是 2px 圓點虛線（`mosaic-mid`、6px 間距），上面一段 10 顆 `primary` 實心點沿著邊框一格一格跑，6 秒一圈，動畫用 `steps(周長 ÷ 6)`，每一步剛好跳一顆點。整頁最重要的一張卡才用，一個視窗最多一張。

**Spotlight-card。** 游標在卡片上移動時，游標周圍半徑 120px 的**硬邊圓**（`clip-path: circle()`）內露出 `mosaic-mid` 的 6px 點陣，像一面放大鏡；卡片外框換成 `ring-sm`。用在 bento 格。只在支援 hover 的裝置啟用。

**Prompt-bar。** 64px 高、`xl` 圓角的毛玻璃長條：左邊 sparkle、中間輸入（或示意文字加閃爍游標）、右邊 40px 圓形送出鈕。focus 時外框換成 1px `primary` 並帶 `ring-md`。下方最多四顆 chip 當建議問題。使用條件見 Content rules。

**Console。** `bg-code` 底、`md` 圓角的終端機區塊。頂列 40px：三個圓點、中間 mono 檔名、右邊狀態圓點。內文 Geist Mono 14px，每行開頭 `›`。用來呈現「感測 → 閘道 → 平台」的資料流、API 回應或報表摘要。行逐一出現（每行 120ms），最後一行帶閃爍游標。

**Response-card。** 回答卡：左上 28px `primary` 圓形頭像（中間 sparkle），旁邊名稱與 mono 時間戳；內文逐字串流；底部一排來源 chip。用在 FAQ 的展開答案、案例摘要、產品說明的「重點整理」。

**Status-dot。** 8px `accent-strong` 圓點，外圈脈衝（2 秒一次），右邊 mono 狀態字（LIVE、ONLINE、SYNCING、已連線）。只用在真實狀態或明確的示意。

**Stat-row。** 一排最多四項：`stat` 大數字用 `text-highlight`、單位用 `h3`、下面一行 mono 說明（範圍與年份）。項目之間是直向的 `dotted-rule`。進入畫面時數字先亂碼再解碼（Motion 第 5 項）。數字必須是品牌方提供的真實值（[base]）。

**Metric-tile。** 小型玻璃卡：eyebrow 標籤、`h2` 數值加 mono 單位、底部一條 sparkline（1.5px `primary` 折線，下方面積填 6px 點陣 `mosaic-bright`）。

**Device-frame。** `xl` 圓角、`device` 陰影、40px `bg-raised` 頂列（三個圓點、mono 網址膠囊）。框外一圈 mosaic-halo：越靠近框越密，分四級各一圈（peak → bright → mid → dim），外圍再交給一般馬賽克。進入畫面時一列 `peak` 圓點由上往下一格一格掃過一次。

**Chip、Input、FAQ、Tooltip。** 見 frontmatter。FAQ 改成無底色的列，以 1px 線分隔，左邊 mono 編號，答案用回答卡的串流進場。

**沿用的元件。** 客戶 marquee（logo 改成 frost 56% 單色，hover 回到 100%）、橫向時間軸（線用 `line-strong`，最新節點是帶脈衝的 `status-dot`）。

## Generative visuals（取代插畫）

**本風格不使用插畫，也不使用漸層。** 不畫等角插圖、不用 riso／網點／蠟筆風格的插畫、不呼叫任何插畫 skill、不放 AI 生成的圖片、不用圖庫插畫或 3D 渲染物件。所有視覺都是下面七種之一，由程式依 token 產生，顏色只取 `primary` 與 `frost` 百分比。

（馬賽克是規則化的圓點紋路，與插畫用的 riso／半色調網點不同：它沒有手繪邊緣、沒有顆粒、沒有疊印偏移，形狀完全由雜訊參數決定。）

| # | 視覺 | 做法 | 用在 | 資料來源 |
|---|---|---|---|---|
| 1 | 馬賽克場 | Canvas 依 `mosaic` 參數畫圓點：成塊＋等高線＋散點，安靜區降級 | 主視覺、隔段背景 | 純裝飾，不代表地圖或分布 |
| 2 | mosaic-halo | 以裝置框為中心，一圈一圈降級的點陣 | 裝置框、截圖背後 | 純裝飾 |
| 3 | 節點網路 | Canvas：節點是 3px 圓點、連線是 2／4px 的點線；游標附近的節點與連線換成 `primary` 實心 | 「IoT 連網」「多案場」主題的主視覺 | 節點數與分群對應真實架構（例如閘道數、感測器種類），不寫具體數量就不做精確對應 |
| 4 | 資料流線 | SVG 路徑：底線 `line-strong`；上面一條 2px 圓點虛線（2／6px）以 `steps()` 沿路徑移動；端點是方形節點 | 「感測 → 閘道 → 平台」流程、架構圖 | 架構必須是真實的系統架構；每個端點旁邊有文字標籤（mono） |
| 5 | 波形 | SVG 負載曲線：線用 `primary` 2px，下方面積填 6px 點陣 `mosaic-bright` | 能源、用電、節能主題的區段 | 真實資料畫成真實曲線；示意用的波形不帶座標軸與數字 |
| 6 | 點陣球 | 半色調球體：格子越靠近受光點，點越大、級數越高；外面一圈圓點虛線環慢慢轉 | 頁尾前的收尾區段、空狀態 | 純裝飾，一頁一顆 |
| 7 | 掃描與解碼 | 一列 `peak` 圓點一格一格掃過截圖；文字或數字由亂碼解碼成真值 | 裝置框、stat-row、eyebrow | 解碼後的值必須是真值 |

規則：
- **能用文字說清楚的，不畫。** 架構與流程以文字標籤為主，視覺只是讓它「被運算」。
- **一個視窗最多一個「會動」的 Canvas**（主視覺馬賽克、節點網路或點陣球擇一）；靜止的馬賽克不算。
- 生成式視覺都要有靜態版：reduced-motion、低效能裝置、截圖與 Figma 交接都用靜態版（輸出成 SVG 或 2x PNG；圓點要對齊像素，不要縮放）。
- 交接到 Figma 時，生成式視覺放靜態截圖，並在註記寫明參數（seed、級數上限、間距、速度）。

### 產品截圖與照片

- **平台截圖一律裝框**（`device-frame`），優先用深色介面截圖；只有淺色介面時，框內不加任何濾鏡，靠框外的 mosaic-halo 與暗底把它「托」起來。不斜放、不做透視（[手繪風]）。
- 截圖上的重點用 2px `primary` 框、`xs` 圓角加 `ring-sm`，最多兩處。
- **照片**：允許整張疊一層 `void-950` 55% 純色＋ `teal-600` 12% 純色，讓照片落在同一個色溫裡（不用漸層壓暗）。疊字的一側用 `bg-surface` 實心面板，不直接疊在照片上。這是本風格與 手繪風 最大的差異之一（後者禁止濾鏡）。案場照與硬體照必須是真實素材（[base]）。
- 硬體去背照放在玻璃卡片上，背後一塊 `mosaic-mid` 點陣，不加 `device` 陰影。

## Iconography

- Tabler Icons outline、`stroke-width` 1.5、`currentColor`、20px（[base]）。
- **Sparkle（✦）是本風格唯一的自訂圖形**：四角星，用在 `badge-ai`、`button-signal`、prompt bar、回答卡頭像。它填 `primary` 純色，不單獨當裝飾散落在頁面上。
- 圖示可以放在 40px、`md` 圓角的玻璃方塊裡，方塊有 `hairline`；hover 時方塊換 `ring-sm`。
- 圖示旁邊一定有文字；只有圖示的按鈕要有 `aria-label`，點擊範圍至少 44px。

## Motion

本風格的動態比 手繪風 多，而且有常駐的環境動態（馬賽克、光點、脈衝）。介面元素共用 `easing-out`（expo-out，快進慢停）；**馬賽克相關的動態一律用 `steps()`，每秒最多 8 格**，一步剛好跳一格，不做平滑補間，保持像素感。

**只動 `transform`、`opacity`、`clip-path`、`stroke-dashoffset`、`background-position`，以及標題進場時的 `filter: blur()`。** Canvas 馬賽克以 8fps 重畫。

| # | 模式 | 觸發 | 屬性 | 時長 | 曲線 | reduced-motion |
|---|---|---|---|---|---|---|
| 1 | 標題模糊進場 | 區段露出 20%，播一次 | `opacity` 0 → 1、`translateY(12px)` → 0、`blur(8px)` → 0；Latin 逐字、中文逐詞 | 800ms，每字／詞 stagger 30ms，總長 ≤ 1.2s | `easing-out` | 直接顯示 |
| 2 | 內容進場 | 同上 | `opacity`、`translateY(12px)` | 600ms，每項 60ms，第 8 項後不延遲 | `easing-out` | 直接顯示 |
| 3 | 逐字串流 | 回答卡、FAQ 答案、console 行進入畫面 | 每個 token（Latin 一個字、中文 2–3 字）`opacity` 0 → 1；結尾游標 | 每 token 28ms，單段上限 2.4s，超過就整段淡入 | `linear` | 整段直接顯示 |
| 4 | 閃爍游標 | 串流結束、prompt bar 示意 | `opacity` 1 ↔ 0 | 1s `steps(2)` | — | 靜止顯示 |
| 5 | 亂碼解碼 | 數字、eyebrow 第一次進入畫面 | 每個字位先顯示隨機字元（0–9、A–Z、▓░），由左到右鎖定成真值 | 600ms，每位 30ms | `linear` | 直接顯示真值 |
| 6 | 點陣載入 | 載入中的狀態文字（「分析中」） | 文字後面三顆 `primary` 圓點逐顆出現 | 1.2s 循環 | `steps(4)` | 三顆點靜止顯示 |
| 7 | 光點繞邊 | 常駐（beam-card） | 一段實心點的 `stroke-dashoffset` 沿邊框 | 6s 循環 | `steps(周長 ÷ 6)` | 只留圓點虛線外框 |
| 8 | 點陣放大鏡 | `pointermove` | CSS 變數 `--mx`／`--my`（以 rAF 節流），`clip-path: circle()` | 即時 | — | 不啟用 |
| 9 | 外環 hover | 按鈕、卡片 hover | 外環層 `opacity` 0 → 1 | 240ms | `easing-out` | 保留（只有透明度） |
| 10 | 按下 | `:active` | `scale(0.97)` | 80ms | `easing-out` | 不縮放 |
| 11 | 狀態脈衝 | 常駐 | 外圈 `scale(1 → 2.4)`、`opacity(0.6 → 0)` | 2s 循環 | `easing-out` | 靜止圓點 |
| 12 | 掃描列 | 裝置框進入畫面，播一次 | 一列 `peak` 圓點 `translateY`，一步一格 | 1200ms | `steps(畫面高 ÷ 8)` | 直接顯示 |
| 13 | 資料流 | 常駐（流程圖、架構圖） | 圓點虛線 `stroke-dashoffset` 沿路徑移動 | 每段 2–4s 循環 | `steps()` | 靜止的點線 |
| 14 | 馬賽克漂移 | 常駐，只在主視覺 | noise 取樣位置緩慢平移，格子在級數之間跳動 | 8fps；每秒移動半格 | 逐格 | 靜止 |
| 15 | 點陣球呼吸 | 常駐 | 半徑在 ±1 格之間跳；外環 `rotate` | 8s；外環 40s 一圈 | `steps()` | 靜止 |
| 16 | 節點網路 | 常駐 | Canvas 節點漂移；游標 120px 內換成 primary | 每幀 ≤ 0.15px | — | 靜態圖 |
| 17 | 主按鈕點陣蓋過 | `button-signal` hover | 點陣層 `clip-path: inset()` 由左往右 | 600ms | `steps(8)` | 不播 |
| 18 | 頁面載入 | `DOMContentLoaded` | badge → 標題（模糊進場）→ lead → 按鈕 → 裝置框（掃描列） | 全部在 1.4s 內結束 | `easing-out` | 直接顯示 |

補充規則：
- **標題的模糊進場不延遲最大內容繪製**：主視覺標題第一個字的延遲是 0，文字在 HTML 裡就是完整的，只是用 CSS 由模糊淡入。
- **常駐動態在離開畫面時暫停**（`IntersectionObserver`），分頁隱藏時暫停（`visibilitychange`）。
- **一個視窗同時跑的常駐動態最多三種**（例如馬賽克漂移 + 一張 beam-card + 脈衝）。
- 進場只播一次，往回捲不重播。
- 自動播放的東西都要能停（[base]）：marquee hover 暫停；節點網路與馬賽克漂移提供頁面層級的「減少動態」開關（存在 `localStorage`，讀不到就預設開啟動態）。

## Data visualization

圖表放在 `glass-card` 或 `bg-surface` 上。

**分類色（依序使用）：**

| Token | 值 | bg 對比 | overlay 對比 | 角色 |
|---|---|---|---|---|
| `viz-1` | #3ddbd0 | 11.63 | 9.23 | 主要序列（teal-400） |
| `viz-2` | #f28f3b | 8.33 | 6.61 | 對比序列：改善前、尖峰（[base] product-orange） |
| `viz-3` | #6f8cff | 6.53 | 5.18 | |
| `viz-4` | #f06fd0 | 7.50 | 5.95 | |
| `viz-5` | #edf6f5 | 18.15 | 14.41 | 基準、總量 |
| `viz-6` | #fbe36b | 15.49 | 12.30 | |
| `viz-other` | #616869 | 3.51 | 2.79 | 「其他」與虛線基準線，只放在 bg／surface 上 |

色盲檢查（Machado 2009、嚴重度 1.0、CIE76 ΔE，六色兩兩比較，最接近的一對）：一般視覺 42.8（`viz-1`／`viz-5`）、紅色盲 13.4（`viz-1`／`viz-5`）、綠色盲 15.1（`viz-1`／`viz-4`）、藍色盲 15.8（`viz-2`／`viz-4`）。

**為什麼圖表不是全綠。** 分類圖表要讓每個序列一眼分得開；六個青綠色在色盲模擬下會擠成一團，所以分類色是本風格唯一允許青綠以外色相的地方。規則：主序列永遠是 `viz-1`（青綠），序列少的時候優先用 `viz-1`＋`viz-2`＋`viz-5`；只有一個序列或單一數值的深淺（熱力圖）時，全部用青綠色階 #033d4e → #05556c → #00788c → #2aabb0 → #3ddbd0 → #a3efe6（六個分開的色階，不做連續漸層）。比較過的另一組（加入紫色 #b28cff）在綠色盲下 ΔE 只有 0.6，所以不放紫色。

- 顏色不是唯一的辨識依據：折線加線型或端點形狀，長條直接標名稱。一張圖最多六個序列。
- **主序列不發光**：拿掉原本的模糊複本與漸層面積，改成折線下方面積填 6px 同色點陣（26% 透明度）。其他序列沒有面積。
- 熱力圖可以畫成馬賽克：每格一個圓點，用上面六個色階，與背景紋路同一種語言。
- 格線 `viz-grid`、只留水平；軸標 `small`、`text-tertiary`；數值 mono、`tabular-nums`。
- 進場：折線用 `stroke-dashoffset` 描出，長條 `scaleY` 長出，800ms `easing-out`；描線的筆頭帶一顆圓點。
- 提示用 `data-tooltip`。
- 圖表數值必須是真實資料，示意圖不帶數字（[base]）。

## States

| 狀態 | 做法 |
|---|---|
| hover | 疊 `overlay-hover`（frost 6%）；可點卡片的外環與點陣放大鏡淡入；連結加底線。只在 `@media (hover: hover)` |
| pressed | 疊 `overlay-press`（frost 10%）+ `scale(0.97)`（卡片不縮放） |
| focus-visible | `outline: 2px solid var(--focus-ring); outline-offset: 2px`；不用外環代替焦點環 |
| selected | chip、tab：1px `accent` 外框 + `text-primary`；清單項：左側 2px `primary` 實心直條 |
| disabled | `text-disabled`、無外環、無 hover、`cursor: not-allowed`；旁邊說明原因 |
| loading | 文字後面加點陣載入（Motion 6）；區塊用 `bg-raised` 骨架，上面一段 frost 8% 的點陣一格一格往右移（1.6s、`steps(10)`）；按鈕寬度不變，`aria-busy` |
| empty | 一顆小點陣球（48px，靜態）+ `h4` 現況 + `small` 下一步 |
| error | 1px `negative` 外框 + 圖示 + 一行說明；區塊錯誤用 `negative-bg` 提示列 |
| success | `positive-bg` 提示列；勾選用描線（`stroke-dashoffset`） |

## Accessibility & performance

**對比**（WCAG 2.2 AA）：所有文字 token 在 `bg-page`、`bg-surface`、`bg-raised` 上 ≥ 4.5:1；`text-tertiary` 在 `bg-overlay` 4.75。青綠色階當文字只用 `primary` 以上的亮階。馬賽克的對比以點的解析色計算（見 Color）。已知要避開的組合：
- 任何文字疊在 `mosaic-mid` 以上的點上（`text-tertiary` 在 `mid` 只剩 3.86、在 `bright` 2.96）。所以文字下方的格子一律降到 `dim`（安靜區）。
- `viz-other` 與 `text-disabled` 放在 `bg-overlay` 上（2.79）。
- `brand-logo` #2b5068 放在任何深底上（≤ 2.35）。
- `text-secondary` 以下的文字直接疊在照片上。

**深色模式本身的風險：**
- 長段內文在黑底上容易疲勞：內文用 `text-secondary` 以上、行高 1.75、段落最寬 34em；超過 600 字的內容（法規、規格表、文章）改用 手繪風 的淺色版面，或在本風格內換成 `bg-surface` 的閱讀區（不放馬賽克）。
- 純白會暈開，所以前景是 `frost` 而不是 #ffffff。
- 高密度的點陣在部分使用者眼中會「閃」：馬賽克漂移只在主視覺、每秒最多 8 格，其他區段的馬賽克是靜止的。

**降級：**
- `prefers-reduced-motion: reduce`：Motion 表最後一欄。所有常駐動態靜止；串流、解碼、模糊進場改成直接顯示。
- `prefers-reduced-transparency: reduce`：毛玻璃改成不透明的 `bg-surface`；馬賽克上限降到 `mid`。
- `forced-colors: active`：馬賽克隱藏、強調字退回 `CanvasText`，卡片與按鈕補 1px `CanvasText` 外框。
- `prefers-contrast: more`：隱藏馬賽克，`text-tertiary` 升為 `text-secondary`。

**螢幕閱讀器：**
- 串流與解碼只是視覺效果：完整文字一開始就在 DOM 裡，動畫用的字元層 `aria-hidden="true"`。
- Console 用 `<pre>` 或 `role="log"`，示意內容在可見文字裡標「示意」。
- Sparkle、馬賽克、點陣球都是 `aria-hidden`。

**效能預算：**
- 一個視窗最多：1 個會動的 Canvas、6 個 `backdrop-filter`、1 處 mosaic-halo、3 種常駐動態。
- 靜止的馬賽克只在載入與視窗寬度改變時畫一次（或直接用預先輸出的 PNG）；會動的馬賽克以 8fps 重畫，不用 rAF 每幀畫。
- 常駐動態離開畫面與分頁隱藏時暫停。
- 行動裝置（`<768px`）：節點網路改成靜態 SVG、馬賽克不漂移、spotlight 關閉。
- 字體：Geist、Geist Mono 只載 400／500 兩個字重，`font-display: swap`。

## Do's and Don'ts

- Do：黑底配 primary 點陣；層次靠點的疏密、四個級數與 1px 線，不靠黑影或光暈。
- Do：所有點陣、強調字、外環都是 `primary` #2aabb0 的純色或固定透明度。
- Do：馬賽克圓點的圓心落在 8px 格子中央；動態一步一格。
- Do：文字下方的格子降到 `mosaic-dim`。
- Do：eyebrow、數值、單位、狀態用 Geist Mono。
- Do：每個視覺都由程式生成，並且有靜態版。
- Do：串流、解碼的最終文字一開始就在 DOM 裡。
- Do：每個主張旁邊放證明：stat-row、裝框截圖、真實架構的資料流（[base]）。
- Don't：任何漸層：linear／radial／conic、漸層字、漸層按鈕、漸層外框、暗角、極光；也不用模糊的青綠光暈。
- Don't：任何插畫：等角插圖、riso／網點插畫、手繪、3D 渲染物件、AI 生成圖片、圖庫插畫；也不呼叫插畫 skill。
- Don't：對沒有 AI 功能的產品寫「AI 驅動」；假裝能輸入的 prompt bar；編造的 console 讀數、來源或回答。
- Don't：讓馬賽克看起來像真實地圖或案場分布；在文字下方放 `mid` 以上的點。
- Don't：紫、藍、洋紅；深青（teal-900／700／600）當小字；圖表以外的地方用 viz-3／viz-4／viz-6。
- Don't：`text-highlight` 用在內文、連結或按鈕上；一個畫面超過兩處。
- Don't：連續兩個區段都放馬賽克；在表單、表格、長文後面放馬賽克。
- Don't：純白 #ffffff 當內文色；純黑 #000000 當頁面底。
- Don't：一個視窗超過一張 beam-card、一處 mosaic-halo、三種常駐動態。
- Don't：沒有降級的動畫；平滑補間的馬賽克動態。

## 與 手繪風 的差異對照

「手繪風」指 hand-drawn-style skill 的 `DESIGN.md`。

| # | 項目 | 手繪風 | 科技風格 |
|---|---|---|---|
| 1 | 底色 | 白 #ffffff | 帶青的虛空 #030a0c，只有深色 |
| 2 | 前景色 | `ink` #0d1f27 | `frost` #edf6f5 |
| 3 | 中性色階 | `ink` 的百分比混白 | `frost` 的百分比混黑（同一套做法） |
| 4 | 強調色 | 一個青 #00788c | `primary` #2aabb0（含連結、焦點環） |
| 5 | 漸層 | 只有兩種靜態漸層 | 不用漸層；改成 primary 純色與馬賽克 |
| 6 | 層次 | 柔影 | 1px 內緣線 + 實心外環 + 馬賽克 |
| 7 | 毛玻璃 | 兩處 | 導覽、prompt bar、次按鈕（一個視窗 ≤ 6） |
| 8 | 背景 | 純白或 `bg-subtle` | primary 圓點馬賽克（成塊＋等高線＋散點） |
| 9 | 雜訊質感 | Don't | Don't（沒有漸層就不需要） |
| 10 | 字體 | Jost + IBM Plex Mono | Geist + Geist Mono（中文同為 Noto Sans TC） |
| 11 | 等寬字 | 只給規格數值 | 小標、數值、狀態、console 全部 |
| 12 | `display` 上限 | 88px | 96px |
| 13 | 主按鈕 | `accent` 底白字；實體按鍵版 | `frost` 白鍵 + 外環；`primary` 純色按鈕 |
| 14 | 導覽 | 置中玻璃膠囊 | 滿寬玻璃列 |
| 15 | 視覺素材 | 等角插圖 + 截圖 + 照片 | 不用插畫；七種生成式視覺 + 截圖 + 照片 |
| 16 | 照片處理 | 不加濾鏡 | 允許純色壓暗與冷色疊色 |
| 17 | 動態 | 一條曲線、160ms 為主、不做環境動態 | expo-out 曲線；串流、解碼、光點、馬賽克漂移、脈衝；馬賽克一律 steps() |
| 18 | `blur` | 四處 | 標題模糊進場、毛玻璃 |
| 19 | 新元件 | — | badge-ai、beam-card、spotlight-card、prompt-bar、console、response-card、status-dot、metric-tile、dotted-rule |
| 20 | 資料色盤 | 白底版六色 | 深底版六色（主序列青綠），排除紫色 |

**沒有變的：** 間距階、12 欄與 1200px、流動字級公式與規則、中文行高與字距規則、斷點、Tabler 圖示、焦點環做法、一個畫面一顆實心按鈕、截圖一律裝框、不編造內容。
