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
import { Monitor, Globe, Smartphone, Sparkles } from 'lucide-react';

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
    <div className="w-full bg-white flex flex-col min-w-0">
      <Header
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
        onNavigate={(id) => {
          setActiveSection(id);
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <main className="w-full min-w-0">
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
      
      {/* Main View Area */}
      <div className="flex-1 flex flex-col items-center justify-start p-0 sm:py-6 sm:px-4 md:px-6 w-full min-w-0">
        {viewMode === 'mockup' && (
          <div className="w-full flex justify-center animate-in fade-in duration-300 min-w-0">
            <BrowserChrome url="candesarobestudio.com">
              {renderLandingContent()}
            </BrowserChrome>
          </div>
        )}

        {viewMode === 'fullscreen' && (
          <div className="w-full bg-white shadow-lg animate-in fade-in duration-300 min-w-0">
            {renderLandingContent()}
          </div>
        )}

        {viewMode === 'mobile' && (
          <div className="w-full max-w-[410px] mx-auto my-4 bg-stone-900 rounded-[44px] p-3 shadow-2xl border-4 border-stone-800 animate-in fade-in duration-300">
            {/* Phone notch */}
            <div className="w-28 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-stone-800 mr-2" />
              <div className="w-2 h-2 rounded-full bg-[#df3b68]/40" />
            </div>
            <div className="bg-white rounded-[32px] overflow-hidden max-h-[780px] overflow-y-auto">
              {renderLandingContent()}
            </div>
          </div>
        )}
      </div>

      {/* Floating Bottom View Switcher Dock (Leaves Top Navbar 100% Fixed & Free) */}
      <aside 
        aria-label="Controles de visualización" 
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900/90 hover:bg-stone-900 backdrop-blur-md text-white py-1.5 px-2.5 sm:px-3 rounded-full shadow-2xl border border-stone-700/80 flex items-center space-x-1 sm:space-x-2 transition-all select-none"
      >
        <div className="flex items-center space-x-1 bg-stone-800/90 rounded-full p-1 border border-stone-700/60">
          <button
            onClick={() => setViewMode('mockup')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium transition-all ${
              viewMode === 'mockup'
                ? 'bg-[#df3b68] text-white shadow-sm'
                : 'text-stone-300 hover:text-white'
            }`}
            title="Vista Maqueta Navegador de Escritorio"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Maqueta PC</span>
          </button>

          <button
            onClick={() => setViewMode('fullscreen')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium transition-all ${
              viewMode === 'fullscreen'
                ? 'bg-[#df3b68] text-white shadow-sm'
                : 'text-stone-300 hover:text-white'
            }`}
            title="Vista Web Pantalla Completa"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Web 100%</span>
          </button>

          <button
            onClick={() => setViewMode('mobile')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium transition-all ${
              viewMode === 'mobile'
                ? 'bg-[#df3b68] text-white shadow-sm'
                : 'text-stone-300 hover:text-white'
            }`}
            title="Vista Móvil Simulada"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Móvil</span>
          </button>
        </div>

        <button
          onClick={() => handleOpenBooking()}
          className="bg-[#df3b68] hover:bg-[#c82855] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full transition-colors flex items-center space-x-1 shadow-sm"
        >
          <Sparkles className="w-3 h-3" />
          <span className="hidden xs:inline">Reservar</span>
        </button>
      </aside>

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
