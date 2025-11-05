'use client';

import { useI18n } from '@/hooks/useI18n';

export default function PrivacyPolicyPageContent() {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('footerPrivacy')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Introduction
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Image Size Finder (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our image analysis tool.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Data Collection and Processing
              </h2>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Images You Upload
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                <strong>Important:</strong> All images you upload are processed entirely in your web browser using JavaScript. Your images are NEVER uploaded to our servers or any third-party servers. The image data stays on your device and is never transmitted over the internet.
              </p>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Analytics
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We use Google Analytics to understand how visitors use our website. This may collect information such as:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 mb-4">
                <li>Your IP address (anonymized)</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Device and screen resolution</li>
                <li>Geographic location (country/city level)</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300">
                You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Analytics Opt-out Browser Add-on</a>.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Cookies and Local Storage
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We use local storage to save your preferences:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Language preference</li>
                <li>Theme preference (light/dark mode)</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 mt-4">
                This data is stored only in your browser and is not transmitted to our servers.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Third-Party Services
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We use the following third-party services:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li><strong>Google Analytics:</strong> For website traffic analysis</li>
                <li><strong>Google Fonts:</strong> For web fonts (can be loaded from Google or self-hosted)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Your Rights
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Since we don&apos;t collect or store your images or personal data on our servers, there is no personal data for us to delete, modify, or export. You have full control over:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Clearing your browser&apos;s local storage</li>
                <li>Disabling cookies in your browser</li>
                <li>Using browser privacy features or extensions</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Changes to This Policy
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-slate-600 dark:text-slate-300 mt-2">
                Email: <a href="mailto:hello@imagesizefinder.org" className="text-blue-600 dark:text-blue-400 hover:underline">hello@imagesizefinder.org</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

