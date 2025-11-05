# Deployment Guide - Image Size Finder

This guide covers deploying the Image Size Finder application to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Initial commit - Image Size Finder"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js settings

3. **Configure (Optional)**
   - Project Name: `image-size-finder`
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2 minutes)
   - Your app will be live at `your-project.vercel.app`

5. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add your domain (e.g., `imagesizefinder.org`)
   - Configure DNS records as shown
   - SSL certificate is automatic

## 🌐 Environment Variables

No environment variables are required for basic functionality. If you want to add Google Analytics or other services:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Add these in:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- Local: Create `.env.local` file

## 📊 SEO Configuration

Before deploying, update these values in your code:

### 1. Update Domain Name
Replace `imagesizefinder.org` with your actual domain in:
- `src/app/layout.tsx` (line 32: metadataBase)
- `src/app/sitemap.ts` (line 5: baseUrl)
- `src/app/robots.ts` (line 10: sitemap URL)
- `src/app/structured-data.tsx` (lines with URL references)

### 2. Update Google Analytics ID
In `src/app/layout.tsx`, replace `G-FQYENBZ518` with your GA4 ID, or remove the Analytics scripts if not needed.

### 3. Update Contact Email
Replace `hello@imagesizefinder.org` in:
- About page
- Privacy Policy page
- Terms of Service page

### 4. Google Search Console Verification
In `src/app/layout.tsx`, line 66, update:
```typescript
verification: {
  google: 'your-actual-verification-code',
},
```

## 🎨 Branding & Assets

### Favicon
Replace `/public/favicon.ico` with your own favicon.

### Open Graph Image
Create and add `/public/og-image.jpg` (1200×630px) for social media previews.

### Apple Touch Icon
Add `/public/apple-touch-icon.png` (180×180px) for iOS home screen.

## 🔧 Other Deployment Platforms

### Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Functions directory: (leave empty)

2. **netlify.toml** (optional)
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Cloudflare Pages

1. **Build Configuration**
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Environment variables: Node.js version ≥ 18

### AWS Amplify

1. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### Docker Deployment

1. **Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build

   FROM node:18-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next/standalone ./
   COPY --from=builder /app/.next/static ./.next/static
   EXPOSE 3000
   ENV PORT 3000
   CMD ["node", "server.js"]
   ```

2. **Build and Run**
   ```bash
   docker build -t image-size-finder .
   docker run -p 3000:3000 image-size-finder
   ```

## 📈 Post-Deployment Checklist

- [ ] Test all pages (Home, About, Privacy, Terms)
- [ ] Test image upload functionality
- [ ] Test language switcher (EN, ZH, JA, ES)
- [ ] Test theme switcher (Light, Dark, Auto)
- [ ] Verify mobile responsiveness
- [ ] Check all links work
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Open Graph preview on social media
- [ ] Test page load speed (aim for < 3s)
- [ ] Check Google PageSpeed Insights score

## 🔍 SEO Submission

After deployment, submit your site to search engines:

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Bing Webmaster Tools
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (≥ 18 required)
- Clear `.next` folder and rebuild
- Check for TypeScript errors: `npm run lint`

### Images Not Loading
- Ensure images are in `/public` directory
- Check file paths are correct
- Verify image formats are supported

### i18n Not Working
- Check browser's local storage is enabled
- Verify translation keys match in all languages
- Clear browser cache and reload

## 📞 Support

If you encounter issues:
- Check the [GitHub Issues](https://github.com/yourusername/image-size-finder/issues)
- Review [Next.js Documentation](https://nextjs.org/docs)
- Contact: hello@imagesizefinder.org

---

© 2025 Image Size Finder
