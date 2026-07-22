import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FridayPrayerSection } from './components/FridayPrayerSection';
import { DailyPrayerSchedule } from './components/DailyPrayerSchedule';
import { AnnouncementsBoard } from './components/AnnouncementsBoard';
import { HistoryArchitecture } from './components/HistoryArchitecture';
import { QiblaCompass } from './components/QiblaCompass';
import { DirectionsMap } from './components/DirectionsMap';
import { VisitorEtiquette } from './components/VisitorEtiquette';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('daily-prayer-schedule');
  const [showUrdu, setShowUrdu] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const isNavigatingRef = useRef<boolean>(false);
  const navTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
    }
    return false; // Default clean light mode
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollSpy IntersectionObserver to keep activeTab automatically synced with viewport
  useEffect(() => {
    const sectionIds = [
      'daily-prayer-schedule',
      'friday-section',
      'history-section',
      'directions-section',
      'etiquette-section',
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -45% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      if (isNavigatingRef.current) return;
      
      // Find entry closest to upper center
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
        // Pick the top-most visible section
        const topEntry = visibleEntries.reduce((prev, curr) =>
          prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
        );
        setActiveTab(topEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabNavigate = (tabId: string) => {
    isNavigatingRef.current = true;
    setActiveTab(tabId);
    
    if (navTimeoutRef.current) {
      clearTimeout(navTimeoutRef.current);
    }

    const el = document.getElementById(tabId) || document.getElementById(`${tabId}-section`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    navTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 900);
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 45 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-amber-400 selection:text-emerald-950 transition-colors duration-300 ${
      isDarkMode ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'
    }`}>
      
      {/* Sticky Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabNavigate}
        showUrdu={showUrdu}
        setShowUrdu={setShowUrdu}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Main Content View Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onNavigateTo={handleTabNavigate}
          showUrdu={showUrdu}
        />

        {/* Automatic Daily Prayer Schedule (University of Karachi Method + GPS) */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <DailyPrayerSchedule
            showUrdu={showUrdu}
            isDarkMode={isDarkMode}
          />
        </motion.div>

        {/* Friday Prayer Schedule */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <FridayPrayerSection
            showUrdu={showUrdu}
            isDarkMode={isDarkMode}
          />
        </motion.div>

        {/* Community Announcements Board */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <AnnouncementsBoard isDarkMode={isDarkMode} />
        </motion.div>

        {/* History & Architecture */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <HistoryArchitecture isDarkMode={isDarkMode} />
        </motion.div>

        {/* Qibla Direction Compass */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <QiblaCompass isDarkMode={isDarkMode} />
        </motion.div>

        {/* Directions & Google Maps Reference */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <DirectionsMap isDarkMode={isDarkMode} />
        </motion.div>

        {/* Visitor Guidelines & FAQs */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <VisitorEtiquette isDarkMode={isDarkMode} />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-amber-500 hover:bg-amber-400 text-emerald-950 shadow-xl border border-amber-300 transition-all cursor-pointer flex items-center justify-center group"
          >
            <ChevronUp className="w-5 h-5 text-emerald-950 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

