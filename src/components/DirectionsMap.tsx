import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Car, Footprints, Bus, Compass, ArrowUpRight, LocateFixed } from 'lucide-react';
import { motion } from 'motion/react';
import { MOSQUE_INFO, NEARBY_LANDMARKS } from '../data/mosqueData';

export const DirectionsMap: React.FC<{ isDarkMode?: boolean }> = ({ isDarkMode = false }) => {
  const [copied, setCopied] = useState(false);

  // Direct Google Maps Directions link for turn-by-turn navigation
  const directDirectionsUrl = MOSQUE_INFO.googleMapsUrl;

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

            {/* Embedded Live Google Map with Plus Code W34J+G9P */}
            <div className="relative rounded-2xl overflow-hidden border border-emerald-800/80 bg-stone-900 text-white p-4 space-y-4 shadow-xl">
              
              {/* Coordinates Badge */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-900/90 border border-emerald-700 text-amber-300 text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-sm">
                  <LocateFixed className="w-3.5 h-3.5 text-amber-400" />
                  <span>Plus Code: {MOSQUE_INFO.addressPlusCode} ({MOSQUE_INFO.coordinates.lat}° N, {MOSQUE_INFO.coordinates.lng}° E)</span>
                </span>
                <span className="text-[10px] text-stone-400 uppercase font-semibold">Live Google Map</span>
              </div>

              {/* Interactive Google Map Iframe centered on W34J+G9P */}
              <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-emerald-700/60 shadow-inner">
                <iframe
                  title="Muzammil Manzil Masjid Map Location"
                  src={MOSQUE_INFO.embedMapUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="space-y-1.5">
                <h4 className="text-base font-serif font-bold text-white flex items-center justify-between">
                  <span>Muzammil Manzil Estate Courtyard</span>
                  <span className="text-xs text-amber-400 font-mono">Plus Code: W34J+G9P</span>
                </h4>
                <p className="text-xs text-emerald-200 leading-relaxed">
                  Located on Dudhpur Road. Enter the arched gateway of Muzammil Manzil estate; the mosque is inside the courtyard garden.
                </p>
              </div>

              {/* Direct Get Directions Primary Button */}
              <div className="pt-2 border-t border-emerald-800/80">
                <a
                  href={MOSQUE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-sm text-center shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 fill-emerald-950" />
                  <span>Open Live Navigation for "W34J+G9P" in Google Maps</span>
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

