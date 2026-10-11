import React from 'react';

/**
 * Uiverse: CyberCard with glowing neon border & cyber corner notches
 */
export const CyberCard: React.FC<{
  children: React.ReactNode;
  title?: string;
  glowColor?: 'indigo' | 'emerald' | 'rose' | 'amber' | 'cyan';
  className?: string;
}> = ({ children, title, glowColor = 'indigo', className = '' }) => {
  const glowStyles = {
    indigo: 'hover:border-indigo-500/60 shadow-[0_0_20px_rgba(99,102,241,0.15)]',
    emerald: 'hover:border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.15)]',
    rose: 'hover:border-rose-500/60 shadow-[0_0_20px_rgba(244,63,94,0.15)]',
    amber: 'hover:border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.15)]',
    cyan: 'hover:border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.15)]',
  };

  return (
    <div
      className={`relative rounded-xl border border-slate-800 bg-slate-950/70 p-5 backdrop-blur-md transition-all duration-300 ${glowStyles[glowColor]} ${className}`}
    >
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-indigo-400/80 rounded-tl" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-indigo-400/80 rounded-tr" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-indigo-400/80 rounded-bl" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-indigo-400/80 rounded-br" />
      {title && (
        <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center justify-between border-b border-slate-800/80 pb-2">
          <span>{title}</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
        </div>
      )}
      {children}
    </div>
  );
};

/**
 * Uiverse: Tactical Glow Switch
 */
export const TacticalSwitch: React.FC<{
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}> = ({ checked, onChange, label, disabled = false }) => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer select-none group">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-indigo-600 peer-checked:to-purple-600 shadow-inner peer-checked:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all" />
      </div>
      {label && (
        <span className="text-xs font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
          {label}
        </span>
      )}
    </label>
  );
};

/**
 * Uiverse: Glow Input Field
 */
export const GlowInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    icon?: React.ReactNode;
  }
> = ({ icon, className = '', ...props }) => {
  return (
    <div className="relative flex items-center w-full">
      {icon && (
        <div className="absolute left-3 text-slate-400 pointer-events-none">
          {icon}
        </div>
      )}
      <input
        {...props}
        className={`w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.3)] ${
          icon ? 'pl-10' : ''
        } ${className}`}
      />
    </div>
  );
};

/**
 * Uiverse: Holographic Badge
 */
export const HologramBadge: React.FC<{
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose';
}> = ({ children, variant = 'cyan' }) => {
  const styles = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]',
    rose: 'bg-rose-500/10 text-rose-300 border-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.2)]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-mono font-medium backdrop-blur-md ${styles[variant]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {children}
    </span>
  );
};
