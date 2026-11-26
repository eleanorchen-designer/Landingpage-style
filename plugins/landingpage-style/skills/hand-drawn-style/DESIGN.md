---
name: Landing Page Style — 手繪風
description: 白底、柔影大圓角卡片、一個高飽和青色、實體按鍵感的按鈕、單一曲線的動態。真實產品畫面放在框裡，等角插圖站在粉彩底上。
# 來源標記：[fruitful] [agentcard] [klarna] 為 fruitful.com、agentcard.com、klarna.com 的 DOM 實測值；[base] 沿用原始品牌規格；[proposed] 為本檔推導，尚未經使用者確認。
colors:
  # ── Primitive ──────────────────────────────────────────
  white: "#ffffff"              # [fruitful][klarna] 頁面底
  ink: "#0d1f27"                # [proposed] 帶青的墨色，取代 #313030；結構同 [agentcard] ink / [klarna] black
  ink-950: "#0f1b25"            # [base] slate-950，深色區段底
  ink-900: "#16242f"            # [base] slate-900，深色區段卡片
  ink-500: "#4a5f73"            # [base] slate-500，深色區段內的插圖深色物件
  mist-50: "#f3f6f7"            # [proposed] 淺區塊底；[fruitful] grey-100 #f5f7fb 往品牌青偏移
  teal-600: "#00788c"           # [proposed] 新主強調色
  teal-700: "#05556c"           # [base] 原 accent，改為深色變體
  teal-900: "#033d4e"           # [base]
  teal-50: "#e6f2f4"            # [proposed] teal-600 與白 10% 混合
  slate-700: "#2b5068"          # [base] logo 專用
  product-teal: "#2aabb0"       # [base]
  product-teal-50: "#eef6f6"    # [base]
  product-teal-100: "#dcf0f0"   # [base]
  product-orange: "#f28f3b"     # [base]
  product-navy: "#052c39"       # [base]
  # Tint 配對（淺底 + 深字）— 結構 [fruitful]「100 淺底 + 900 深字」
  tint-teal-bg: "#dcf0f0"       # [base] product-teal-100
  tint-teal-fg: "#05556c"       # [base] 對比 7.04
  tint-orange-bg: "#fee9d1"     # [fruitful] peach
  tint-orange-fg: "#7a3f0c"     # [proposed] 對比 6.99
  tint-blue-bg: "#eff7ff"       # [fruitful] droplet 100
  tint-blue-fg: "#0d4b85"       # [fruitful] droplet 900，對比 8.22
  tint-violet-bg: "#f3ebfb"     # [fruitful] violet
  tint-violet-fg: "#5b2d91"     # [proposed] 對比 8.11
  tint-green-bg: "#f2f9eb"      # [fruitful] wasabi
  tint-green-fg: "#2f5d1a"      # [proposed] 對比 7.23
  tint-yellow-bg: "#fdf1d7"     # [fruitful] yellow
  tint-yellow-fg: "#6b4a00"     # [proposed] 對比 7.19
  # ── Semantic ───────────────────────────────────────────
  bg-page: "#ffffff"            # white [fruitful][klarna]；現行為 #f4f4f4
  bg-subtle: "#f3f6f7"          # mist-50
  bg-surface: "#ffffff"         # 卡片、輸入框
  bg-raised: "#eeeff0"          # color-mix(in srgb, ink 7%, white) [agentcard] raised 7%
  bg-accent-soft: "#e6f2f4"     # teal-50
  bg-cta: "#f2fbfd"             # [base] 頁尾 CTA 區塊
  bg-glass: "rgba(255,255,255,0.83)"   # [fruitful] 導覽膠囊，搭配 backdrop-filter: blur(8px)
  bg-scrim: "rgba(13,31,39,0.72)"      # [proposed] 影像上的標籤底；結構 [klarna] rgba(14,14,22,.44)，為了對比調高
  bg-glow: "rgba(42,171,176,0.22)"     # [proposed] 徑向光暈；結構 [fruitful] rgba(139,213,182,.34)
  text-primary: "#0d1f27"       # ink，白底對比 16.90
  text-secondary: "#515e63"     # color-mix(ink 72%, white) [agentcard] 72%，白底 6.71
  text-tertiary: "#647075"      # color-mix(ink 64%, white) [proposed]，白底 5.10、bg-subtle 4.70
  text-large-muted: "#7a8488"   # color-mix(ink 55%, white) [agentcard] 55%，白底 3.83，只限 ≥24px 文字
  text-disabled: "#a3aaad"      # color-mix(ink 38%, white) [proposed]
  text-inverse: "#ffffff"
  text-link: "#00788c"          # teal-600
  line-subtle: "#e2e4e5"        # color-mix(ink 12%, white) [agentcard] 12%
  line-default: "#d8dbdc"       # color-mix(ink 16%, white) [agentcard] 16%
  line-strong: "#cacecf"        # color-mix(ink 22%, white) [agentcard] 22%
  line-control: "#7a8488"       # color-mix(ink 55%, white) [proposed] 控制項外框，白底 3.83（≥3:1）
  accent: "#00788c"             # teal-600 [proposed]，白字對比 5.17
  accent-deep: "#05556c"        # teal-700 [base]，白字對比 8.33
  accent-pressed: "#033d4e"     # teal-900 [base]，白字對比 11.79
  overlay-hover: "rgba(13,31,39,0.08)"   # [klarna] hover .08，黑改成 ink
  overlay-press: "rgba(13,31,39,0.12)"   # [klarna] press .12
  overlay-fadeout: "rgba(13,31,39,0.32)" # [klarna] fadeout .32
  focus-ring: "#00788c"         # accent，白底 5.17
  brand-logo: "#2b5068"         # [base] logo 專用
  product-primary: "#2aabb0"    # [base]
  product-soft: "#dcf0f0"       # [base]
  product-highlight: "#f28f3b"  # [base]
  product-deep: "#052c39"       # [base]
  # 語意色 — 結構 [klarna]（每個語意一組深色 + 淺底）
  positive: "#046234"           # [klarna] positive，白底 7.50
  positive-bg: "#f2f9eb"        # tint-green-bg
  negative: "#931414"           # [klarna] negative，白底 8.93
  negative-bg: "#fdeceb"        # [proposed]
  warning: "#8a5a00"            # [proposed] 文字用；[klarna] warning #dfa200 白底只有 2.26，僅作圖示填色
  warning-fill: "#dfa200"       # [klarna]
  warning-bg: "#fdf1d7"         # tint-yellow-bg
  info: "#0d4b85"               # [fruitful] droplet 900，白底 8.89
  info-bg: "#eff7ff"            # tint-blue-bg
  # 資料視覺 — 結構 [klarna] 12 色盤，縮成 6 色並重新取值
  viz-1: "#12909a"              # [proposed] 青（product-teal 加深），白底 3.83
  viz-2: "#d9730d"              # [proposed] 橘（product-orange 加深），白底 3.28
  viz-3: "#052c39"              # [base] product-navy，白底 14.73
  viz-4: "#3f7fdc"              # [klarna] 資料色，白底 3.98
  viz-5: "#a03db3"              # [klarna] 資料色，白底 5.51
  viz-6: "#c8649b"              # [klarna] 資料色，白底 3.65
  viz-other: "#7a828f"          # [fruitful] grey-700，「其他／基準線」
  viz-grid: "#e2e4e5"           # line-subtle
  # 深色區段（宣告在 .theme-dark 內）
  dark-bg: "#0f1b25"            # ink-950 [base]
  dark-surface: "#16242f"       # ink-900 [base]
  dark-text-primary: "#ffffff"  # 對比 17.44
  dark-text-secondary: "#bcbfc2" # color-mix(white 72%, dark-bg) [agentcard]，對比 9.44
  dark-text-tertiary: "#93989d" # color-mix(white 55%, dark-bg) [agentcard]，對比 6.00
  dark-line: "#353f48"          # color-mix(white 16%, dark-bg) [agentcard]
  dark-accent: "#2aabb0"        # product-teal [base]，對比 6.27
typography:
  # lineHeight / letterSpacing 是中文（zh-Hant）預設值；*Latin 是 :lang(en) 的覆寫值。理由見 Typography。
  display:
    fontFamily: "Jost, Noto Sans TC, system-ui, sans-serif"   # [base]
    fontSize: "clamp(2.75rem, 1.5rem + 5.3333vw, 5.5rem)"     # 44 → 88px [proposed]；[klarna] hero 84、[agentcard] 72
    fontWeight: 500                                           # [base][fruitful]
    lineHeight: 1.15                                          # [proposed] 中文
    letterSpacing: "0"                                        # [proposed] 中文
    lineHeightLatin: 0.95                                     # [fruitful] h1 .95
    letterSpacingLatin: "-0.03em"                             # [proposed]，介於 [fruitful] −0.01 與 [agentcard] −0.055
  h1:
    fontFamily: "Jost, Noto Sans TC, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.4545rem + 3.3939vw, 4rem)"    # 36 → 64px [proposed]；[klarna] display 64
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0"
    lineHeightLatin: 1.0                                      # [fruitful] h2 1、[agentcard] 1.0
    letterSpacingLatin: "-0.02em"
  h2:
    fontFamily: "Jost, Noto Sans TC, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.2955rem + 1.9394vw, 2.75rem)" # 28 → 44px [proposed]；[klarna] 44/48
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0"
    lineHeightLatin: 1.1                                      # [fruitful] h3 1.1
    letterSpacingLatin: "-0.01em"                             # [fruitful]
  h3:
    fontFamily: "Jost, Noto Sans TC, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.2045rem + 0.7273vw, 1.75rem)" # 22 → 28px [proposed]
    fontWeight: 500
    lineHeight: 1.35                                          # [base]
    lineHeightLatin: 1.25                                     # [fruitful] h4 1.25
  h4:
    fontFamily: "Jost, Noto Sans TC, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.0682rem + 0.2424vw, 1.25rem)" # 18 → 20px [proposed]
    fontWeight: 500
    lineHeight: 1.4
  lead:
    fontFamily: "Jost, Noto Sans TC, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.0682rem + 0.2424vw, 1.25rem)" # [base]
    fontWeight: 400
    lineHeight: 1.7                                           # [base]
  body:
    fontFamily: "Jost, Noto Sans TC, system-ui, sans-serif"
    fontSize: "1rem"                                          # [base][klarna] 16
    fontWeight: 400
    lineHeight: 1.75                                          # [base]；:lang(en) 1.5 [klarna] 16/24
  small:
    fontFamily: "Jost, Noto Sans TC, system-ui, sans-serif"
    fontSize: "0.875rem"                                      # [base][klarna] 14
    fontWeight: 400
    lineHeight: 1.65                                          # [base]
  label:
    fontFamily: "Jost, Noto Sans TC, system-ui, sans-serif"
    fontSize: "0.75rem"                                       # [base]；參考站 10px 標籤不採用
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"                                   # [base] 英文全大寫才加
  button:
    fontFamily: "Jost, Noto Sans TC, system-ui, sans-serif"
    fontSize: "1rem"                                          # [klarna] 16 / 500
    fontWeight: 500
    lineHeight: 1
  spec:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"      # [base]
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  stat:
    fontFamily: "Jost, Noto Sans TC, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.5909rem + 3.8788vw, 4.5rem)"   # 40 → 72px [proposed]；結構 [klarna] 數據列
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeatureSettings: "'tnum' 1"
  scroll-list:
    fontFamily: "Jost, Noto Sans TC, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.0909rem + 3.8788vw, 4rem)"       # 32 → 64px；上限 [klarna] 64
    fontWeight: 500
    lineHeight: 1.2
    lineHeightLatin: 1.0
    letterSpacingLatin: "-0.02em"
