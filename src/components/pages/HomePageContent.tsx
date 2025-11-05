'use client';

import { useState, useRef } from 'react';
import { useI18n } from '@/hooks/useI18n';

interface ImageInfo {
  fileName: string;
  width: number;
  height: number;
  fileSize: number;
  mimeType: string;
  lastModified: string;
  aspectRatio: string;
  megapixels: number;
  previewUrl: string;
}

export default function HomePageContent() {
  const { t } = useI18n();
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const calculateAspectRatio = (width: number, height: number): string => {
    const divisor = gcd(width, height);
    return `${width / divisor}:${height / divisor}`;
  };

  const processImage = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file');
      return;
    }

    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      const info: ImageInfo = {
        fileName: file.name,
        width: img.width,
        height: img.height,
        fileSize: file.size,
        mimeType: file.type,
        lastModified: new Date(file.lastModified).toLocaleString(),
        aspectRatio: calculateAspectRatio(img.width, img.height),
        megapixels: (img.width * img.height) / 1000000,
        previewUrl: url,
      };
      setImageInfo(info);
    };

    img.src = url;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) processImage(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processImage(file);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-3">
            {t('heroSubtitle')}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            {t('heroDescription')}
          </p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-200 ${
              isDragging
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-slate-300 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 bg-white dark:bg-slate-800/50'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                {t('uploadTitle')}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{t('uploadDragDrop')}</p>
              <p className="text-slate-500 dark:text-slate-400 mb-4">{t('uploadOr')}</p>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                {t('uploadButton')}
              </button>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">{t('uploadSupport')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {imageInfo && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t('resultTitle')}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Image Preview */}
                <div className="flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-xl p-4">
                  <img
                    src={imageInfo.previewUrl}
                    alt={imageInfo.fileName}
                    className="max-w-full max-h-80 object-contain rounded"
                  />
                </div>

                {/* Image Details */}
                <div className="space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t('resultFileName')}</div>
                    <div className="font-semibold text-slate-900 dark:text-white break-all">{imageInfo.fileName}</div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t('resultDimensions')}</div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {imageInfo.width} × {imageInfo.height} {t('unitPx')}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {(imageInfo.width / 96).toFixed(2)} × {(imageInfo.height / 96).toFixed(2)} {t('unitIn')} (96 DPI)
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {(imageInfo.width / 37.795).toFixed(2)} × {(imageInfo.height / 37.795).toFixed(2)} {t('unitCm')}
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t('resultFileSize')}</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{formatFileSize(imageInfo.fileSize)}</div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t('resultResolution')}</div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {(imageInfo.megapixels).toFixed(2)} {t('unitMegapixels')}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {(imageInfo.width * imageInfo.height).toLocaleString()} pixels
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t('resultAspectRatio')}</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{imageInfo.aspectRatio}</div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t('resultMimeType')}</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{imageInfo.mimeType}</div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t('resultLastModified')}</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{imageInfo.lastModified}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How to Use Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">{t('howToUseTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">{t('step1Title')}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">{t('step1Description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">{t('step2Title')}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">{t('step2Description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">{t('step3Title')}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">{t('step3Description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">{t('featuresTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: t('feature1Title'),
                description: t('feature1Description')
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: t('feature2Title'),
                description: t('feature2Description')
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: t('feature3Title'),
                description: t('feature3Description')
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: t('feature4Title'),
                description: t('feature4Description')
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">{t('faqTitle')}</h2>
          <div className="space-y-6">
            {[
              { q: t('faq1Question'), a: t('faq1Answer') },
              { q: t('faq2Question'), a: t('faq2Answer') },
              { q: t('faq3Question'), a: t('faq3Answer') },
              { q: t('faq4Question'), a: t('faq4Answer') }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">{faq.q}</h3>
                <p className="text-slate-600 dark:text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Content Guide Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            {t('guideTitle')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 text-center max-w-3xl mx-auto">
            {t('guideIntro')}
          </p>

          <div className="space-y-12">
            {/* Section 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {t('guideSection1Title')}
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-300 mb-4">{t('guideSection1Content1')}</p>
                <ul className="space-y-2 mb-4">
                  <li className="text-slate-600 dark:text-slate-300">
                    <strong>{t('guideSection1Dimensions')}:</strong> {t('guideSection1DimensionsDesc')}
                  </li>
                  <li className="text-slate-600 dark:text-slate-300">
                    <strong>{t('guideSection1FileSize')}:</strong> {t('guideSection1FileSizeDesc')}
                  </li>
                </ul>
                <p className="text-slate-600 dark:text-slate-300">{t('guideSection1Content2')}</p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {t('guideSection2Title')}
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-300 mb-4">{t('guideSection2Content1')}</p>
                <ul className="space-y-2 mb-4">
                  <li className="text-slate-600 dark:text-slate-300">
                    <strong>PPI (Pixels Per Inch):</strong> {t('guideSection2PPI')}
                  </li>
                  <li className="text-slate-600 dark:text-slate-300">
                    <strong>DPI (Dots Per Inch):</strong> {t('guideSection2DPI')}
                  </li>
                </ul>
                <p className="text-slate-600 dark:text-slate-300">{t('guideSection2Content2')}</p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {t('guideSection3Title')}
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-300 mb-4">{t('guideSection3Content1')}</p>
                <ul className="space-y-2">
                  <li className="text-slate-600 dark:text-slate-300">
                    <strong>JPEG/JPG:</strong> {t('guideSection3JPEG')}
                  </li>
                  <li className="text-slate-600 dark:text-slate-300">
                    <strong>PNG:</strong> {t('guideSection3PNG')}
                  </li>
                  <li className="text-slate-600 dark:text-slate-300">
                    <strong>WebP:</strong> {t('guideSection3WebP')}
                  </li>
                  <li className="text-slate-600 dark:text-slate-300">
                    <strong>GIF:</strong> {t('guideSection3GIF')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {t('guideSection4Title')}
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-300 mb-4">{t('guideSection4Content1')}</p>
                <ul className="space-y-2">
                  <li className="text-slate-600 dark:text-slate-300">
                    <strong>{t('guideSection4CoreWebVitals')}:</strong> {t('guideSection4CoreWebVitalsDesc')}
                  </li>
                  <li className="text-slate-600 dark:text-slate-300">
                    <strong>{t('guideSection4BounceRate')}:</strong> {t('guideSection4BounceRateDesc')}
                  </li>
                  <li className="text-slate-600 dark:text-slate-300">
                    <strong>{t('guideSection4MobileFirst')}:</strong> {t('guideSection4MobileFirstDesc')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
