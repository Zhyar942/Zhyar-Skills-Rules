import React from 'react';

/**
 * SkiperUI: Rapid filter chips and dynamic facet pills
 */
export const QuickFilterChip: React.FC<{
  label: string;
  count?: number;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}> = ({ label, count, active, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 border select-none ${
        active
          ? 'bg-indigo-600/30 border-indigo-500 text-indigo-200 shadow-[0_0_12px_rgba(99,102,241,0.3)]'
          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
      }`}
    >
      {icon && <span className="text-sm">{icon}</span>}
      <span>{label}</span>
      {count !== undefined && (
        <span className={`px-1.5 py-0.2 rounded text-[10px] ${active ? 'bg-indigo-500/40 text-white' : 'bg-slate-800 text-slate-400'}`}>
          {count}
        </span>
      )}
    </button>
  );
};