rounded:
  xs: "4px"       # [base] 勾選框
  sm: "8px"       # [base] surface；[agentcard] 按鈕 8px
  md: "12px"      # [fruitful] --radius--small .75rem
  lg: "16px"      # [klarna] 16px
  xl: "20px"      # [fruitful] --radius--regular 1.25rem，卡片主力
  2xl: "32px"     # [fruitful] --radius--medium 2rem、[klarna] 32px
  3xl: "48px"     # [klarna] 48px 影像卡
  full: "999px"   # [base][klarna]
spacing:
  space-1: "4px"    # 以下全部 [base]
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
  # 幾何與不透明度取自參考站；rgba(0,0,0) 一律換成 ink rgba(13,31,39) [proposed]
  none: "none"
  chip: "0 3px 9px rgba(13,31,39,0.02)"                                                                   # [fruitful] 小膠囊
  card: "0 18px 32px rgba(13,31,39,0.02), 0 16px 16px rgba(13,31,39,0.03), 0 4px 8px rgba(13,31,39,0.03)" # [fruitful] 卡片常用
  card-hover: "0 40px 24px rgba(13,31,39,0.02), 0 18px 18px rgba(13,31,39,0.03), 0 4px 10px rgba(13,31,39,0.03)" # [fruitful] --shadow-light
  overlay: "0 1px 2px rgba(13,31,39,0.04), 0 8px 24px rgba(13,31,39,0.06)"                                # [fruitful] 浮層
  device: "0 25px 16px rgba(13,31,39,0.05), 0 10px 10px rgba(13,31,39,0.10), 0 3px 6px rgba(13,31,39,0.10)" # [fruitful] --shadow-main
  key-accent: "inset 0 1px 0 rgba(255,255,255,0.34), inset 0 -2px 0 rgba(13,31,39,0.16), 0 1px 2px rgba(13,31,39,0.24), 0 3px 8px rgba(0,120,140,0.18)" # [agentcard] 主按鈕，藍色投影換成 accent
  key-light: "inset 0 1px 0 #ffffff, inset 0 -2px 0 rgba(13,31,39,0.08), 0 1px 2px rgba(13,31,39,0.22), 0 3px 8px rgba(13,31,39,0.10), 0 3px 0 rgba(13,31,39,0.10)" # [agentcard] 白鍵
  key-pressed: "inset 0 2px 3px rgba(13,31,39,0.22), inset 0 -1px 0 rgba(255,255,255,0.18)"              # [agentcard] 凹陷，去掉 0 1px 0 #00f
  glass-highlight: "inset 0 -4px 4px rgba(255,255,255,0.73)"                                              # [fruitful] 玻璃高光
  dark-raise: "inset 0 1px 0 rgba(255,255,255,0.08)"                                                      # [proposed] 深色區段卡片上緣
motion:
  duration-instant: "50ms"     # [fruitful] 按鈕底色 0.05s
  duration-press: "120ms"      # [agentcard] 0.12s transform
  duration-micro: "160ms"      # [agentcard] 0.16s hover
  duration-swap: "240ms"       # [agentcard] 進場下限 0.24s
  duration-accordion: "350ms"  # [klarna] 手風琴 0.35s
  duration-spring: "380ms"     # [agentcard] icon 鍵帽 0.38s
  duration-enter: "420ms"      # [agentcard] 進場上限 0.42s
  duration-section: "600ms"    # [fruitful] 區塊位移 0.6s
  duration-move: "720ms"       # [agentcard] 位移 0.72s
  duration-progress: "5000ms"  # [klarna] 輪播進度條 5s
  stagger-item: "60ms"         # [base] 解決方案頁 stagger
  stagger-card: "80ms"         # [proposed]
  easing-out: "cubic-bezier(0.22, 1, 0.36, 1)"       # [agentcard] --ease；[base] 按鈕波浪同一條
  easing-spring: "cubic-bezier(0.22, 1.55, 0.36, 1)" # [agentcard] 彈性版
  easing-in-out: "cubic-bezier(0.77, 0, 0.175, 1)"   # [fruitful] easeInOutQuart，只給捲動釘住的場景切換
  easing-linear: "linear"                            # marquee、進度條
  press-scale: "0.98"          # [agentcard] v7-press
  enter-offset: "8px"          # [agentcard] translate 0 8px
  swap-offset: "4px"           # [agentcard] translateY 4px
  swap-blur: "2px"             # [agentcard] blur(2px)
  marquee-speed: "40px/s"      # [base]
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text-inverse}"       # 對比 5.17
    typography: "{typography.button}"
    rounded: "{rounded.full}"                # [klarna][base]
    height: "52px"                           # [klarna] 大
    padding: "0 28px"                        # [base]
    shadow: "{elevation.none}"
    transition: "opacity {motion.duration-micro} {motion.easing-out}"   # 疊色層的 opacity
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    overlay: "{colors.overlay-hover}"        # 疊色後 #017184，白字 5.68
  button-primary-pressed:
    backgroundColor: "{colors.accent}"
    overlay: "{colors.overlay-press}"        # 疊色後 #026d80，白字 6.00
    scale: "{motion.press-scale}"
    transition: "transform {motion.duration-press} {motion.easing-out}"
  button-primary-disabled:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.text-disabled}"
    shadow: "{elevation.none}"
  button-secondary:
    backgroundColor: "{colors.bg-raised}"    # [fruitful] 次按鈕 #eceff4、[agentcard] raised 7%
    textColor: "{colors.text-primary}"       # 對比 14.68
    rounded: "{rounded.full}"
    height: "52px"
    padding: "0 28px"
    overlayHover: "{colors.overlay-hover}"
    overlayPressed: "{colors.overlay-press}"
  button-tactile:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.full}"
    height: "52px"
    padding: "0 28px"
    shadow: "{elevation.key-accent}"         # [agentcard]
    shadowPressed: "{elevation.key-pressed}"
    scalePressed: "{motion.press-scale}"
  button-tactile-light:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    shadow: "{elevation.key-light}"          # [agentcard] 白鍵
    shadowPressed: "{elevation.key-pressed}"
  button-sizes:
    lg: { height: "52px", padding: "0 28px", fontSize: "1rem" }       # [klarna] 52
    md: { height: "44px", padding: "0 20px", fontSize: "1rem" }       # [klarna] 44，padding 20
    sm: { height: "32px", padding: "0 14px", fontSize: "0.875rem" }   # [klarna] 32；點擊範圍外擴到 44px [proposed]
  nav:
    backgroundColor: "{colors.bg-glass}"     # [fruitful]
    backdropFilter: "blur(8px)"              # [fruitful]
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    height: "64px"                           # [proposed]
    padding: "0 8px 0 24px"
    border: "1px solid {colors.line-subtle}"
    shadow: "{elevation.overlay}"
    itemRounded: "{rounded.full}"
    itemHover: "{colors.overlay-hover}"
  card:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xl}"                  # [fruitful] 1.25rem
    padding: "32px"                          # [base]
    shadow: "{elevation.card}"
    shadowHover: "{elevation.card-hover}"
    transition: "transform {motion.duration-micro} {motion.easing-out}"
  card-feature:
    backgroundColor: "{colors.bg-surface}"
    rounded: "{rounded.xl}"
    padding: "8px 8px 32px"                  # 上方視覺面板內距 8px [base] bento
    shadow: "{elevation.card}"
    mediaBackground: "{colors.tint-teal-bg}" # 可換任一 tint-*-bg
    mediaRounded: "{rounded.md}"             # xl − 8px 內距
    mediaRatio: "4 / 3"                      # [proposed]
    textAlign: "center"                      # [fruitful]
  media-card:
    rounded: "{rounded.3xl}"                 # [klarna] 48px；平板 {rounded.2xl}、手機 24px
    ratio: "16 / 7"                          # [klarna] hero；手機 4 / 5
    padding: "48px"
    textColor: "{colors.text-inverse}"
    labelBackground: "{colors.bg-scrim}"
    labelBackdropFilter: "blur(10px)"        # [klarna]
    shadow: "{elevation.none}"               # [klarna] 影像卡不加陰影
  device-frame:
    backgroundColor: "{colors.bg-surface}"
    rounded: "{rounded.md}"                  # 瀏覽器框 12px；手機框 40px [proposed]
    border: "1px solid {colors.line-default}"
    shadow: "{elevation.device}"             # [fruitful] --shadow-main
    barHeight: "36px"                        # [proposed]
    barBackground: "{colors.bg-subtle}"
    urlPillRounded: "{rounded.full}"         # [agentcard] 網址列膠囊
    urlTypography: "{typography.spec}"
  chip:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-secondary}"     # [fruitful] 建議膠囊灰字
    rounded: "{rounded.full}"
    height: "32px"
    padding: "0 14px"
    shadow: "{elevation.chip}"               # [fruitful] 0 3px 9px
    border: "1px solid {colors.line-subtle}"
    selectedBackground: "{colors.bg-accent-soft}"
    selectedTextColor: "{colors.accent-deep}" # 對比 7.28
  input:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    placeholderColor: "{colors.text-tertiary}"
    rounded: "{rounded.md}"                  # [fruitful] .75rem
    height: "52px"
    padding: "0 16px"
    border: "1px solid {colors.line-control}"
    focusBorder: "2px solid {colors.focus-ring}"
    errorBorder: "2px solid {colors.negative}"
  stat-row:
    numberTypography: "{typography.stat}"
    numberColor: "{colors.text-primary}"
    captionTypography: "{typography.small}"
    captionColor: "{colors.text-secondary}"
    divider: "1px solid {colors.line-default}"
    gap: "{spacing.space-5}"
    columns: "4"                             # [klarna] 四項；手機 2
  scroll-list:
    typography: "{typography.scroll-list}"
    activeColor: "{colors.text-primary}"
    inactiveOpacity: "0.55"                  # [klarna] 未選中 #94939e → 以 ink 55% 實作，白底 3.83
    transition: "opacity 200ms ease"         # [klarna] 0.2s ease
    mediaRounded: "{rounded.2xl}"
    mediaRatio: "4 / 5"                      # [klarna]
    mediaSticky: "top 96px"
  faq-item:
    backgroundColor: "{colors.bg-subtle}"    # [fruitful] #f5f7fb 整列按鈕
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"                  # [fruitful] .75rem
    padding: "20px 24px"
    minHeight: "64px"
    overlayHover: "{colors.overlay-hover}"
    answerEnter: "opacity + translateY({motion.enter-offset}) {motion.duration-swap} {motion.easing-out}" # [agentcard] faq-topic-in
  floating-ui-card:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
    shadow: "{elevation.overlay}"
    valueTypography: "{typography.spec}"
    labelTypography: "{typography.label}"
    enter: "{motion.duration-spring} {motion.easing-spring}"
  data-tooltip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.text-inverse}"       # 對比 16.90
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    shadow: "{elevation.overlay}"
    valueTypography: "{typography.spec}"
    enter: "opacity {motion.duration-micro} {motion.easing-out}"
