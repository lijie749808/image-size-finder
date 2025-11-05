'use client';

import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleCopyItem = async (text: string, index: number) => {
    await copyToClipboard(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const superscriptSymbols = [
    { symbol: '⁰', name: 'Superscript 0', unicode: 'U+2070', usage: 'Zero power' },
    { symbol: '¹', name: 'Superscript 1', unicode: 'U+00B9', usage: 'First power' },
    { symbol: '²', name: 'Superscript 2', unicode: 'U+00B2', usage: 'Squared' },
    { symbol: '³', name: 'Superscript 3', unicode: 'U+00B3', usage: 'Cubed' },
    { symbol: '⁴', name: 'Superscript 4', unicode: 'U+2074', usage: 'Fourth power' },
    { symbol: '⁵', name: 'Superscript 5', unicode: 'U+2075', usage: 'Fifth power' },
    { symbol: '⁶', name: 'Superscript 6', unicode: 'U+2076', usage: 'Sixth power' },
    { symbol: '⁷', name: 'Superscript 7', unicode: 'U+2077', usage: 'Seventh power' },
    { symbol: '⁸', name: 'Superscript 8', unicode: 'U+2078', usage: 'Eighth power' },
    { symbol: '⁹', name: 'Superscript 9', unicode: 'U+2079', usage: 'Ninth power' },
    { symbol: 'ⁿ', name: 'Superscript n', unicode: 'U+207F', usage: 'Variable power' },
    { symbol: 'ⁱ', name: 'Superscript i', unicode: 'U+2071', usage: 'Imaginary unit' },
    { symbol: 'ᵐ', name: 'Superscript m', unicode: 'U+1D50', usage: 'Letter m' },
    { symbol: 'ʲ', name: 'Superscript j', unicode: 'U+02B2', usage: 'Letter j' },
    { symbol: '⁺', name: 'Superscript plus', unicode: 'U+207A', usage: 'Plus sign' },
    { symbol: '⁻', name: 'Superscript minus', unicode: 'U+207B', usage: 'Minus sign' },
    { symbol: '⁽', name: 'Superscript left parenthesis', unicode: 'U+207D', usage: 'Left bracket' },
    { symbol: '⁾', name: 'Superscript right parenthesis', unicode: 'U+207E', usage: 'Right bracket' },
    { symbol: '⁼', name: 'Superscript equals', unicode: 'U+207C', usage: 'Equals sign' },
    { symbol: 'ˣ', name: 'Superscript x', unicode: 'U+02E3', usage: 'Exponent placeholder' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Header moved to Root layout */}

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Squared Symbol <span className="text-purple-600">(²)</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            The fastest way to use the Squared Symbol (²). Click to copy ² instantly, learn keyboard shortcuts for Windows and Mac, and explore all related superscript characters.
          </p>
          
          {/* Copy Section */}
          <div id="copy" className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-12 max-w-2xl mx-auto border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Copy Squared Symbol</h2>
            <p className="text-slate-600 mb-6 text-center">The Squared Symbol (²) is ready for copying</p>
            <div className="flex flex-col items-center justify-center">
              <div 
                onClick={() => copyToClipboard('²')}
                className="text-8xl font-bold text-purple-600 mb-6 cursor-pointer hover:scale-110 transition-all duration-300 select-none relative group flex items-center justify-center w-32 h-32"
              >
                <div className="absolute inset-0 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="relative z-10 flex items-center justify-center w-full h-full">²</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full opacity-100 whitespace-nowrap">
                  Click to copy
                </div>
              </div>
              <div className="text-sm text-slate-500">
                {copied ? 'Copied' : ''}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      

      {/* All Superscript Characters */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              All Superscript Characters
            </h2>
            <p className="text-lg text-slate-600 text-center mb-4 max-w-3xl mx-auto">
              All superscript characters in one place — including the Squared Symbol (²).
            </p>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            <span className="text-purple-600 font-medium">Click any symbol to copy it </span>instantly. Ideal for math, science, and chemistry.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {superscriptSymbols.map((item, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all duration-200 border border-slate-200 hover:border-purple-300 text-center flex flex-col items-center">
                <div 
                  onClick={() => handleCopyItem(item.symbol, index)}
                  className="text-5xl font-bold text-center text-purple-600 mb-3 cursor-pointer hover:scale-110 transition-all duration-300 select-none relative group flex items-center justify-center w-20 h-20"
                >
                  <div className="absolute inset-0 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div className="relative z-10 flex items-center justify-center w-full h-full">{item.symbol}</div>
                </div>
                <div className={`text-xs font-medium text-green-600 h-4 mb-1 transition-opacity duration-200 ${copiedIndex === index ? 'opacity-100' : 'opacity-0'}`} aria-live="polite">
                  Copied
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center">{item.name}</h3>
                <p className="text-sm text-slate-500 mb-2 text-center">{item.unicode}</p>
                <p className="text-sm text-slate-600 mb-4 text-center">{item.usage}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Type */}
      <section id="how-to-type" className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              How to Type a Squared Symbol
            </h2>
            <p className="text-lg text-slate-600 text-center mb-8 max-w-3xl mx-auto">
              The easiest way: click ² above to copy, then paste. Prefer typing? Here are quick ways on each device.
            </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">💻 Windows</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Using Alt Code</h4>
                  <p className="text-sm text-slate-600 mb-2">Alt + 0178</p>
                  <ol className="text-sm text-slate-600 list-decimal list-inside space-y-1">
                    <li>Hold down the Alt key</li>
                    <li>Type 0178 on the numeric keypad</li>
                    <li>Release the Alt key</li>
                  </ol>
                  <p className="text-xs text-slate-500 mt-2">Works in most apps with a full keyboard.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">🍎 Mac</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Character Viewer</h4>
                  <ol className="text-sm text-slate-600 list-decimal list-inside space-y-1">
                    <li>Press Control + Command + Space</li>
                    <li>Search “superscript 2”</li>
                    <li>Insert ²</li>
                  </ol>
                  <p className="text-xs text-slate-500 mt-2">Or copy ² above and paste anywhere.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">📱 iPhone & Android</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Quick Copy</h4>
                  <ol className="text-sm text-slate-600 list-decimal list-inside space-y-1">
                    <li>Tap the big ² above to copy</li>
                    <li>In any app, long‑press the text field</li>
                    <li>Tap Paste to insert ²</li>
                  </ol>
                  <p className="text-xs text-slate-500 mt-2">Many mobile keyboards also include a symbols panel or clipboard shortcut.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is the Squared Symbol */}
      <section id="what-is" className="py-16 bg-slate-50/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What is the Squared Symbol?</h2>
          <p className="text-lg text-slate-600 text-center mb-8 max-w-3xl mx-auto">
            The Squared Symbol (²) means a number multiplied by itself. It’s the small superscript 2 you see in math, science and everyday units like m². Here you can copy ² and learn quick ways to type it anywhere.
          </p>
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Mathematical Symbol</h3>
              <p className="text-slate-600 mb-4">When a value has the Squared Symbol after it, read it as “to the power of two”. Examples: 9² = 81, (a − b)² = a² − 2ab + b².</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Unicode Character</h3>
              <p className="text-slate-600 mb-4">The Squared Symbol is a standard Unicode character (U+00B2). That means it renders consistently across Windows, macOS, Android and the web when the font supports it.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Alternative Names</h3>
              <p className="text-slate-600 mb-4">Also called superscript 2, power of two, or simply square. You’ll see the Squared Symbol in formulas, geometry areas (m², km²) and physics units (m/s²).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Uses */}
      <section id="uses" className="py-16 bg-slate-50/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Common Uses of the Squared Symbol</h2>
          <p className="text-lg text-slate-600 text-center mb-8 max-w-3xl mx-auto">
            Where you’ll see the Squared Symbol (²) most often — from everyday units to data analysis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Areas & Units</h3>
              <p className="text-slate-600 mb-4">Square units use the Squared Symbol to show area.</p>
              <div className="bg-slate-100/80 p-4 rounded-lg font-mono text-sm">
                72 m² (square meters)<br/>
                18 km² (square kilometers)<br/>
                900 ft² (square feet)
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Physics & Engineering</h3>
              <p className="text-slate-600 mb-4">Accelerations and famous equations use superscript 2.</p>
              <div className="bg-slate-100/80 p-4 rounded-lg font-mono text-sm">
                a = 9.81 m/s²<br/>
                E = mc²
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Statistics & Data</h3>
              <p className="text-slate-600 mb-4">Measures of fit and spread are written with the Squared Symbol.</p>
              <div className="bg-slate-100/80 p-4 rounded-lg font-mono text-sm">
                R² (coefficient of determination)<br/>
                σ² (variance)<br/>
                χ² test (chi‑squared)
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Geometry & Algebra</h3>
              <p className="text-slate-600 mb-4">Squares appear in distances, expansions and circles.</p>
              <div className="bg-slate-100/80 p-4 rounded-lg font-mono text-sm">
                (a − b)² = a² − 2ab + b²<br/>
                x² + y² = r² (circle)<br/>
                distance² = Δx² + Δy²
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-slate-50/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">What is the easiest way to get the Squared Symbol (²)?</h3>
              <p className="text-slate-600">Click the big ² at the top to copy the Squared Symbol, then paste it anywhere. It’s the fastest way on any device.</p>
            </div>

            <div className="bg-slate-50/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">How do I type the Squared Symbol on Windows?</h3>
              <p className="text-slate-600">Use Alt code: hold Alt and type 0178 on the numeric keypad to insert the Squared Symbol.</p>
            </div>

            <div className="bg-slate-50/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">How do I type the Squared Symbol on Mac?</h3>
              <p className="text-slate-600">Press Control + Command + Space, search “superscript 2”, and insert ². Or copy the Squared Symbol directly from this page.</p>
            </div>

            <div className="bg-slate-50/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Can I use the Squared Symbol on my phone?</h3>
              <p className="text-slate-600">Yes. Tap the ² on this page to copy the Squared Symbol, long‑press any text field, and paste.</p>
            </div>

            <div className="bg-slate-50/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Why does the Squared Symbol look different in some apps?</h3>
              <p className="text-slate-600">Appearance depends on the font. The Squared Symbol (U+00B2) is a Unicode character, but fonts style it differently. Try a system font or a math‑friendly font.</p>
            </div>

            <div className="bg-slate-50/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Is there a shortcut to square numbers if I can’t insert the Squared Symbol?</h3>
              <p className="text-slate-600">In programming and calculators, use ^2 or **2 as an alternative to the <strong>Squared Symbol</strong>. Example: x^2 or x**2.</p>
            </div>

            <div className="bg-slate-50/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Where is the Squared Symbol used most?</h3>
              <p className="text-slate-600">The <strong>Squared Symbol</strong> appears in areas (m², km²), physics units (m/s²), statistics (R², σ²), and common formulas like (a − b)².</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer moved to Root layout */}
    </div>
  );
}
