import React from 'react';

/**
 * AnimateUI: Live Pipeline Nodes & Animated Path Connectors
 */
export const PulsingNode: React.FC<{
  title: string;
  subtitle?: string;
  status: 'active' | 'processing' | 'idle' | 'warning';
  icon?: React.ReactNode;
  count?: number;
  className?: string;
}> = ({ title, subtitle, status, icon, count, className = '' }) => {
  const statusGradients = {
    active: 'from-indigo-600/20 to-purple-600/20 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.25)]',
    processing: 'from-cyan-600/20 to-blue-600/20 border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.35)] animate-pulse',
    idle: 'from-slate-900 to-slate-950 border-slate-800',
    warning: 'from-rose-600/20 to-amber-600/20 border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.25)]',
  };

  const statusDot = {
    active: 'bg-indigo-500',
    processing: 'bg-cyan-400 animate-ping',
    idle: 'bg-slate-600',
    warning: 'bg-rose-500',
  };

  return (
    <div
      className={`relative rounded-xl border bg-gradient-to-b p-4 backdrop-blur-md transition-all duration-300 ${statusGradients[status]} ${className}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${statusDot[status]}`} />
          <span className="text-xs font-mono font-bold text-slate-100 tracking-wide">
            {title}
          </span>
        </div>
        {icon && <span className="text-slate-400">{icon}</span>}
      </div>
      <div className="flex items-baseline justify-between mt-1">
        {subtitle && <span className="text-[11px] text-slate-400">{subtitle}</span>}
        {count !== undefined && (
          <span className="text-sm font-mono font-bold text-indigo-300">
            {count}
          </span>
        )}
      </div>
    </div>
  );
};
