import React from 'react';

/**
 * AnimatedList: Spring-damped kinetic list and dynamic queue
 */
export interface QueueItem {
  id: string;
  url: string;
  domain: string;
  status: 'queued' | 'downloading' | 'validating' | 'completed' | 'failed' | 'duplicate';
  resolution?: string;
  hash?: string;
  sizeKb?: number;
}

export const AnimatedList: React.FC<{
  items: QueueItem[];
  maxItems?: number;
  className?: string;
}> = ({ items, maxItems = 6, className = '' }) => {
  const displayedItems = items.slice(0, maxItems);

  const statusBadge = {
    queued: 'bg-slate-800 text-slate-400 border-slate-700',
    downloading: 'bg-sky-500/10 text-sky-400 border-sky-500/30 animate-pulse',
    validating: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    failed: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    duplicate: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  };

  return (
    <div className={`space-y-2.5 overflow-hidden ${className}`}>
      {displayedItems.length === 0 ? (
        <div className="text-center py-6 text-xs text-slate-500 font-mono">
          [Queue Empty - Waiting for Seed URLs]
        </div>
      ) : (
        displayedItems.map((item, idx) => (
          <div
            key={item.id}
            style={{ animationDelay: `${idx * 40}ms` }}
            className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-850 transition-all duration-300 animate-fadeIn"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
              <div className="overflow-hidden">
                <p className="text-xs font-mono font-medium text-slate-200 truncate">
                  {item.url}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] text-slate-400 font-mono">
                    {item.domain}
                  </span>
                  {item.resolution && (
                    <span className="text-[10px] text-indigo-300 font-mono">
                      • {item.resolution}
                    </span>
                  )}
                  {item.sizeKb && (
                    <span className="text-[10px] text-slate-500 font-mono">
                      • {item.sizeKb} KB
                    </span>
                  )}
                </div>
              </div>
            </div>

            <span
              className={`px-2.5 py-1 text-[10px] uppercase font-mono font-bold rounded-lg border shrink-0 ${statusBadge[item.status]}`}
            >
              {item.status}
            </span>
          </div>
        ))
      )}
    </div>
  );
};
