import { useState } from 'react';
import type { FC } from 'react';
import { ZoomIn, X } from 'lucide-react';

export const Gallery: FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'art', label: 'Nail Art Floral' },
    { id: 'glitter', label: 'Glitter & Violeta' },
    { id: 'crystals', label: 'Cristales & Strass' },
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Diseño Floral y Brillo Púrpura',
      category: 'art',
      image: '/images/gallery/art_floral.webp',
      description: 'Micro-pintura acuarelada con pigmentos florales sobre base láctea y destellos fucsia.',
    },
    {
      id: 2,
      title: 'Full Glitter Violeta Intenso',
      category: 'glitter',
      image: '/images/gallery/art_glitter_violet.webp',
      description: 'Esmaltado en gel con micropartículas reflectoras y acabado ultra brillante de espejo.',
    },
    {
      id: 3,
      title: 'Pedrería Swarovski y Caviar',
      category: 'crystals',
      image: '/images/gallery/art_rhinestones.webp',
      description: 'Detalle de corona de cristales legítimos y microperlas caviar fijadas con resina estructural.',
    },
    {
      id: 4,
      title: 'Set Completo Almond Signature',
      category: 'art',
      image: '/images/hero_hand@2x.webp',
      description: 'El set insignia de Cande Sarobe Studio que combina diseño floral, cristales y destellos violetas.',
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="galeria" className="py-20 bg-[#faf8f9] border-t border-stone-100">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#df3b68] font-sans text-xs font-bold tracking-widest uppercase mb-2 block">
            Portfolio de Trabajos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal leading-tight mb-4">
            Galería de Diseños Exclusivos
          </h2>
          <p className="text-stone-600 font-sans text-sm sm:text-base font-light">
            Inspirate con algunos de nuestros trabajos más representativos realizados en el estudio.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-sans tracking-wide transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#df3b68] text-white shadow-sm font-semibold'
                  : 'bg-white text-stone-700 hover:bg-pink-50 border border-stone-200/60 font-medium'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.image)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-pink-100 flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-md">
                    <ZoomIn className="w-5 h-5 text-[#df3b68]" />
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg text-stone-900 font-normal mb-1">
                    {item.title}
                  </h3>
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
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="relative max-w-3xl max-h-[90vh] p-2 bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="max-h-[82vh] w-auto object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
