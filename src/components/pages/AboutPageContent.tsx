'use client';

import { useI18n } from '@/hooks/useI18n';

export default function AboutPageContent() {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t('footerAbout')} - Image Size Finder
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                What is Image Size Finder?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Image Size Finder is a free online tool that helps you quickly check image dimensions, file size, resolution, and other important metadata. Whether you're a web developer, designer, photographer, or just someone who needs to verify image specifications, our tool makes it simple and fast.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                All processing happens directly in your browser using JavaScript - your images are never uploaded to any server, ensuring complete privacy and security.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  🎯 Our Mission
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  To provide a fast, reliable, and privacy-focused tool for checking image information without any complicated setup or registration.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  🔒 Privacy First
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Your images stay on your device. We use browser APIs to process images locally, ensuring your data never leaves your computer.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  🌍 Multi-Language
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We support multiple languages including English, Chinese, Japanese, and Spanish to serve users worldwide.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  ⚡ Fast & Free
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  No registration required, no hidden fees. Get instant results with our lightning-fast image analyzer.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Have questions, suggestions, or feedback? We'd love to hear from you!
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Email: <a href="mailto:hello@imagesizefinder.org" className="text-blue-600 dark:text-blue-400 hover:underline">hello@imagesizefinder.org</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

