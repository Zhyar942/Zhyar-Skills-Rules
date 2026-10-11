import React, { useState } from 'react';

/**
 * ShmothUI: Smooth animated accordion for schema inspector and site rule configs
 */
export const SmoothAccordion: React.FC<{
  title: string;
  badge?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ title, badge, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 overflow-hidden transition-colors hover:border-slate-700/80">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-slate-200 hover:text-white transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-mono text-slate-300 font-semibold">{title}</span>
          {badge && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {badge}
            </span>
          )}
        </div>
        <span className={`text-slate-400 transform transition-transform duration-300 text-xs ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 p-4 pt-0 border-t border-slate-800/50' : 'max-h-0 opacity-0 p-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};
