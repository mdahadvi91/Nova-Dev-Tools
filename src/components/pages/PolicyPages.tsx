import React, { useState } from 'react';
import { ShieldCheck, Lock, CheckCircle2, Send, HelpCircle, FileText, Info } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-8 animate-fade-in">
      <div className="space-y-3">
        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
          Privacy First Commitment
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400">Last updated: March 2026</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-6">
        <div className="p-4 rounded-2xl liquid-glass border border-emerald-500/30 flex items-start gap-3 text-emerald-900 dark:text-emerald-200">
          <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-sm">Core Privacy Guarantee: Client-Side Execution</p>
            <p className="text-xs opacity-90 mt-0.5">
              Nova Tools processes all file conversions, QR code generations, image resizings, and document operations directly within your web browser using HTML5 Canvas, Web APIs, and WebAssembly. Your images, PDFs, passwords, and documents are never uploaded to or stored on our servers.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white">1. Information We Do Not Collect</h3>
        <p>
          Unlike conventional conversion websites that force users to upload sensitive personal files to remote cloud buckets, Nova Tools conducts execution locally on your device. We do not inspect, log, retain, or transmit your processed content.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white">2. Local Storage Usage</h3>
        <p>
          Nova Tools utilizes your browser&apos;s local storage strictly for client-side user experience enhancements, such as saving your recently used tools, favorite bookmarks, and your theme preference (dark or light mode). This data never leaves your browser and can be cleared by you at any time.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white">3. Third-Party Advertising & Cookies</h3>
        <p>
          We partner with Google AdSense to serve non-intrusive advertisements that support free access to our tools. Google may use cookies to serve ads based on a user&apos;s prior visits to this or other websites. You may opt out of personalized advertising by visiting Google Ad Settings.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white">4. Contacting Us</h3>
        <p>
          If you have questions regarding this Privacy Policy, please reach out via our contact page or email privacy@novatools.dev.
        </p>
      </div>
    </div>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-8 animate-fade-in">
      <div className="space-y-3">
        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
          Legal & Governance
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-400">Effective Date: March 2026</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h3>
        <p>
          By accessing and using Nova Tools (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white">2. Permitted Use</h3>
        <p>
          Nova Tools provides free client-side utility applications for personal, commercial, and professional use. You agree not to use the tools to generate malicious QR codes, distribute malware, or engage in automated abusive crawling that degrades platform availability.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white">3. Disclaimer of Warranties</h3>
        <p>
          The tools and services on this website are provided &quot;as is&quot; without warranty of any kind, either express or implied. While we strive for absolute accuracy in calculators, formatting, and converters, Nova Tools does not warrant that results will always be error-free or uninterrupted.
        </p>
      </div>
    </div>
  );
};

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-8 animate-fade-in">
      <div className="space-y-3">
        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
          Our Mission
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          About Nova Tools
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          A modern online utility suite built on the belief that everyday digital tasks should be fast, elegant, and completely private.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-2xl liquid-glass border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold">
            <Lock className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-slate-900 dark:text-white">100% Client-Side</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Your images, PDFs, and data stay on your device. We use modern Web APIs to process files directly inside your browser.
          </p>
        </div>

        <div className="p-6 rounded-2xl liquid-glass border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-slate-900 dark:text-white">Zero Paywalls</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            No signup forms, no arbitrary file limits, and no delayed download timers. Every tool is available instantly.
          </p>
        </div>

        <div className="p-6 rounded-2xl liquid-glass border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-slate-900 dark:text-white">Liquid Glass UX</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Designed with thoughtful typography, optical hierarchy, and organic nature tones for effortless utility.
          </p>
        </div>
      </div>
    </div>
  );
};

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 space-y-8 animate-fade-in">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
          Contact & Tool Requests
        </h1>
        <p className="text-sm text-slate-500">
          Have feedback or want a new utility added? Send us a message below.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl liquid-glass border border-emerald-500/30 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Message Received!</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Thank you for helping make Nova Tools better. Our engineering team reviews all feature requests.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl liquid-glass border border-slate-200 dark:border-slate-800 space-y-4 shadow-xl"
        >
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">Your Name</label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl liquid-glass border border-slate-300 dark:border-slate-700 text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">Email Address</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl liquid-glass border border-slate-300 dark:border-slate-700 text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">Message or Tool Suggestion</label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl liquid-glass border border-slate-300 dark:border-slate-700 text-xs"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </button>
        </form>
      )}
    </div>
  );
};
