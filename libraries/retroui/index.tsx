import React, { useRef, useEffect } from 'react';

/**
 * RetroUI: Monospace Terminal with autoscroll, timestamp formatting, and log levels
 */
export interface LogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'warn' | 'error' | 'success' | 'debug';
  message: string;
  source?: string;
}

export const MonospaceTerminal: React.FC<{
  logs: LogEntry[];
  title?: string;
  maxHeight?: string;
  className?: string;
  onClear?: () => void;
}> = ({ logs, title = 'SYSTEM CRAWLER LOGS', maxHeight = 'max-h-72', className = '', onClear }) => {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  const levelColors = {
    info: 'text-sky-400',
    warn: 'text-amber-400',
    error: 'text-rose-400 font-bold',
    success: 'text-emerald-400',
    debug: 'text-slate-500',
  };

  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-950 font-mono text-xs overflow-hidden shadow-2xl flex flex-col ${className}`}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-slate-400 text-[11px] font-semibold tracking-wider">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-slate-500">{logs.length} EVENTS</span>
          {onClear && (
            <button
              onClick={onClear}
              className="text-[10px] text-slate-400 hover:text-slate-200 uppercase hover:underline"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className={`p-4 overflow-y-auto space-y-1.5 leading-relaxed selection:bg-indigo-500/30 selection:text-indigo-200 scrollbar-thin scrollbar-thumb-slate-800 ${maxHeight}`}
      >
        {logs.length === 0 ? (
          <div className="text-slate-600 italic py-4 text-center">
            &gt; Waiting for crawler pipeline events...
          </div>
        ) : (
          logs.map((log) => (
            <div key={log.id} className="flex items-start gap-2 hover:bg-slate-900/40 px-1 py-0.5 rounded transition-colors">
              <span className="text-slate-600 select-none text-[10px]">[{log.timestamp}]</span>
              {log.source && (
                <span className="text-purple-400/80 text-[10px] uppercase font-semibold">[{log.source}]</span>
              )}
              <span className={`uppercase font-bold text-[10px] ${levelColors[log.level]}`}>
                [{log.level}]
              </span>
              <span className="text-slate-300 break-all flex-1">{log.message}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

/**
 * RetroUI: Radar Gauge
 */
export const RadarGauge: React.FC<{
  value: number; // 0 to 100
  label: string;
  unit?: string;
  color?: string;
}> = ({ value, label, unit = '%', color = '#6366f1' }) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/50 border border-slate-800">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="stroke-slate-800"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-lg font-bold font-mono text-slate-100">{value}</span>
          <span className="text-[10px] text-slate-400 -mt-1">{unit}</span>
        </div>
      </div>
      <span className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">{label}</span>
    </div>
  );
};
