import React, { useState } from 'react';

/**
 * Uilora: Glassmorphic Luxury Container
 */
export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'deep';
}> = ({ children, className = '', intensity = 'medium' }) => {
  const intensityStyles = {
    light: 'bg-slate-900/40 backdrop-blur-md border-white/5',
    medium: 'bg-slate-900/70 backdrop-blur-xl border-slate-800/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]',
    deep: 'bg-slate-950/85 backdrop-blur-2xl border-slate-700/60 shadow-[0_12px_48px_0_rgba(0,0,0,0.6)]',
  };

  return (
    <div
      className={`rounded-2xl border p-6 text-slate-100 transition-all duration-300 ${intensityStyles[intensity]} ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * Uilora: Pill Tabs
 */
export const PillTabs: React.FC<{
  tabs: { id: string; label: string; icon?: React.ReactNode; count?: number }[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}> = ({ tabs, activeTab, onChange, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-xl ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 select-none ${
              isActive
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-[0_4px_20px_rgba(99,102,241,0.4)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            {tab.icon && <span className="text-sm">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
