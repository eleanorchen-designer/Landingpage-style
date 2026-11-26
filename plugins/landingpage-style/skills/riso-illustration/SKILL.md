---
name: riso-illustration
description: Use when the user asks for a spot illustration, hero picture or campaign graphic "in the riso / grain / 網點 / 蠟筆 / 顆粒 style", or wants illustrations for a 手繪風 page. Draws the subject as layered SVG with the bundled halftone, dry-brush, crayon-edge and grain filters, renders it to PNG with headless Chrome, and self-checks it against STYLE.md and examples/battery-plug.png.
---

# riso-illustration

為任何主題畫出同一風格的點綴插畫：扁平色塊、孔版網點、天藍乾刷疊色、蠟筆毛邊、唯一一條琥珀黃線。

**先讀 [STYLE.md](STYLE.md)**。色票、網點規則、構圖比例、Do/Don't 都在那裡，本檔只講流程。

## 檔案

| 路徑 | 用途 |
|---|---|
| `STYLE.md` | 風格規格（色票、紋理、筆刷、陰影、疊色、線條、構圖、Do/Don't） |
| `assets/riso-defs.svg` | 濾鏡庫（由 build-defs 產生，**不要手改**） |
| `assets/template.svg` | 起手模板，圖層順序已排好 |
| `scripts/build-defs.mjs` | 濾鏡庫原始碼；調參數改這裡，再 `node scripts/build-defs.mjs` |
| `scripts/render.mjs` | SVG → PNG（自動插入濾鏡庫，headless Chrome，無 npm 依賴） |
| `examples/battery-plug.svg` | 完整範例（電池＋插頭），照抄它的寫法最快 |
| `examples/battery-plug.png` | 上面範例的渲染結果，自查時當質感基準 |

以下指令都在本 skill 資料夾內執行（本 SKILL.md 所在的資料夾）。需要 Node 18+ 與 Chrome／Chromium（找不到時設 `CHROME_PATH`）。

## 流程

### 1. 把主題翻成「三角色」
這個風格的每個物件都有固定角色，新主題要對應進去：

| 角色 | 原型 | 材質 | 例：電池充電 |
|---|---|---|---|
| 主物件 hero | 文件 | 深青底＋天藍乾刷＋網點＋淺色（mark）色塊與文字線 | 電池 |
| 第二物件 | 手 | 暖灰白＋揉紙＋灰網點＋2–4 條短輪廓線 | 插頭 |
| 天藍物件 | 鉛筆 | 天藍＋右側暗網點＋一條亮線 | 電線 |
| 點綴線 | 塗鴉 | 琥珀黃細線，1–2 個小迴圈 | 電流火花 |

物件要簡化成大剪影（能用 5–15 個節點的 path 畫完）。不放可讀文字。主題只有一個物件時，仍要補一個暖灰白配角（手、紙、底座）和一條琥珀黃線。

### 2. 起草 SVG
- 複製 `assets/template.svg`（或 `examples/battery-plug.svg`）到輸出位置，改名。
- 依 STYLE.md §7 放構圖：主物件寬 55–62%、高 72–76%、偏左；第二物件從右側進入並交疊 20–35%。
- **圖層順序**照模板：背景 → `riso-grain` 群組 {錯位淡邊 → clip 內（底色、加深、淡網點屏、旋轉 −35° 的乾刷＋脊線、邊緣網點、下緣粗網點）→ tint 淺疊層 → 淺色（mark）色塊 → 文字線 → 第二物件 → 天藍物件 → 琥珀黃線}。
- 主物件剪影定義成 `<path id>`，用 `<use>` 重複當 clip、底色、網點屏、邊緣網點。

### 3. 濾鏡用法的硬規則
- **網點色調只能用 `fill-opacity` 或漸層 `stop-opacity`**，不可用 `opacity`（後者在濾鏡之後才套）。網點顏色＝元素自己的 fill。
- 網點濾鏡（`riso-ht*`、`riso-edge-ht`）的區域是畫布座標 0–100%。帶網點的元素**用畫布座標作畫**；要旋轉就 `rotate(角度 cx cy)` 繞畫布內一點轉，**不要 `translate` 到原點附近再畫**，否則網點會消失。
- 不要 `scale()` 帶網點的群組，網點會跟著放大而失去一致的螺距。
- `riso-drybrush` / `riso-ridges` 放在 `rotate(-35 …)` 群組裡的大矩形上，並由主物件 clip 裁切。
- `riso-grain` 只套一次，包住全部作品，不包背景。
- **小畫布（寬 < 450px，例如 icon 級點綴圖）**改用 `riso-rough-sm`、`riso-edge-ht-sm`、`riso-drybrush-sm`，底層網點屏用 `riso-ht-fine`。批次產圖可參考同一個 plugin 裡 `hand-drawn-style/illustrations/build.mjs` 的 `hero()` / `grey()` / `cobalt()` 輔助函式。

### 4. 渲染
```bash
node scripts/render.mjs path/to/my-illustration.svg            # → 同名 .png，2× 解析度
node scripts/render.mjs in.svg out.png --scale 3 --keep-svg      # 另存自帶濾鏡的獨立 SVG
node scripts/render.mjs in.svg out.png --transparent             # 去背景時，先刪掉 SVG 裡的背景 rect
```

### 5. 自查並迭代（必做）
用 Read 打開渲染出的 PNG，並排對照 `examples/battery-plug.png` 的質感，逐項對照 STYLE.md，至少檢查：
1. 放大區塊裡主物件整面都看得到細網點；下緣、右緣網點最密。
2. 天藍乾刷是斜向、寬鬆、兩端漸淡，不是規則條紋；脊線稀少。
3. 灰白物件有揉紙斑駁＋網點陰影＋輪廓線旁的網點楔形；沒有柔和投影。
4. 只有一條琥珀黃線，越過主物件上緣。
5. 邊緣微毛而非銳利；主物件左上有淡色錯位邊。
6. 沒有 STYLE.md 色票以外的顏色。

有任何一項不符就改 SVG 重渲染，直到全部通過，再把 PNG 交給使用者。

## 常見問題

| 症狀 | 原因 / 解法 |
|---|---|
| 某層網點完全沒出現 | 元素座標在畫布外（被 translate 到原點附近）→ 改用畫布座標＋繞點旋轉 |
| 網點整片變淡而不是變稀 | 用了 `opacity` → 改 `fill-opacity` / `stop-opacity` |
| 網點變黑色 | 漸層 stop 沒寫 `stop-color`（預設黑）|
| 乾刷變成密集條紋 | 矩形沒放進旋轉群組，或濾鏡被 scale 影響 |
| render 卡住或空白 | Chrome 路徑不對 → `CHROME_PATH=/path/to/chrome node scripts/render.mjs …` |

## 交付

- 網頁使用：輸出 2× PNG，必要時再轉 WebP。SVG 濾鏡在瀏覽器即時運算很重，**不要直接把 standalone SVG 放上線**。
- 交付時列出還沒通過自查的項目（若有）。