---

<!-- 2026-11-16 建立。來源：fruitful.com、agentcard.com、klarna.com/us 的 DOM 實測，與原始品牌規格。標 [proposed] 的值與規則由 Claude 推導。 -->

## Overview

這套風格為能源管理與 IoT 類的 B2B 品牌設計，讀者是評估供應商的企業買家、系統整合商與經銷商。它叫 **手繪風**：畫面柔和、明亮，但每一塊內容仍然落在規格與證明上。它把三個參考站的語彙合成一套，不是輪流出現：Fruitful 給「面」（柔影、大圓角、粉彩底、產品畫面裝框），Agentcard 給「手感」（單一曲線、短時長、實體按鍵、透明度系統），Klarna 給「骨架」（膠囊尺寸、滿版影像卡、捲動大標清單、數據列、固定比例）。

五條原則：

1. **白底，層次靠柔影。** 頁面是白色，卡片用多層、極淡的陰影浮起來；1px 線退到表格、輸入框與分隔用（[fruitful]）。
2. **一個高飽和青色，其餘都由墨色推出。** `accent` 只給可以按的東西與連結；次要文字、線、凸起面全部是 `ink` 的百分比（[agentcard]）。
3. **真實畫面裝框，插圖站在粉彩底上。** 平台截圖放進瀏覽器框，等角插圖放進 tint 面板，周圍最多三張漂浮小卡（[fruitful]，內容規則 [base]）。
4. **一條曲線，短時長。** 所有動態共用 `easing-out`，微互動 160ms，按下縮到 0.98（[agentcard]）。動態只用來回應操作或帶出下一段內容。
5. **主張旁邊放證明。** 數據列、規格字、裝框截圖都只放品牌方提供的真實內容；沒有的就留空（[base]）。

Token 分三層（[base]）：Primitive（`ink`、`teal-600`、`space-5`）→ Semantic（`text-primary`、`accent`、`line-default`）→ Component（frontmatter 的 `components`）。頁面用 Semantic，元件 CSS 用 Component，都不直接寫 Primitive 或色碼。新增兩個擴充鍵：`elevation`（陰影）與 `motion`（時長、曲線）。

## Style

### Color

**底色。** `bg-page` 是 #ffffff（[fruitful][klarna]）。區段要分開時換成 `bg-subtle` #f3f6f7（[proposed]，Fruitful 的冷灰 #f5f7fb 往品牌青偏移）。`bg-cta` #f2fbfd 仍只給頁尾 CTA 區塊（[base]）。

**墨色與透明度系統。**（[agentcard]）`ink` #0d1f27 是唯一的深色來源（[proposed]）。其他中性色都寫成 `color-mix(in srgb, var(--ink) N%, white)`，frontmatter 列的是白底上的解析值：

| Token | 混合比例 | 解析值 | 白底對比 | `bg-subtle` 對比 | 用途 | 來源 |
|---|---|---|---|---|---|---|
| `text-primary` | 100% | #0d1f27 | 16.90 | 15.56 | 標題、內文 | [proposed] |
| `text-secondary` | 72% | #515e63 | 6.71 | 6.18 | 說明文字 | [agentcard] |
| `text-tertiary` | 64% | #647075 | 5.10 | 4.70 | 圖說、placeholder、時間戳 | [proposed] |
| `text-large-muted` | 55% | #7a8488 | 3.83 | 3.53 | 只限 ≥24px 的文字（捲動清單未選中項） | [agentcard] |
| `line-control` | 55% | #7a8488 | 3.83 | 3.53 | 輸入框、勾選框外框（≥3:1） | [proposed] |
| `text-disabled` | 38% | #a3aaad | 2.36 | — | 停用文字（WCAG 不要求對比） | [proposed] |
| `line-strong` | 22% | #cacecf | 1.59 | — | 表頭底線 | [agentcard] |
| `line-default` | 16% | #d8dbdc | 1.39 | — | 卡片分隔、表格列線 | [agentcard] |
| `line-subtle` | 12% | #e2e4e5 | 1.28 | — | 導覽外框、圖表格線 | [agentcard] |
| `bg-raised` | 7% | #eeeff0 | 1.15 | — | 次按鈕、鍵帽底 | [agentcard] |

Agentcard 的 55% 與 50% 兩階在白底上只有 3.83 與 3.30，不能當一般文字，所以另外加了 64% 這一階（[proposed]）。在 `bg-raised` 上，`text-tertiary` 降到 4.43，改用 `text-secondary`（5.83）。

**強調色。**（[proposed]）

| Token | 值 | 白字在上面 | 當文字放在白底 | 放在 `bg-subtle` | 放在 `bg-accent-soft` |
|---|---|---|---|---|---|
| `accent` | #00788c | 5.17 | 5.17 | 4.76 | 4.52 |
| `accent` + hover 疊色 | #017184 | 5.68 | — | — | — |
| `accent` + pressed 疊色 | #026d80 | 6.00 | — | — | — |
| `accent-deep` | #05556c | 8.33 | 8.33 | 7.67 | 7.28 |
| `accent-pressed` | #033d4e | 11.79 | 11.79 | 10.85 | — |

- `accent` #00788c 比現行 #05556c 亮、彩度高，色相仍在 logo 與 product-teal 之間（約 189°）。它是在「白字 ≥ 4.5:1，且當連結色放在 `bg-subtle` 與 `bg-accent-soft` 上也 ≥ 4.5:1」這兩個條件下能取到的最亮值：#007d92 在 `bg-subtle` 上只有 4.45，#00839a 白字只有 4.46，都不合格。
- `accent` 用在：主按鈕底、內文連結、焦點環、選取指示、圖表第一序列以外的介面強調。面積不超過畫面一成（[base]）。
- `accent` 當文字放在 `bg-raised` 上只有 4.49，這個組合改用 `accent-deep`。
- `accent-deep` #05556c 是原本的 `accent`，保留作深色變體（[base]）：tint 底上的文字、連結 hover、等角插圖的深青面。
- `brand-logo` #2b5068 只屬於 logo（[base]）。

**狀態疊色。**（[klarna]）hover 與 pressed 不換底色，而是在元件上疊一層 `overlay-hover`（ink 8%）或 `overlay-press`（ink 12%）。任何底色的元件都用同一套，也讓 hover 只需要動 `opacity`。

**Tint 配對。**（結構 [fruitful]：每個色系一個淺底配一個深字）用在 feature 卡的視覺面板、流程圖方塊、圖示底、標籤。

| 色系 | 淺底 | 深字 | 對比 | 來源 |
|---|---|---|---|---|
| teal | #dcf0f0 | #05556c | 7.04 | 底、字 [base] |
| orange | #fee9d1 | #7a3f0c | 6.99 | 底 [fruitful] peach、字 [proposed] |
| blue | #eff7ff | #0d4b85 | 8.22 | [fruitful] droplet |
| violet | #f3ebfb | #5b2d91 | 8.11 | 底 [fruitful]、字 [proposed] |
| green | #f2f9eb | #2f5d1a | 7.23 | 底 [fruitful] wasabi、字 [proposed] |
| yellow | #fdf1d7 | #6b4a00 | 7.19 | 底 [fruitful]、字 [proposed] |

