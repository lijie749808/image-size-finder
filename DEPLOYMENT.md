# 部署说明

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 部署到 Vercel

1. **准备代码**
   - 确保所有代码已提交到 Git 仓库
   - 确保 `package.json` 中的脚本正确配置

2. **Vercel 部署**
   ```bash
   # 安装 Vercel CLI
   npm i -g vercel
   
   # 登录 Vercel
   vercel login
   
   # 部署
   vercel
   ```

3. **配置域名**
   - 在 Vercel 控制台中添加自定义域名 `squaredsymbol.com`
   - 配置 DNS 记录指向 Vercel

## SEO 优化检查清单

### ✅ 已完成
- [x] Meta 标签优化
- [x] 标题和描述
- [x] 关键词设置
- [x] Canonical URL
- [x] Open Graph 标签
- [x] Twitter Cards
- [x] 结构化数据 (JSON-LD)
- [x] 网站地图 (sitemap.xml)
- [x] Robots.txt
- [x] 语义化 HTML 标签 (H1, H2, H3, H4)
- [x] 关键词密度控制在合理范围 (1.58%)

### 🔧 需要配置
- [ ] Google Search Console 验证
- [ ] Google Analytics 集成
- [ ] 社交媒体图片 (og-image.jpg)
- [ ] Favicon 和 Apple Touch Icon
- [ ] SSL 证书配置

## 性能优化

- ✅ Next.js 15 静态生成
- ✅ 图片优化
- ✅ 代码分割
- ✅ CSS 压缩
- ✅ 字体优化

## 监控和维护

1. **性能监控**
   - 使用 Vercel Analytics
   - 配置 Google PageSpeed Insights

2. **SEO 监控**
   - 定期检查 Google Search Console
   - 监控关键词排名
   - 检查网站地图索引状态

3. **内容更新**
   - 定期更新内容保持新鲜度
   - 添加新的数学符号
   - 更新输入方法指南

## 技术栈

- **框架**: Next.js 15
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel
- **域名**: squaredsymbol.com

## 联系信息

如有问题，请联系开发团队。
