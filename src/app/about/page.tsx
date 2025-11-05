// Header & Footer are provided by Root layout

export const metadata = {
  title: 'About SquaredSymbol — Fast Squared Symbol (²) Copy & Guides',
  description:
    'SquaredSymbol provides the fastest way to copy the squared symbol (²), plus clear how-to typing guides and curated symbol library across math, physics and chemistry.',
  alternates: { canonical: 'https://squaredsymbol.org/about' },
  openGraph: {
    title: 'About SquaredSymbol',
    description: 'Why we built a fast, focused squared symbol experience and how it helps you copy and learn symbols quickly.',
    url: 'https://squaredsymbol.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About SquaredSymbol</h1>
          <p className="text-slate-600 mb-2">Our focus is simple: make the <strong>Squared Symbol</strong> (²) effortless.</p>
          <p className="text-slate-600 mb-8">We deliver instant copy, concise how‑to typing guides, and a curated symbol library for math, physics, and chemistry — all optimized for speed and clarity.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">What we provide</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>One‑tap copy for the <strong>Squared Symbol</strong> (²) and superscripts</li>
                <li>Fast typing guides for Windows, macOS, iOS and Android</li>
                <li>Real‑world examples and usage across STEM</li>
                <li>Curated <em>Symbol Library</em> by category</li>
              </ul>
            </div>
            <div className="bg-white/80 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Contact</h3>
              <p className="text-slate-600">Feedback or partnerships? Email <span className="font-mono">hello@squaredsymbol.org</span>.</p>
            </div>
          </div>
          <div className="mt-10 text-slate-500 text-sm">
            <p>SquaredSymbol is independent and free to use. If we ever introduce premium features, they will be optional and clearly labeled.</p>
          </div>
        </div>
      </section>

    </div>
  );
}


