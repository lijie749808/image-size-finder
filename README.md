# SquaredSymbol.com

一个专注于平方符号 (²) 的极简、快速站点：一键复制、输入方法、使用示例与符号库。

## 站点概览

- **首页** `/`：复制 ²、输入方法、用途与 FAQ
- **符号库** `/symbols`：常用数学/物理/化学符号快速复制
- **关于** `/about`：项目简介与联系方式
- **隐私政策** `/privacy-policy`
- **服务条款** `/terms`

## 特性

- 现代化 UI + 响应式设计（Tailwind CSS）
- 一键复制平方符号 (²) 与上标字符
- 全局导航与页脚由 `RootLayout` 提供，页面一致性强
- 完整 SEO：`metadata`、OG/Twitter、`/sitemap.xml`、`/robots.txt`、Canonical、结构化数据
- 已接入 Google Analytics（gtag.js，生产环境）
- 基于 Next.js 15 + TypeScript，部署到 Vercel

## 技术栈

- 框架：Next.js 15
- 语言：TypeScript
- 样式：Tailwind CSS
- 字体：Geist Sans / Geist Mono
- 部署：Vercel

## 开发与脚本

```bash
# 安装依赖（任选其一）
npm install
# 或 pnpm install / yarn install

# 启动开发服务器（默认 http://localhost:3000 ）
npm run dev

# 构建生产版本
npm run build

# 本地启动生产构建
npm start
```

## SEO 与分析

- 首页 meta 描述已围绕关键词 “Squared Symbol” 优化
- Open Graph / Twitter Card 已配置
- 站点地图：`/src/app/sitemap.ts`（覆盖 `/`, `/symbols`, `/about`, `/privacy-policy`, `/terms`）
- 结构化数据：`/src/app/structured-data.tsx`
- GA：在 `src/app/layout.tsx` 通过 `next/script` 注入

```tsx
// 片段：src/app/layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-FQYENBZ518" strategy="afterInteractive" />
<Script id="gtag-init" strategy="afterInteractive">{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);} 
  gtag('js', new Date());
  gtag('config', 'G-FQYENBZ518');
`}</Script>
```

## 目录结构（关键）

- `src/app/layout.tsx`：全局布局、导航、页脚、META、GA
- `src/app/page.tsx`：首页
- `src/app/symbols/page.tsx`：符号库
- `src/app/about/page.tsx`：关于
- `src/app/privacy-policy/page.tsx`：隐私政策
- `src/app/terms/page.tsx`：服务条款
- `src/app/sitemap.ts`：站点地图
- `src/app/robots.ts`：Robots
- `src/app/components/`：`SiteHeader`、`SiteFooter`

## 部署到 Vercel（推荐）

1. 推送仓库到 GitHub/GitLab/Bitbucket
2. 在 Vercel 导入项目，一键部署
3. 绑定域名 `squaredsymbol.com`
4. 部署完成后访问 `https://squaredsymbol.com`

## 许可证

MIT License

---

© 2025 SquaredSymbol.com. All rights reserved.
