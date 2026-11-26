# Landing Page Style

這是一組給 Claude 用的頁面風格。裝好後只要說「用 ○○ 風格做一頁…」，Claude 就會照規格做活動頁或 landing page。

## 1. 安裝（只需一次）

在 Claude Code，或 Claude 桌面版的 Code 分頁，輸入：

```
/plugin marketplace add eleanorchen-designer/Landingpage-style
/plugin install landingpage-style@landingpage-style
```

裝完重開 Claude Code。

也可以在終端機裝：

```bash
claude plugin marketplace add eleanorchen-designer/Landingpage-style
claude plugin install landingpage-style@landingpage-style
```

## 2. 三套風格怎麼選

| 風格 | Skill | 長相 | 適合 |
|---|---|---|---|
| **手繪風** | `hand-drawn-style` | 白底、柔影大圓角卡片、手繪網點插畫 | 親切明亮、需要插畫說明步驟的活動頁 |
| **科技風格** | `tech-style` | 深色底、青綠圓點馬賽克、玻璃卡片；不用插畫、不用漸層 | 強調數據、平台、AI 的深色頁 |
| **簡約風** | `minimal-style` | 白與淺灰交替、細框扁平卡片、只在重點數字上用深青；沒有圖片 | 以規格、痛點、流程為主的產品頁 |

另附 `riso-illustration`：手繪風用的網點插畫工具（SVG 濾鏡 + 用 Chrome 輸出 PNG）。

## 3. 怎麼下指令

直接說風格名稱和要做什麼，例如：

- 「用**手繪風**做一頁節能補助活動頁，分成 hero、適用對象、四個步驟、CTA」
- 「用**科技風格**做能源管理平台的介紹頁」
- 「用**簡約風**做一款量測硬體的產品規格頁」
- 「幫這頁畫四張**手繪風插畫**：清冊、量測、分析、報告」

也可以直接點名，例如 `/landingpage-style:tech-style`。

## 4. 小提醒

- **文案、數據、客戶名稱要自己提供。** 規格要求不編造內容，沒給的地方 Claude 會留空或標「示意」。
- **產插畫需要 Node 18 以上和 Chrome。** 只做頁面的話不需要。找不到 Chrome 時，設定 `CHROME_PATH` 環境變數，指向 Chrome 或 Chromium 的執行檔。
- **想先看風格長相：** plugin 裡附了科技風格和簡約風的範例頁 `specimen.html`，用瀏覽器打開就能看。
- **字體都從 Google Fonts 載入**，不需要另外安裝。
- **更新到最新版：**

  ```bash
  claude plugin marketplace update landingpage-style
  ```

## 檔案結構

```
plugins/landingpage-style/skills/
├── hand-drawn-style/   DESIGN.md、SKILL.md、illustrations/build.mjs（批次產插畫的範例）
├── tech-style/         DESIGN.md、SKILL.md、specimen.html（風格範例頁）
├── minimal-style/      DESIGN.md、SKILL.md、specimen.html（風格範例頁）
└── riso-illustration/  SKILL.md、STYLE.md、濾鏡庫、渲染腳本、範例
```
