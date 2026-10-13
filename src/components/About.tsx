import type { FC } from 'react';
import { Sparkles, ShieldCheck, Award, Heart } from 'lucide-react';

export const About: FC = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-white border-t border-stone-100">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with luxury frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gradient-to-tr from-[#ffeef2] to-[#fff8f9] p-2">
              <img
                src="/images/gallery/art_floral.webp"
                alt="Detalle de manicura de autor por Cande Sarobe"
                className="w-full h-[460px] object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-pink-100 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-[#df3b68]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-sans">Especialista en</p>
                  <p className="text-sm font-serif font-bold text-stone-900">Nail Art de Autor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[#df3b68] font-sans text-xs font-bold tracking-widest uppercase mb-2">
              Conocé el estudio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal leading-tight mb-6">
              Pasión por el detalle, elegancia y cuidado absoluto de tus uñas
            </h2>
            <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed mb-6 font-light">
              En <strong className="font-medium text-stone-900">Cande Sarobe Studio</strong> entendemos que cada set de uñas es una obra de arte y una extensión de tu personalidad. Nos especializamos en técnicas avanzadas de manicura rusa combinada, kapping estructurado y nail art a mano alzada.
            </p>
            <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed mb-8 font-light">
              Priorizamos ante todo la salud de la uña natural, empleando productos hipoalergénicos de máxima calidad internacional y protocolos estrictos de esterilización hospitalaria para tu total tranquilidad.
            </p>

            {/* Pillar badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#fff5f7] border border-pink-100">
                <ShieldCheck className="w-6 h-6 text-[#df3b68] mb-2" />
                <h3 className="font-serif font-semibold text-stone-900 text-sm">Bioseguridad 100%</h3>
                <p className="text-xs text-stone-600 mt-1 font-light">Instrumental esterilizado en autoclave e insumos descartables.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#fff5f7] border border-pink-100">
                <Award className="w-6 h-6 text-[#df3b68] mb-2" />
                <h3 className="font-serif font-semibold text-stone-900 text-sm">Técnica Certificada</h3>
                <p className="text-xs text-stone-600 mt-1 font-light">Capacitaciones continuas con maestras internacionales.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#fff5f7] border border-pink-100">
                <Heart className="w-6 h-6 text-[#df3b68] mb-2" />
                <h3 className="font-serif font-semibold text-stone-900 text-sm">Experiencia Relax</h3>
                <p className="text-xs text-stone-600 mt-1 font-light">Un espacio cálido, luminoso y exclusivo pensado para vos.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