一個區段最多用三個色系；teal 與 orange 優先，因為它們對應 product color。tint 底上的內文仍可用 `text-primary`（對比都在 14 以上）。

**Product color。**（[base]）`product-primary` #2aabb0、`product-highlight` #f28f3b、`product-deep` #052c39 仍是等角插圖的平塗色，介面上的例外沿用現行清單，另加兩處（[proposed]）：漂浮 UI 卡裡的狀態圓點，以及資料視覺色盤的來源色。兩個亮色在白底上對比只有 2.78 與 2.40，不能當文字色，也不能當唯一的圖表辨識依據。

**漸層與光暈。**（[fruitful]）允許兩種，都是靜態的：
- 區段底的線性漸層：白 → `bg-subtle`，或白 → `bg-cta`。方向由上到下。
- 徑向光暈：`radial-gradient(60% 50% at 50% 0%, var(--bg-glow), transparent)`，`bg-glow` 是 product-teal 22%（[proposed]）。只放在主視覺與裝框截圖後面，一個畫面一處。
不做文字漸層、按鈕漸層、多色漸層。

**語意色。**（結構 [klarna]）`positive` #046234／`positive-bg` #f2f9eb（6.97）、`negative` #931414／`negative-bg` #fdeceb（7.82）、`warning` #8a5a00／`warning-bg` #fdf1d7（5.29）、`info` #0d4b85／`info-bg` #eff7ff（8.22）。Klarna 的 warning #dfa200 在白底只有 2.26，只當圖示填色（`warning-fill`），文字用 #8a5a00（[proposed]）。語意色只表示狀態，不當裝飾。

### Shadow

三種語彙，各有位置（詳細階層見 Elevation）：

- **柔影**（[fruitful]）：三層、每層不透明度 2–3%、大位移大模糊。給卡片與浮層。
- **按鍵影**（[agentcard]）：上緣 `inset` 高光 + 下緣 `inset` 暗邊 + 很短的落地影。只給 `button-tactile` 與鍵帽圖示。
- **不加陰影**（[klarna]）：48px 滿版影像卡、照片、tint 面板。影像本身已經夠重。

陰影顏色全部是 `ink` 的 rgba（13, 31, 39），不用純黑（[proposed]）。Agentcard 的 7px 無模糊硬陰影不採用：它與柔影是兩種質感，放在一起會像拼貼。

### Radius

| Token | 值 | 用在 | 來源 |
|---|---|---|---|
| `xs` | 4px | 勾選框、截圖高亮框 | [base] |
| `sm` | 8px | tooltip、表格內的小圖、選單項 | [base][agentcard] |
| `md` | 12px | 輸入框、FAQ 列、瀏覽器框、卡片內的視覺面板 | [fruitful] |
| `lg` | 16px | 漂浮 UI 卡、評論卡、選項卡、小影像 | [klarna][fruitful] |
| `xl` | 20px | 卡片（主力） | [fruitful] |
| `2xl` | 32px | 大型 tint 面板、捲動清單的 sticky 媒體、平板上的影像卡 | [fruitful][klarna] |
| `3xl` | 48px | 桌機的滿版影像卡、區段收尾圓角 | [klarna] |
| `full` | 999px | 按鈕、chip、導覽、網址列 | [base][klarna] |

規則：
- **巢狀圓角 = 外層圓角 − 內距。** 20px 的卡片內距 8px，裡面的面板就是 12px（[proposed]）。
- **影像卡隨斷點縮**：≥1024px 用 48px，768–1023px 用 32px，<768px 用 24px（[klarna] 的 48／32／24 三階）。
- **區段收尾**：頁尾前一個區段可以把下緣收成 `0 0 48px 48px` 疊在 footer 上（[fruitful] 的做法，值改用 `3xl`）。全站只用這一處。
- 不用不對稱圓角（Klarna 的 `48px 48px 16px`、Agentcard 的對話泡泡）。現行軟體頁評論卡的 16／80／16／16px 改成 `lg`。

## Typography

- 字體不變（[base]）：Jost 配 Noto Sans TC，規格數值與型號用 IBM Plex Mono。參考站的 PP Neue Montreal、Neue Haas Grotesk、Klarna Title 都沒有中文字，不引進。
- 標題字重 500，內文 400（[base]，與 [fruitful] 的 500 一致）。不採用 Klarna 的 700：Noto Sans TC 700 在 60px 以上筆畫擁擠。
- 參考站用襯線體做點綴（[fruitful] Source Serif 4），不採用。
- `label` 英文全大寫、字距 0.08em；中文不加字距（[base]）。參考站的 10px 標籤不採用，最小字級維持 12px。
- 內文段落最寬 34em（[base]）。

### 中文與拉丁字的行高、字距

參考站的大標行高 ≤ 1、字距 −0.01 到 −0.055em，只適用於拉丁字。中文要另訂，理由有三個：

1. **中文字填滿整個字框。** 拉丁字的行高 1.0 之所以可行，是因為大寫高度只佔字框約七成，上下還有空隙；中文方塊字佔滿字框，行高 1.0 時上下兩行筆畫會貼在一起。
2. **中文字沒有字間空隙可以收。** 負字距會讓全形字的筆畫互相碰到，標點也會擠進前一個字。
3. **中文標題常常斷成兩三行。** 行數一多，行距不足的問題比英文單行標題明顯。

所以每個標題 token 有兩組值，`:lang(en)` 的頁面套用 Latin 那一組（[proposed]；Latin 值的來源見 frontmatter）：

| Token | 中文行高 | 中文字距 | Latin 行高 | Latin 字距 |
|---|---|---|---|---|
| `display` | 1.15 | 0 | 0.95 | −0.03em |
| `h1` | 1.2 | 0 | 1.0 | −0.02em |
| `h2` | 1.25 | 0 | 1.1 | −0.01em |
| `h3` | 1.35 | 0 | 1.25 | 0 |
| `scroll-list` | 1.2 | 0 | 1.0 | −0.02em |
| `stat`（數字） | 1 | −0.02em | 1 | −0.02em |

- Latin 字距取 −0.03em 而不是 Agentcard 的 −0.055em：Jost 是幾何體，圓形字母（o、e、c）收太緊會黏在一起。
- 中文標題裡夾的英文與數字（例如產品名、「ISO 50001」）跟著中文那組值走，不另外收字距。
- `stat` 只放數字與單位，所以兩種語言都用行高 1。
- 行高比現行緊（`display` 由 1.05 的拉丁值改成明確的 1.15 中文值；`h1` 由 1.15 放到 1.2 是因為字級大了三成）。

### 流動字級

沿用現行的 375–1200px 區間與公式（[base]）：斜率（vw）=（最大 − 最小）÷ 825 × 100；截距（rem）=（最小 − 斜率 ÷ 100 × 375）÷ 16。新的字級階把標題放大（[proposed]）：

| Token | `clamp()` | ≤375px | 768px | 1024px | ≥1200px | 現行上限 |
|---|---|---|---|---|---|---|
| `display` | `clamp(2.75rem, 1.5rem + 5.3333vw, 5.5rem)` | 44 | 65 | 78.6 | 88 | 72 |
| `h1` | `clamp(2.25rem, 1.4545rem + 3.3939vw, 4rem)` | 36 | 49.3 | 58 | 64 | 48 |
| `h2` | `clamp(1.75rem, 1.2955rem + 1.9394vw, 2.75rem)` | 28 | 35.6 | 40.6 | 44 | 32 |
| `h3` | `clamp(1.375rem, 1.2045rem + 0.7273vw, 1.75rem)` | 22 | 24.9 | 26.7 | 28 | 22 |
| `h4` | `clamp(1.125rem, 1.0682rem + 0.2424vw, 1.25rem)` | 18 | 19 | 19.6 | 20 | — |
| `lead` | `clamp(1.125rem, 1.0682rem + 0.2424vw, 1.25rem)` | 18 | 19 | 19.6 | 20 | 20 |
| `stat` | `clamp(2.5rem, 1.5909rem + 3.8788vw, 4.5rem)` | 40 | 55.2 | 65.2 | 72 | — |
| `scroll-list` | `clamp(2rem, 1.0909rem + 3.8788vw, 4rem)` | 32 | 47.2 | 57.2 | 64 | — |
| `body`、`button` | `1rem` | 16 | 16 | 16 | 16 | 16 |
| `small`、`spec` | `0.875rem` | 14 | 14 | 14 | 14 | 14 |
| `label` | `0.75rem` | 12 | 12 | 12 | 12 | 12 |

現行規則全部保留（[base]）：同一段區間、rem 加 vw、最大值不超過最小值的 2.5 倍（最大的 `display` 是 2 倍）、16px 以下不流動、元件沿用同一套算法。`display` 的手機下限維持 44px：375px 寬扣掉左右留邊後一行約 7 個中文字，再大就會每行只剩五個字。

## Spacing

間距階不變（[base]）：4／8／16／24／32／48／64／96／128／160px。語意用法：

| 用途 | 值 | 來源 |
|---|---|---|
| 區段上下留白 | 128px；首屏與重點區段 160px；手機 64px | [base] |
| 區段標題到內容 | 48px（手機 32px） | [proposed] |
| 組內間距 | 24px | [base] |
| 卡片欄距與列距 | 24px（現行 32px；柔影卡片靠近一點才像一組） | [proposed] |
| 卡片內距 | 32px；feature 卡 8px 包住視覺面板，文字區 24px | [base] |
| 滿版影像卡內距 | 48px（手機 24px） | [proposed] |
| 按鈕之間 | 12px | [proposed] |
| 漂浮 UI 卡伸出框外 | 24–48px | [proposed] |

## Layout & Grid

