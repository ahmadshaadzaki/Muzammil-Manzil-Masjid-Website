import React from 'react';
import { Bell, Calendar, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { NOTICES } from '../data/mosqueData';

export const AnnouncementsBoard: React.FC<{ isDarkMode?: boolean }> = ({ isDarkMode = false }) => {
  return (
    <div
      className={`py-12 border-y transition-colors duration-300 ${
        isDarkMode
          ? 'bg-stone-900 border-stone-800 text-stone-100'
          : 'bg-amber-50/60 border-amber-200 text-stone-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider mb-2">
              <Bell className="w-3.5 h-3.5 text-amber-400" />
              Community Noticeboard
            </div>
            <h2 className={`text-2xl font-serif font-bold ${isDarkMode ? 'text-emerald-300' : 'text-emerald-950'}`}>
              Announcements & Upcoming Programs
            </h2>
          </div>
          <span className={`text-xs font-serif ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>Updated Weekly • Dodhpur Aligarh</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NOTICES.map((notice) => (
            <div
              key={notice.id}
              className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between transition-all hover:shadow-md ${
                isDarkMode ? 'bg-stone-800/90' : 'bg-white'
              } ${
                notice.important
                  ? 'border-amber-400 ring-2 ring-amber-400/20'
                  : isDarkMode
                  ? 'border-stone-700/80'
                  : 'border-stone-200'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      notice.category === 'Jummah'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : notice.category === 'Maintenance'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-stone-700 text-stone-300'
                    }`}
                  >
                    {notice.category}
                  </span>
                  <span className={`text-xs font-mono ${isDarkMode ? 'text-stone-400' : 'text-stone-400'}`}>{notice.date}</span>
                </div>

                <h3 className={`font-serif font-bold text-base leading-snug ${isDarkMode ? 'text-white' : 'text-emerald-950'}`}>
                  {notice.title}
                </h3>

                {notice.titleUrdu && (
                  <p className={`text-xs font-serif ${isDarkMode ? 'text-amber-300' : 'text-emerald-800'}`}>{notice.titleUrdu}</p>
                )}

                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                  {notice.content}
                </p>
              </div>

              {notice.important && (
                <div className="mt-4 pt-3 border-t border-amber-100 text-[11px] font-semibold text-amber-800 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Important for all Friday attendees</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
