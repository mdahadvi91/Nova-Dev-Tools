import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CookieConsentBanner: React.FC = () => {
  const { t } = useApp();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('nova_cookie_consent_accepted');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nova_cookie_consent_accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-3 inset-x-3 sm:left-auto sm:right-4 sm:max-w-md z-50 p-4 rounded-2xl bg-[#0a120e]/95 backdrop-blur-xl border border-emerald-500/30 text-white shadow-2xl animate-fade-in"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="flex-1 text-xs leading-relaxed space-y-2">
          <p className="text-slate-200">
            {t.cookieNotice}
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleAccept}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
            >
              {t.accept}
            </button>
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
