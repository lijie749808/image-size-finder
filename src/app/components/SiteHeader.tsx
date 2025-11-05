import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="supports-[backdrop-filter]:bg-white/60 bg-white/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="flex items-center space-x-3 group">
            <span className="text-3xl font-bold text-purple-600 group-hover:scale-105 transition-transform">²</span>
            <span className="text-2xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">SquaredSymbol</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1 px-2 py-1.5 bg-white/60 border border-slate-200 rounded-full shadow-sm">
            <a href="/symbols" className="px-3 py-1 rounded-full text-slate-600 hover:text-purple-700 hover:bg-purple-50 transition-colors">Symbol Library</a>
            <a href="/about" className="px-3 py-1 rounded-full text-slate-600 hover:text-purple-700 hover:bg-purple-50 transition-colors">About Us</a>
          </nav>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent"></div>
    </header>
  );
}


