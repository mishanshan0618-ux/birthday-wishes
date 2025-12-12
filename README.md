# ?? 生日祝福网? - 部署指南

## ?? 静?文件??

```
wwwroot/
├── index.html          # 主?面
├── css/
│   └── site.css       # ?式文件
├── js/
│   └── birthday.js    # 交互脚本
├── images/
│   ├── bear.png       # 小熊?片
│   ├── lovers.png     # 情??片
│   └── lovely.png     # 背景?片
└── audio/
    ├── birthday.mp3   # 生日快?歌
    └── Love You for You.mp3  # 情?音?
```

---

## ?? 部署方案

### 方案 1：GitHub Pages（推荐，永久免?）

#### ??：

1. **?建 GitHub ??**
   - ?? https://github.com/new
   - ??名随意（如 `birthday-wishes`）
   - ?置? Public（公?）

2. **上? `wwwroot` 文件?内容**
   ```bash
   # 在 wwwroot 目?下?行
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/?的用?名/birthday-wishes.git
   git push -u origin main
   ```

3. **?用 GitHub Pages**
   - ?入?? Settings → Pages
   - Source ?? `main` 分支，目??? `/root`
   - 点? Save

4. **???接**
   - 等待 1-2 分?后，??：
   - `https://?的用?名.github.io/birthday-wishes/`

---

### 方案 2：Vercel（最??，秒部署）

#### ??：

1. **?? Vercel**
   - https://vercel.com
   - 使用 GitHub ?号登?

2. **?入?目**
   - 点? "New Project"
   - ???的 GitHub ??（或直接?? `wwwroot` 文件?）
   - 点? Deploy

3. **???接**
   - 自?生成?接（如 `https://birthday-wishes.vercel.app`）
   - 可自定?域名

---

### 方案 3：Netlify（功能?大）

#### ??：

1. **?? Netlify**
   - https://netlify.com
   - 登?后点? "Add new site" → "Deploy manually"

2. **??上?**
   - 直接将 `wwwroot` 文件???到?面
   - 自?部署

3. **???接**
   - 自?生成?接（如 `https://birthday-wishes.netlify.app`）

---

### 方案 4：Gitee Pages（国内??快）

#### ??：

1. **?建 Gitee ??**
   - ?? https://gitee.com/projects/new
   - ??名随意，?置?公?

2. **上?文件**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://gitee.com/?的用?名/birthday-wishes.git
   git push -u origin master
   ```

3. **?用 Gitee Pages**
   - ?入?? → 服? → Gitee Pages
   - 点???
   - ??生成的?接

---

## ?? 微信分享?化

### 注意事?：

1. **音?自?播放限制**
   - 微信内需用?点?才能播放音?
   - 已在代?中添加用?交互触?

2. **分享?片?化**
   在 `index.html` 的 `<head>` 中添加：
   ```html
   <!-- 微信分享?化 -->
   <meta property="og:title" content="21?生日快? ??">
   <meta property="og:description" content="愿?永?快?，永?被?">
   <meta property="og:image" content="https://?的域名/images/bear.png">
   ```

3. **移?端?配**
   - 已添加 viewport meta ??
   - 已?化移?端 CSS（@media ??）

---

## ?? 本地??

### 方法 1：VS Code Live Server
1. 安装 "Live Server" 插件
2. 右? `index.html` → "Open with Live Server"

### 方法 2：Python ?易服?器
```bash
cd wwwroot
python -m http.server 8000
# ?? http://localhost:8000
```

### 方法 3：Node.js http-server
```bash
npm install -g http-server
cd wwwroot
http-server
```

---

## ? 部署??清?

- [ ] ??所有?片路径正?（`images/` 文件?）
- [ ] ??音?文件存在（`audio/` 文件?）
- [ ] ??移?端?示效果
- [ ] ??微信内打?效果
- [ ] ??音?播放功能
- [ ] ??情??窗交互

---

## ?? 分享?接到微信

1. 部署成功后，?制生成的?接
2. 在微信中?送?接
3. ?方点?即可??

**示例?接格式：**
- GitHub Pages: `https://?的用?名.github.io/??名/`
- Vercel: `https://?目名.vercel.app`
- Netlify: `https://?目名.netlify.app`

---

## ?? 常???

**Q: 音?无法自?播放？**
A: 微信限制自?播放，需用?点?"Play Music"按?。

**Q: ?片无法?示？**
A: ???片路径，?保 `images/` 文件?已上?。

**Q: 移?端?示?常？**
A: 已添加移?端?配，清除?存后刷新。

**Q: 如何更?音?？**
A: 替? `audio/` 文件?中的 mp3 文件，保持文件名一致。

---

## ?? 技?支持

如有??，???：
1. ??器控制台（F12）是否有??
2. 网??求是否正常（Network ??）
3. 文件路径是否正?

---

**祝部署?利，生日快?！???**
