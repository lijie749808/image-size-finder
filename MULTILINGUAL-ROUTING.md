# 多语言路由结构文档 (Multilingual Routing)

本项目实现了一个可扩展的多语言路由系统，支持未来添加大量新页面。

## 📁 路由结构

### 语言路径规则

- **英文（默认）**: 无前缀，直接访问 `/path`
- **中文**: 使用 `/zh/path` 前缀
- **日语**: 使用 `/ja/path` 前缀  
- **西班牙语**: 使用 `/es/path` 前缀

### 目录结构

```
src/app/
├── (root - 英文默认页面)
│   ├── page.tsx                 # /
│   ├── about/page.tsx          # /about
│   ├── privacy-policy/page.tsx # /privacy-policy
│   ├── terms/page.tsx          # /terms
│   └── layout.tsx              # 英文布局
│
├── [lang]/                      # 动态语言路由
│   ├── layout.tsx              # 语言布局（自动生成 SEO）
│   ├── page.tsx                # /{lang}/
│   ├── about/page.tsx          # /{lang}/about
│   ├── privacy-policy/page.tsx # /{lang}/privacy-policy
│   └── terms/page.tsx          # /{lang}/terms
│
├── components/
│   ├── SiteHeader.tsx          # 支持多语言链接
│   └── SiteFooter.tsx          # 支持多语言链接
│
└── middleware.ts               # 处理语言路由逻辑
```

## 🚀 如何添加新页面

### 1. 在根目录添加英文页面

```bash
# 创建新页面
src/app/new-page/page.tsx
```

```tsx
// src/app/new-page/page.tsx
'use client';

import { useI18n } from '@/hooks/useI18n';

export default function NewPage() {
  const { t } = useI18n();
  
  return (
    <div>
      <h1>{t('newPageTitle')}</h1>
      {/* 页面内容 */}
    </div>
  );
}
```

### 2. 在 [lang] 目录添加多语言支持

```bash
# 创建多语言页面（复用根页面）
src/app/[lang]/new-page/page.tsx
```

```tsx
// src/app/[lang]/new-page/page.tsx
// 简单地重新导出根页面
export { default } from '../../new-page/page';
```

### 3. 添加翻译文本

在 `src/lib/i18n.ts` 中为所有语言添加翻译：

```typescript
export const translations = {
  en: {
    // ... 现有翻译
    newPageTitle: 'New Page Title',
    newPageDescription: 'Description...',
  },
  zh: {
    // ... 现有翻译
    newPageTitle: '新页面标题',
    newPageDescription: '描述...',
  },
  ja: {
    // ... 现有翻译
    newPageTitle: '新しいページのタイトル',
    newPageDescription: '説明...',
  },
  es: {
    // ... 现有翻译
    newPageTitle: 'Título de la nueva página',
    newPageDescription: 'Descripción...',
  },
};
```

### 4. 更新 Sitemap

在 `src/app/sitemap.ts` 中添加新页面：

```typescript
const pages = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/new-page', priority: 0.8, changeFrequency: 'monthly' as const }, // 新增
  // ... 其他页面
];
```

### 5. 添加导航链接（可选）

在 `src/app/components/SiteHeader.tsx` 或 `SiteFooter.tsx` 中添加链接：

```tsx
<Link href={getLink('/new-page')} className="...">
  {t('newPageTitle')}
</Link>
```

## 🔧 技术实现

### 中间件 (middleware.ts)

- 处理语言路径检测
- 跳过静态文件和 API 路由
- 保持英文作为默认语言

### I18nProvider

- 根据路径自动检测语言
- 支持语言切换并导航到正确 URL
- 同步 localStorage 以保存用户偏好

### 语言切换逻辑

当用户切换语言时：
```typescript
// 英文 -> 中文: / -> /zh/
// 中文 -> 英文: /zh/ -> /
// 中文 -> 日语: /zh/about -> /ja/about
```

## 📊 SEO 配置

### Canonical URLs