- 12 欄格線，內容最寬 1200px，左右留邊 24px（手機 16px）（[base]）。
- 滿版影像卡與深色區段可以放寬到 1392px（1440 − 2 × 24）（[proposed]）。
- 一個區段只講一件事（[base]）。
- **對齊**：區段標題與內文預設靠左（[base]，Klarna 的 hero 也是靠左）。可以置中的只有：首頁主視覺、feature 卡的標題與說明、數據列、頁尾 CTA 區塊（[fruitful]）。
- 卡片桌機 3 或 4 欄、平板 2 欄、手機 1 欄；最後一列不滿時靠左（[base]）。Bento 的寬窄交錯（7/5、5/7、5/3/4）保留（[base]）。
- 捲動大標清單：左 5 欄 sticky 媒體、右 6 欄清單、中間空 1 欄（[klarna] 的左影像右大標）。

### RWD 斷點

（[proposed]；與流動字級換算表的欄位一致）

| 名稱 | 寬度 | 欄 | 留邊 | 變化 |
|---|---|---|---|---|
| `sm` | < 768px | 4 | 16px | 卡片單欄；影像卡圓角 24px、比例 4:5；導覽收成漢堡；捲動清單改成一般手風琴；數據列 2 欄 |
| `md` | 768–1023px | 8 | 24px | 卡片 2 欄；影像卡圓角 32px；捲動清單的媒體改放在每一項下方 |
| `lg` | 1024–1199px | 12 | 24px | 完整版面；影像卡圓角 48px |
| `xl` | ≥ 1200px | 12 | 置中 | 內容停在 1200px，字級停止放大 |

釘住的捲動敘事只在 `lg` 以上啟用；以下改成直向堆疊的步驟卡。

## Elevation

陰影 token 都是完整的 `box-shadow` 字串，放在 frontmatter 的 `elevation`。由低到高：

| Token | 高度感 | 用在 | 不用在 | 來源 |
|---|---|---|---|---|
| `none` | 貼在頁面上 | 影像卡、照片、tint 面板、FAQ 列、次按鈕、停用元件 | — | [klarna] |
| `chip` | 幾乎貼著 | chip、建議膠囊 | 卡片 | [fruitful] |
| `card` | 浮起一層 | 卡片、feature 卡、評論卡 | 卡片裡的卡片 | [fruitful] |
| `card-hover` | 再高一點 | 可點卡片的 hover | 不可點的卡片 | [fruitful] |
| `overlay` | 在內容之上 | 導覽膠囊、下拉選單、tooltip、漂浮 UI 卡 | — | [fruitful] |
| `device` | 最高、最實 | 裝框的平台截圖、手機框、硬體產品照 | 一般卡片 | [fruitful] |
| `key-accent` | 實體按鍵 | `button-tactile`（一個畫面一顆） | 一般主按鈕 | [agentcard] |
| `key-light` | 白色按鍵 | 鍵帽圖示、tab 的選中項、深色區段的主按鈕 | — | [agentcard] |
| `key-pressed` | 凹下去 | 按鍵 pressed、選項卡 selected | — | [agentcard] |
| `glass-highlight` | 玻璃下緣反光 | 導覽膠囊（與 `overlay` 疊用） | — | [fruitful] |
| `dark-raise` | 深色底上的邊緣光 | 深色區段的卡片 | 淺色區段 | [proposed] |

規則：
- **陰影不疊陰影。** 有陰影的容器裡，子元素用 `none` 加 1px `line-default` 分隔；例外是 `device` 框外的漂浮 UI 卡。
- **hover 換陰影不直接改 `box-shadow`。** 把 `card-hover` 放在 `::after`，平時 `opacity: 0`，hover 時動 opacity（[proposed]）。
- **毛玻璃只有兩處**：導覽膠囊 `blur(8px)`（[fruitful]）與影像上的標籤 `blur(10px)`（[klarna]）。Agentcard 的 `blur(12px) saturate(1.4)` 不採用。
- 深色區段不用柔影（在深底上看不見），層次靠 `dark-surface` 與 `dark-raise`。

## Components

**Button。** 膠囊形（[base][klarna]），三個尺寸 52／44／32px（[klarna]）。字 16px／500（[klarna]）。
- `button-primary`：`accent` 底白字，平面、沒有陰影。hover 疊 `overlay-hover`，pressed 疊 `overlay-press` 並縮到 0.98。
- `button-secondary`：`bg-raised` 底、`text-primary` 字（[fruitful] 次按鈕的灰底）。取代現行的 Ghost。
- `button-tactile`：同樣是 `accent` 底白字，加 `key-accent` 陰影（[agentcard]）：上緣一條白色高光、下緣一條暗邊、底下一層帶 accent 色的落地影。pressed 換成 `key-pressed` 並縮到 0.98，看起來像被按下去。只用在首頁主視覺與頁尾 CTA 的那一顆「預約能源健檢」。
- `button-tactile-light`：白底的按鍵版，給深色區段與鍵帽圖示。
- 文字連結：`text-link`，底線平時 1px、hover 換 `accent-deep`。
- 一個畫面只有一顆實心主按鈕（[base]）；其餘用 secondary 或文字連結。
- 現行的波浪 hover 不再使用（見差異對照表）。
- 32px 尺寸只用在卡片內與表格列，點擊範圍用 `::before` 外擴到 44px（[proposed]）。

**Nav（玻璃膠囊）。**（[fruitful]）置中的膠囊，寬度隨內容、最寬 1200px，距視窗上緣 16px，`position: sticky`。`bg-glass` 加 `backdrop-filter: blur(8px)`、1px `line-subtle` 外框、`overlay` 陰影、下緣 `glass-highlight`。左邊 logo，中間選單項（膠囊形，hover 疊 `overlay-hover`），右邊語言切換與一顆 44px 主按鈕。不採用 Agentcard 的底部 Dock：B2B 買家習慣上方導覽，底部固定列也會擋到表單。大選單沿用現行的三張分類卡（[base]），圓角改 `lg`。`<768px` 收成 logo + 漢堡，面板往下淡入（[base] 的 0.26s 改成 `duration-swap`）。

**Card。** 白底、`xl` 圓角、`card` 陰影、內距 32px、沒有外框。內容順序不變（[base]）：插圖或圖示、英文小標、標題（`h3`）、一句說明（`small`、`text-secondary`）、連結或小按鈕貼底。可點的卡片 hover：上移 4px、陰影換 `card-hover`、插圖再上移 6px（[base] 的 6px 保留）。

**Card-feature。**（[fruitful] Feature 卡 + [base] Bento）上半是視覺面板：tint 底、`md` 圓角、4:3，裡面放等角插圖或裝框截圖的局部；下半是置中的標題與一行說明。面板與卡片邊緣留 8px（[base] bento 內距）。一排卡片的面板可以用不同 tint，但同一排最多三個色系。

**Media-card（48px 影像卡）。**（[klarna]）滿寬照片或影片，圓角 48／32／24px，比例 16:7（手機 4:5）。文字疊在影像上：左上是 `h1` 標題、`lead` 說明、一顆按鈕。影像必須在文字那一側留白（Klarna 的 `ClearSpaceLeft`）；留白不夠時加一層由文字側往外淡出的 `ink` 漸層（0.56 → 0），讓白字對比 ≥ 4.5:1。影像上的小標籤用 `bg-scrim`（ink 72%，白字最差情況 6.71）加 `blur(10px)`；Klarna 原本的 44% 在亮色影像上白字只有 2.78，所以調高（[proposed]）。不加陰影。

**Device-frame。**（[agentcard] 瀏覽器視窗框 + [fruitful] 手機框）
- 瀏覽器框：白底、`md` 圓角、1px `line-default`、`device` 陰影。頂列 36px、`bg-subtle` 底，左邊三個 8px 的 `line-strong` 圓點，中間一個膠囊形網址列（`spec` 字，寫真實的產品網域或留空，不編網址）。
- 手機框：40px 圓角、8px `ink` 邊框、`device` 陰影（[proposed]）。只在真的有手機版畫面時使用。
- 框內只放真實截圖，規則見 Illustration。

**Chip。**（[fruitful] 建議膠囊）白底、膠囊、高 32px、`chip` 陰影、1px `line-subtle`、可帶 16px 圖示。selected：`bg-accent-soft` 底、`accent-deep` 字、沒有陰影。放在 tint 底上時去掉陰影。可點的 chip hover 疊 `overlay-hover`（取代現行的 `product-primary` 外框）。

**Input。** 高 52px、`md` 圓角、1px `line-control` 外框（3.83:1）、白底。label 在上方（`small`、500），不用 placeholder 代替 label。focus：2px `focus-ring` 外框。error：2px `negative` 外框加一行 `negative` 說明與圖示。主視覺可以用 Fruitful 的大型輸入框變體（高 64px、`full` 圓角、右側圓形送出鈕），目前只預留給「能源健檢」入口，是否採用見待決定事項。

**Stat-row（數據列）。**（[klarna]）一排最多四項，每項是 `stat` 大數字（含單位，單位用 `h3` 大小）加一行 `small` 說明，項目之間 1px `line-default` 直線。數字必須是品牌方提供的真實數值，說明寫清楚數字的範圍與年份。進入畫面時可以跳動一次（見 Motion）。手機 2 欄。

**Scroll-list（捲動大標清單）。**（[klarna]）右側一串 `scroll-list` 大標（4–6 項），目前那一項 `opacity: 1`、其餘 0.55；左側 sticky 媒體（4:5、`2xl` 圓角）跟著切換。每一項底下可以展開一行說明與一顆 32px 按鈕（Klarna 的「Explore our offering」）。每一項都是 `<button>`，鍵盤可以上下移動；`aria-current` 標示目前項。用途：解決方案分類、產品線總覽、導入步驟。`<1024px` 不 sticky，媒體放在各項下方。

