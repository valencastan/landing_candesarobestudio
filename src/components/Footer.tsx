import type { FC } from 'react';
import { Heart, Instagram, MessageCircle } from 'lucide-react';

export const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-stone-200 py-12">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        
        {/* Brand logo in classic serif */}
        <div className="flex flex-col items-center mb-6">
          <span className="font-serif text-2xl text-stone-900 leading-tight">
            Cande Sarobe
          </span>
          <span className="font-serif text-sm text-stone-800 tracking-[0.18em] font-light leading-none">
            Studio
          </span>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-stone-600 font-sans mb-8">
          <a href="#inicio" className="hover:text-[#df3b68] transition-colors">Inicio</a>
          <a href="#sobre-mi" className="hover:text-[#df3b68] transition-colors">Sobre mí</a>
          <a href="#servicios" className="hover:text-[#df3b68] transition-colors">Servicios</a>
          <a href="#cursos" className="hover:text-[#df3b68] transition-colors">Cursos</a>
          <a href="#galeria" className="hover:text-[#df3b68] transition-colors">Galería</a>
          <a href="#contacto" className="hover:text-[#df3b68] transition-colors">Contacto</a>
          <a href="#faq" className="hover:text-[#df3b68] transition-colors">Preguntas Frecuentes</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 mb-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-pink-50 text-[#df3b68] flex items-center justify-center hover:bg-[#df3b68] hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a 
            href="https://wa.me/5491112345678" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-stone-400 font-sans flex items-center justify-center space-x-1">
          <span>&copy; {new Date().getFullYear()} Cande Sarobe Studio. Todos los derechos reservados. Hecho con</span>
          <Heart className="w-3.5 h-3.5 text-[#df3b68] fill-current mx-1 inline" />
        </p>

      </div>
    </footer>
  );
};
