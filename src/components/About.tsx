import type { FC } from 'react';
import { Sparkles, ShieldCheck, Award, Heart } from 'lucide-react';

export const About: FC = () => {
  return (
    <section id="sobre-mi" className="py-16 sm:py-20 bg-white border-t border-stone-100">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Cande Sarobe's Real Photo with luxury badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gradient-to-tr from-[#ffeef2] to-[#fff8f9] p-2">
              <img
                src="/images/real/cande_tools.webp"
                alt="Cande Sarobe - Profesional en manicura y nail art"
                className="w-full h-[420px] sm:h-[480px] object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-lg border border-pink-100 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-[#df3b68] flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-stone-500 font-sans uppercase tracking-wider">Fundadora & Nail Artist</p>
                  <p className="text-sm sm:text-base font-serif font-bold text-stone-900 leading-tight">Cande Sarobe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2 text-left">
            <span className="text-[#df3b68] font-sans text-xs font-bold tracking-widest uppercase mb-2 block">
              Conocé el estudio
            </span>
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl text-stone-900 font-normal leading-tight mb-4 sm:mb-6">
              Pasión por el detalle, arte en tus manos y cuidado absoluto
            </h2>
            <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 font-light">
              ¡Hola! Soy <strong className="font-medium text-stone-900">Cande Sarobe</strong>. En mi estudio cada turno es una experiencia única y personalizada. Me apasiona transformar cada set de uñas en una expresión artística, combinando técnicas de kapping estructurado, soft gel y micro-pintura a mano alzada.
            </p>
            <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-light">
              Priorizo siempre la salud de la uña natural mediante una preparación anatómica cuidadosa, el uso de productos de primera línea internacional y un protocolo estricto de bioseguridad con instrumental esterilizado en autoclave.
            </p>

            {/* Pillar badges (Responsive grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="p-4 rounded-2xl bg-[#fff5f7] border border-pink-100">
                <ShieldCheck className="w-6 h-6 text-[#df3b68] mb-2" />
                <h3 className="font-serif font-semibold text-stone-900 text-sm">Bioseguridad 100%</h3>
                <p className="text-xs text-stone-600 mt-1 font-light">Instrumental esterilizado en autoclave e insumos descartables.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#fff5f7] border border-pink-100">
                <Award className="w-6 h-6 text-[#df3b68] mb-2" />
                <h3 className="font-serif font-semibold text-stone-900 text-sm">Técnica & Precisión</h3>
                <p className="text-xs text-stone-600 mt-1 font-light">Capacitación constante y productos de nivel internacional.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#fff5f7] border border-pink-100">
                <Heart className="w-6 h-6 text-[#df3b68] mb-2" />
                <h3 className="font-serif font-semibold text-stone-900 text-sm">Atención Exclusiva</h3>
                <p className="text-xs text-stone-600 mt-1 font-light">Un espacio cálido y relajante sin apuros ni esperas.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