**FAQ-item。**（[fruitful] 整列按鈕 + [agentcard] 切換動態）`bg-subtle` 底、`md` 圓角的整列按鈕，列與列之間 8px。右側 20px 的加號，展開時轉 45°。展開時高度直接切換，答案內容淡入並上移 8px（`duration-swap`）。桌機可以在左側加主題 tab（[agentcard]）：40px 高，選中項用 `key-light`。

**Floating-ui-card（漂浮 UI 卡）。**（[fruitful]）白底、`lg` 圓角、`overlay` 陰影的小卡，貼在裝框截圖或等角插圖的邊緣，伸出框外 24–48px。內容是一個 `label`（量測項目）加一個 `spec` 數值與單位，或一個 20px 圖示加一行狀態。一張圖最多三張，不互相重疊，不蓋住截圖的重點。內容規則見 Illustration。

**Data-tooltip。** 圖表上的提示：`ink` 底白字、`sm` 圓角、`overlay` 陰影。第一行 `label`（時間或類別），之後每個序列一行：8px 色點、名稱、右對齊的 `spec` 數值與單位。跟著游標或鍵盤焦點出現，160ms 淡入，不位移。

**沿用不變的元件。**（[base]）頁尾 CTA 區塊（`bg-cta`、角落像素方塊、置中）、線框格、橫向時間軸、客戶 marquee。只改圓角與線色：線框格外框由 8px 改 `xl`，線用 `line-default`；時間軸橫線用 `line-strong`，最新節點仍填 `product-primary`。

## Motion

共用一條曲線 `easing-out`（[agentcard]，與現行按鈕波浪的曲線相同）；需要回彈的地方用 `easing-spring`（[agentcard]）；只有捲動釘住的場景切換用 `easing-in-out`（[fruitful]）。Klarna 的 `ease` 0.2s 只留給捲動清單的明暗切換。

**只動 `transform`、`opacity`、`clip-path`、`stroke-dashoffset`。** 底色變化用疊色層的 opacity，陰影變化用陰影層的 opacity，高度變化直接切換再讓內容淡入。

| # | 模式 | 觸發 | 屬性 | 時長 | 曲線 | 延遲／stagger | reduced-motion 降級 | 來源 |
|---|---|---|---|---|---|---|---|---|
| 1 | 按鈕 hover | 游標進入、鍵盤焦點 | 疊色層 `opacity` 0 → 1 | 160ms | `easing-out` | 無 | 保留（只有透明度） | [agentcard] 時長、[klarna] 疊色 |
| 2 | 按鈕 press | `:active` | `transform: scale(0.98)`；tactile 另換 `key-pressed`（陰影層 opacity） | 120ms | `easing-out` | 無 | 不縮放，只疊 `overlay-press` | [agentcard] |
| 3 | 卡片 hover | 游標進入可點卡片 | 卡片 `translateY(-4px)`；`card-hover` 陰影層 opacity；插圖 `translateY(-6px)` | 卡片 160ms；插圖 380ms | 卡片 `easing-out`；插圖 `easing-spring` | 無 | 不位移，只換陰影 | [agentcard] 時長、[base] 6px |
| 4 | 區段進場 | 區段露出 20%，只播一次 | `translateY(8px)` → 0、`opacity` 0 → 1 | 420ms | `easing-out` | 每項 60ms，第 8 項之後不再延遲 | 直接顯示 | [agentcard] 位移與時長、[base] stagger 與 20% |
| 5 | 文字替換 | tab 切換、輪播換標題、捲動清單換說明 | 舊字 `opacity` → 0、`translateY(-4px)`、`blur(2px)`；新字由 `translateY(4px)`、`blur(2px)` 進來 | 出 120ms、進 240ms | `easing-out` | 進場等出場結束 | 直接換字 | [agentcard] |
| 6 | 數字跳動 | 數據列或漂浮 UI 卡第一次進入畫面 | 每個數字位各自 `translateY(100%)` → 0、`opacity` 0 → 1（外層 `overflow: hidden`） | 每位 420ms，整體不超過 720ms | `easing-out` | 由左到右每位 30ms | 直接顯示最終值 | [proposed]，時長 [agentcard] |
| 7 | 捲動驅動清單 | 清單項通過視窗中線 | 項目 `opacity` 1 ↔ 0.55；媒體交叉淡入 | 項目 200ms；媒體 240ms | 項目 `ease`；媒體 `easing-out` | 無 | 保留明暗切換；媒體直接換 | [klarna] |
| 8 | 捲動釘住敘事 | 區段頂端碰到導覽下緣 | 內容 `position: sticky`；每一步的畫面 `opacity` 與 `translateY(16px)` 切換；進度條 `scaleX` | 每步切換 600ms（由捲動位置觸發，不是跟手拖動） | `easing-in-out` | 無 | 不釘住，改成直向排列的步驟，全部顯示 | [fruitful] goalflow、[base] 解決方案頁 |
| 9 | Marquee | 自動 | `translateX(0 → -50%)`（內容複製一份） | 寬度 ÷ 40px/s | `linear` | 無 | 停止，改成可橫向捲動的靜態列 | [base] 速度、[fruitful] |
| 10 | 漂浮 UI 卡 | 所屬的框進入畫面 | 進場 `translateY(12px)` → 0、`opacity`；之後閒置漂浮 `translateY(±4px)` | 進場 380ms；漂浮 6s 來回 | 進場 `easing-spring`；漂浮 `ease-in-out` | 每張 80ms，框本身進場後 200ms 開始 | 直接顯示、不漂浮 | [fruitful] 語彙、[agentcard] 曲線、數值 [proposed] |
| 11 | 描線勾選 | 表單送出成功、比較清單進入畫面 | `stroke-dashoffset` 由路徑長度 → 0 | 420ms | `easing-out` | 清單每項 60ms | 直接顯示完整勾選 | [agentcard] |
| 12 | 頁面載入 | `DOMContentLoaded` | 主視覺的標籤、標題、副標、按鈕依序 `translateY(8px)` + `opacity`；裝框截圖最後進來 | 每項 420ms，全部在 900ms 內結束 | `easing-out` | 0／60／120／180ms，截圖 240ms | 直接顯示 | [agentcard] 進場、[base] stagger |
| 13 | 規格標籤揭露 | 標籤進入畫面 | `clip-path: inset(0 100% 0 0)` → `inset(0)` | 420ms | `easing-out` | 接在所屬圖片進場後 120ms | 直接顯示 | [agentcard] 打字效果 |
| 14 | FAQ 展開 | 點擊 | 加號 `rotate(45deg)`；答案 `translateY(8px)` + `opacity` | 加號 160ms；答案 240ms | `easing-out` | 無 | 直接顯示 | [agentcard] faq-topic-in |
| 15 | 輪播進度條 | 自動輪播 | `transform: translateX(-100%)` → 0 | 5000ms | `linear` | 無 | 不自動輪播，隱藏進度條 | [klarna] |
| 16 | 鍵帽圖示回彈 | 點擊 | `scale(0.94)` → 1 | 380ms | `easing-spring` | 無 | 不縮放 | [agentcard] |
| 17 | 能源流動 | 沿用現行三處 | `transform`、`opacity`、`stroke-dashoffset` | 沿用 | 沿用 | 沿用 | 直接切換 | [base] |

補充規則：
- **不做載入畫面。** Agentcard 的像素溶解 loader 不採用；頁面載入不擋內容，主視覺標題的延遲是 0，不拖慢最大內容繪製。
- **進場只播一次。** 往回捲不重播。
- **自動播放的東西都要能停。** Marquee hover 與鍵盤焦點時暫停（[base]）；自動輪播與影片有暫停鈕；閒置漂浮在框離開畫面時停止。
- **釘住的區段有長度上限**：每一步佔 80–100vh，一段最多七步（現行解決方案頁的上限），底部顯示進度（[base]）。
- **回彈只給小東西。** `easing-spring` 只用在 64px 以下的元素（圖示、小卡、插圖）；整張卡片與區段不回彈。
- 視差只保留現行解決方案頁的細網格（[base]），不擴大使用。

**`blur` 允許的地方（只有這四處）：**
1. 導覽膠囊的 `backdrop-filter: blur(8px)`（[fruitful]），靜態。
2. 影像上標籤的 `backdrop-filter: blur(10px)`（[klarna]），靜態。
3. 文字替換的 `filter: blur(2px)`（[agentcard]）：只加在單行文字上、時長 ≤ 240ms、模糊半徑固定 2px。
4. 主視覺背景裡的失焦 UI 卡（[fruitful] 的 `blur(7.9px)`）：輸出成已經模糊的圖片，不用即時 `filter`；它只能動 `transform`。

其他地方不用 `filter: blur()`：不對大面積做模糊進場（現行軟體頁的 `blur(12px)` 進場改成第 12 項），能源流動的發光仍用半透明描邊（[base]）。

## Illustration

視覺有三種素材，各有固定的裝法：等角插圖、產品截圖、照片。共同規則：只用品牌方提供或依實物繪製的內容，不編造畫面、數值與客戶（[base]）。

### 等角插圖

**畫法不變。**（[base]）等角投影、手繪感的單色平塗；每個物件只用一個 product color；邊線與細節是白色細線；受光較少的面疊白色斜線；物件底下一條同色淺階的偏移色帶；無線訊號用 `product-highlight` 圓點虛線；一張圖最多三個物件；沒有外框盒與地面線。

**吸收參考站的四件事：**

