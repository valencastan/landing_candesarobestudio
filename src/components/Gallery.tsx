import { useState } from 'react';
import type { FC } from 'react';
import { ZoomIn, X, Sparkles } from 'lucide-react';

export const Gallery: FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'mano-alzada', label: 'Nail Art a Mano Alzada' },
    { id: 'soft-gel', label: 'Estructuras & Formas' },
    { id: 'tendencia', label: 'Diseños de Tendencia' },
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Set Tarot de Autor',
      category: 'mano-alzada',
      image: '/images/real/hero_tarot_raw.webp',
      badge: 'Obra de Autor',
      description: 'Micro-pintura artesanal con figuras arcanas: El Sol, Sagrado Corazón, Espada y detalles dorados.',
    },
    {
      id: 2,
      title: 'Set Minimalista Stars',
      category: 'tendencia',
      image: '/images/real/nail_stars.webp',
      badge: 'Tendencia 2026',
      description: 'Estrellas estilizadas en tono carmín y marfil sobre base nude impecable con nivelación rubber.',
    },
    {
      id: 3,
      title: 'Set Mocha & Pan de Oro',
      category: 'soft-gel',
      image: '/images/real/nail_mocha_gold.webp',
      badge: 'Elegancia Square',
      description: 'Tono marrón moca cremoso con uña de acento encapsulada en láminas de oro puro y técnica mármol.',
    },
    {
      id: 4,
      title: 'Set Tarot — Primer Plano',
      category: 'mano-alzada',
      image: '/images/real/hero_tarot_feathered.webp',
      badge: 'Detalle de Precisión',
      description: 'Trazo ultrafino con pincel liner 000 y pigmentos de alta saturación curados bajo lámpara UV.',
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="galeria" className="py-16 sm:py-20 bg-[#faf8f9] border-t border-stone-100 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[#df3b68] font-sans text-xs font-bold tracking-widest uppercase mb-2 block">
            Portfolio del Estudio
          </span>
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl text-stone-900 font-normal leading-tight mb-3 sm:mb-4">
            Galería de Trabajos Reales
          </h2>
          <p className="text-stone-600 font-sans text-xs sm:text-sm md:text-base font-light">
            Fotografías directas de sets creados en el estudio por Cande Sarobe. Sin filtros exagerados, destacando la prolijidad real.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-sans tracking-wide transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#df3b68] text-white shadow-sm font-semibold'
                  : 'bg-white text-stone-700 hover:bg-pink-50 border border-stone-200/60 font-medium'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Responsive 1-2-4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage({ src: item.image, title: item.title, desc: item.description })}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-pink-100 flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-sans font-semibold text-stone-800 shadow-sm flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 text-[#df3b68]" />
                  <span>{item.badge}</span>
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/95 text-[#df3b68] flex items-center justify-center shadow-md">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg text-stone-900 font-normal mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-500 font-sans line-clamp-2 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div 
            className="relative max-w-2xl w-full p-4 bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Cerrar vista previa"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-2xl overflow-hidden max-h-[70vh] flex justify-center bg-stone-50">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[68vh] w-auto object-contain rounded-xl"
              />
            </div>
            <div className="pt-4 text-left">
              <h3 className="font-serif text-xl text-stone-900 font-normal">{selectedImage.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-1">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
