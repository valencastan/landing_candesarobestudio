import { useState } from 'react';
import type { FC } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cuánto tiempo dura el servicio en el estudio?',
      a: 'Un turno promedio dura entre 1 hora y 20 minutos hasta 2 horas y cuarto, dependiendo del tratamiento (Kapping, Soft Gel o Semipermanente) y la complejidad del Nail Art a mano alzada seleccionado.',
    },
    {
      q: '¿Cuánto dura el set intacto en mis uñas?',
      a: 'Nuestros tratamientos tienen una durabilidad recomendada de 21 a 28 días sin desprendimientos. Aconsejamos realizar el mantenimiento cada 3 a 4 semanas para cuidar el centro de balance y la salud de la uña natural.',
    },
    {
      q: '¿Qué cuidados debo tener luego de hacerme las uñas?',
      a: 'Evitá usar las uñas como herramientas (para abrir latas o raspar superficies). Usá guantes al limpiar con químicos agresivos como lavandina o detergente puro, y aplicá aceite de cutículas a diario.',
    },
    {
      q: '¿Cómo reservo mi turno y cómo funciona la seña?',
      a: 'Para asegurar tu lugar en la agenda solicitamos una seña previa del 50% vía transferencia bancaria o Mercado Pago. Podés reprogramar tu cita con un aviso previo mínimo de 48 horas sin perder tu seña.',
    },
    {
      q: '¿Qué medios de pago reciben?',
      a: 'Aceptamos transferencias bancarias, Mercado Pago, tarjetas y efectivo en el estudio (con un 10% de descuento abonando en efectivo).',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-t border-stone-100 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-[#df3b68] font-sans text-xs font-bold tracking-widest uppercase mb-2 block">
            Dudas Habituales
          </span>
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl text-stone-900 font-normal leading-tight mb-2 sm:mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-stone-600 font-sans text-xs sm:text-sm font-light">
            Todo lo que necesitás saber antes de tu cita en Cande Sarobe Studio.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-pink-100 rounded-2xl overflow-hidden transition-colors bg-[#fffdfd]"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-xl text-stone-900 font-normal leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-pink-100 text-[#df3b68]' : 'text-stone-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-stone-600 font-sans text-xs sm:text-sm font-light leading-relaxed border-t border-pink-50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