1. **站在 tint 面板上。**（[fruitful] 粉彩方塊）插圖不再直接放在頁面底色上，而是放進 tint 底、`md`–`2xl` 圓角的面板。面板色跟著物件主色：`product-primary` 的物件配 `tint-teal-bg`，`product-highlight` 配 `tint-orange-bg`，`product-deep` 配 `tint-blue-bg`。物件可以從面板上緣突出最多 24px（[base]「從卡片上緣突出」的做法保留）。
2. **面板後面可以有光暈。**（[fruitful]）主視覺的插圖面板後面放一處 `bg-glow` 徑向光暈。小卡不放。
3. **旁邊掛漂浮 UI 卡顯示讀數。**（[fruitful]）用 `floating-ui-card` 說明這個硬體量什麼、傳到哪裡。卡片貼在面板邊緣，用一條 `product-highlight` 圓點虛線連到物件。內容只能是下面三種：
   - 規格書上有的數值，用 `spec` 字，寫明單位；
   - 量測項目與單位，不帶數值（例如「電流 A」「溫度 °C」）；
   - 狀態文字加圖示（例如「已連線」）。
   不放編造的即時讀數（[base]「示意圖不放編造的數值」）。
4. **流程圖用 tint 方塊加細連線。**（[fruitful]）「感測 → 閘道 → 平台」這類流程，每一步是一個 tint 底、`lg` 圓角的方塊，裡面放等角物件或 24px 圖示，方塊之間 1px `line-strong` 連線加 6px 圓點。能源流動的流光可以沿這條線走（[base]）。

**不採用的：**
- **3D 渲染質感**（[agentcard] 的光滑塑膠物件、`drop-shadow`）。等角插圖維持平塗；一旦加上漸層高光與落地影，就得全部重畫，也會與 `device` 陰影搶層次。插圖物件本身不加任何陰影，只有它所在的面板或卡片有。
- **像素藝術、CRT 掃描線、雜訊、手寫箭頭**（[agentcard]）。頁尾 CTA 的角落像素方塊是既有元素，保留但不擴大（[base]）。
- **插圖當背景鋪滿**（[agentcard] hero 的爆散物件）。

畫布尺寸：小卡 200 × 170（[base]）；feature 卡面板 4:3；主視覺面板 1:1 或 4:5（[klarna] 的比例）。

### 產品截圖（軟體平台）

- **一律裝框。** 桌機畫面放進瀏覽器框（`device-frame`），手機畫面放進手機框。不把截圖裸放在頁面上，也不斜放、不做透視變形。
- **只用真實截圖。** 2x 解析度，匯出寬度至少是顯示寬度的兩倍；中文頁用中文介面、英文頁用英文介面。畫面上的客戶名稱、案場名稱、帳號要先確認可以公開，否則換成品牌自己的示範場域資料或遮掉（遮罩用 `bg-raised` 色塊，不用模糊）。
- **比例**：瀏覽器框內容區 16:10（[proposed]）。要強調局部時裁切，不縮小整張到看不清字；裁切後的局部放進 feature 卡面板時去掉瀏覽器頂列，只留 `md` 圓角與 1px `line-default`。
- **重點標示**：2px `product-highlight` 框、`xs` 圓角（[base] 解決方案頁的高亮框），旁邊配一張漂浮 UI 卡說明。一張截圖最多兩處。
- **背景**：框後面放白 → `bg-subtle` 的線性漸層，或一處 `bg-glow` 光暈（[fruitful]）。不放 Agentcard 那種模糊的抽象色塊。
- **漂浮 UI 卡**：內容必須是這張截圖裡真的有的元件（放大的讀數卡、告警列、節能量），不另外編一張介面。最多三張，伸出框外 24–48px。
- **主視覺的失焦背景卡**（[fruitful]）：可以把同一個畫面的其他元件輸出成模糊圖片放在框後面，最多四張，不透明度 ≤ 60%。

### 照片

- **固定比例。**（[klarna]）16:7（滿版影像卡）、1:1（方形卡、人物）、4:5（直幅卡、捲動清單的 sticky 媒體）。不用其他比例；實績頁輪播沿用現行尺寸（[base]）。
- **圓角**跟著容器：影像卡 48／32／24px，卡片裡的照片 `md`，小縮圖 `sm`。
- **內容**：品牌自己的案場照、安裝在現場的硬體、產品去背照。具名客戶的照片要先確認可以公開（[base]）。不用圖庫人像；Klarna 那種品牌色道具的棚拍不採用，因為沒有這類素材，也不符合「真實素材」原則。
- **處理**：不加濾鏡、不做雙色調、不疊色。只允許為了讓文字可讀而加的 `ink` 漸層（見 Media-card）。同一排的照片白平衡要一致。
- **留白**：要疊字的照片在文字那一側留出至少 40% 的乾淨區域（[klarna] `ClearSpaceLeft`）。
- **去背的硬體照**放在 tint 面板上，加 `device` 陰影（唯一可以加在照片上的陰影）。
- **影片**（[klarna][fruitful] 都大量使用）：只在有真實素材時用；靜音、可暫停、有 poster 圖；`prefers-reduced-motion` 時不自動播放。

## Iconography

- Tabler Icons outline、`stroke-width` 1.5、`currentColor`、20px（[base]）。大圖示 24px。軟體頁 tab 的 Lucide 例外保留（[base]）。
- **圖示底**（[fruitful] 粉彩配對）：卡片開頭的圖示可以放在 40px、`md` 圓角的 tint 方塊裡，圖示用該色系的深字色。
- **鍵帽圖示**（[agentcard] App 鍵帽）：產品線入口可以做成 56px、`lg` 圓角、白底加 `key-light` 陰影的方塊，點擊時回彈。只用在產品選單與產品總覽（[proposed]）。
- 圖示旁邊一定有文字；只有圖示的按鈕要有 `aria-label`，點擊範圍至少 44px。
- 參考站都很少用圖示（[klarna]）：能用文字說清楚就不加圖示，不用圖示當裝飾。

## Imagery / Photography

詳細規則在 Illustration 的「產品截圖」與「照片」。摘要：

| 素材 | 容器 | 比例 | 圓角 | 陰影 | 可疊的東西 |
|---|---|---|---|---|---|
| 平台截圖（桌機） | 瀏覽器框 | 16:10 | `md` | `device` | 漂浮 UI 卡 ≤ 3、高亮框 ≤ 2 |
| 平台截圖（手機） | 手機框 | 依實際畫面 | 40px | `device` | 漂浮 UI 卡 ≤ 2 |
| 截圖局部 | feature 卡面板 | 4:3 | `md` | 無（1px 線） | 無 |
| 案場照（滿版） | media-card | 16:7；手機 4:5 | 48／32／24px | 無 | 標題、按鈕、標籤 |
| 案場照（卡片內） | 卡片上半 | 1:1 或 4:5 | `md` | 無 | 標籤 |
| 硬體去背照 | tint 面板 | 1:1 | 面板 `xl` | `device`（加在產品上） | 漂浮 UI 卡 ≤ 3 |
| 等角插圖 | tint 面板 | 4:3、1:1、4:5 | `md`–`2xl` | 無 | 漂浮 UI 卡 ≤ 3 |

所有 `<img>` 都寫 `width`、`height` 與有內容的 `alt`；純裝飾的圖 `alt=""`。

## Data visualization

給能源數據圖表用（用電趨勢、分項佔比、基準線比較）。結構取自 Klarna 的資料色盤（[klarna]），縮成六色並重新取值，讓每一色在白底上都有 3:1 以上（[proposed]）。

**分類色（依序使用）：**

| Token | 值 | 白底對比 | `bg-subtle` 對比 | 來源 |
|---|---|---|---|---|
| `viz-1` | #12909a | 3.83 | 3.53 | product-teal 加深 [proposed] |
| `viz-2` | #d9730d | 3.28 | 3.02 | product-orange 加深 [proposed] |
| `viz-3` | #052c39 | 14.73 | 13.56 | product-navy [base] |
| `viz-4` | #3f7fdc | 3.98 | 3.66 | [klarna] |
| `viz-5` | #a03db3 | 5.51 | 5.07 | [klarna] |
| `viz-6` | #c8649b | 3.65 | 3.36 | [klarna] |
| `viz-other` | #7a828f | 3.88 | 3.57 | [fruitful] grey-700，「其他」與基準線 |

色盲檢查（Machado 2009 模擬、CIE76 ΔE，六個分類色兩兩比較）：一般視覺最接近的一對 ΔE 36.1；紅色盲 11.1（青／玫紅）；綠色盲 11.7（青／玫紅）；藍色盲 10.5（青／藍）。全部在 10 以上，但青與玫紅、青與藍在色盲下只是勉強分得開，所以：

- **顏色不是唯一的辨識依據。** 折線加不同的線型或端點形狀；長條直接標名稱；圖例順序與圖上順序一致。
- **一張圖最多六個序列。** 超過的併成「其他」，用 `viz-other`。`viz-other` 與 `viz-1`、`viz-6` 在色盲下會混淆（ΔE 3.5–4.9），所以它只給「其他」或虛線基準線，不當第七個分類。
- **前兩色對應 product color**：主要序列用 `viz-1`，要對比的序列（例如改善前、尖峰）用 `viz-2`。
- 原本的 product color（#2aabb0、#f28f3b）在白底只有 2.78 與 2.40，只能當面積填色（面積圖、長條的淺色版），而且要有 1px 同色系深色邊線。

**連續色（單一數值的深淺，例如熱力圖）：** #dcf0f0 → #a5d9db → #5fc0c4 → #2aabb0 → #12909a → #05556c → #052c39（兩端 [base]，中間 [proposed]）。最淺兩階在白底對比不到 1.6，格子之間要留 1px 白線。

**正負相對的數值（例如與基準線的差）：** 節省用 `viz-1`，超出用 `viz-2`，中點用 `bg-raised`。不用紅綠。

**圖表樣式：**
- 格線 `viz-grid`（1px），只留水平格線；軸線 `line-strong`；軸標 `small`、`text-tertiary`；數值用 `spec` 字、`tabular-nums`。
- 長條頂端圓角 4px；折線 2px；資料點 hover 時顯示 8px 圓點加 2px 白邊。
- 圖表容器是 `card` 或 feature 卡面板；放在 tint 面板上時只用 `viz-1`、`viz-3` 與白色。
- 提示用 `data-tooltip`。
- 圖表上的數值必須是真實資料或明確標示「示意」且不帶數字（[base]）。
- 圖表進場：長條 `scaleY` 由 0 長出（`transform-origin: bottom`）、折線 `stroke-dashoffset` 描出，600ms、`easing-out`；reduced-motion 時直接顯示。

