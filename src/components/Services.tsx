import type { FC } from 'react';
import { Clock, Sparkles, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: FC<ServicesProps> = ({ onSelectService }) => {
  const serviceList = [
    {
      id: 'kapping',
      title: 'Kapping Gel & Nivelación',
      category: 'Estructura & Refuerzo',
      description: 'Capa protectora de gel constructor que refuerza tu uña natural para permitirle crecer fuerte sin quebrarse ni descamarse.',
      duration: '1h 45 min',
      features: ['Nivelación con rubber base', 'Manicura rusa combinada', 'Esmaltado liso incluido', 'Durabilidad +21 días'],
      highlight: true,
      price: '$22.000',
    },
    {
      id: 'soft-gel',
      title: 'Soft Gel Extensions',
      category: 'Alargamiento Express',
      description: 'Tips 100% gel aplicados sobre tu uña para un alargamiento inmediato, liviano, natural y resistente sin dañar tu lecho ungueal.',
      duration: '2h 15 min',
      features: ['Formas Almond, Square o Coffin', 'Adhesión con gel soak-off', 'Esmaltado semipermanente', 'Retiro seguro sin torno agresivo'],
      highlight: false,
      price: '$28.000',
    },
    {
      id: 'nail-art',
      title: 'Nail Art de Autor',
      category: 'Diseño Exclusivo',
      description: 'Micro-pintura a mano alzada, flores acuareladas, cristales Swarovski, encapsulados de glitter y efectos aurora cromados.',
      duration: '30 a 60 min extra',
      features: ['Diseños personalizados', 'Cristales y strass fijados con resina', 'Glitter holográfico premium', 'Efecto foil y líneas precisas'],
      highlight: true,
      price: 'Desde $4.000',
    },
    {
      id: 'semi-ruso',
      title: 'Semipermanente con Manicura Rusa',
      category: 'Clásico & Duradero',
      description: 'Limpieza anatómica profunda del bolsillo de cutícula con fresas de diamante, logrando un esmaltado profundo y crecimiento invisible.',
      duration: '1h 30 min',
      features: ['Corte milimétrico de cutículas', 'Pulido de piel con aceites', 'Pigmentos de alta cobertura', 'Top coat de alto brillo'],
      highlight: false,
      price: '$18.000',
    },
    {
      id: 'spa-pies',
      title: 'Pedicuría & Spa de Pies',
      category: 'Bienestar & Cuidado',
      description: 'Tratamiento integral de belleza para pies con exfoliación profunda, hidratación intensiva y esmaltado semipermanente.',
      duration: '1h 15 min',
      features: ['Limpieza de durezas suave', 'Exfoliación con sales y aceites', 'Masaje relajante', 'Esmaltado de larga duración'],
      highlight: false,
      price: '$20.000',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-[#faf8f9] border-t border-stone-100">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#df3b68] font-sans text-xs font-bold tracking-widest uppercase mb-2 block">
            Nuestra Carta de Tratamientos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal leading-tight mb-4">
            Servicios Exclusivos para Manos Impecables
          </h2>
          <p className="text-stone-600 font-sans text-sm sm:text-base font-light">
            Cada tratamiento incluye preparación profesional, productos de estándar internacional y atención meticulosa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative border ${
                service.highlight ? 'border-pink-200 shadow-soft-glow' : 'border-stone-100 shadow-sm'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 right-6 bg-[#df3b68] text-white text-[11px] font-sans font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Favorito</span>
                </div>
              )}

              <div>
                <span className="text-xs font-sans text-pink-600 font-medium tracking-wide uppercase">
                  {service.category}
                </span>
                <h3 className="font-serif text-2xl text-stone-900 font-normal mt-1 mb-3">
                  {service.title}
                </h3>
                <p className="text-stone-600 font-sans text-sm font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6 border-t border-stone-100 pt-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#df3b68] mr-2 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center text-xs text-stone-500">
                  <Clock className="w-3.5 h-3.5 mr-1.5 text-stone-400" />
                  <span>{service.duration}</span>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center space-x-1.5 text-xs font-sans font-semibold text-[#df3b68] hover:text-[#c82855] group py-1.5 px-3 rounded-lg hover:bg-pink-50 transition-colors"
                >
                  <span>Reservar</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
