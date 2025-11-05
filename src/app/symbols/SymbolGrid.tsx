'use client';

type SymbolItem = { symbol: string; label: string };

import { useState } from 'react';

export default function SymbolGrid({ symbols }: { symbols: SymbolItem[] }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copy = async (s: string, index: number) => {
    try {
      await navigator.clipboard.writeText(s);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1200);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {symbols.map((s, i) => (
        <button
          key={`${s.symbol}-${i}`}
          onClick={() => copy(s.symbol, i)}
          className="group w-full aspect-square rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center hover:shadow hover:border-purple-300 transition"
        >
          <span className="text-4xl md:text-5xl text-purple-600 font-bold group-hover:scale-110 transition-transform">
            {s.symbol}
          </span>
          <span className={`mt-1 text-[11px] text-green-600 ${copiedIndex === i ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
            Copied
          </span>
          <span className="mt-2 text-xs text-slate-500 text-center px-2">{s.label}</span>
        </button>
      ))}
    </div>
  );
}


