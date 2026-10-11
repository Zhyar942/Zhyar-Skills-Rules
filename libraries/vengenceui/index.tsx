import React from 'react';

/**
 * VengenceUI: Threat indicators, DMCA Takedown warnings, and security purge triggers
 */
export const CyberAlert: React.FC<{
  title: string;
  message: string;
  variant?: 'danger' | 'warning' | 'info';
  action?: { label: string; onClick: () => void };
}> = ({ title, message, variant = 'danger', action }) => {
  const styles = {
    danger: 'border-rose-500/50 bg-rose-950/40 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.2)]',
    warning: 'border-amber-500/50 bg-amber-950/40 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)]',
    info: 'border-cyan-500/50 bg-cyan-950/40 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]',
  };

  return (
    <div className={`rounded-xl border p-4 backdrop-blur-md flex items-start justify-between gap-3 ${styles[variant]}`}>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider">{title}</span>
        </div>
        <p className="text-xs opacity-90 leading-relaxed font-sans">{message}</p>
      </div>
      {action && (
        <button
          onClick={action.onClick}
          className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase bg-rose-600 hover:bg-rose-500 text-white transition-all duration-200 shadow-md"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};
