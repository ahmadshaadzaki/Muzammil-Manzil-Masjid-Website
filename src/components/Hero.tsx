import React, { useState } from 'react';
import { MapPin, Navigation, Calendar, ShieldCheck, Compass, HeartHandshake, Moon, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { MOSQUE_INFO, FRIDAY_PRAYER_INFO } from '../data/mosqueData';

interface HeroProps {
  onNavigateTo: (tab: string) => void;
  showUrdu: boolean;
}

// Utility function to generate formatted Gregorian and Islamic Hijri dates
function getFormattedDates(offsetDays: number = 0) {
  const today = new Date();
  if (offsetDays !== 0) {
    today.setDate(today.getDate() + offsetDays);
  }

  // Gregorian Formatting
  const gregorianEn = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(today);

  const gregorianUr = new Intl.DateTimeFormat('ur-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(today);

  // Hijri Formatting
  let hijriEn = '';
  let hijriUr = '';

  try {
    // English Islamic Umalqura calendar
    const formatterEn = new Intl.DateTimeFormat('en-US-u-ca-islamic-umalqura', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const partsEn = formatterEn.formatToParts(today);
    const day = partsEn.find((p) => p.type === 'day')?.value || '';
    const month = partsEn.find((p) => p.type === 'month')?.value || '';
    const year = partsEn.find((p) => p.type === 'year')?.value || '';
    hijriEn = `${day} ${month} ${year} AH`;

    // Urdu/Arabic Islamic Umalqura calendar
    const formatterUr = new Intl.DateTimeFormat('ur-IN-u-ca-islamic-umalqura', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    hijriUr = `${formatterUr.format(today)} هـ`;
  } catch {
    // Fallback if specific locale options are unsupported
    try {
      const formatterFallback = new Intl.DateTimeFormat('en-US-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      hijriEn = `${formatterFallback.format(today)} AH`;
      hijriUr = hijriEn;
    } catch {
      hijriEn = 'Safar 1448 AH';
      hijriUr = 'صفر ۱۴۴۸ هـ';
    }
  }

  return { gregorianEn, gregorianUr, hijriEn, hijriUr };
}

export const Hero: React.FC<HeroProps> = ({ onNavigateTo, showUrdu }) => {
  const [hijriOffset, setHijriOffset] = useState<number>(0);
  const { gregorianEn, gregorianUr, hijriEn, hijriUr } = getFormattedDates(hijriOffset);

  const currentGregorian = showUrdu ? gregorianUr : gregorianEn;
  const currentHijri = showUrdu ? hijriUr : hijriEn;

  return (
    <div className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-emerald-50 pt-8 pb-12 sm:pt-12 sm:pb-16 overflow-hidden border-b border-emerald-800/80">
      {/* Decorative Islamic Arch Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Title & Context Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Top Bismillah & Islamic Hijri Date Banner */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {/* Arabic Bismillah Calligraphy Banner */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-serif shadow-inner"
              >
                <span className="text-amber-400 font-bold">﷽</span>
                <span>In the name of Allah, Most Gracious, Most Merciful</span>
              </motion.div>

              {/* Today's Dual Calendar (Gregorian + Islamic Hijri Date) */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-sans shadow-inner"
              >
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{currentGregorian}</span>
                </div>

                <span className="text-amber-500/60 font-bold">|</span>

                <div className="flex items-center gap-1.5 text-amber-300 font-serif font-semibold">
                  <Moon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{currentHijri}</span>
                </div>

                {/* Subtle Moon Sighting Adjustment Buttons (+/- 1 day) */}
                <div className="flex items-center ml-1 bg-emerald-950/80 rounded-md border border-amber-500/30 text-[10px]">
                  <button
                    onClick={() => setHijriOffset((prev) => prev - 1)}
                    title="Adjust Hijri Date -1 Day (Moon Sighting)"
                    aria-label="Previous Hijri Day"
                    className="px-1 py-0.5 hover:bg-amber-500/20 text-amber-300 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-3 h-3" />
                  </button>
                  <span className="px-1 text-[9px] text-amber-400 font-mono" title="Hilal Sighting Offset">
                    {hijriOffset >= 0 ? `+${hijriOffset}d` : `${hijriOffset}d`}
                  </span>
                  <button
                    onClick={() => setHijriOffset((prev) => prev + 1)}
                    title="Adjust Hijri Date +1 Day (Moon Sighting)"
                    aria-label="Next Hijri Day"
                    className="px-1 py-0.5 hover:bg-amber-500/20 text-amber-300 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Main Header */}
            <div>
              <p className="text-amber-400 font-serif text-2xl sm:text-3xl tracking-wide mb-1 font-semibold">
                {MOSQUE_INFO.nameUrdu}
              </p>
              <h1 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight text-white leading-tight">
                Muzammil Manzil Masjid
              </h1>
              <p className="mt-2 text-emerald-200 text-sm sm:text-base font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Historic neighborhood sanctuary in the ancestral Muzammil Manzil compound. Blending early 20th-century Indo-Islamic architectural heritage with active community worship in Dodhpur, Aligarh.
              </p>
            </div>

            {/* Badges / Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
              <span className="px-3 py-1 rounded-md bg-emerald-800/60 text-emerald-200 border border-emerald-700/60 flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Est. Early 20th Century
              </span>
              <span className="px-3 py-1 rounded-md bg-emerald-800/60 text-emerald-200 border border-emerald-700/60 flex items-center gap-1.5 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Dodhpur, Aligarh (UP)
              </span>
              <span className="px-3 py-1 rounded-md bg-emerald-800/60 text-emerald-200 border border-emerald-700/60 flex items-center gap-1.5 shadow-sm">
                <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
                AMU Heritage Connection
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigateTo('friday')}
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-sm shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-950" />
                <span>Friday Prayer Timing</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={MOSQUE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-sm border border-emerald-600 shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Open in Google Maps</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigateTo('directions')}
                className="px-4 py-3 rounded-xl bg-emerald-900/90 hover:bg-emerald-800 text-emerald-200 font-medium text-sm border border-emerald-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>Qibla & Directions</span>
              </motion.button>
            </div>

          </motion.div>

          {/* Right Column: Friday Jummah Feature Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-gradient-to-br from-emerald-900 via-emerald-950 to-emerald-900 p-6 sm:p-8 rounded-2xl border border-amber-500/40 shadow-2xl relative overflow-hidden space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    Friday Congregation
                  </span>
                </div>
                <span className="text-xs text-emerald-200 font-serif bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800">
                  مسجد مزمل منزل
                </span>
              </div>

              <div className="py-2 text-center sm:text-left space-y-3">
                <p className="text-xs text-emerald-300 uppercase tracking-widest font-semibold">
                  Jummah Khutbah & Prayer Time
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 sm:p-5 rounded-2xl bg-amber-500 text-emerald-950 shadow-lg border border-amber-300 flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs uppercase font-bold text-emerald-900">Khutbah & Jama'at</p>
                    <p className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-950">{FRIDAY_PRAYER_INFO.khutbahTime}</p>
                  </div>
                  <Calendar className="w-10 h-10 text-emerald-950/40" />
                </motion.div>
              </div>

              {/* Islamic Date Display inside Jummah Card */}
              <div className="p-3 rounded-xl bg-emerald-950/90 border border-emerald-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-amber-300">
                  <Moon className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-serif font-bold">{currentHijri}</span>
                </div>
                <span className="text-[11px] text-emerald-300 font-sans">{currentGregorian}</span>
              </div>

              {/* Quick Link Footer within Card */}
              <div className="pt-2 flex items-center justify-between text-xs text-emerald-300">
                <span>Dodhpur Crossing, Aligarh</span>
                <button
                  onClick={() => onNavigateTo('etiquette')}
                  className="text-amber-400 hover:underline font-medium cursor-pointer flex items-center gap-1"
                >
                  Visitor Guide →
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

