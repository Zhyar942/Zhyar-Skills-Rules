import React, { useState } from 'react';

/**
 * AnimasterLib: 64-Bit Perceptual dHash Matrix Visualizer
 * Renders an 8x8 interactive bit-grid showing difference hash state and Hamming distance bits
 */
export const PerceptualMatrixVisualizer: React.FC<{
  hashHex: string;
  compareHashHex?: string;
  title?: string;
}> = ({ hashHex, compareHashHex, title = 'dHash 64-Bit Matrix' }) => {
  // Convert 16 hex chars to 64 binary bits
  const hexToBits = (hex: string) => {
    const cleanHex = (hex || '').replace(/[^0-9a-fA-F]/g, '').padEnd(16, '0').slice(0, 16);
    let bits = '';
    for (let i = 0; i < cleanHex.length; i++) {
      bits += parseInt(cleanHex[i], 16).toString(2).padStart(4, '0');
    }
    return bits.split('');
  };

  const bitsA = hexToBits(hashHex);
  const bitsB = compareHashHex ? hexToBits(compareHashHex) : null;

  let hammingDistance = 0;
  if (bitsB) {
    for (let i = 0; i < 64; i++) {
      if (bitsA[i] !== bitsB[i]) hammingDistance++;
    }
  }

  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 shadow-xl font-mono">
      <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-200 uppercase">{title}</span>
        </div>
        <div className="text-right">
          <span className="text-[11px] text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/40">
            0x{hashHex.toUpperCase()}
          </span>
        </div>
      </div>

      {/* 8x8 Grid */}
      <div className="grid grid-cols-8 gap-1 p-2 bg-slate-900/90 rounded-lg border border-slate-800/80">
        {bitsA.map((bit, idx) => {
          const isDiff = bitsB && bitsA[idx] !== bitsB[idx];
          const isOne = bit === '1';

          return (
            <div
              key={idx}
              title={`Bit #${idx}: ${bit}${isDiff ? ' (Hamming Diff)' : ''}`}
              className={`h-5 rounded flex items-center justify-center text-[9px] font-bold transition-all duration-200 cursor-default ${
                isDiff
                  ? 'bg-rose-500 text-white shadow-[0_0_8px_rgba(244,63,94,0.8)] animate-pulse'
                  : isOne
                  ? 'bg-indigo-600 text-indigo-100 shadow-[0_0_4px_rgba(99,102,241,0.4)]'
                  : 'bg-slate-800/80 text-slate-500'
              }`}
            >
              {bit}
            </div>
          );
        })}
      </div>

      {bitsB && (
        <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-800">
          <span className="text-slate-400">Hamming Distance:</span>
          <span
            className={`font-bold px-2 py-0.5 rounded ${
              hammingDistance <= 5
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
            }`}
          >
            {hammingDistance} bits ({hammingDistance <= 5 ? 'Near-Duplicate' : 'Distinct Asset'})
          </span>
        </div>
      )}
    </div>
  );
};

/**
 * AnimasterLib: Split Image Comparison Slider
 */
export const SplitImageSlider: React.FC<{
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}> = ({ beforeLabel = 'Source 1', afterLabel = 'Source 2 (Duplicate)', beforeImage, afterImage }) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-800 select-none group">
      {/* Background Image (Right) */}
      <img src={afterImage} alt={afterLabel} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-md rounded text-[10px] font-mono text-slate-300 border border-white/10 z-10">
        {afterLabel}
      </div>

      {/* Foreground Image (Left, clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-md rounded text-[10px] font-mono text-indigo-300 border border-indigo-500/30 z-10">
          {beforeLabel}
        </div>
      </div>

      {/* Split Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,1)] cursor-ew-resize flex items-center justify-center"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-400 text-indigo-300 flex items-center justify-center text-[10px] shadow-lg">
          ↔
        </div>
      </div>

      {/* Invisible range input for dragging */}
      <input
        type="range"
        min={0}
        max={100}
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
      />
    </div>
  );
};