每个页面自动包含正确的 canonical URL：
- 英文: `https://imagesizefinder.org/about`
- 中文: `https://imagesizefinder.org/zh/about`
- 日语: `https://imagesizefinder.org/ja/about`
- 西班牙语: `https://imagesizefinder.org/es/about`

### hreflang 标签

所有页面自动生成 `hreflang` 替代链接：
```html
<link rel="alternate" hreflang="en" href="https://imagesizefinder.org/about" />
<link rel="alternate" hreflang="zh" href="https://imagesizefinder.org/zh/about" />
<link rel="alternate" hreflang="ja" href="https://imagesizefinder.org/ja/about" />
<link rel="alternate" hreflang="es" href="https://imagesizefinder.org/es/about" />
```

### Sitemap

自动生成包含所有语言版本的 sitemap：
```xml
<url>
  <loc>https://imagesizefinder.org/about</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://imagesizefinder.org/about" />
  <xhtml:link rel="alternate" hreflang="zh" href="https://imagesizefinder.org/zh/about" />
  <xhtml:link rel="alternate" hreflang="ja" href="https://imagesizefinder.org/ja/about" />
  <xhtml:link rel="alternate" hreflang="es" href="https://imagesizefinder.org/es/about" />
</url>
```

## 🌐 支持的语言

| 语言 | 代码 | URL 前缀 | Locale |
|------|------|----------|--------|
| English | `en` | (无) | `en_US` |
| 简体中文 | `zh` | `/zh` | `zh_CN` |
| 日本語 | `ja` | `/ja` | `ja_JP` |
| Español | `es` | `/es` | `es_ES` |

## 🔮 添加新语言

### 1. 更新语言配置

在 `src/lib/i18n-config.ts`:
```typescript
export type Locale = 'en' | 'zh' | 'ja' | 'es' | 'fr'; // 添加 'fr'

export const locales: Locale[] = ['en', 'zh', 'ja', 'es', 'fr'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '简体中文',
  ja: '日本語',
  es: 'Español',
  fr: 'Français', // 新增
};
```

### 2. 添加翻译

在 `src/lib/i18n.ts` 中添加法语翻译：
```typescript
export const translations = {
  // ... 现有语言
  fr: {
    metaTitle: '...',
    metaDescription: '...',
    // ... 所有翻译键
  },
} as const;
```

### 3. 更新 Sitemap

在 `src/app/sitemap.ts`:
```typescript
const languages = ['zh', 'ja', 'es', 'fr']; // 添加 'fr'
```

### 4. 更新中间件

在 `src/middleware.ts`:
```typescript
const locales = ['zh', 'ja', 'es', 'fr']; // 添加 'fr'
```

## 📝 最佳实践

1. **保持一致性**: 所有新页面都应遵循相同的结构
2. **完整翻译**: 添加新页面时确保所有4种语言都有翻译
3. **SEO 优化**: 更新 sitemap 并确保 canonical 和 hreflang 正确
4. **测试**: 测试所有语言版本的页面是否正常工作
5. **链接生成**: 始终使用 `getLink()` 函数生成链接，确保语言前缀正确

## 🚨 注意事项

- 英文是默认语言，**不需要** `/en` 前缀
- 添加新页面时必须同时创建根目录和 `[lang]` 目录的版本
- 语言切换会触发完整页面刷新（保证 URL 正确）
- 所有内部链接都必须使用 `getLink()` 函数

## 🎯 URL 示例

| 页面 | 英文 | 中文 | 日语 | 西班牙语 |
|------|------|------|------|----------|
| 首页 | `/` | `/zh/` | `/ja/` | `/es/` |
| 关于 | `/about` | `/zh/about` | `/ja/about` | `/es/about` |
| 隐私 | `/privacy-policy` | `/zh/privacy-policy` | `/ja/privacy-policy` | `/es/privacy-policy` |
| 条款 | `/terms` | `/zh/terms` | `/ja/terms` | `/es/terms` |

---

此文档将随着项目发展持续更新。

