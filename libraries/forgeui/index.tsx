import React from 'react';

/**
 * ForgeUI: Tactical Hardware Control Panel
 */
export const TacticalPanel: React.FC<{
  title: string;
  badge?: string;
  status?: 'online' | 'busy' | 'idle' | 'warning';
  children: React.ReactNode;
  className?: string;
}> = ({ title, badge, status = 'online', children, className = '' }) => {
  const statusColors = {
    online: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]',
    busy: 'bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]',
    idle: 'bg-amber-500',
    warning: 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]',
  };

  return (
    <div className={`rounded-xl border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950 p-5 relative overflow-hidden shadow-xl backdrop-blur-lg ${className}`}>
      {/* Top industrial grip line */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className={`w-2.5 h-2.5 rounded-full ${statusColors[status]}`} />
          <h2 className="text-sm font-mono font-bold tracking-wider uppercase text-slate-200">
            {title}
          </h2>
        </div>
        {badge && (
          <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-slate-800 text-slate-300 rounded border border-slate-700">
            {badge}
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

/**
 * ForgeUI: Cyber Slider for rate limits and delays
 */
export const CyberSlider: React.FC<{
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (val: number) => void;
  description?: string;
}> = ({ label, value, min, max, step = 1, unit = '', onChange, description }) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-slate-300 font-medium">{label}</span>
        <span className="text-indigo-400 font-bold bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/50">
          {value} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
      />
      {description && <p className="text-[11px] text-slate-500">{description}</p>}
    </div>
  );
};

/**
 * ForgeUI: Status Beacon
 */
export const StatusBeacon: React.FC<{
  label: string;
  value: string | number;
  subtext?: string;
  trend?: 'up' | 'down' | 'neutral';
}> = ({ label, value, subtext, trend }) => {
  return (
    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between">
      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{label}</span>
      <div className="my-1.5 text-2xl font-bold font-mono text-slate-100 flex items-baseline gap-2">
        <span>{value}</span>
        {trend && (
          <span className={`text-xs ${trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-rose-400' : 'text-slate-400'}`}>
            {trend === 'up' ? '▲' : trend === 'down' ? '▼' : '—'}
          </span>
        )}
      </div>
      {subtext && <span className="text-[11px] text-slate-500">{subtext}</span>}
    </div>
  );
};
