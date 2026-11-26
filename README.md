# Landing Page Style

讓 Claude 照三套風格做活動頁、landing page。安裝一次，之後只要說「用手繪風做一頁…」就會載入對應的規格。

| 風格 | Skill | 長相 | 適合 |
|---|---|---|---|
| **手繪風** | `hand-drawn-style` | 白底、柔影大圓角卡片、青色 #00788c、riso 網點手繪插畫 | 親切、明亮、需要插畫說明步驟的活動頁 |
| **科技風格** | `tech-style` | 深色底、#2aabb0 圓點馬賽克、玻璃卡片、等寬字；不用插畫、不用漸層 | 強調數據、平台、AI 的深色頁 |
| **簡約風** | `minimal-style` | 白與淺灰交替、1px 細框扁平卡、深青 #05556C 只標讀數；沒有圖片 | 以規格、痛點、流程為主的產品頁 |

另附 `riso-illustration`：手繪風用的網點插畫工具（SVG 濾鏡 + 用 Chrome 輸出 PNG）。

## 安裝

### Claude Code

```
/plugin marketplace add eleanorchen-designer/Landingpage-style
/plugin install landingpage-style@landingpage-style
```

或在終端機：

```bash
claude plugin marketplace add eleanorchen-designer/Landingpage-style
claude plugin install landingpage-style@landingpage-style
```

### Claude 桌面版的 Code 分頁

在對話框輸入上面兩行 `/plugin` 指令即可，與 Claude Code 相同。

### 更新

```bash
claude plugin marketplace update landingpage-style
```

## 使用

直接說要哪一套風格與要做什麼，例如：

- 「用**手繪風**做一頁節能補助的活動頁，分成 hero、適用對象、四個步驟、CTA」
- 「用**科技風格**做能源管理平台的介紹頁」
- 「用**簡約風**做一款量測硬體的產品規格頁」
- 「幫這頁畫四張**手繪風插畫**：清冊、量測、分析、報告」

也可以直接點名 skill：`/landingpage-style:tech-style`。

## 內容

```
plugins/landingpage-style/skills/
├── hand-drawn-style/   DESIGN.md、SKILL.md、illustrations/build.mjs（批次產插畫的範例）
├── tech-style/         DESIGN.md、SKILL.md、specimen.html（風格範例頁）
├── minimal-style/      DESIGN.md、SKILL.md、specimen.html（風格範例頁）
└── riso-illustration/  SKILL.md、STYLE.md、濾鏡庫、渲染腳本、範例
```

想先看長相：用瀏覽器打開 `tech-style/specimen.html` 或 `minimal-style/specimen.html`。

## 需求

- 產插畫（riso-illustration、build.mjs）需要 Node 18+ 與 Chrome／Chromium；找不到 Chrome 時設 `CHROME_PATH`。
- 字體都從 Google Fonts 載入，不需要另外安裝。

## 共同原則

三套風格都遵守：不編造產品名稱、規格、認證、客戶與數據；沒有真實內容就留空或標「示意」。
