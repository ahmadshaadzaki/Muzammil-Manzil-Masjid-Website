import React, { useState } from 'react';
import { Compass, Navigation, MapPin, Info, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const QiblaCompass: React.FC<{ isDarkMode?: boolean }> = ({ isDarkMode = false }) => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationStatus, setLocationStatus] = useState<string>('Using Aligarh Default Location');

  // Calibrated values for Aligarh, UP to Makkah (Kaaba)
  // Aligarh: 27.9048° N, 78.0772° E
  // Kaaba: 21.4225° N, 39.8262° E
  // Qibla Bearing: ~265.5° WSW
  const ALIGARH_QIBLA_BEARING = 265.5;
  const MAKKAH_DISTANCE_KM = 4180;

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      setLocationStatus('Locating device position...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLocationStatus(`Verified Location (${position.coords.latitude.toFixed(2)}°, ${position.coords.longitude.toFixed(2)}°)`);
        },
        (error) => {
          setLocationStatus('Location access restricted. Using Aligarh, UP calibration.');
        }
      );
    } else {
      setLocationStatus('Geolocation unsupported. Using Aligarh calibration.');
    }
  };

  return (
    <div
      className={`py-12 border-y transition-colors duration-300 ${
        isDarkMode
          ? 'bg-stone-900 text-stone-100 border-stone-800'
          : 'bg-emerald-950 text-emerald-50 border-emerald-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              Direction to Kaaba
            </div>

            <h2 className="text-3xl font-serif font-bold text-white">
              Qibla Direction for Aligarh Worshippers
            </h2>

            <p className="text-emerald-200 text-sm leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From Muzammil Manzil Masjid in Dodhpur, Aligarh, the sacred Qibla direction is calculated at <strong>265.5° West-Southwest (WSW)</strong>. The main prayer wall and mihrab are aligned towards the Holy Kaaba in Makkah Mukarramah.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="bg-emerald-900/80 p-3 rounded-xl border border-emerald-800">
                <p className="text-emerald-400 uppercase font-semibold text-[10px]">Bearing Angle</p>
                <p className="text-xl font-mono font-bold text-amber-300">265.5° WSW</p>
              </div>

              <div className="bg-emerald-900/80 p-3 rounded-xl border border-emerald-800">
                <p className="text-emerald-400 uppercase font-semibold text-[10px]">Distance to Makkah</p>
                <p className="text-xl font-mono font-bold text-amber-300">~4,180 km</p>
              </div>

              <div className="bg-emerald-900/80 p-3 rounded-xl border border-emerald-800 col-span-2 sm:col-span-1">
                <p className="text-emerald-400 uppercase font-semibold text-[10px]">Mihrab Alignment</p>
                <p className="text-sm font-bold text-emerald-100 mt-1">✓ Architecturally Aligned</p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <button
                onClick={handleGetLocation}
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <MapPin className="w-4 h-4" />
                <span>Verify My Position</span>
              </button>
              <span className="text-xs text-emerald-300 font-mono">{locationStatus}</span>
            </div>
          </div>

          {/* Right Visual Compass Dial */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-emerald-900 to-emerald-950 border-4 border-amber-500/40 shadow-2xl flex items-center justify-center">
              
              {/* Compass Cardinal Points */}
              <span className="absolute top-3 font-mono text-xs font-bold text-amber-300">N</span>
              <span className="absolute bottom-3 font-mono text-xs font-bold text-emerald-400">S</span>
              <span className="absolute right-3 font-mono text-xs font-bold text-emerald-400">E</span>
              <span className="absolute left-3 font-mono text-xs font-bold text-amber-400">W</span>

              {/* Dial Marks */}
              <div className="absolute inset-4 rounded-full border border-emerald-800 border-dashed"></div>

              {/* Qibla Indicator Arrow pointing ~265.5 degrees */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-transform duration-700"
                style={{ transform: `rotate(${ALIGARH_QIBLA_BEARING - 90}deg)` }}
              >
                <div className="w-full flex items-center justify-end px-4">
                  <div className="flex items-center gap-1 bg-amber-500 text-emerald-950 font-bold text-xs px-2.5 py-1 rounded-full shadow-lg border border-amber-300">
                    <span>🕋 Qibla 265.5°</span>
                  </div>
                </div>
              </div>

              {/* Center Pivot */}
              <div className="w-12 h-12 rounded-full bg-amber-500 text-emerald-950 flex items-center justify-center font-bold text-lg shadow-inner z-10 border-2 border-emerald-950">
                🕋
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
