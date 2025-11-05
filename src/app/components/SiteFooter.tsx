export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-3xl font-bold text-purple-400">²</span>
            <h3 className="text-2xl font-bold">SquaredSymbol</h3>
          </div>
          <p className="text-slate-400 mb-6">
            Your comprehensive guide to the <strong>Squared Symbol</strong> (²). Copy, learn, and use mathematical symbols effectively across all platforms.
          </p>
          <div className="flex items-center justify-center gap-4 mb-5">
            <a href="https://twitter.com/" target="_blank" rel="noopener" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
            <span className="text-slate-700">|</span>
            <a href="https://github.com/" target="_blank" rel="noopener" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-400 mb-3">
            <a href="/privacy-policy" className="hover:text-purple-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-purple-300 transition-colors">Terms of Service</a>
          </div>
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} SquaredSymbol.com. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}


