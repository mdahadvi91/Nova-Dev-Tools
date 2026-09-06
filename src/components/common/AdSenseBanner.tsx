import React from 'react';
import { useApp } from '../../context/AppContext';

interface AdSenseBannerProps {
  slotId?: string;
  className?: string;
  format?: 'horizontal' | 'rectangle';
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  slotId = 'nova-auto-slot',
  className = '',
  format = 'horizontal',
}) => {
  const { t } = useApp();

  return (
    <div
      className={`my-6 flex flex-col items-center justify-center p-3 rounded-2xl liquid-glass border border-white/10 text-center ${className}`}
      aria-label={t.advertisement}
    >
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 opacity-75">
        {t.advertisement}
      </span>
      <div
        className={`w-full ${
          format === 'horizontal' ? 'h-20 sm:h-24' : 'h-64'
        } max-w-4xl rounded-xl border border-dashed border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center text-xs text-emerald-400/60 font-mono`}
      >
        <span>Google AdSense Slot — {slotId} (300×250 / 728×90 Responsive)</span>
      </div>
    </div>
  );
};
