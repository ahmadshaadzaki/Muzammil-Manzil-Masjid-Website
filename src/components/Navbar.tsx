import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Navigation, Info, Sun, Moon, Languages, Clock } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  showUrdu: boolean;
  setShowUrdu: (val: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  showUrdu,
  setShowUrdu,
  isDarkMode,
  setIsDarkMode,
}) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'daily-prayer-schedule', labelEn: 'Daily Prayers', labelUr: 'اوقات نماز', icon: Clock },
    { id: 'friday', labelEn: 'Friday Prayer', labelUr: 'نماز جمعہ', icon: Calendar },
    { id: 'history', labelEn: 'History & Heritage', labelUr: 'تاریخ و معمار', icon: Info },
    { id: 'directions', labelEn: 'Location & Map', labelUr: 'نقشہ و راستہ', icon: MapPin },
    { id: 'etiquette', labelEn: 'Visitor Guide', labelUr: 'رہنمائے زائرین', icon: Navigation },
  ];

  return (
    <header className="sticky top-0 z-40 bg-emerald-950/95 backdrop-blur-md text-emerald-50 border-b border-emerald-800/60 shadow-xl transform-gpu">
      
      {/* Top Bar Ticker: Location, Live Time, & Quick Toggles */}
      <div className="bg-emerald-900/90 text-xs py-1.5 px-3 sm:px-6 text-emerald-100 flex items-center justify-between border-b border-emerald-800/40">
        
        {/* Left Side: Location & Live Time Clock */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-medium border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="hidden xs:inline">Dodhpur, Aligarh</span>
            <span className="xs:hidden">Aligarh</span>
          </span>

          {/* Live Time Clock */}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-950/80 text-amber-300 font-mono text-[11px] font-bold border border-amber-500/30 shadow-sm">
            <Clock className="w-3 h-3 text-amber-400 animate-pulse" />
            <span>{currentTime || '07:58 PM'}</span>
          </span>
        </div>

        {/* Right Side: Theme & Language Quick Switches */}
        <div className="flex items-center gap-1.5">
          {/* Theme Mode Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="px-2 py-0.5 text-[11px] rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-semibold border border-amber-500/40 cursor-pointer transition-all flex items-center gap-1 shadow-sm active:scale-95"
          >
            {isDarkMode ? (
              <>
                <Sun className="w-3 h-3 text-amber-300" />
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3 h-3 text-amber-300" />
                <span className="hidden sm:inline">Night</span>
              </>
            )}
          </button>

          {/* Urdu / English Language Toggle */}
          <button
            onClick={() => setShowUrdu(!showUrdu)}
            aria-label="Toggle language between English and Urdu"
            className="px-2 py-0.5 text-[11px] rounded bg-emerald-800 hover:bg-emerald-700 text-amber-200 font-medium border border-amber-500/30 cursor-pointer transition-all flex items-center gap-1 shadow-sm active:scale-95"
          >
            <Languages className="w-3 h-3 text-amber-300" />
            <span>{showUrdu ? 'EN' : 'اردو'}</span>
          </button>
        </div>
      </div>

      {/* Main Brand & Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Logo & Identity */}
          <div
            onClick={() => setActiveTab('friday')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-emerald-950 font-bold shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-lg sm:text-xl font-serif">م</span>
            </div>
            <div>
              <h1 className="font-serif text-base sm:text-xl font-bold tracking-tight text-emerald-50 group-hover:text-amber-300 transition-colors leading-snug">
                Muzammil Manzil Masjid
              </h1>
              <p className="text-[11px] sm:text-xs text-emerald-300/90 font-serif flex items-center gap-1.5">
                <span>مسجد مزمل منزل</span>
                <span className="text-amber-400/80">•</span>
                <span className="text-emerald-300">Dodhpur</span>
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                      : 'text-emerald-200 hover:text-emerald-50 hover:bg-emerald-900/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-emerald-400'}`} />
                  <span>{showUrdu ? item.labelUr : item.labelEn}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Simplified Mobile Navigation Subbar */}
      <div className="lg:hidden bg-emerald-900/95 border-t border-emerald-800/60 overflow-x-auto py-1.5 px-2 flex gap-1 scrollbar-none items-center transform-gpu">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 shrink-0 transition-colors active:scale-95 ${
                isActive
                  ? 'bg-amber-500/25 text-amber-300 border border-amber-500/50 shadow-sm'
                  : 'text-emerald-200 hover:bg-emerald-800/50'
              }`}
            >
              <Icon className="w-3.5 h-3.5 text-amber-400" />
              <span>{showUrdu ? item.labelUr : item.labelEn}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
