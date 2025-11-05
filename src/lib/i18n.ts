export type Locale = 'en' | 'zh' | 'ja' | 'es';

export const locales: Locale[] = ['en', 'zh', 'ja', 'es'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '简体中文',
  ja: '日本語',
  es: 'Español',
};

export const translations = {
  en: {
    // Meta
    metaTitle: 'Image Size Finder - Check Image Dimensions, File Size & Info Online',
    metaDescription: 'Free online tool to instantly find image dimensions (width × height), file size, resolution, MIME type, and metadata. Works with PNG, JPEG, WebP, GIF. No upload required.',
    metaKeywords: 'image size finder, image dimensions, image info, online image analyzer, check image size, image metadata, picture size finder',
    
    // Header
    siteTitle: 'Image Size Finder',
    languageLabel: 'Language',
    
    // Hero
    heroTitle: 'Image Size Finder',
    heroSubtitle: 'Instantly check image dimensions, file size, and detailed metadata',
    heroDescription: 'Drop or click to upload your image. All processing happens in your browser - no files are uploaded to any server.',
    
    // Upload
    uploadTitle: 'Upload Your Image',
    uploadDragDrop: 'Drag & drop an image here',
    uploadOr: 'or',
    uploadButton: 'Choose File',
    uploadSupport: 'Supports: PNG, JPEG, WebP, GIF, SVG, BMP',
    
    // Results
    resultTitle: 'Image Information',
    resultFileName: 'File Name',
    resultDimensions: 'Dimensions',
    resultFileSize: 'File Size',
    resultResolution: 'Total Pixels',
    resultMimeType: 'MIME Type',
    resultLastModified: 'Last Modified',
    resultAspectRatio: 'Aspect Ratio',
    
    // Units
    unitPx: 'px',
    unitIn: 'in',
    unitCm: 'cm',
    unitMegapixels: 'megapixels',
    
    // How to Use
    howToUseTitle: 'How to Use',
    step1Title: 'Upload Image',
    step1Description: 'Click the upload area or drag and drop your image file.',
    step2Title: 'View Information',
    step2Description: 'Image Size Finder will instantly display all image details.',
    step3Title: 'Privacy Guarantee',
    step3Description: 'All processing happens locally in your browser - no files are sent to any server.',
    
    // Features
    featuresTitle: 'Key Features',
    feature1Title: '100% Private & Secure',
    feature1Description: 'All image processing happens locally in your browser. Your images never leave your device and are never uploaded to any server.',
    feature2Title: 'Lightning Fast Analysis',
    feature2Description: 'Get instant results without waiting. No upload time means immediate detailed information about your images.',
    feature3Title: 'All Image Formats Supported',
    feature3Description: 'Works with PNG, JPEG, WebP, GIF, SVG, BMP and more. Simply drag and drop any image file.',
    feature4Title: 'Works Everywhere',
    feature4Description: 'Fully responsive design works perfectly on desktop, tablet, and mobile devices with any modern browser.',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faq1Question: 'Are my images uploaded to a server?',
    faq1Answer: 'No. All image processing happens entirely in your browser using JavaScript. Your images never leave your device.',
    faq2Question: 'What image formats are supported?',
    faq2Answer: 'We support all common image formats including PNG, JPEG, WebP, GIF, SVG, BMP, and more.',
    faq3Question: 'Is there a file size limit?',
    faq3Answer: 'There is no strict limit. Image Size Finder can handle very large images, though extremely large files may take longer to process.',
    faq4Question: 'Can I use this on mobile devices?',
    faq4Answer: 'Yes! This tool works perfectly on smartphones and tablets.',
    
    // Deep Content Guide
    guideTitle: 'Image Size Explained: A Complete Guide to Pixels, Resolution, and File Size',
    guideIntro: 'You\'ve used our Image Size Finder tool to get your image data, but what do these numbers actually mean? Whether you\'re trying to check image size for your website or find image dimensions online, understanding the difference between pixels and file size (KB/MB) is crucial for optimizing your website, improving load speed, and displaying the best images on social media. This guide breaks down everything you need to know about how to check image size and what those numbers mean.',
    
    guideSection1Title: 'How to Find Image Dimensions Online: Pixels vs. File Size Explained',
    guideSection1Content1: 'When you need to check file size of a picture or find its dimensions, this is the most common confusion. Let\'s clarify the difference between pixels and file size:',
    guideSection1Dimensions: 'Dimensions (Width × Height)',
    guideSection1DimensionsDesc: 'This represents the space an image occupies on screen, measured in pixels (e.g., 1920×1080 pixels). Think of it like the physical dimensions of a printed photo (e.g., 5×7 inches).',
    guideSection1FileSize: 'File Size (KB/MB)',
    guideSection1FileSizeDesc: 'This represents the storage space an image occupies on your hard drive (e.g., 250KB or 2MB). Think of it as the weight of that printed photo.',
    guideSection1Content2: 'Key Insight: A 1920×1080 pixel image can be a highly compressed 150KB JPEG or an uncompressed 15MB PNG. Same dimensions, vastly different file sizes. Compression is the difference.',
    
    guideSection2Title: 'What is My Image Resolution? How to Check DPI and PPI for Web vs. Print',
    guideSection2Content1: 'Many people ask "what is my image resolution?" when they really want to know how to check image quality. Let\'s demystify PPI, DPI, and why they matter differently for web and print:',
    guideSection2PPI: 'Pixel density used for screens and digital displays.',
    guideSection2DPI: 'Dot density used for print media and physical output.',
    guideSection2Content2: 'Myth Busted: For web browsers, an 800×600 pixel image at 72 PPI looks identical to an 800×600 pixel image at 300 PPI. On the web, pixel dimensions are king, not PPI metadata. The 72 vs 300 DPI debate is irrelevant for digital screens. DPI only matters when printing - 300 DPI is standard for high-quality print output.',
    
    guideSection3Title: 'Image Metadata Viewer: How Image Format (MIME Type) Affects File Size',
    guideSection3Content1: 'Our image metadata viewer displays MIME types (like image/jpeg), which directly impact file size. When you check file size of a picture, the format makes a huge difference. Here\'s why:',
    guideSection3JPEG: 'Lossy compression, best for photographs. Creates small files but with slight quality loss. Ideal for web photos and backgrounds.',
    guideSection3PNG: 'Lossless compression, best for logos and icons needing transparency. Files are typically larger than JPEG but preserve perfect quality.',
    guideSection3WebP: 'Modern format by Google combining JPEG\'s small size with PNG\'s transparency. Best choice for web performance. Up to 30% smaller than JPEG.',
    guideSection3GIF: 'Only for simple animations. Limited to 256 colors. Not recommended for photos.',
    
    guideSection4Title: 'Why Image Size is Critical for SEO and User Experience',
    guideSection4Content1: 'Image optimization directly impacts your website\'s search ranking and user satisfaction:',
    guideSection4CoreWebVitals: 'Core Web Vitals',
    guideSection4CoreWebVitalsDesc: 'Large image files severely slow down LCP (Largest Contentful Paint), a key Google ranking factor. Pages that load slowly rank lower.',
    guideSection4BounceRate: 'Bounce Rate',
    guideSection4BounceRateDesc: 'Slow loading speeds cause users to leave, sending negative signals to Google. 53% of mobile users abandon sites that take over 3 seconds to load.',
    guideSection4MobileFirst: 'Mobile-First Indexing',
    guideSection4MobileFirstDesc: 'On mobile devices, oversized images consume user data and create poor experiences. Google prioritizes mobile performance in rankings.',
    
    // Footer
    footerAbout: 'About',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
    footerContact: 'Contact',
    footerRights: 'All rights reserved.',
    footerDescription: 'Free online tool to check image dimensions, file size, and metadata instantly.',
    
    // Theme
    themeLight: 'Light',
    themeDark: 'Dark',
    themeAuto: 'Auto',
  },
  
  zh: {
    // Meta
    metaTitle: '图片尺寸查询工具 - 在线检测图片大小、分辨率、格式信息',
    metaDescription: '免费在线工具，即时获取图片尺寸（宽×高）、文件大小、分辨率、MIME类型等详细信息。支持 PNG、JPEG、WebP、GIF。无需上传服务器。',
    metaKeywords: '图片尺寸查询, 图片大小检测, 图片信息查看器, 在线图片分析, 查看图片尺寸, 图片元数据, 照片尺寸查询',
    
    // Header
    siteTitle: '图片尺寸查询工具',
    languageLabel: '语言',
    
    // Hero
    heroTitle: '图片尺寸查询工具',
    heroSubtitle: '即时查看图片尺寸、文件大小及详细信息',
    heroDescription: '拖放或点击上传您的图片。所有处理在浏览器本地完成 - 不会上传任何文件到服务器。',
    
    // Upload
    uploadTitle: '上传您的图片',
    uploadDragDrop: '拖放图片到这里',
    uploadOr: '或',
    uploadButton: '选择文件',
    uploadSupport: '支持格式：PNG、JPEG、WebP、GIF、SVG、BMP',
    
    // Results
    resultTitle: '图片信息',
    resultFileName: '文件名',
    resultDimensions: '尺寸',
    resultFileSize: '文件大小',
    resultResolution: '总像素',
    resultMimeType: 'MIME 类型',
    resultLastModified: '最后修改',
    resultAspectRatio: '宽高比',
    
    // Units
    unitPx: '像素',
    unitIn: '英寸',
    unitCm: '厘米',
    unitMegapixels: '百万像素',
    
    // How to Use
    howToUseTitle: '如何使用',
    step1Title: '上传图片',
    step1Description: '点击上传区域或拖放您的图片文件。',
    step2Title: '查看信息',
    step2Description: '工具会立即显示所有图片详细信息。',
    step3Title: '隐私保证',
    step3Description: '所有处理在浏览器本地完成 - 不会发送任何文件到服务器。',
    
    // Features
    featuresTitle: '主要特点',
    feature1Title: '100% 私密安全',
    feature1Description: '所有图片处理在浏览器本地完成。您的图片永远不会离开您的设备，也不会上传到任何服务器。',
    feature2Title: '闪电般快速分析',
    feature2Description: '无需等待即可获得即时结果。无需上传时间意味着可以立即获得图片的详细信息。',
    feature3Title: '支持所有图片格式',
    feature3Description: '支持 PNG、JPEG、WebP、GIF、SVG、BMP 等格式。只需拖放任何图片文件。',
    feature4Title: '随处可用',
    feature4Description: '完全响应式设计，在桌面、平板和移动设备上的任何现代浏览器中都能完美运行。',
    
    // FAQ
    faqTitle: '常见问题',
    faq1Question: '我的图片会上传到服务器吗？',
    faq1Answer: '不会。所有图片处理完全在浏览器中使用 JavaScript 完成。您的图片永远不会离开您的设备。',
    faq2Question: '支持哪些图片格式？',
    faq2Answer: '我们支持所有常见图片格式，包括 PNG、JPEG、WebP、GIF、SVG、BMP 等。',
    faq3Question: '有文件大小限制吗？',
    faq3Answer: '没有严格限制。工具可以处理非常大的图片，但超大文件可能需要更长的处理时间。',
    faq4Question: '可以在移动设备上使用吗？',
    faq4Answer: '可以！此工具在智能手机和平板电脑上都能完美运行。',
    
    // Deep Content Guide
    guideTitle: '图像尺寸详解：像素、分辨率与文件大小的完整指南',
    guideIntro: '您已经使用我们的图片尺寸查询工具获取了图片数据，但这些数字究竟意味着什么？无论您是想检查图片文件大小，还是在线查找图片尺寸，了解像素和文件大小（KB/MB）之间的区别，对于优化您的网站、提高加载速度和在社交媒体上展示最佳图像至关重要。本指南将详细解析如何检查图片尺寸以及这些数字的含义。',
    
    guideSection1Title: '如何在线查找图片尺寸：像素 vs. 文件大小详解',
    guideSection1Content1: '当您需要检查图片的文件大小或查找其尺寸时，这是最常见的混淆。让我们来澄清像素和文件大小之间的区别：',
    guideSection1Dimensions: '尺寸（宽度 × 高度）',
    guideSection1DimensionsDesc: '表示图像在屏幕上占据的空间，以像素为单位（例如 1920×1080 像素）。就像一张实体照片的物理尺寸（例如 5×7 英寸）。',
    guideSection1FileSize: '文件大小（KB/MB）',
    guideSection1FileSizeDesc: '表示图像在硬盘上占用的存储空间（例如 250KB 或 2MB）。就像那张实体照片的重量。',
    guideSection1Content2: '关键洞察：一张 1920×1080 像素的图片可以是高度压缩的 150KB JPEG，也可以是未压缩的 15MB PNG。相同尺寸，文件大小却天差地别。压缩是关键区别。',
    
    guideSection2Title: '我的图片分辨率是多少？如何检查网页和打印的 DPI/PPI',
    guideSection2Content1: '许多人会问"我的图片分辨率是多少？"，其实他们想知道的是如何检查图片质量。让我们揭开 PPI、DPI 的神秘面纱，以及它们对网页和打印的不同影响：',
    guideSection2PPI: '用于屏幕和数字显示的像素密度。',
    guideSection2DPI: '用于打印媒体和物理输出的墨点密度。',
    guideSection2Content2: '破除误区：对于网页浏览器，一张 800×600 像素、72 PPI 的图片和一张 800×600 像素、300 PPI 的图片看起来完全一样。在网页上，像素尺寸才是王道，而不是 PPI 元数据。72 vs 300 DPI 的争论与数字屏幕无关。DPI 只在打印时重要 - 对于打印，300 DPI 是高质量输出的标准。',
    
    guideSection3Title: '图片元数据查看器：图像格式（MIME 类型）如何影响文件大小',
    guideSection3Content1: '我们的图片元数据查看器显示 MIME 类型（如 image/jpeg），它直接影响文件大小。当您检查图片的文件大小时，格式会产生巨大差异。原因如下：',
    guideSection3JPEG: '有损压缩，最适合照片。创建小文件但有轻微质量损失。适用于网页照片和背景。',
    guideSection3PNG: '无损压缩，最适合需要透明背景的徽标和图标。文件通常比 JPEG 大，但保持完美质量。',
    guideSection3WebP: 'Google 开发的现代格式，结合了 JPEG 的小尺寸和 PNG 的透明度。网页性能的最佳选择。比 JPEG 小 30%。',
    guideSection3GIF: '仅用于简单动画。限制为 256 色。不推荐用于照片。',
    
    guideSection4Title: '为什么图像尺寸对 SEO 和用户体验至关重要',
    guideSection4Content1: '图像优化直接影响您网站的搜索排名和用户满意度：',
    guideSection4CoreWebVitals: '核心网页指标',
    guideSection4CoreWebVitalsDesc: '大型图像文件严重拖慢 LCP（最大内容绘制），这是 Google 排名的关键因素。加载缓慢的页面排名较低。',
    guideSection4BounceRate: '跳出率',
    guideSection4BounceRateDesc: '缓慢的加载速度导致用户离开，向 Google 发送负面信号。53% 的移动用户会放弃加载超过 3 秒的网站。',
    guideSection4MobileFirst: '移动优先索引',
    guideSection4MobileFirstDesc: '在移动设备上，过大的图像消耗用户流量并创造糟糕的体验。Google 在排名中优先考虑移动性能。',
    
    // Footer
    footerAbout: '关于',
    footerPrivacy: '隐私政策',
    footerTerms: '服务条款',
    footerContact: '联系我们',
    footerRights: '版权所有。',
    footerDescription: '免费在线工具，即时查看图片尺寸、文件大小和元数据。',
    
    // Theme
    themeLight: '浅色',
    themeDark: '深色',
    themeAuto: '自动',
  },
  
  ja: {
    // Meta
    metaTitle: '画像サイズ検索ツール - オンラインで画像の寸法、ファイルサイズ、情報を確認',
    metaDescription: '無料のオンラインツールで、画像の寸法（幅×高さ）、ファイルサイズ、解像度、MIMEタイプなどの詳細情報を即座に取得できます。PNG、JPEG、WebP、GIF対応。アップロード不要。',
    metaKeywords: '画像サイズ検索, 画像寸法, 画像情報, オンライン画像分析, 画像サイズ確認, 画像メタデータ, 写真サイズ検索',
    
    // Header
    siteTitle: '画像サイズ検索',
    languageLabel: '言語',
    
    // Hero
    heroTitle: '画像サイズ検索ツール',
    heroSubtitle: '画像の寸法、ファイルサイズ、詳細なメタデータを即座に確認',
    heroDescription: '画像をドロップまたはクリックしてアップロードしてください。すべての処理はブラウザ内で行われ、ファイルはサーバーにアップロードされません。',
    
    // Upload
    uploadTitle: '画像をアップロード',
    uploadDragDrop: 'ここに画像をドラッグ＆ドロップ',
    uploadOr: 'または',
    uploadButton: 'ファイルを選択',
    uploadSupport: '対応形式：PNG、JPEG、WebP、GIF、SVG、BMP',
    
    // Results
    resultTitle: '画像情報',
    resultFileName: 'ファイル名',
    resultDimensions: '寸法',
    resultFileSize: 'ファイルサイズ',
    resultResolution: '総ピクセル数',
    resultMimeType: 'MIMEタイプ',
    resultLastModified: '最終更新日',
    resultAspectRatio: 'アスペクト比',
    
    // Units
    unitPx: 'ピクセル',
    unitIn: 'インチ',
    unitCm: 'センチ',
    unitMegapixels: 'メガピクセル',
    
    // How to Use
    howToUseTitle: '使い方',
    step1Title: '画像をアップロード',
    step1Description: 'アップロードエリアをクリックするか、画像ファイルをドラッグ＆ドロップしてください。',
    step2Title: '情報を表示',
    step2Description: 'ツールがすべての画像の詳細を即座に表示します。',
    step3Title: 'プライバシー保証',
    step3Description: 'すべての処理はブラウザ内でローカルに行われ、ファイルはサーバーに送信されません。',
    
    // Features
    featuresTitle: '主な機能',
    feature1Title: '100% 無料',
    feature1Description: '登録不要、隠れた料金なし、完全無料で使用できます。',
    feature2Title: 'プライバシー優先',
    feature2Description: '画像はローカルで処理され、サーバーにアップロードされることはありません。',
    feature3Title: '高速・正確',
    feature3Description: '即座に正確な測定結果を表示します。',
    feature4Title: '全フォーマット対応',
    feature4Description: 'PNG、JPEG、WebP、GIF、SVG、BMPなどに対応しています。',
    
    // FAQ
    faqTitle: 'よくある質問',
    faq1Question: '画像はサーバーにアップロードされますか？',
    faq1Answer: 'いいえ。すべての画像処理はJavaScriptを使用してブラウザ内で完全に行われます。画像がデバイスから離れることはありません。',
    faq2Question: 'どの画像フォーマットに対応していますか？',
    faq2Answer: 'PNG、JPEG、WebP、GIF、SVG、BMPなど、すべての一般的な画像フォーマットに対応しています。',
    faq3Question: 'ファイルサイズの制限はありますか？',
    faq3Answer: '厳密な制限はありません。このツールは非常に大きな画像も処理できますが、極端に大きなファイルは処理に時間がかかる場合があります。',
    faq4Question: 'モバイルデバイスで使用できますか？',
    faq4Answer: 'はい！このツールはスマートフォンやタブレットで完璧に動作します。',
    
    // Deep Content Guide
    guideTitle: '画像サイズの説明：ピクセル、解像度、ファイルサイズの完全ガイド',
    guideIntro: '画像サイズ検索ツールで画像データを取得しましたが、これらの数字は実際に何を意味するのでしょうか？画像ファイルサイズを確認したい場合でも、オンラインで画像の寸法を調べたい場合でも、ピクセルとファイルサイズ（KB/MB）の違いを理解することは、ウェブサイトの最適化、読み込み速度の改善、ソーシャルメディアでの最適な画像表示に不可欠です。このガイドで、画像サイズの確認方法とその意味を詳しく解説します。',
    
    guideSection1Title: 'オンラインで画像の寸法を調べる方法：ピクセル vs. ファイルサイズの説明',
    guideSection1Content1: '画像のファイルサイズを確認したり、その寸法を調べたりする必要がある場合、これが最もよく混同される概念です。ピクセルとファイルサイズの違いを明確にしましょう：',
    guideSection1Dimensions: '寸法（幅 × 高さ）',
    guideSection1DimensionsDesc: '画面上で画像が占めるスペースを表し、ピクセル単位で測定されます（例：1920×1080ピクセル）。印刷された写真の物理的な寸法（例：5×7インチ）のようなものです。',
    guideSection1FileSize: 'ファイルサイズ（KB/MB）',
    guideSection1FileSizeDesc: 'ハードドライブ上で画像が占めるストレージスペースを表します（例：250KBまたは2MB）。その印刷された写真の重さのようなものです。',
    guide1Key: '重要なポイント',
    guideSection1Content2: '1920×1080ピクセルの画像は、高度に圧縮された150KB JPEGにも、非圧縮の15MB PNGにもなり得ます。同じ寸法でも、ファイルサイズは大きく異なります。圧縮が違いです。',
    
    guideSection2Title: '私の画像の解像度は？Web と印刷の DPI と PPI を確認する方法',
    guideSection2Content1: '多くの人が「私の画像の解像度は？」と尋ねますが、実際には画像品質を確認する方法を知りたいのです。PPI、DPI、そしてそれらがウェブと印刷でどのように異なるかを解き明かしましょう：',
    guide2PPI: 'PPI（Pixels Per Inch - 1インチあたりのピクセル数）',
    guideSection2PPI: 'スクリーンとデジタルディスプレイに使用されるピクセル密度。',
    guide2DPI: 'DPI（Dots Per Inch - 1インチあたりのドット数）',
    guideSection2DPI: '印刷メディアと物理的な出力に使用されるドット密度。',
    guide2Myth: '神話を打ち破る',
    guideSection2Content2: 'ウェブブラウザでは、800×600ピクセルの72 PPI画像と800×600ピクセルの300 PPI画像は全く同じに見えます。ウェブ上では、ピクセル寸法が重要であり、PPIメタデータではありません。72 vs 300 DPIの議論はデジタルスクリーンには無関係です。',
    guide2When: 'DPIが重要な場合',
    guide2WhenDesc: 'DPIは印刷時のみ重要です。印刷の場合、300 DPIが高品質出力の標準です。',
    
    guideSection3Title: '画像メタデータビューア：画像フォーマット（MIME タイプ）がファイルサイズに与える影響',
    guideSection3Content1: '当ツールの画像メタデータビューアは MIME タイプ（image/jpeg など）を表示します。これはファイルサイズに直接影響します。画像のファイルサイズを確認する際、フォーマットが大きな違いを生みます。その理由：',
    guide3JPEG: 'JPEG/JPG (image/jpeg)',
    guideSection3JPEG: '非可逆圧縮、写真に最適。小さなファイルを作成しますが、わずかな品質低下があります。ウェブ写真と背景に理想的です。',
    guide3PNG: 'PNG (image/png)',
    guideSection3PNG: '可逆圧縮、透明性が必要なロゴとアイコンに最適。ファイルは通常JPEGよりも大きいですが、完璧な品質を保持します。',
    guide3WebP: 'WebP (image/webp)',
    guideSection3WebP: 'GoogleによるモダンなフォーマットでJPEGの小ささとPNGの透明性を組み合わせています。ウェブパフォーマンスに最適です。JPEGより最大30%小さい。',
    guide3GIF: 'GIF (image/gif)',
    guideSection3GIF: 'シンプルなアニメーションのみに使用。256色に制限されています。写真には推奨されません。',
    guide3SVG: 'SVG (image/svg+xml)',
    guide3SVGDesc: 'ベクター形式で、品質を失うことなく無限に拡大できます。ロゴ、アイコン、イラストに最適です。',
    
    guideSection4Title: '画像サイズがSEOとユーザー体験に重要な理由',
    guideSection4Content1: '画像の最適化は、ウェブサイトの検索ランキングとユーザー満足度に直接影響します：',
    guideSection4CoreWebVitals: 'コアウェブバイタル',
    guideSection4CoreWebVitalsDesc: '大きな画像ファイルはLCP（最大コンテンツの描画）を著しく遅くし、これはGoogleランキングの重要な要素です。読み込みが遅いページはランクが低くなります。',
    guideSection4BounceRate: '直帰率',
    guideSection4BounceRateDesc: '読み込み速度が遅いとユーザーが離脱し、Googleに否定的なシグナルを送ります。53%のモバイルユーザーは3秒以上かかるサイトを放棄します。',
    guideSection4MobileFirst: 'モバイルファーストインデックス',
    guideSection4MobileFirstDesc: 'モバイルデバイスでは、過大な画像がユーザーのデータを消費し、悪い体験を生み出します。Googleはランキングでモバイルパフォーマンスを優先します。',
    guide4Tips: '迅速な最適化のヒント',
    guide4TipsDesc: 'アップロード前に画像を圧縮し、WebPなどの最新フォーマットを使用し、遅延読み込みを実装し、画像寸法が表示ニーズに合っているか常に確認してください。',
    
    // Footer
    footerAbout: '概要',
    footerPrivacy: 'プライバシーポリシー',
    footerTerms: '利用規約',
    footerContact: 'お問い合わせ',
    footerRights: '全著作権所有。',
    footerDescription: '無料のオンラインツールで、画像の寸法、ファイルサイズ、メタデータを即座に確認できます。',
    
    // Theme
    themeLight: 'ライト',
    themeDark: 'ダーク',
    themeAuto: '自動',
  },
  
  es: {
    // Meta
    metaTitle: 'Buscador de Tamaño de Imagen - Verificar Dimensiones, Tamaño y Info en Línea',
    metaDescription: 'Herramienta gratuita en línea para encontrar instantáneamente las dimensiones de imagen (ancho × alto), tamaño de archivo, resolución, tipo MIME y metadatos. Compatible con PNG, JPEG, WebP, GIF. No requiere carga.',
    metaKeywords: 'buscador de tamaño de imagen, dimensiones de imagen, información de imagen, analizador de imagen en línea, verificar tamaño de imagen, metadatos de imagen',
    
    // Header
    siteTitle: 'Buscador de Tamaño de Imagen',
    languageLabel: 'Idioma',
    
    // Hero
    heroTitle: 'Buscador de Tamaño de Imagen',
    heroSubtitle: 'Verifica instantáneamente dimensiones, tamaño de archivo y metadatos detallados',
    heroDescription: 'Arrastra o haz clic para subir tu imagen. Todo el procesamiento ocurre en tu navegador - ningún archivo se sube a ningún servidor.',
    
    // Upload
    uploadTitle: 'Sube Tu Imagen',
    uploadDragDrop: 'Arrastra y suelta una imagen aquí',
    uploadOr: 'o',
    uploadButton: 'Elegir Archivo',
    uploadSupport: 'Soporta: PNG, JPEG, WebP, GIF, SVG, BMP',
    
    // Results
    resultTitle: 'Información de la Imagen',
    resultFileName: 'Nombre del Archivo',
    resultDimensions: 'Dimensiones',
    resultFileSize: 'Tamaño del Archivo',
    resultResolution: 'Píxeles Totales',
    resultMimeType: 'Tipo MIME',
    resultLastModified: 'Última Modificación',
    resultAspectRatio: 'Relación de Aspecto',
    
    // Units
    unitPx: 'px',
    unitIn: 'pulg',
    unitCm: 'cm',
    unitMegapixels: 'megapíxeles',
    
    // How to Use
    howToUseTitle: 'Cómo Usar',
    step1Title: 'Subir Imagen',
    step1Description: 'Haz clic en el área de carga o arrastra y suelta tu archivo de imagen.',
    step2Title: 'Ver Información',
    step2Description: 'La herramienta mostrará instantáneamente todos los detalles de la imagen.',
    step3Title: 'Garantía de Privacidad',
    step3Description: 'Todo el procesamiento ocurre localmente en tu navegador - ningún archivo se envía a ningún servidor.',
    
    // Features
    featuresTitle: 'Características Principales',
    feature1Title: '100% Gratis',
    feature1Description: 'Sin registro, sin tarifas ocultas, completamente gratis de usar.',
    feature2Title: 'Privacidad Primero',
    feature2Description: 'Las imágenes se procesan localmente - nunca se suben a ningún servidor.',
    feature3Title: 'Rápido y Preciso',
    feature3Description: 'Resultados instantáneos con mediciones precisas.',
    feature4Title: 'Todos los Formatos',
    feature4Description: 'Soporta PNG, JPEG, WebP, GIF, SVG, BMP y más.',
    
    // FAQ
    faqTitle: 'Preguntas Frecuentes',
    faq1Question: '¿Se suben mis imágenes a un servidor?',
    faq1Answer: 'No. Todo el procesamiento de imágenes ocurre completamente en tu navegador usando JavaScript. Tus imágenes nunca salen de tu dispositivo.',
    faq2Question: '¿Qué formatos de imagen son compatibles?',
    faq2Answer: 'Soportamos todos los formatos de imagen comunes incluyendo PNG, JPEG, WebP, GIF, SVG, BMP y más.',
    faq3Question: '¿Hay un límite de tamaño de archivo?',
    faq3Answer: 'No hay un límite estricto. La herramienta puede manejar imágenes muy grandes, aunque archivos extremadamente grandes pueden tardar más en procesarse.',
    faq4Question: '¿Puedo usar esto en dispositivos móviles?',
    faq4Answer: '¡Sí! Esta herramienta funciona perfectamente en teléfonos inteligentes y tabletas.',
    
    // Deep Content Guide
    guideTitle: 'Tamaño de Imagen Explicado: Una Guía Completa sobre Píxeles, Resolución y Tamaño de Archivo',
    guideIntro: 'Has usado nuestra herramienta Image Size Finder para obtener los datos de tu imagen, pero ¿qué significan realmente estos números? Ya sea que intentes verificar el tamaño de la imagen para tu sitio web o encontrar las dimensiones de la imagen en línea, comprender la diferencia entre píxeles y tamaño de archivo (KB/MB) es crucial para optimizar tu sitio web, mejorar la velocidad de carga y mostrar las mejores imágenes en redes sociales. Esta guía desglosa todo lo que necesitas saber sobre cómo verificar el tamaño de la imagen y qué significan esos números.',
    
    guideSection1Title: 'Cómo Encontrar Dimensiones de Imagen en Línea: Píxeles vs. Tamaño de Archivo Explicado',
    guideSection1Content1: 'Cuando necesitas verificar el tamaño de archivo de una imagen o encontrar sus dimensiones, esta es la confusión más común. Aclaremos la diferencia entre píxeles y tamaño de archivo:',
    guideSection1Dimensions: 'Dimensiones (Ancho × Alto)',
    guideSection1DimensionsDesc: 'Representa el espacio que una imagen ocupa en pantalla, medido en píxeles (p. ej., 1920×1080 píxeles). Piensa en ello como las dimensiones físicas de una foto impresa (p. ej., 5×7 pulgadas).',
    guideSection1FileSize: 'Tamaño de Archivo (KB/MB)',
    guideSection1FileSizeDesc: 'Representa el espacio de almacenamiento que una imagen ocupa en tu disco duro (p. ej., 250KB o 2MB). Piensa en ello como el peso de esa foto impresa.',
    guide1Key: 'Punto Clave',
    guideSection1Content2: 'Una imagen de 1920×1080 píxeles puede ser un JPEG altamente comprimido de 150KB o un PNG sin comprimir de 15MB. Mismas dimensiones, tamaños de archivo muy diferentes. La compresión es la diferencia.',
    
    guideSection2Title: '¿Cuál es la Resolución de Mi Imagen? Cómo Verificar DPI y PPI para Web vs. Impresión',
    guideSection2Content1: 'Muchas personas preguntan "¿cuál es la resolución de mi imagen?" cuando realmente quieren saber cómo verificar la calidad de la imagen. Desmitifiquemos PPI, DPI y por qué importan de manera diferente para web e impresión:',
    guide2PPI: 'PPI (Pixels Per Inch - Píxeles por Pulgada)',
    guideSection2PPI: 'Densidad de píxeles usada para pantallas y displays digitales.',
    guide2DPI: 'DPI (Dots Per Inch - Puntos por Pulgada)',
    guideSection2DPI: 'Densidad de puntos usada para medios impresos y salida física.',
    guide2Myth: 'Mito Desmentido',
    guideSection2Content2: 'Para los navegadores web, una imagen de 800×600 píxeles a 72 PPI se ve idéntica a una imagen de 800×600 píxeles a 300 PPI. En la web, las dimensiones en píxeles son lo más importante, no los metadatos de PPI. El debate de 72 vs 300 DPI es irrelevante para pantallas digitales.',
    guide2When: 'Cuándo Importa el DPI',
    guide2WhenDesc: 'El DPI solo importa al imprimir. Para impresión, 300 DPI es el estándar para salida de alta calidad.',
    
    guideSection3Title: 'Visor de Metadatos de Imagen: Cómo el Formato de Imagen (Tipo MIME) Afecta el Tamaño del Archivo',
    guideSection3Content1: 'Nuestro visor de metadatos de imagen muestra tipos MIME (como image/jpeg), que impactan directamente el tamaño del archivo. Cuando verificas el tamaño de archivo de una imagen, el formato marca una gran diferencia. Por qué:',
    guide3JPEG: 'JPEG/JPG (image/jpeg)',
    guideSection3JPEG: 'Compresión con pérdida, mejor para fotografías. Crea archivos pequeños pero con ligera pérdida de calidad. Ideal para fotos web y fondos.',
    guide3PNG: 'PNG (image/png)',
    guideSection3PNG: 'Compresión sin pérdida, mejor para logos e iconos que necesitan transparencia. Los archivos son típicamente más grandes que JPEG pero preservan calidad perfecta.',
    guide3WebP: 'WebP (image/webp)',
    guideSection3WebP: 'Formato moderno de Google que combina el tamaño pequeño de JPEG con la transparencia de PNG. Mejor opción para rendimiento web. Hasta 30% más pequeño que JPEG.',
    guide3GIF: 'GIF (image/gif)',
    guideSection3GIF: 'Solo para animaciones simples. Limitado a 256 colores. No recomendado para fotos.',
    guide3SVG: 'SVG (image/svg+xml)',
    guide3SVGDesc: 'Formato vectorial que escala infinitamente sin pérdida de calidad. Perfecto para logos, iconos e ilustraciones.',
    
    guideSection4Title: 'Por Qué el Tamaño de Imagen es Crítico para SEO y Experiencia de Usuario',
    guideSection4Content1: 'La optimización de imágenes impacta directamente el ranking de búsqueda y la satisfacción del usuario:',
    guideSection4CoreWebVitals: 'Core Web Vitals',
    guideSection4CoreWebVitalsDesc: 'Los archivos de imagen grandes ralentizan severamente el LCP (Largest Contentful Paint), un factor clave de ranking de Google. Las páginas que cargan lentamente rankean más bajo.',
    guideSection4BounceRate: 'Tasa de Rebote',
    guideSection4BounceRateDesc: 'Las velocidades de carga lentas hacen que los usuarios se vayan, enviando señales negativas a Google. El 53% de usuarios móviles abandonan sitios que tardan más de 3 segundos en cargar.',
    guideSection4MobileFirst: 'Indexación Mobile-First',
    guideSection4MobileFirstDesc: 'En dispositivos móviles, las imágenes sobredimensionadas consumen datos del usuario y crean experiencias pobres. Google prioriza el rendimiento móvil en los rankings.',
    guide4Tips: 'Consejos de Optimización Rápida',
    guide4TipsDesc: 'Comprime imágenes antes de subir, usa formatos modernos como WebP, implementa carga diferida (lazy loading), y siempre verifica que las dimensiones de tu imagen coincidan con tus necesidades de visualización.',
    
    // Footer
    footerAbout: 'Acerca de',
    footerPrivacy: 'Política de Privacidad',
    footerTerms: 'Términos de Servicio',
    footerContact: 'Contacto',
    footerRights: 'Todos los derechos reservados.',
    footerDescription: 'Herramienta gratuita en línea para verificar dimensiones, tamaño de archivo y metadatos de imágenes instantáneamente.',
    
    // Theme
    themeLight: 'Claro',
    themeDark: 'Oscuro',
    themeAuto: 'Auto',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

