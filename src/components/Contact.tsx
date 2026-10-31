import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { TranslationDict } from '../translations';
import { SOCIAL_LINKS } from '../data';
import { SocialLinks } from './SocialLinks';
import DesignerAnimation from './DesignerAnimation';

interface ContactProps {
  lang: 'ID' | 'EN';
  darkMode: boolean;
  t: TranslationDict;
  soundEnabled: boolean;
}

export default function Contact({ lang, darkMode, t, soundEnabled }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const playSound = (freq = 600, duration = 0.1, type: OscillatorType = 'sine') => {
    if (soundEnabled) {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
      } catch (e) {}
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      playSound(300, 0.15, 'sawtooth');
      setSubmissionStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus('idle');

    fetch("https://formspree.io/f/xvzybpwe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        whatsapp,
        message
      })
    })
    .then((response) => {
      setIsSubmitting(false);
      if (response.ok) {
        setSubmissionStatus('success');
        playSound(880, 0.25, 'sine');

        // Reset fields
        setName('');
        setEmail('');
        setWhatsapp('');
        setMessage('');
      } else {
        setSubmissionStatus('error');
        playSound(300, 0.15, 'sawtooth');
      }
    })
    .catch(() => {
      setIsSubmitting(false);
      setSubmissionStatus('error');
      playSound(300, 0.15, 'sawtooth');
    });
  };

  return (
    <section
      id="contact-section"
      className="py-24 relative overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Header Title */}
        <div className="text-center space-y-4 mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase ${
            darkMode ? 'bg-[var(--surface)] text-[var(--muted)]' : 'bg-[var(--surface)] text-[var(--muted)]'
          }`}>
            {lang === 'ID' ? 'Koneksi Kerja' : 'Let\'s Connect'}
          </div>
          <h2 className={`font-display text-3xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
          }`}>
            {lang === 'ID' ? 'Mari ' : 'Let’s '}<span className="   text-[var(--ink)]">{lang === 'ID' ? 'bangun sesuatu yang hebat' : 'build something amazing'}</span>
          </h2>
          <p className={`text-sm md:text-base max-w-xl mx-auto ${
            darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
          }`}>
            {t.contactSubtitle}
          </p>
        </div>

        {/* Content Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">

          {/* Left: Input Form Card */}
          <div className="lg:col-span-7">
            <div className={`p-5 sm:p-8 rounded-3xl border flex flex-col h-full text-left relative overflow-hidden ${
              darkMode ? 'bg-[var(--surface)] border-[var(--line)] shadow-none' : 'bg-[var(--surface)] border-[var(--line)] shadow-none'
            }`}>

              <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">

                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="form-name" className={`text-[10px] font-bold tracking-wider uppercase ${
                    darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
                  }`}>
                    {t.formName} <span className="text-[var(--accent-ink)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'ID' ? 'Masukkan nama lengkap Anda' : 'Your full name'}
                    className={`w-full px-5 py-3.5 rounded-xl border text-sm font-medium outline-none transition-all ${
                      darkMode
                        ? 'bg-[var(--surface)] border-[var(--line)] focus:border-cyan-500/50 text-[var(--ink)] focus:ring-1 focus:ring-cyan-500/10'
                        : 'bg-[var(--surface)] border-[var(--line)] focus:border-indigo-600/50 text-[var(--ink)] focus:ring-1 focus:ring-indigo-600/10'
                    }`}
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="form-email" className={`text-[10px] font-bold tracking-wider uppercase ${
                    darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
                  }`}>
                    {t.formEmail} <span className="text-[var(--accent-ink)]">*</span>
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className={`w-full px-5 py-3.5 rounded-xl border text-sm font-medium outline-none transition-all ${
                      darkMode
                        ? 'bg-[var(--surface)] border-[var(--line)] focus:border-cyan-500/50 text-[var(--ink)] focus:ring-1 focus:ring-cyan-500/10'
                        : 'bg-[var(--surface)] border-[var(--line)] focus:border-indigo-600/50 text-[var(--ink)] focus:ring-1 focus:ring-indigo-600/10'
                    }`}
                  />
                </div>

                {/* WhatsApp optional field */}
                <div className="space-y-2">
                  <label htmlFor="form-whatsapp" className={`text-[10px] font-bold tracking-wider uppercase ${
                    darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
                  }`}>
                    {t.formWhatsapp}
                  </label>
                  <input
                    type="tel"
                    id="form-whatsapp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="e.g. 087762342876"
                    className={`w-full px-5 py-3.5 rounded-xl border text-sm font-medium outline-none transition-all ${
                      darkMode
                        ? 'bg-[var(--surface)] border-[var(--line)] focus:border-cyan-500/50 text-[var(--ink)]'
                        : 'bg-[var(--surface)] border-[var(--line)] focus:border-indigo-600/50 text-[var(--ink)]'
                    }`}
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="form-message" className={`text-[10px] font-bold tracking-wider uppercase ${
                    darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
                  }`}>
                    {t.formMessage} <span className="text-[var(--accent-ink)]">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.formMessagePlaceholder}
                    className={`w-full px-5 py-3.5 rounded-xl border text-sm font-medium outline-none transition-all resize-none ${
                      darkMode
                        ? 'bg-[var(--surface)] border-[var(--line)] focus:border-cyan-500/50 text-[var(--ink)] focus:ring-1 focus:ring-cyan-500/10'
                        : 'bg-[var(--surface)] border-[var(--line)] focus:border-indigo-600/50 text-[var(--ink)] focus:ring-1 focus:ring-indigo-600/10'
                    }`}
                  />
                </div>

                {/* Submission State Notifications */}
                {submissionStatus === 'success' && (
                  <div role="status" className="flex items-center gap-3 p-4 rounded-xl border bg-emerald-500/15 border-emerald-500/30 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <p className="text-xs font-bold leading-normal">{t.contactSuccess}</p>
                  </div>
                )}

                {submissionStatus === 'error' && (
                  <div role="alert" className="flex items-center gap-3 p-4 rounded-xl border bg-red-500/15 border-red-500/30 text-red-400">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-xs font-bold leading-normal">
                      {!name.trim() || !email.trim() || !message.trim()
                        ? (lang === 'ID' ? 'Harap lengkapi semua kolom wajib!' : 'Please fill all required fields!')
                        : (lang === 'ID' ? 'Pesan belum terkirim. Coba lagi atau hubungi saya melalui email atau WhatsApp.' : 'Your message could not be sent. Try again or contact me by email or WhatsApp.')}
                    </p>
                  </div>
                )}

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl     text-[var(--ink)] font-bold text-sm shadow-none shadow-cyan-500/10 transition-all hover:shadow-cyan-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 rounded-full border-2 border-[var(--line)] border-t-transparent animate-spin" />
                  ) : (
                    <>
                      <span>{t.formSend}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

          {/* Right: Direct Contact Credentials Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 text-left">

            {/* Main credentials block */}
            <div className={`p-5 sm:p-8 rounded-3xl border space-y-8 flex-1 ${
              darkMode ? 'bg-[var(--surface)] border-[var(--line)]' : 'bg-[var(--surface)] border-[var(--line)] shadow-none'
            }`}>

              <div className="space-y-1">
                <span className={`text-[10px] font-bold tracking-wider uppercase ${
                  darkMode ? 'text-[var(--muted)]' : 'text-[var(--muted)]'
                }`}>
                  {t.directContact}
                </span>
                <h3 className={`font-display text-xl font-extrabold ${
                  darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
                }`}>
                  {lang === 'ID' ? 'Hubungi Secara Langsung' : 'Let\'s Talk Offline'}
                </h3>
              </div>

              <div className="space-y-6">

                {/* Email block */}
                <a
                  href="mailto:salmansegaf52@gmail.com"
                  onClick={() => playSound(600, 0.08)}
                  className="flex items-center gap-4 group min-w-0"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[var(--accent)] text-[var(--accent-ink)] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-wider block">Email</span>
                    <span className={`text-xs sm:text-sm break-all font-bold group-hover:text-cyan-400 transition-colors ${
                      darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
                    }`}>
                      salmansegaf52@gmail.com
                    </span>
                  </div>
                </a>

                {/* WhatsApp block */}
                <a
                  href="https://wa.me/6287762342876"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound(650, 0.08)}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[var(--accent)] text-[var(--accent-ink)] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-wider block">WhatsApp</span>
                    <span className={`text-sm font-bold group-hover:text-purple-400 transition-colors ${
                      darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
                    }`}>
                      087762342876
                    </span>
                  </div>
                </a>

                {/* Location block */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--accent)] text-[var(--accent-ink)] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-wider block">Location</span>
                    <span className={`text-sm font-bold ${
                      darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
                    }`}>
                      Indonesia · Siap Kerja Remote
                    </span>
                  </div>
                </div>

                {/* Response speed block */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Clock className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-wider block">Response Time</span>
                    <span className="text-sm font-bold text-emerald-400">
                      {t.responseBadge}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            <div className="contact-animation"><DesignerAnimation /></div>
            {/* Quick social links grid at bottom */}
            <div className={`p-6 rounded-3xl border text-center ${
              darkMode ? 'bg-[var(--surface)] border-[var(--line)]' : 'bg-[var(--surface)] border-[var(--line)] shadow-none'
            }`}>
              <div className="flex items-center justify-center">
                <SocialLinks
                  links={SOCIAL_LINKS}
                  variant="contact"
                  darkMode={darkMode}
                  onItemClick={(idx) => playSound(500 + idx * 40, 0.05)}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
