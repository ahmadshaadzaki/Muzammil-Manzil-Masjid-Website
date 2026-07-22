import React, { useState, useEffect } from 'react';
import { Clock, MapPin, LocateFixed, Compass, Sparkles, RotateCcw, Info } from 'lucide-react';
import { getDailyPrayerSchedule, DailyPrayerScheduleResult } from '../utils/prayerTimes';

interface DailyPrayerScheduleProps {
  showUrdu: boolean;
  isDarkMode?: boolean;
}

export const DailyPrayerSchedule: React.FC<DailyPrayerScheduleProps> = ({
  showUrdu,
  isDarkMode = false,
}) => {
  const [coords, setCoords] = useState<{ lat: number; lng: number }>({
    lat: 27.90617,
    lng: 78.08078,
  });
  const [locationName, setLocationName] = useState<string>('Dodhpur, Aligarh');
  const [isCustomLocation, setIsCustomLocation] = useState<boolean>(false);
  const [locationStatus, setLocationStatus] = useState<string>('');
  const [now, setNow] = useState<Date>(new Date());

  // Real-time second interval for live countdowns & daily date rollover
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const schedule: DailyPrayerScheduleResult = getDailyPrayerSchedule(
    coords.lat,
    coords.lng,
    now,
    locationName,
    isCustomLocation
  );

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      setLocationStatus('Acquiring GPS location...');
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          setLocationName(`GPS: ${pos.coords.latitude.toFixed(3)}°, ${pos.coords.longitude.toFixed(3)}°`);
          setIsCustomLocation(true);
          setLocationStatus('✓ GPS Location Active');
          setTimeout(() => setLocationStatus(''), 3000);
        },
        () => {
          setLocationStatus('⚠️ Location access denied. Using Dodhpur default.');
          setTimeout(() => setLocationStatus(''), 3000);
        }
      );
    } else {
      setLocationStatus('⚠️ Geolocation unavailable.');
    }
  };

  const handleResetLocation = () => {
    setCoords({ lat: 27.90617, lng: 78.08078 });
    setLocationName('Dodhpur, Aligarh');
    setIsCustomLocation(false);
    setLocationStatus('Reset to Dodhpur, Aligarh');
    setTimeout(() => setLocationStatus(''), 3000);
  };

  const prayersList = [
    { key: 'fajr', data: schedule.fajr },
    { key: 'sunrise', isSunrise: true, data: schedule.sunrise },
    { key: 'dhuhr', data: schedule.dhuhr },
    { key: 'asr', data: schedule.asr },
    { key: 'maghrib', data: schedule.maghrib },
    { key: 'isha', data: schedule.isha },
  ];

  return (
    <div
      id="daily-prayer-schedule"
      className={`py-12 sm:py-16 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-stone-950 text-stone-100'
          : 'bg-emerald-950 text-emerald-50 border-y border-emerald-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Automatic Daily Calculation (Awwal Waqt)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            {showUrdu ? 'روزانہ ۵ وقت کے اول وقت کے اوقات' : 'Daily Prayer Start Times (Awwal Waqt)'}
          </h2>

          <p className="text-emerald-200 text-sm leading-relaxed">
            Displays calculated <strong className="text-amber-300 font-semibold">Awwal Waqt (beginning time)</strong> for each prayer, computed daily using the <strong className="text-amber-300 font-semibold">University of Islamic Sciences, Karachi (Hanafi)</strong> method based on exact coordinates.
          </p>

          {/* Location Bar & GPS Toggle */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-xl bg-emerald-900/90 border border-emerald-700 text-emerald-100 font-medium flex items-center gap-1.5 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Location: <strong>{schedule.locationName}</strong></span>
            </span>

            <button
              onClick={handleDetectLocation}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95"
              title="Detect my current location for local prayer start times"
            >
              <LocateFixed className="w-3.5 h-3.5 text-emerald-950" />
              <span>{isCustomLocation ? 'Update GPS Location' : 'Use My Live Location'}</span>
            </button>

            {isCustomLocation && (
              <button
                onClick={handleResetLocation}
                className="px-3 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-amber-200 font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-sm"
              >
                <RotateCcw className="w-3 h-3 text-amber-300" />
                <span>Reset to Dodhpur</span>
              </button>
            )}

            {locationStatus && (
              <span className="text-amber-300 font-mono text-[11px] px-2 py-1 bg-emerald-900/80 rounded-lg border border-amber-500/30">
                {locationStatus}
              </span>
            )}
          </div>
        </div>

        {/* Live Next Prayer Banner */}
        {schedule.timeRemainingToNext && (
          <div className="max-w-xl mx-auto bg-gradient-to-r from-amber-500/20 via-amber-500/30 to-amber-500/20 border border-amber-500/40 rounded-2xl p-4 text-center space-y-1 shadow-lg">
            <p className="text-xs uppercase font-bold tracking-widest text-amber-300 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
              <span>Next Prayer ({schedule.nextPrayer}) Countdown</span>
            </p>
            <p className="text-2xl sm:text-3xl font-mono font-extrabold text-amber-300 tracking-wider">
              {schedule.timeRemainingToNext}
            </p>
          </div>
        )}

        {/* 6 Prayer Cards Grid (Awwal Waqt Only) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {prayersList.map((item) => {
            const isCurrent = schedule.currentPrayer.toLowerCase() === item.key;
            const isNext = schedule.nextPrayer.toLowerCase() === item.key;
            
            if ('isSunrise' in item) {
              const sunData = item.data as { nameEn: string; nameUr: string; time: string };
              return (
                <div
                  key="sunrise"
                  className="p-4 rounded-2xl bg-emerald-900/40 border border-emerald-800 text-center space-y-2"
                >
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                    Shuruq
                  </span>
                  <h3 className="font-serif font-bold text-base text-stone-200">
                    {showUrdu ? sunData.nameUr : sunData.nameEn}
                  </h3>
                  <div className="pt-1">
                    <p className="text-lg font-mono font-bold text-amber-300">{sunData.time}</p>
                    <p className="text-[10px] text-emerald-300">No Prayer</p>
                  </div>
                </div>
              );
            }

            const pData = item.data as { nameEn: string; nameUr: string; awwalWaqt: string };

            return (
              <div
                key={item.key}
                className={`p-4 sm:p-5 rounded-2xl border text-center space-y-2.5 transition-all transform-gpu ${
                  isCurrent
                    ? 'bg-gradient-to-b from-amber-500 to-amber-600 text-emerald-950 border-amber-300 shadow-xl ring-2 ring-amber-400 scale-105'
                    : isNext
                    ? 'bg-emerald-900 border-amber-500/60 text-white shadow-md ring-1 ring-amber-500/40'
                    : 'bg-emerald-900/60 border-emerald-800/80 text-white'
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${isCurrent ? 'text-emerald-950' : 'text-amber-400'}`}>
                    {isCurrent ? '● Active Now' : isNext ? '⏱ Next' : 'Daily Prayer'}
                  </span>
                </div>

                <h3 className={`font-serif font-bold text-lg sm:text-xl ${isCurrent ? 'text-emerald-950' : 'text-white'}`}>
                  {showUrdu ? pData.nameUr : pData.nameEn}
                </h3>

                <div className={`pt-2 border-t space-y-1 ${isCurrent ? 'border-emerald-950/20' : 'border-emerald-800'}`}>
                  <span className={`text-[11px] font-semibold uppercase tracking-wider block ${isCurrent ? 'text-emerald-950/90' : 'text-amber-300'}`}>
                    {showUrdu ? 'اول وقت' : 'Awwal Waqt'}
                  </span>
                  <p className={`text-xl sm:text-2xl font-mono font-extrabold tracking-tight ${isCurrent ? 'text-emerald-950' : 'text-white'}`}>
                    {pData.awwalWaqt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clarification Note Footer */}
        <div className="p-4 rounded-xl bg-emerald-900/50 border border-emerald-800 text-xs text-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              <strong>Awwal Waqt Only:</strong> Shows exact astronomical start times calculated daily using <strong>University of Islamic Sciences, Karachi (Hanafi)</strong>. Local masjid congregation (Jama'at) timings may be adjusted weekly by local masjid committees.
            </span>
          </div>
          <span className="text-[11px] text-amber-300 font-mono shrink-0">
            ✓ Updates live daily at 00:00 AM
          </span>
        </div>

      </div>
    </div>
  );
};
