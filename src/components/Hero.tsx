import { useState } from 'react';
import type { FC } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
}

export const Hero: FC<HeroProps> = ({ onExploreServices }) => {
  // Let user interactively toggle between Cande's real sets
  const [selectedSet, setSelectedSet] = useState<'tarot' | 'stars' | 'mocha'>('tarot');

  const sets = {
    tarot: {
      image: '/images/real/hero_tarot_feathered.webp',
      title: 'Set Tarot de Autor',
      desc: 'Micro-ilustración mística a mano alzada',
      tag: 'Diseño Insignia',
    },
    stars: {
      image: '/images/real/nail_stars.webp',
      title: 'Set Minimalista Stars',
      desc: 'Estrellas rojas y marfil sobre base nude',
      tag: 'Tendencia',
    },
    mocha: {
      image: '/images/real/nail_mocha_gold.webp',
      title: 'Set Mocha & Gold Foil',
      desc: 'Tonos moca con aplicaciones doradas',
      tag: 'Elegancia Clásica',
    },
  };

  const currentSet = sets[selectedSet];

  return (
    <section 
      id="inicio"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#fff3f5] via-[#ffeff2] to-[#fdeef2] flex items-center min-h-[500px] lg:min-h-[560px] py-10 sm:py-14 lg:py-12"
    >
      {/* Subtle radial ambient light overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_40%,_rgba(255,255,255,0.9),_transparent_75%)]" 
        aria-hidden="true"
      />

      <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-6">
        
        {/* Left Column: High-Impact Typography & CTA */}
        <div className="w-full lg:w-[48%] xl:w-[45%] flex flex-col items-start justify-center text-left">
          
          {/* Main Title: Stylized High-Impact Serif */}
          <h1 className="font-serif text-[27px] xs:text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[56px] text-black font-normal leading-[1.12] sm:leading-[1.08] tracking-[-0.01em] uppercase mb-3 sm:mb-4">
            <span className="block">DISFRUTÁ DE</span>
            <span className="block">TRATAMIENTOS DE</span>
            <span className="block font-normal">UÑAS EXCLUSIVOS</span>
          </h1>

          {/* Brand Tagline in Light Sans-Serif */}
          <p className="font-sans text-[14px] xs:text-[15px] sm:text-[17px] md:text-[18px] text-stone-900 font-light tracking-normal mb-6 sm:mb-8">
            @ Cande Sarobe Studio
          </p>

          {/* Action Button: Vibrant Pink with Arrow Icon */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2 bg-[#df3b68] hover:bg-[#c82855] active:scale-[0.98] text-white text-[12px] sm:text-[13px] font-sans font-semibold tracking-wider uppercase px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>VER SERVICIOS</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mini design selector badges for interactivity */}
          <div className="mt-8 pt-5 border-t border-pink-200/60 w-full">
            <span className="text-[11px] font-sans font-medium text-stone-500 uppercase tracking-wider block mb-2.5">
              Explorar trabajos reales de Cande:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSet('tarot')}
                className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all flex items-center space-x-1.5 ${
                  selectedSet === 'tarot'
                    ? 'bg-stone-900 text-white font-medium shadow-sm'
                    : 'bg-white/80 hover:bg-white text-stone-700 border border-pink-200/80'
                }`}
              >
                <span>🃏 Set Tarot</span>
              </button>
              <button
                onClick={() => setSelectedSet('stars')}
                className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all flex items-center space-x-1.5 ${
                  selectedSet === 'stars'
                    ? 'bg-stone-900 text-white font-medium shadow-sm'
                    : 'bg-white/80 hover:bg-white text-stone-700 border border-pink-200/80'
                }`}
              >
                <span>⭐ Nude Stars</span>
              </button>
              <button
                onClick={() => setSelectedSet('mocha')}
                className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all flex items-center space-x-1.5 ${
                  selectedSet === 'mocha'
                    ? 'bg-stone-900 text-white font-medium shadow-sm'
                    : 'bg-white/80 hover:bg-white text-stone-700 border border-pink-200/80'
                }`}
              >
                <span>☕ Mocha & Gold</span>
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Close-up Photography of Cande's Real Nail Art */}
        <div className="w-full lg:w-[52%] xl:w-[55%] flex justify-center lg:justify-end items-center relative select-none">
          <div className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[620px] flex flex-col items-center lg:items-end">
            
            {/* Real Nail Art Image with Feathered Mask & Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-4 border-white/90 bg-white/70 p-2 sm:p-2.5 transition-all duration-500 max-h-[460px] sm:max-h-[520px]">
              <img
                key={currentSet.image}
                src={currentSet.image}
                alt={currentSet.title}
                className="w-full h-auto max-h-[430px] sm:max-h-[490px] object-cover sm:object-contain rounded-2xl transform transition-all duration-700 hover:scale-105"
                loading="eager"
                fetchPriority="high"
              />

              {/* Real design badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-xl shadow-lg border border-pink-100 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-[#df3b68] flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans text-stone-500 uppercase tracking-wider">{currentSet.tag}</p>
                    <p className="text-xs sm:text-sm font-serif font-bold text-stone-900 leading-tight">{currentSet.title}</p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-[11px] font-sans text-stone-500 font-light hidden xs:inline">
                  {currentSet.desc}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
