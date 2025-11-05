// Header moved to Root layout, Link no longer needed here
export const metadata = {
  title: "Symbol Copy Paste Library | Fast Symbol Copy-Paste by Category",
  description:
    "Symbol copy paste made easy. A curated library for quick symbol copy-paste across math, physics, and chemistry categories.",
  keywords: [
    "symbol copy paste",
    "copy paste symbols",
    "math symbols",
    "physics symbols",
    "chemistry symbols",
    "unicode symbols",
  ],
  openGraph: {
    title: "Symbol Copy Paste Library",
    description:
      "Symbol copy paste made easy. Browse categories and copy symbols instantly.",
    url: "https://squaredsymbol.com/symbols",
    type: "website",
  },
  alternates: {
    canonical: "https://squaredsymbol.org/symbols",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type Item = { symbol: string; label: string };

const mathSymbols: Item[] = [
  { symbol: "±", label: "Plus minus (U+00B1)" },
  { symbol: "×", label: "Multiply (U+00D7)" },
  { symbol: "÷", label: "Divide (U+00F7)" },
  { symbol: "≈", label: "Approximately equal (U+2248)" },
  { symbol: "≠", label: "Not equal (U+2260)" },
  { symbol: "≤", label: "Less than or equal (U+2264)" },
  { symbol: "≥", label: "Greater than or equal (U+2265)" },
  { symbol: "√", label: "Square root (U+221A)" },
  { symbol: "∞", label: "Infinity (U+221E)" },
  { symbol: "∑", label: "Summation (U+2211)" },
  { symbol: "∏", label: "Product (U+220F)" },
  { symbol: "π", label: "Pi (U+03C0)" },
  { symbol: "θ", label: "Theta (U+03B8)" },
  { symbol: "α", label: "Alpha (U+03B1)" },
  { symbol: "β", label: "Beta (U+03B2)" },
  { symbol: "γ", label: "Gamma (U+03B3)" },
];

const physicsSymbols: Item[] = [
  { symbol: "Ω", label: "Ohm (U+03A9)" },
  { symbol: "μ", label: "Mu / micro (U+03BC)" },
  { symbol: "ℏ", label: "Reduced Planck constant (U+210F)" },
  { symbol: "λ", label: "Lambda / wavelength (U+03BB)" },
  { symbol: "Δ", label: "Delta / change (U+0394)" },
  { symbol: "∂", label: "Partial derivative (U+2202)" },
  { symbol: "→", label: "Vector / arrow (U+2192)" },
  { symbol: "°", label: "Degree sign (U+00B0)" },
];

const chemistrySymbols: Item[] = [
  { symbol: "→", label: "Reaction arrow (U+2192)" },
  { symbol: "⇌", label: "Equilibrium arrow (U+21CC)" },
  { symbol: "⟶", label: "Long reaction arrow (U+27F6)" },
  { symbol: "℃", label: "Degree Celsius (U+2103)" },
  { symbol: "²", label: "Superscript 2 (U+00B2)" },
  { symbol: "⁺", label: "Superscript plus (U+207A)" },
  { symbol: "⁻", label: "Superscript minus (U+207B)" },
];

import SymbolGrid from './SymbolGrid';

export default function SymbolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Header moved to Root layout */}

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Symbol Library</h1>
          <p className="text-slate-600 mb-10">Fast symbol copy paste by category for quick access.</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">Mathematics</h2>
              <SymbolGrid symbols={mathSymbols} />
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">Physics</h2>
              <SymbolGrid symbols={physicsSymbols} />
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">Chemistry</h2>
              <SymbolGrid symbols={chemistrySymbols} />
            </section>
          </div>
        </div>
      </section>

      {/* Footer moved to Root layout */}
    </div>
  );
}


