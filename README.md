# Image Size Finder

A free online tool to instantly check image dimensions, file size, resolution, MIME type, and metadata. Built with privacy in mind - all processing happens in your browser.

## ✨ Features

- 🖼️ **Instant Analysis**: Get image dimensions, file size, and metadata in seconds
- 🔒 **Privacy First**: All processing happens locally in your browser - no uploads
- 🌍 **Multi-Language**: Support for English, Chinese (简体中文), Japanese (日本語), and Spanish (Español)
- 🎨 **Dark Mode**: Beautiful light and dark themes with auto-detection
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 🚀 **Fast & Free**: No registration, no fees, instant results
- 🎯 **All Formats**: Supports PNG, JPEG, WebP, GIF, SVG, BMP, and more

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## 📋 What Information Does It Show?

- File name
- Dimensions (width × height) in pixels, inches, and centimeters
- File size (KB/MB)
- Total pixels (megapixels)
- Aspect ratio
- MIME type
- Last modified date

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or compatible JavaScript runtime
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/image-size-finder.git
cd image-size-finder

# Install dependencies
npm install
# or
pnpm install
# or
yarn install
```

### Development

```bash
# Start the development server
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── about/                 # About page
│   ├── components/            # Shared components
│   │   ├── SiteHeader.tsx
│   │   └── SiteFooter.tsx
│   ├── privacy-policy/        # Privacy policy page
│   ├── terms/                 # Terms of service page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout with SEO
│   ├── page.tsx               # Home page (main tool)
│   ├── robots.ts              # Robots.txt configuration
│   ├── sitemap.ts             # Sitemap configuration
│   └── structured-data.tsx    # JSON-LD structured data
├── components/
│   ├── I18nProvider.tsx       # Internationalization provider
│   ├── LanguageSwitcher.tsx   # Language selector
│   └── ThemeSwitcher.tsx      # Theme toggle
├── hooks/
│   └── useI18n.ts             # i18n hook
└── lib/
    └── i18n.ts                # Translation definitions
```

## 🌍 Internationalization (i18n)

The app supports 4 languages out of the box:
- English (en)
- 简体中文 (zh)
- 日本語 (ja)
- Español (es)

Add or modify translations in `src/lib/i18n.ts`.

## 🎨 Themes

The app includes:
- Light mode
- Dark mode
- Auto mode (follows system preference)

Theme preference is saved in browser's local storage.

## 🔐 Privacy & Security

- **No server uploads**: All image processing happens client-side using JavaScript File API
- **No data collection**: Images never leave your device
- **Local storage only**: Only language and theme preferences are stored locally
- **No cookies**: (except analytics if enabled)

## 📊 SEO Features

- Complete meta tags (title, description, keywords)
- Open Graph tags for social media
- Twitter Card support
- JSON-LD structured data (WebApplication, FAQ, Organization schemas)
- Multi-language sitemap
- Robots.txt configuration
- Canonical URLs

## 📈 Analytics

Google Analytics is integrated for basic usage tracking. You can:
- Remove it by deleting the GA scripts in `src/app/layout.tsx`
- Replace with your own GA ID
- Use an alternative analytics service

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your project in Vercel
3. Configure your domain (e.g., `imagesizefinder.org`)
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Any Node.js hosting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for any purpose.

## 📧 Contact

- Email: hello@imagesizefinder.org
- Website: https://imagesizefinder.org

---

© 2025 Image Size Finder. All rights reserved.
