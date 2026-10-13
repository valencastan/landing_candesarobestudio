import type { FC } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
}

export const Hero: FC<HeroProps> = ({ onExploreServices }) => {
  return (
    <section 
      id="inicio"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#fff3f5] via-[#ffeff2] to-[#fdeef2] flex items-center min-h-[460px] md:min-h-[500px] lg:min-h-[540px]"
    >
      {/* Subtle radial ambient light overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_40%,_rgba(255,255,255,0.8),_transparent_70%)]" 
        aria-hidden="true"
      />

      <div className="max-w-[1360px] w-full mx-auto px-6 sm:px-8 lg:px-12 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        
        {/* Left Column: High-Impact Typography & CTA */}
        <div className="w-full md:w-[48%] lg:w-[45%] flex flex-col items-start justify-center pt-2 pb-6 md:py-0">
          
          {/* Main Title: High-Impact Elegant Stylized Serif */}
          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[46px] lg:text-[54px] xl:text-[58px] text-black font-normal leading-[1.08] tracking-[-0.01em] uppercase mb-4 sm:mb-5">
            <span className="block">DISFRUTÁ DE</span>
            <span className="block">TRATAMIENTOS DE</span>
            <span className="block font-normal">UÑAS EXCLUSIVOS</span>
          </h1>

          {/* Brand Tagline in Light Sans-Serif */}
          <p className="font-sans text-[15px] sm:text-[17px] md:text-[18px] text-stone-900 font-light tracking-normal mb-8 sm:mb-9">
            @ Cande Sarobe Studio
          </p>

          {/* Action Button: Vibrant Pink with Arrow Icon */}
          <button
            onClick={onExploreServices}
            className="group inline-flex items-center space-x-2 bg-[#df3b68] hover:bg-[#c82855] active:scale-[0.98] text-white text-[12.5px] sm:text-[13.5px] font-sans font-semibold tracking-wider uppercase px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            <span>VER SERVICIOS</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Right Column: Close-up Manicure Photography */}
        <div className="w-full md:w-[52%] lg:w-[55%] flex justify-end items-center relative mt-6 md:mt-0 select-none">
          <div className="relative w-full max-w-[620px] lg:max-w-[700px] flex justify-end">
            
            {/* The optimized WebP Hero Image */}
            <picture>
              <source srcSet="/images/hero_hand@2x.webp" type="image/webp" />
              <img
                src="/images/hero_hand.webp"
                alt="Manicura impecable y artística en tonos violetas, fucsias y detalles florales en Cande Sarobe Studio"
                className="w-full h-auto object-contain object-right drop-shadow-sm select-none pointer-events-none transform transition-transform duration-700 hover:scale-[1.01]"
                loading="eager"
                fetchPriority="high"
                width={700}
                height={520}
              />
            </picture>

            {/* Seamless Left Edge Mask for Flawless Background Merging */}
            <div 
              className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#ffeff2] via-[#ffeff2]/80 to-transparent pointer-events-none" 
              aria-hidden="true"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
