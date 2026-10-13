import { useState, Fragment } from 'react';
import type { FC, MouseEvent } from 'react';
import { X, Calendar, MessageCircle, Instagram } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  activeSection?: string;
  onNavigate?: (id: string) => void;
}

export const Header: FC<HeaderProps> = ({ 
  onOpenBooking, 
  activeSection = 'inicio',
  onNavigate 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'cursos', label: 'Cursos' },
    { id: 'galeria', label: 'Galería' },
    { id: 'contacto', label: 'Contacto' },
    { id: 'faq', label: 'Preguntas Frecuentes' },
  ];

  const handleNavClick = (id: string, e: MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-100 transition-all">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between">
        
        {/* Left: Elegant Classical Serif Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick('inicio', e)}
          className="flex flex-col items-start sm:items-center text-left sm:text-center group cursor-pointer select-none"
        >
          <span className="font-serif text-[18px] xs:text-[20px] sm:text-[23px] text-stone-900 leading-[1.1] tracking-tight group-hover:text-[#df3b68] transition-colors">
            Cande Sarobe
          </span>
          <span className="font-serif text-[12px] xs:text-[13px] sm:text-[15px] text-stone-800 leading-none tracking-[0.16em] font-light group-hover:text-[#df3b68] transition-colors">
            Studio
          </span>
        </a>

        {/* Center: Delicate Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-4 text-[12.5px] font-sans font-normal text-stone-800">
          {navLinks.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <Fragment key={item.id}>
                {index > 0 && (
                  <span className="text-[#df3b68] text-[9px] select-none opacity-80" aria-hidden="true">
                    •
                  </span>
                )}
                <div className="relative py-1">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`transition-colors duration-200 tracking-tight hover:text-[#df3b68] ${
                      isActive ? 'text-stone-950 font-medium' : 'text-stone-700'
                    }`}
                  >
                    {item.label}
                  </a>
                  {isActive && (
                    <span 
                      className="absolute -bottom-1.5 left-0 w-full h-[2.5px] bg-[#df3b68] rounded-full transition-all duration-300" 
                    />
                  )}
                </div>
              </Fragment>
            );
          })}
        </nav>

        {/* Right: RESERVAR TURNO Button & Hamburger Menu */}
        <div className="flex items-center space-x-2 sm:space-x-3.5">
          <button
            onClick={onOpenBooking}
            className="border border-[#df3b68] text-stone-900 hover:text-white hover:bg-[#df3b68] text-[10px] xs:text-[11px] sm:text-[11.5px] font-sans font-semibold tracking-wider uppercase px-2.5 xs:px-3.5 sm:px-5 py-1.5 sm:py-2 rounded transition-all duration-200 shadow-sm hover:shadow"
          >
            <span className="hidden xs:inline">RESERVAR TURNO</span>
            <span className="xs:hidden">TURNO</span>
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-stone-900 hover:text-[#df3b68] transition-colors focus:outline-none rounded-lg hover:bg-stone-50"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
            ) : (
              <div className="w-5 h-4 flex flex-col justify-between cursor-pointer">
                <span className="w-full h-[2px] bg-black block transition-all" />
                <span className="w-full h-[2px] bg-black block transition-all" />
                <span className="w-full h-[2px] bg-black block transition-all" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Responsive & Touch Friendly) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-5 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`text-base py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                  activeSection === item.id 
                    ? 'text-[#df3b68] bg-pink-50/70 font-semibold' 
                    : 'text-stone-800 hover:bg-stone-50 hover:text-[#df3b68]'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="w-2 h-2 rounded-full bg-[#df3b68]" />
                )}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-stone-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#df3b68] hover:bg-[#c82855] text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center space-x-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>RESERVAR TURNO ONLINE</span>
              </button>

              <div className="flex items-center justify-around pt-2 text-stone-600 text-xs">
                <a 
                  href="https://wa.me/5491112345678" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-1.5 hover:text-emerald-600"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-1.5 hover:text-[#df3b68]"
                >
                  <Instagram className="w-4 h-4 text-[#df3b68]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
