import React, { useState } from 'react';
import { Heart, Share2, Check, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { MOSQUE_INFO } from '../data/mosqueData';

export const Footer: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Muzammil Manzil Masjid, Aligarh',
        text: 'Prayer times, history, and directions for Muzammil Manzil Masjid in Dodhpur, Aligarh.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <footer className="bg-emerald-950 text-emerald-100 border-t border-emerald-800/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-emerald-900">
          
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-emerald-950 font-bold font-serif text-2xl flex items-center justify-center">
                م
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">Muzammil Manzil Masjid</h3>
                <p className="text-xs text-amber-300 font-serif">مسجد مزمل منزل • Dodhpur, Aligarh</p>
              </div>
            </div>
            <p className="text-xs text-emerald-300 leading-relaxed">
              Serving the neighborhood of Dodhpur and visitors to Aligarh with daily congregational prayers, Islamic learning, and preservation of local syncretic architectural heritage.
            </p>
            <div className="pt-2">
              <a
                href={MOSQUE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline font-semibold"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>View Google Maps Listing & Reviews</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <h4 className="font-serif font-bold text-white text-sm">Key Information</h4>
            <ul className="space-y-1.5 text-emerald-300">
              <li>📍 Address: Dodhpur, Aligarh, UP 202001</li>
              <li>🏛️ Heritage: Built c. 1910s by Nawab Sir Muzammilullah Khan Sherwani</li>
              <li>🕌 Friday Prayer: 1:45 PM Khutbah & Jama'at</li>
              <li>♿ Accessibility: Wheelchair Ramp & Wudu Courtyard</li>
            </ul>
          </div>

          {/* Share & Blessing Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm">Community Share</h4>
            <button
              onClick={handleShare}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-amber-300 font-bold text-xs border border-emerald-700 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span>{copiedLink ? 'Portal Link Copied!' : 'Share Mosque Portal'}</span>
            </button>
            <p className="text-[11px] text-emerald-400/80 text-center font-serif italic pt-1">
              "Whosoever builds a house for Allah, Allah will build for him a house in Paradise."
            </p>
          </div>

        </div>

        {/* Copyright & Credit Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-400/80 gap-2">
          <p>© {new Date().getFullYear()} Muzammil Manzil Masjid • Dodhpur, Aligarh</p>
          <p className="lowercase font-mono text-[11px] text-amber-300/95 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 font-medium">
            ahmad shaad zaki (software engineer-webseccloud)
          </p>
        </div>

      </div>
    </footer>
  );
};
