import { useState } from 'react';
import type { FC } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cuánto tiempo dura el servicio en el estudio?',
      a: 'Un turno promedio dura entre 1 hora y media a 2 horas y cuarto, dependiendo del servicio seleccionado (Kapping, Soft Gel o Semipermanente) y la complejidad del Nail Art a mano alzada.',
    },
    {
      q: '¿Cuánto dura el set intacto en mis uñas?',
      a: 'Nuestros tratamientos tienen una durabilidad comprobada de 21 a 28 días sin desprendimientos. Recomendamos realizar el mantenimiento o service a las 3-4 semanas para mantener la arquitectura de la uña segura.',
    },
    {
      q: '¿Qué cuidados debo tener luego de hacerme las uñas?',
      a: 'Evitá usar las uñas como herramientas para abrir latas o raspar superficies. Usá guantes al limpiar con lavandina u otros químicos abrasivos e hidrata tus cutículas a diario con aceite de jojoba o almendras.',
    },
    {
      q: '¿Cómo reservo mi turno y cómo funciona la seña?',
      a: 'Para asegurar tu lugar en la agenda solicitamos una seña del 50% vía transferencia o Mercado Pago. Podés reprogramar tu cita con un aviso previo mínimo de 48 horas sin perder tu seña.',
    },
    {
      q: '¿Qué medios de pago reciben?',
      a: 'Aceptamos transferencias bancarias, Mercado Pago, tarjetas de débito/crédito y efectivo (con un 10% de descuento en el total de tu servicio).',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-stone-100">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[#df3b68] font-sans text-xs font-bold tracking-widest uppercase mb-2 block">
            Dudas Habituales
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal leading-tight mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-stone-600 font-sans text-sm font-light">
            Todo lo que necesitás saber antes de tu cita en Cande Sarobe Studio.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-pink-100 rounded-2xl overflow-hidden transition-colors bg-[#fffdfd]"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl text-stone-900 font-normal">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-pink-100 text-[#df3b68]' : 'text-stone-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-stone-600 font-sans text-sm font-light leading-relaxed border-t border-pink-50">
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
