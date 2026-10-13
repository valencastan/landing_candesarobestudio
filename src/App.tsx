import { useState } from 'react';
import { BrowserChrome } from './components/BrowserChrome';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Courses } from './components/Courses';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Monitor, Globe, Smartphone } from 'lucide-react';

export function App() {
  const [viewMode, setViewMode] = useState<'mockup' | 'fullscreen' | 'mobile'>('mockup');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Kapping Gel & Nivelación');
  const [activeSection, setActiveSection] = useState('inicio');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('servicios');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection('servicios');
  };

  const renderLandingContent = () => (
    <div className="w-full bg-white flex flex-col">
      <Header
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
        onNavigate={(id) => {
          setActiveSection(id);
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <main>
        <Hero onExploreServices={handleExploreServices} />
        <About />
        <Services onSelectService={(s) => handleOpenBooking(s)} />
        <Courses onInquireCourse={(c) => handleOpenBooking(c)} />
        <Gallery />
        <FAQ />
        <Contact onOpenBooking={() => handleOpenBooking()} />
      </main>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#eaedf0] text-stone-900 flex flex-col font-sans">
      
      {/* Top Floating Control Bar for Mockup / Mode Toggle */}
      <aside aria-label="Controles de visualización" className="sticky top-0 z-50 bg-stone-900/90 backdrop-blur-md text-white py-2.5 px-4 shadow-md border-b border-stone-800 flex flex-wrap items-center justify-between gap-3 select-none">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#df3b68] animate-pulse" />
          <span className="font-serif font-medium text-xs sm:text-sm tracking-wide">
            Cande Sarobe Studio — Maqueta UI/UX
          </span>
          <span className="hidden md:inline-block text-[11px] text-stone-400 font-sans border-l border-stone-700 pl-2">
            Composición 1:1 para Desktop
          </span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-stone-800 rounded-lg p-1 border border-stone-700">
          <button
            onClick={() => setViewMode('mockup')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
              viewMode === 'mockup'
                ? 'bg-[#df3b68] text-white shadow-sm'
                : 'text-stone-300 hover:text-white'
            }`}
            title="Vista Maqueta de Navegador de Escritorio"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Maqueta Navegador</span>
          </button>

          <button
            onClick={() => setViewMode('fullscreen')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
              viewMode === 'fullscreen'
                ? 'bg-[#df3b68] text-white shadow-sm'
                : 'text-stone-300 hover:text-white'
            }`}
            title="Vista Web Pantalla Completa"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Web Completa</span>
          </button>

          <button
            onClick={() => setViewMode('mobile')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
              viewMode === 'mobile'
                ? 'bg-[#df3b68] text-white shadow-sm'
                : 'text-stone-300 hover:text-white'
            }`}
            title="Vista Móvil Responsive"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>

        {/* Quick booking action in toolbar */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={() => handleOpenBooking()}
            className="bg-[#df3b68] hover:bg-[#c82855] text-white text-xs font-semibold px-3 py-1 rounded-md transition-colors"
          >
            Probar Reserva
          </button>
        </div>
      </aside>

      {/* Main View Area */}
      <div className="flex-1 flex flex-col items-center justify-start py-4 sm:py-8 px-2 sm:px-6 w-full">
        {viewMode === 'mockup' && (
          <div className="w-full flex justify-center animate-in fade-in duration-300">
            <BrowserChrome url="candesarobestudio.com">
              {renderLandingContent()}
            </BrowserChrome>
          </div>
        )}

        {viewMode === 'fullscreen' && (
          <div className="w-full bg-white shadow-lg animate-in fade-in duration-300">
            {renderLandingContent()}
          </div>
        )}

        {viewMode === 'mobile' && (
          <div className="w-full max-w-[420px] mx-auto bg-stone-900 rounded-[44px] p-3.5 shadow-2xl border-4 border-stone-800 animate-in fade-in duration-300">
            {/* Phone notch / Dynamic island */}
            <div className="w-32 h-5 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-stone-900/80 mr-3" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#df3b68]/40" />
            </div>
            <div className="bg-white rounded-[32px] overflow-hidden max-h-[820px] overflow-y-auto">
              {renderLandingContent()}
            </div>
          </div>
        )}
      </div>

      {/* Booking Appointment Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={selectedService}
      />

    </div>
  );
}

export default App;
