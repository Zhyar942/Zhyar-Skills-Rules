import React from 'react';

/**
 * MagicUI: Border Beam effect
 */
export const BorderBeam: React.FC<{
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
}> = ({
  className = '',
  size = 200,
  duration = 12,
  borderWidth = 1.5,
  colorFrom = '#6366f1',
  colorTo = '#a855f7',
}) => {
  return (
    <div
      style={
        {
          '--size': `${size}px`,
          '--duration': `${duration}s`,
          '--border-width': `${borderWidth}px`,
          '--color-from': colorFrom,
          '--color-to': colorTo,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 rounded-[inherit] [border:var(--border-width)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size))] after:animate-border-beam after:[animation-delay:var(--delay,0s)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--size)/2)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)))] ${className}`}
    />
  );
};

/**
 * MagicUI: Shimmer Button
 */
export const ShimmerButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  shimmerColor?: string;
  disabled?: boolean;
}> = ({
  children,
  onClick,
  className = '',
  shimmerColor = '#ffffff',
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-xl px-5 py-2.5 font-medium text-white transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none group bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] hover:bg-[position:right_center] shadow-[0_0_20px_rgba(99,102,241,0.35)] ${className}`}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

/**
 * MagicUI: Bento Grid & Card
 */
export const BentoGrid: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export const BentoCard: React.FC<{
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  badge?: string;
}> = ({
  title,
  subtitle,
  icon,
  children,
  className = '',
  colSpan = 'col-span-1',
  badge,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-slate-700/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between group ${colSpan} ${className}`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          {icon && (
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-105 transition-transform">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-sm font-semibold text-slate-100 tracking-wide">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-slate-400 font-normal">{subtitle}</p>
            )}
          </div>
        </div>
        {badge && (
          <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
            {badge}
          </span>
        )}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

/**
 * MagicUI: Marquee for stream banners
 */
export const Marquee: React.FC<{
  children: React.ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
}> = ({
  children,
  className = '',
  pauseOnHover = true,
  reverse = false,
}) => {
  return (
    <div
      className={`flex overflow-hidden select-none gap-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
    >
      <div
        className={`flex min-w-full shrink-0 items-center justify-around gap-4 animate-marquee ${
          reverse ? '[animation-direction:reverse]' : ''
        } ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex min-w-full shrink-0 items-center justify-around gap-4 animate-marquee ${
          reverse ? '[animation-direction:reverse]' : ''
        } ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
      >
        {children}
      </div>
    </div>
  );
};
