import React from 'react';
import { Calendar, Clock, Droplet, CheckCircle2, AlertCircle, HeartHandshake, MapPin } from 'lucide-react';
import { FRIDAY_PRAYER_INFO, MOSQUE_INFO } from '../data/mosqueData';

interface FridayPrayerSectionProps {
  showUrdu: boolean;
  isDarkMode?: boolean;
}

export const FridayPrayerSection: React.FC<FridayPrayerSectionProps> = ({ showUrdu, isDarkMode = false }) => {
  return (
    <div
      id="friday-section"
      className={`py-12 sm:py-16 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-stone-900 text-stone-100'
          : 'bg-gradient-to-b from-stone-50 via-amber-50/40 to-stone-50 text-stone-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Weekly Congregation • Dodhpur, Aligarh</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-serif font-bold ${isDarkMode ? 'text-emerald-300' : 'text-emerald-950'}`}>
            {showUrdu ? 'جمعہ المبارک کا وقت' : 'Friday Prayer (Jummah)'}
          </h2>

          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
            {showUrdu ? FRIDAY_PRAYER_INFO.descriptionUrdu : FRIDAY_PRAYER_INFO.descriptionEn}
          </p>
        </div>

        {/* Main Highlight Card for Friday Khutbah */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white border border-amber-500/40 shadow-xl space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-emerald-800 pb-6 text-center sm:text-left">
            <div>
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest block mb-1">
                Jummah Congregation Schedule
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Muzammil Manzil Masjid
              </h3>
              <p className="text-xs text-emerald-300 font-serif mt-0.5">
                مسجد مزمل منزل • Dodhpur Crossing, Aligarh
              </p>
            </div>

            <div className="bg-amber-500/20 text-amber-300 px-4 py-2 rounded-xl border border-amber-500/30 text-center shrink-0">
              <span className="text-[10px] uppercase font-bold tracking-wider block text-amber-400">
                Weekly Service
              </span>
              <span className="font-serif text-sm font-bold">Every Friday</span>
            </div>
          </div>

          {/* Time Card */}
          <div className="max-w-xl mx-auto">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-emerald-950 p-6 sm:p-8 rounded-2xl border border-amber-300 shadow-xl text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-emerald-950 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-emerald-950" />
                <span>Friday Khutbah & Jama'at Time</span>
              </div>
              <p className="text-4xl sm:text-5xl font-extrabold font-mono text-emerald-950">
                01:45 PM
              </p>
              <p className="text-xs sm:text-sm font-medium text-emerald-950/90 pt-1">
                Khutbah followed immediately by congregational Jummah prayer.
              </p>
            </div>
          </div>

          {/* Guidelines for Friday Attendees */}
          <div className="bg-emerald-900/50 p-4 sm:p-5 rounded-xl border border-emerald-800/80 space-y-3 text-xs sm:text-sm text-emerald-100">
            <h4 className="font-serif font-bold text-amber-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              Guidelines for Jummah Worshippers
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-emerald-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Arrive early for Wudu at the central courtyard fountain.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Please place shoes neatly on the designated shoe racks at entry.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Two-wheeler and vehicle parking is available inside Muzammil Manzil alley.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Step-free wheelchair ramp available at main hall entrance.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
