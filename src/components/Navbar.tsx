import React from 'react';
import { Calendar, MapPin, Navigation, Info, Sun, Moon, Languages } from 'lucide-react';

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
  const navItems = [
    { id: 'friday', labelEn: 'Friday Prayer', labelUr: 'نماز جمعہ', icon: Calendar },
    { id: 'history', labelEn: 'History & Heritage', labelUr: 'تاریخ و معمار', icon: Info },
    { id: 'directions', labelEn: 'Location & Map', labelUr: 'نقشہ و راستہ', icon: MapPin },
    { id: 'etiquette', labelEn: 'Visitor Guide', labelUr: 'رہنمائے زائرین', icon: Navigation },
  ];

  return (
    <header className="sticky top-0 z-40 bg-emerald-950/95 backdrop-blur-md text-emerald-50 border-b border-emerald-800/60 shadow-xl">
      {/* Top Banner Ticker */}
      <div className="bg-emerald-900/90 text-xs py-1.5 px-4 text-emerald-100 flex flex-wrap items-center justify-between border-b border-emerald-800/40">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            Dodhpur, Aligarh (UP)
          </span>
          <span className="inline-flex items-center gap-1 text-emerald-200">
            Friday Jummah Khutbah & Prayer: <strong className="text-amber-300 font-bold">1:45 PM</strong>
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1 sm:mt-0">
          {/* Theme Mode Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="px-2.5 py-0.5 text-[11px] rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-semibold border border-amber-500/40 cursor-pointer transition-all flex items-center gap-1.5 shadow-sm"
          >
            {isDarkMode ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-300" />
                <span>☀️ Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-amber-300" />
                <span>🌙 Night</span>
              </>
            )}
          </button>

          {/* Urdu / English Language Toggle */}
          <button
            onClick={() => setShowUrdu(!showUrdu)}
            aria-label="Toggle language between English and Urdu"
            className="px-2.5 py-0.5 text-[11px] rounded-md bg-emerald-800 hover:bg-emerald-700 text-amber-200 font-medium border border-amber-500/30 cursor-pointer transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Languages className="w-3.5 h-3.5 text-amber-300" />
            <span>{showUrdu ? 'English' : 'اردو (Urdu)'}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Identity */}
          <div
            onClick={() => setActiveTab('friday')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-emerald-950 font-bold shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-xl font-serif">م</span>
            </div>
            <div>
              <h1 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-emerald-50 group-hover:text-amber-300 transition-colors">
                Muzammil Manzil Masjid
              </h1>
              <p className="text-xs text-emerald-300/90 font-serif flex items-center gap-2">
                <span>مسجد مزمل منزل</span>
                <span className="text-amber-400/80">•</span>
                <span className="text-emerald-300 text-[11px]">Dodhpur, Aligarh</span>
              </p>
            </div>
          </div>

          {/* Nav Items (Desktop) */}
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

            {/* Desktop Language Switcher */}
            <button
              onClick={() => setShowUrdu(!showUrdu)}
              className="ml-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-900/90 hover:bg-emerald-800 text-amber-200 border border-amber-500/40 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              title={showUrdu ? 'Switch language to English' : 'Switch language to Urdu'}
            >
              <Languages className="w-4 h-4 text-amber-300" />
              <span>{showUrdu ? 'EN' : 'اردو'}</span>
            </button>

            {/* Desktop Quick Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="ml-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-900/80 hover:bg-emerald-800/80 text-amber-300 border border-amber-500/30 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Night Mode'}
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-300" />
                  <span className="hidden xl:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-amber-300" />
                  <span className="hidden xl:inline">Night</span>
                </>
              )}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Subnav Bar */}
      <div className="lg:hidden bg-emerald-900/80 border-t border-emerald-800/50 overflow-x-auto py-2 px-3 flex gap-1 scrollbar-none items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-emerald-200 hover:bg-emerald-800/50'
              }`}
            >
              <Icon className="w-3.5 h-3.5 text-amber-400" />
              <span>{showUrdu ? item.labelUr : item.labelEn}</span>
            </button>
          );
        })}

        <div className="flex items-center gap-1 ml-auto shrink-0">
          {/* Mobile Language Button */}
          <button
            onClick={() => setShowUrdu(!showUrdu)}
            className="whitespace-nowrap px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 bg-emerald-800 text-amber-200 border border-amber-500/30 cursor-pointer"
          >
            <Languages className="w-3.5 h-3.5 text-amber-300" />
            <span>{showUrdu ? 'EN' : 'اردو'}</span>
          </button>

          {/* Mobile Theme Switch Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="whitespace-nowrap px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 cursor-pointer"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            <span>{isDarkMode ? '☀️ Light' : '🌙 Night'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

