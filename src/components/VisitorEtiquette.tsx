import React, { useState } from 'react';
import { Navigation, CheckCircle2, ShieldAlert, Car, Droplet, Accessibility, Sparkles, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { MOSQUE_INFO, FAQS } from '../data/mosqueData';

export const VisitorEtiquette: React.FC<{ isDarkMode?: boolean }> = ({ isDarkMode = false }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const facilityIcons = [
    { title: 'Central Wudu Fountain', desc: 'Clean running water & sheltered sitting area', icon: Droplet },
    { title: 'Dedicated Shoe Racks', desc: 'Covered storage units at courtyard entrance', icon: CheckCircle2 },
    { title: 'Manzil Alley Parking', desc: 'Space for two-wheelers and cars inside estate', icon: Car },
    { title: 'Wheelchair Ramp', desc: 'Step-free ramp to main prayer sanctuary', icon: Accessibility },
  ];

  return (
    <div
      id="etiquette-section"
      className={`py-16 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-stone-900 text-stone-100'
          : 'bg-stone-50 text-stone-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5 text-emerald-400" />
            Worshipper & Visitor Guide
          </div>
          <h2 className={`text-3xl font-serif font-bold ${isDarkMode ? 'text-emerald-300' : 'text-emerald-950'}`}>
            Facilities & Mosque Etiquette
          </h2>
          <p className={`text-sm ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
            Ensuring a peaceful, respectful, and comfortable environment for everyone attending prayers at Muzammil Manzil Masjid.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilityIcons.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all space-y-3 ${
                  isDarkMode ? 'bg-stone-800 border-stone-700' : 'bg-white border-stone-200'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className={`font-serif font-bold text-base ${isDarkMode ? 'text-white' : 'text-emerald-950'}`}>{fac.title}</h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>{fac.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Etiquette Rules Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-md space-y-6">
            <h3 className="font-serif font-bold text-xl text-emerald-950 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
              Respectful Behavior & Guidelines
            </h3>

            <div className="space-y-4 text-xs text-stone-700 leading-relaxed">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1 shrink-0"></span>
                <div>
                  <strong className="text-emerald-950 font-bold block text-sm">Modest & Clean Attire:</strong>
                  Visitors and worshippers are encouraged to wear modest attire covering shoulders and knees. Please remove shoes at the courtyard entry.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1 shrink-0"></span>
                <div>
                  <strong className="text-emerald-950 font-bold block text-sm">Quiet & Prayer Decorum:</strong>
                  Kindly switch mobile phones to silent mode. Avoid loud conversation or passing directly in front of someone performing Salah.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1 shrink-0"></span>
                <div>
                  <strong className="text-emerald-950 font-bold block text-sm">Cleanliness & Water Conservation:</strong>
                  Please conserve water at the Wudu fountain area and keep the courtyard free of litter.
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact & Management Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 to-emerald-900 p-6 sm:p-8 rounded-2xl text-white border border-amber-500/30 shadow-lg space-y-4">
            <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              Community Contact
            </span>
            <h3 className="text-xl font-serif font-bold text-white">
              Mosque Management & Care
            </h3>
            <p className="text-xs text-emerald-200 leading-relaxed">
              Maintained under the auspices of the Muzammil Manzil Estate Trust & Dodhpur neighborhood committee.
            </p>

            <div className="p-4 rounded-xl bg-emerald-900/80 border border-emerald-800 space-y-2 text-xs">
              <p className="text-amber-300 font-semibold">Address for correspondence:</p>
              <p className="text-stone-200">{MOSQUE_INFO.location}</p>
              <p className="text-emerald-300 pt-1">Landmark: Opposite Dodhpur Market Lane, Aligarh</p>
            </div>
          </div>

        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-md">
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-stone-200">
            <HelpCircle className="w-5 h-5 text-amber-600" />
            <h3 className="font-serif font-bold text-xl text-emerald-950">
              Frequently Asked Questions (FAQs)
            </h3>
          </div>

          <div className="divide-y divide-stone-200">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-serif font-semibold text-emerald-950 hover:text-amber-700 transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-amber-600 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed pl-2 border-l-2 border-emerald-700 space-y-1">
                      <p>{faq.answer}</p>
                      {faq.questionUrdu && (
                        <p className="text-xs font-serif text-emerald-800 pt-1">{faq.questionUrdu}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
