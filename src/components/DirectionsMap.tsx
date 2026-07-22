import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Car, Footprints, Bus, Compass, ArrowUpRight, LocateFixed } from 'lucide-react';
import { motion } from 'motion/react';
import { MOSQUE_INFO, NEARBY_LANDMARKS } from '../data/mosqueData';

export const DirectionsMap: React.FC<{ isDarkMode?: boolean }> = ({ isDarkMode = false }) => {
  const [copied, setCopied] = useState(false);

  // Direct Google Maps Directions link for turn-by-turn navigation
  const directDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${MOSQUE_INFO.coordinates.lat},${MOSQUE_INFO.coordinates.lng}&destination_place_id=Muzammil+Manzil+Masjid`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(MOSQUE_INFO.location);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="directions-section"
      className={`py-16 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-stone-950 text-stone-100'
          : 'bg-white text-stone-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            Location & Live Access
          </div>
          <h2 className={`text-3xl font-serif font-bold ${isDarkMode ? 'text-emerald-300' : 'text-emerald-950'}`}>
            How to Reach Muzammil Manzil Masjid
          </h2>
          <p className={`text-sm ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
            Conveniently situated in Dodhpur, Aligarh, close to AMU campus, Dodhpur Crossing market, and Civil Lines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Custom Interactive Map Card with Custom Marker & Direct Get Directions */}
          <div className={`rounded-2xl p-6 sm:p-8 border shadow-lg space-y-6 lg:col-span-6 ${
            isDarkMode ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-200'
          }`}>
            
            <div className={`flex items-center justify-between pb-4 border-b ${isDarkMode ? 'border-stone-800' : 'border-stone-200'}`}>
              <div>
                <h3 className={`font-serif font-bold text-lg ${isDarkMode ? 'text-white' : 'text-emerald-950'}`}>
                  Mosque Address & Map Marker
                </h3>
                <p className={`text-xs font-serif ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>مزمل منزل مسجد، ڈودھ پور، علی گڑھ</p>
              </div>

              {/* Direct Get Directions Link */}
              <a
                href={directDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs shadow-md hover:shadow-amber-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Address Box */}
            <div className={`p-4 rounded-xl border space-y-3 ${isDarkMode ? 'bg-stone-800 border-stone-700' : 'bg-white border-stone-200'}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase text-stone-400">Full Physical Address</p>
                  <p className={`text-sm font-medium leading-snug ${isDarkMode ? 'text-stone-200' : 'text-stone-800'}`}>
                    {MOSQUE_INFO.location}
                  </p>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-700 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-200 transition-colors cursor-pointer shrink-0"
                  title="Copy Full Address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">✓ Address copied to clipboard!</p>}
            </div>

            {/* Custom Stylized Map Graphic Frame with Animated Custom Marker */}
            <div className="relative rounded-2xl overflow-hidden border border-emerald-800/80 bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-950 text-white p-6 sm:p-8 space-y-5 shadow-inner">
              
              {/* Grid line background overlay simulating map grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              {/* Map Road Stylized Graphic */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 120 C 100 120, 150 60, 200 60 C 250 60, 300 180, 400 180" stroke="#f59e0b" strokeWidth="8" strokeDasharray="6 6" />
                  <path d="M200 0 V 240" stroke="#10b981" strokeWidth="12" />
                  <circle cx="200" cy="60" r="16" fill="#f59e0b" opacity="0.3" />
                </svg>
              </div>

              {/* Coordinates Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-900/90 border border-emerald-700 text-amber-300 text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-sm">
                  <LocateFixed className="w-3.5 h-3.5 text-amber-400" />
                  <span>27.9048° N, 78.0772° E</span>
                </span>
                <span className="text-[10px] text-stone-400 uppercase font-semibold">Dodhpur Precinct</span>
              </div>

              {/* CENTERPIECE: Custom Interactive Map Marker Pin */}
              <div className="relative z-10 my-4 py-4 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="relative flex flex-col items-center group cursor-pointer"
                  onClick={() => window.open(directDirectionsUrl, '_blank')}
                >
                  {/* Custom Pin Callout Popup */}
                  <div className="mb-2 px-3 py-1.5 rounded-xl bg-amber-500 text-emerald-950 font-extrabold text-xs shadow-xl border border-amber-300 flex items-center gap-1.5 whitespace-nowrap group-hover:scale-105 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-emerald-900 animate-pulse" />
                    <span>Muzammil Manzil Masjid</span>
                    <ExternalLink className="w-3 h-3 text-emerald-950" />
                  </div>

                  {/* Pulsating Ring under Pin */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-12 h-12 rounded-full bg-amber-400/30 animate-ping" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-lg flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-emerald-950 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                      </div>
                    </div>
                  </div>

                  {/* Pin Pointer Drop shadow */}
                  <div className="w-4 h-1.5 bg-black/40 rounded-full blur-[2px] mt-1" />
                </motion.div>
                
                <p className="text-[11px] text-emerald-300 font-serif text-center mt-1">
                  Click custom marker pin to launch Google Maps turn-by-turn navigation
                </p>
              </div>

              <div className="relative z-10 space-y-2">
                <h4 className="text-lg font-serif font-bold text-white">
                  Muzammil Manzil Estate Courtyard
                </h4>
                <p className="text-xs text-emerald-200 leading-relaxed">
                  Located off the main Dodhpur Road. Enter the arched gateway of Muzammil Manzil estate; the mosque is positioned inside the quiet garden courtyard away from street noise.
                </p>
              </div>

              {/* Direct Get Directions Primary Button */}
              <div className="relative z-10 pt-2 border-t border-emerald-800/80">
                <a
                  href={directDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-sm text-center shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 fill-emerald-950" />
                  <span>Get Live Directions in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Local Transit Tips */}
            <div className={`p-4 rounded-xl border text-xs space-y-2 ${
              isDarkMode
                ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-200'
                : 'bg-emerald-50 border-emerald-200 text-emerald-950'
            }`}>
              <p className="font-bold flex items-center gap-1.5 text-emerald-400">
                <Bus className="w-4 h-4 text-emerald-400" />
                Local Auto & E-Rickshaw Guidance
              </p>
              <p className="leading-relaxed opacity-90">
                When hailing an E-rickshaw or Auto anywhere in Aligarh, ask for <strong>"Dodhpur Crossing / Muzammil Manzil"</strong>. All local drivers recognize the landmark.
              </p>
            </div>

          </div>

          {/* Right Column: Distance Matrix & Landmark Guide */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className={`font-serif font-bold text-xl flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-emerald-950'}`}>
              <Compass className="w-5 h-5 text-amber-500" />
              Proximity to Key Aligarh Landmarks
            </h3>

            <div className="space-y-3">
              {NEARBY_LANDMARKS.map((landmark, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isDarkMode
                      ? 'bg-stone-900 border-stone-800 hover:border-amber-500/50'
                      : 'bg-stone-50 border-stone-200 hover:border-amber-400'
                  }`}
                >
                  <div className="space-y-0.5">
                    <h4 className={`font-serif font-bold text-sm ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>{landmark.name}</h4>
                    <p className={`text-xs flex items-center gap-2 ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>
                      <span>Direction: {landmark.direction}</span>
                    </p>
                  </div>

                  <div className="text-right space-y-0.5">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono font-bold text-xs border border-emerald-500/30">
                      {landmark.distance}
                    </span>
                    <div className={`flex items-center justify-end gap-2 text-[11px] pt-1 ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>
                      <span className="flex items-center gap-0.5"><Footprints className="w-3 h-3" /> {landmark.timeByFoot}</span>
                      <span className="flex items-center gap-0.5"><Car className="w-3 h-3" /> {landmark.timeByAuto}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Step by Step Navigation Guide */}
            <div className={`p-6 rounded-2xl border space-y-3 text-xs ${
              isDarkMode
                ? 'bg-amber-950/20 border-amber-500/30 text-amber-200'
                : 'bg-amber-50/80 border-amber-200 text-amber-950'
            }`}>
              <h4 className="font-serif font-bold text-sm text-amber-400 flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-amber-400" />
                From AMU Bab-e-Syed (Centenary Gate)
              </h4>
              <ol className={`list-decimal list-inside space-y-1.5 pl-1 leading-relaxed ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                <li>Head southeast on Medical College Road toward Dodhpur Crossing.</li>
                <li>At Dodhpur Market Crossing, take the turn into Muzammil Manzil lane.</li>
                <li>Walk 50 meters past the historic gateway into the estate courtyard.</li>
              </ol>
            </div>

            {/* Quick Directions Button CTA on Right Column */}
            <a
              href={directDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-emerald-900 hover:bg-emerald-800 text-amber-300 border border-amber-500/30 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Navigation className="w-4 h-4 text-amber-400" />
              <span>Open Direct Turn-by-Turn GPS Navigation</span>
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </div>
  );
};

