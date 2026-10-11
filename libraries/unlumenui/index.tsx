import React from 'react';

/**
 * UnlumenUI: Chromatic Luminescent Glow and Aurora ambient lighting
 */
export const LuminescentGlow: React.FC<{
  children: React.ReactNode;
  glowColor?: string;
  className?: string;
}> = ({ children, glowColor = 'rgba(99, 102, 241, 0.25)', className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      <div
        className="absolute -inset-1 rounded-2xl opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl"
        style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const DarkAurora: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-indigo-600/10 blur-[100px]" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-cyan-600/10 blur-[100px]" />
    </div>
  );
};