**深色區段的圖表：** 改用亮色版 #2aabb0、#f28f3b、#e2eaec、#90bcf8、#d38ddf、#ffa8cd（前兩個 [base]，後三個 [klarna]）。在 #0f1b25 上對比 6.27–14.30，但色盲下最接近的一對 ΔE 只有 8.9，深色圖表一律直接標名稱，並且最多四個序列。

## Dark section

（[base] 的 `theme-dark` 做法保留，值改用透明度系統）

- 底 `dark-bg` #0f1b25、卡片 `dark-surface` #16242f（[base]）。
- 文字是白色的百分比（[agentcard]）：100%（17.44）、72% #bcbfc2（9.44）、55% #93989d（6.00）。線是白 16% #353f48；輸入框外框用白 55%（6.00，≥ 3:1）。
- 強調色換成 `dark-accent` #2aabb0（6.27）（[base]）；`accent` #00788c 在深底上只有 3.92，不用在文字。
- 主按鈕反轉成 `button-tactile-light`：白底、`ink` 字（16.90）。次按鈕是白 12% 底、白字。焦點環用 `dark-accent`。
- 陰影：不用柔影；卡片上緣加 `dark-raise`（白 8% 的 1px 內線）（[proposed]）。裝框截圖在深底上不加 `device` 陰影，改 1px 白 16% 外框。
- 光暈：`bg-glow` 可以用在深底上，不透明度降到 16%。
- 插圖裡的深色物件改用 `ink-500` #4a5f73（[base]）；tint 面板在深色區段改成 `dark-surface`。
- 用在哪裡：首頁主視覺與一個重點區段（[base]），以及 footer。一頁最多兩個深色區段（footer 不算）。Agentcard 把品牌色整片鋪滿 hero 的做法不採用（[base]「`accent` 不鋪成大面積背景」）。
- 做法不變（[base]）：在區段加 `theme-dark`，在裡面重新指定 Semantic 與 Component token。

## States

| 狀態 | 做法 | 適用 | 來源 |
|---|---|---|---|
| default | 依元件定義 | 全部 | — |
| hover | 疊 `overlay-hover`（ink 8%）；可點卡片上移 4px、換 `card-hover` 陰影；連結換 `accent-deep` | 只在 `@media (hover: hover)` 啟用 | [klarna] 疊色、[agentcard] 時長 |
| pressed | 疊 `overlay-press`（ink 12%）+ `scale(0.98)`；tactile 換 `key-pressed` | 按鈕、chip、可點卡片（卡片不縮放，只取消上移） | [klarna]、[agentcard] |
| focus-visible | 2px `focus-ring` 外框、外擴 2px、圓角跟著元件 | 所有可操作元素；hover 的視覺變化同時套用 | [base] |
| selected | chip、tab：`bg-accent-soft` 底 + `accent-deep` 字；選項卡：2px `accent` 外框（[fruitful] 選項卡）；按鍵式 tab：`key-light`；清單項：`opacity: 1` | 加 `aria-selected`／`aria-current`／`aria-pressed` | [fruitful]、[agentcard]、[klarna] |
| disabled | `bg-raised` 底、`text-disabled` 字、沒有陰影、沒有 hover、`cursor: not-allowed` | 用 `disabled` 或 `aria-disabled`；旁邊說明為什麼不能按 | [base] |
| loading | 按鈕：文字留著，左邊加 16px 轉圈（1s `linear`），寬度不變，`aria-busy`；區塊：`bg-raised` 的骨架方塊，形狀與內容一致，`opacity` 0.6 ↔ 1、1.2s | reduced-motion 時轉圈與骨架都靜止 | [proposed] |
| empty | 置中：一張小的等角插圖或 40px 圖示底、一行 `h4` 說明現況、一行 `small` 說明下一步、一顆 secondary 按鈕 | 搜尋無結果、篩選無結果、尚無內容的清單 | [proposed] |
| error | 2px `negative` 外框 + 圖示 + 一行 `negative` 說明（說明怎麼修正）；區塊錯誤用 `negative-bg` 底的提示列 | 表單欄位、載入失敗；`aria-invalid`、`aria-describedby` | [klarna] 語意色 |
| success | `positive-bg` 底的提示列 + 描線勾選（Motion 第 11 項） | 表單送出 | [klarna]、[agentcard] |
| visited | 內文連結不另設顏色 | — | [base] |

## Accessibility

**對比。**（WCAG 2.2 AA；數值由相對亮度公式算出）
- 一般文字 ≥ 4.5:1：`text-primary` 16.90、`text-secondary` 6.71、`text-tertiary` 5.10（`bg-subtle` 上 4.70）、`text-link` 5.17（`bg-subtle` 4.76、`bg-accent-soft` 4.52）、主按鈕白字 5.17（hover 5.68、pressed 6.00）、次按鈕 14.68、tooltip 16.90。
- 大字（≥ 24px）≥ 3:1：捲動清單未選中項 3.83。
- 非文字 ≥ 3:1：輸入框外框 3.83、焦點環 5.17（`bg-subtle` 4.76）、圖表色 3.28–14.73。
- 已知不合格、要避開的組合：`accent` 文字放在 `bg-raised`（4.49）、`text-tertiary` 放在 `bg-raised`（4.43）、`text-large-muted` 用在 24px 以下、product color 當文字、白字放在沒有漸層或 `bg-scrim` 的照片上。
- `line-default`、`line-subtle` 是裝飾線，不承擔辨識功能；需要辨識邊界的控制項用 `line-control`。

**Focus ring。** `outline: 2px solid var(--focus-ring); outline-offset: 2px`（[base]）。用 `:focus-visible`。不用 `box-shadow` 畫焦點環（強制色彩模式下會消失）。深色區段用 `dark-accent`（6.27）。照片上的可操作元素，焦點環外再加 2px 白色外框。sticky 導覽不能蓋住焦點元素：`scroll-padding-top` 設成導覽高度加 24px。

**鍵盤。** 所有互動都能用鍵盤完成：捲動清單用上下鍵、tab 用左右鍵、FAQ 用 Enter／Space、輪播有上一張與下一張按鈕。釘住的捲動敘事不攔截鍵盤捲動。

**點擊範圍。** 至少 44 × 44px；32px 的按鈕與 chip 用偽元素外擴。

**`prefers-reduced-motion: reduce` 的降級**（每個動畫的做法在 Motion 表格最後一欄）。原則：
- 位移、縮放、回彈、模糊、描線全部取消，改成直接顯示最終狀態。
- 只有透明度的短變化（按鈕 hover 疊色、捲動清單的明暗、tooltip 淡入）保留，因為它們傳達狀態。
- 自動播放的東西全部停止：marquee 變成靜態可捲動的列、輪播不自動換頁、影片不自動播放、漂浮卡不漂浮、能源流動直接切換。
- 釘住的捲動敘事改成一般的直向排列，所有步驟一次顯示。
- 數字直接顯示最終值。

**其他。**
- 毛玻璃在 `prefers-reduced-transparency: reduce` 時改成不透明的 `bg-surface`（[proposed]）。
- 強制色彩模式（`forced-colors: active`）：陰影會消失，卡片、按鈕、輸入框補 1px `CanvasText` 外框。
- 文字可以放大到 200% 不裁切（字級上限 ≤ 下限的 2.5 倍，[base]）。
- 數字跳動的元素用 `aria-label` 提供最終值，跳動中的數字位設 `aria-hidden`。
- 自動更新的內容不搶焦點；表單結果用 `role="status"` 或 `role="alert"`。
- 語言標記：中文頁 `lang="zh-Hant"`、英文頁 `lang="en"`，行高與字距的切換靠這個屬性。

## Do's and Don'ts

- Do：用 Semantic／Component token；中性色用 `ink` 的百分比推出。
- Do：卡片用 `card` 柔影加 `xl` 圓角；巢狀圓角 = 外層 − 內距。
- Do：平台截圖一律裝框；等角插圖一律放在 tint 面板上。
- Do：每個主張旁邊放規格、數據列或裝框截圖（[base]）。
- Do：動態共用 `easing-out`，微互動 160ms；每個動畫都寫 reduced-motion 降級。
- Do：中文標題用中文那組行高與字距；英文頁用 Latin 那組。
- Do：一個畫面一顆實心主按鈕，其中最多一顆是 `button-tactile`。
- Don't：把中文標題的行高設到 1.15 以下，或加負字距。
- Don't：純黑陰影、硬陰影、有顏色的發光陰影（`key-accent` 的落地影除外）；陰影疊陰影。
- Don't：`accent` 鋪成區段背景（[base]）；文字漸層、按鈕漸層、多色漸層。
- Don't：在列出的四處以外用 `blur`；對大面積做模糊進場。
- Don't：動 `width`、`height`、`top`、`left`、`margin`、`box-shadow`、`background-color`、`filter`（文字替換的 2px blur 除外）。
- Don't：3D 渲染、像素藝術、CRT 掃描線、雜訊質感、手寫註解、底部 Dock 導覽、不對稱圓角、載入畫面。
- Don't：product color 當文字色或當圖表唯一的辨識依據；logo 的 #2b5068 當 UI 色（[base]）。
- Don't：`text-large-muted`（ink 55%）用在 24px 以下的文字。
- Don't：一張圖超過三張漂浮 UI 卡；漂浮卡上放編造的讀數。
- Don't：圖庫人像、濾鏡、雙色調、斜放或透視變形的截圖。
- Don't：純 `vw` 或 `px` 的 `clamp()`；為單一元件另開流動區間（[base]）。
- Don't：編造產品名稱、規格、認證、客戶名稱、數據（[base]）。
