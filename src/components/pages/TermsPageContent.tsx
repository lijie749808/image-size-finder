'use client';

import { useI18n } from '@/hooks/useI18n';
import Link from 'next/link';

export default function TermsPageContent() {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('footerTerms')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Agreement to Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                By accessing and using Image Size Finder (&quot;the Service&quot;), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use the Service.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Use of Service
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Image Size Finder is a free online tool for analyzing image properties. You may use the Service for:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Personal use</li>
                <li>Commercial use</li>
                <li>Educational purposes</li>
                <li>Any lawful purpose</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Privacy and Data
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                All images you upload are processed locally in your browser. We do not:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Upload your images to our servers</li>
                <li>Store your images</li>
                <li>Share your images with third parties</li>
                <li>Collect personal information from image metadata</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 mt-4">
                Please refer to our <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link> for more details.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Acceptable Use
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                You agree NOT to use the Service to:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Attempt to hack, disrupt, or abuse the Service</li>
                <li>Use automated tools to overload the Service</li>
                <li>Upload malicious files or code</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Disclaimer of Warranties
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                The Service is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without any warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Accuracy of results</li>
                <li>Uninterrupted or error-free service</li>
                <li>Compatibility with all devices or browsers</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Limitation of Liability
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                To the maximum extent permitted by law, Image Size Finder and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Intellectual Property
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                The Service, including its design, code, and content, is protected by copyright and other intellectual property laws. You may not copy, modify, or distribute any part of the Service without permission.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Changes to Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the Service constitutes acceptance of any changes.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Contact Information
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                For questions about these Terms of Service, please contact:
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

