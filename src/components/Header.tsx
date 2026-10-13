import { useState, Fragment, FC, MouseEvent } from 'react';
import { X } from 'lucide-react';

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
    <header className="sticky top-0 z-40 w-full bg-white border-b border-stone-100 transition-shadow">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-[74px] flex items-center justify-between">
        
        {/* Left: Elegant Classical Serif Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick('inicio', e)}
          className="flex flex-col items-center text-center group cursor-pointer"
        >
          <span className="font-serif text-[22px] sm:text-[23px] text-stone-900 leading-[1.1] tracking-tight group-hover:text-[#df3b68] transition-colors">
            Cande Sarobe
          </span>
          <span className="font-serif text-[14.5px] sm:text-[15.5px] text-stone-800 leading-none tracking-[0.14em] font-light group-hover:text-[#df3b68] transition-colors">
            Studio
          </span>
        </a>

        {/* Center: Delicate Navigation Menu */}
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
                  {/* Subtle pink active indicator line */}
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
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={onOpenBooking}
            className="border border-[#df3b68] text-stone-900 hover:text-white hover:bg-[#df3b68] text-[11px] sm:text-[11.5px] font-sans font-semibold tracking-wider uppercase px-4 sm:px-5 py-2 sm:py-2.5 rounded transition-all duration-200 shadow-sm hover:shadow"
          >
            RESERVAR TURNO
          </button>

          {/* Hamburger Icon (Three horizontal black lines) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-stone-900 hover:text-[#df3b68] transition-colors focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2]" />
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

      {/* Mobile / Responsive Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`text-sm py-1.5 transition-colors flex items-center justify-between ${
                  activeSection === item.id 
                    ? 'text-[#df3b68] font-semibold pl-2 border-l-2 border-[#df3b68]' 
                    : 'text-stone-700 hover:text-[#df3b68]'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#df3b68]" />
                )}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#df3b68] text-white py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-center"
              >
                RESERVAR TURNO AHORA
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
