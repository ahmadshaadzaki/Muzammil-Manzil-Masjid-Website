import React, { useState } from 'react';
import { Landmark, History, Sparkles, BookOpen, ChevronDown, ChevronUp, MapPin, Feather } from 'lucide-react';
import { MOSQUE_INFO } from '../data/mosqueData';

export const HistoryArchitecture: React.FC<{ isDarkMode?: boolean }> = ({ isDarkMode = false }) => {
  const [openFactIndex, setOpenFactIndex] = useState<number | null>(0);

  const timelineEvents = [
    {
      year: 'c. 1865 – 1938',
      title: 'Era of Nawab Sir Mohammad Muzammilullah Khan Sherwani',
      desc: 'Prominent landlord, Vice-Chancellor of Aligarh Muslim University (AMU), trustee, and philanthropist who envisioned the Muzammil Manzil estate.',
    },
    {
      year: 'c. 1910s',
      title: 'Construction of Muzammil Manzil & Mosque',
      desc: 'The manzil and mosque were built in Dodhpur as an ancestral residential estate blending Mughal-Islamic arches with early British colonial architectural elements.',
    },
    {
      year: '1920s – 1940s',
      title: 'Hub of Aligarh Intellectual & Cultural Life',
      desc: 'Muzammil Manzil hosted scholars, poets, AMU leadership, and national leaders. The mosque served daily congregational prayers for estate residents and local neighbors.',
    },
    {
      year: 'Present Day',
      title: 'Preserved Neighborhood Sanctuary',
      desc: 'Continues as an active daily neighborhood mosque in Dodhpur, cherished for its peaceful courtyard, historic arches, and community gatherings.',
    },
  ];

  const historicalFacts = [
    {
      question: 'What is the architectural significance of the syncretic design?',
      answer:
        'The mosque and Muzammil Manzil represent a unique early 20th-century Aligarh style: multi-foil cusped arches, carved plaster floral motifs, and whitewashed minarets rooted in Mughal heritage, paired with European colonial brick framing, high ceilings, and airy pillared porticos.',
    },
    {
      question: 'How is the mosque connected to Aligarh Muslim University (AMU)?',
      answer:
        'Nawab Sir Muzammilullah Khan Sherwani was a leading figure in the Aligarh Movement, serving as AMU Trustee, Vice-President, and Vice-Chancellor. Muzammil Manzil in Dodhpur hosted key discussions during AMU’s development.',
    },
    {
      question: 'What is the layout of the mosque courtyard (Sahan)?',
      answer:
        'The central sahan (courtyard) features stone-paved flooring with a sheltered wudu (ablution) fountain at its center, surrounded by arched cloisters that provide shade and natural ventilation during summer months.',
    },
  ];

  return (
    <div
      id="history-section"
      className={`py-16 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-stone-950 text-stone-100'
          : 'bg-gradient-to-b from-stone-900 via-stone-900 to-emerald-950 text-stone-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider">
            <Landmark className="w-3.5 h-3.5 text-amber-400" />
            Heritage & Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            The Story of Muzammil Manzil & Masjid
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed">
            Exploring the rich history of one of Aligarh’s notable early 20th-century ancestral manzils and its serene neighborhood mosque in Dodhpur.
          </p>
        </div>

        {/* Feature Grid: History Overview & Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Historical Narrative */}
          <div className="lg:col-span-7 bg-stone-800/80 p-6 sm:p-8 rounded-2xl border border-stone-700/80 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">
                  Ancestral Estate & Neighborhood Mosque
                </h3>
                <p className="text-xs text-amber-300 font-medium">Dodhpur, Aligarh • Uttar Pradesh</p>
              </div>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed">
              Muzammil Manzil is one of Aligarh’s celebrated historic <em>kothis</em> (grand ancestral residences), constructed in the early 20th century in the Dodhpur locality. The mosque shares its premises with the manzil, serving both as an intimate family sanctuary and a vibrant neighborhood masjid for the Dodhpur community.
            </p>

            <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800/80 space-y-2">
              <p className="text-xs text-amber-300 font-serif font-semibold flex items-center gap-1.5">
                <Feather className="w-4 h-4 text-amber-400" />
                The Founder's Legacy
              </p>
              <p className="text-xs text-stone-300 leading-relaxed">
                Founded by <strong>Nawab Sir Mohammad Muzammilullah Khan Sherwani (KCI)</strong>, a key patron of education, philanthropist, and early Vice-Chancellor of Aligarh Muslim University (AMU). The estate was built during an era when Dodhpur was taking shape as an intellectual quarter near the university.
              </p>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed">
              The mosque is particularly admired for its peaceful atmosphere, where worshippers enjoy shade under old trees in the courtyard and perform prayers inside the main multi-arched sanctuary.
            </p>
          </div>

          {/* Right Column: Architectural Highlights Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 to-stone-900 p-6 sm:p-8 rounded-2xl border border-emerald-700/60 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-serif font-bold text-amber-300">
                  Syncretic Architectural Style
                </h3>
              </div>
              <p className="text-xs text-emerald-200/90 leading-relaxed">
                The building represents the "Aligarh School of Syncretic Architecture" — a subtle harmony between traditional Indo-Islamic motifs and British Raj colonial construction techniques:
              </p>

              <ul className="space-y-3 pt-2 text-xs text-stone-200">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1 shrink-0"></span>
                  <div>
                    <strong className="text-white block font-medium">Multi-Foil Cusped Arches:</strong>
                    Traditional Islamic entrance arches creating airy, light-filled porticos.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1 shrink-0"></span>
                  <div>
                    <strong className="text-white block font-medium">Whitewashed Minarets:</strong>
                    Symmetrical corner turrets topped with decorative finials.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1 shrink-0"></span>
                  <div>
                    <strong className="text-white block font-medium">Open Sahan & Wudu Fountain:</strong>
                    Stone-paved central courtyard allowing natural air circulation during congregational prayers.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1 shrink-0"></span>
                  <div>
                    <strong className="text-white block font-medium">Colonial Masonry Framing:</strong>
                    Thick brick walls with high ceilings that maintain naturally cool temperatures.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-800/80 text-xs text-emerald-300 flex items-center justify-between">
              <span>Location: Dodhpur, Aligarh</span>
              <span className="font-serif text-amber-400 font-bold">مسجد مزمل منزل</span>
            </div>
          </div>

        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
            <History className="w-5 h-5 text-amber-400" />
            Historical Milestones
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {timelineEvents.map((item, index) => (
              <div
                key={index}
                className="bg-stone-800/60 p-5 rounded-2xl border border-stone-700/60 hover:border-amber-500/40 transition-all space-y-2 relative"
              >
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
                  {item.year}
                </span>
                <h4 className="font-serif font-bold text-white text-sm pt-1">{item.title}</h4>
                <p className="text-xs text-stone-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accordion FAQ Facts */}
        <div className="max-w-3xl mx-auto bg-stone-800/90 rounded-2xl border border-stone-700/80 p-6 sm:p-8 space-y-4">
          <h3 className="text-xl font-serif font-bold text-amber-300 text-center mb-4">
            Architectural Insights & Historical Notes
          </h3>

          <div className="divide-y divide-stone-700">
            {historicalFacts.map((fact, index) => {
              const isOpen = openFactIndex === index;
              return (
                <div key={index} className="py-3">
                  <button
                    onClick={() => setOpenFactIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left font-serif font-medium text-stone-200 hover:text-amber-300 transition-colors py-1 cursor-pointer text-sm"
                  >
                    <span>{fact.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <p className="mt-2 text-xs text-stone-300 leading-relaxed pl-2 border-l-2 border-amber-500/60">
                      {fact.answer}
                    </p>
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
