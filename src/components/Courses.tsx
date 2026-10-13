import type { FC } from 'react';
import { Calendar, CheckCircle, Sparkles, MessageCircle } from 'lucide-react';

interface CoursesProps {
  onInquireCourse: (courseName: string) => void;
}

export const Courses: FC<CoursesProps> = ({ onInquireCourse }) => {
  const coursesList = [
    {
      id: 'inicial',
      title: 'Taller Inicial: Manicura Combinada & Semipermanente',
      level: 'Nivel Principiante / Cero',
      badge: 'Más Elegido',
      description: 'Aprendé desde las bases anatómicas de la uña, preparación prolija de la placa y cutículas, esmaltado nivelado con rubber base y retiro seguro sin desprendimientos.',
      duration: 'Jornada Intensiva (6 horas)',
      includes: ['Guía teórica completa impresa', 'Práctica en mano real / modelo', 'Insumos de primera línea incluidos', 'Certificado oficial de asistencia'],
    },
    {
      id: 'softgel-pro',
      title: 'Masterclass: Soft Gel Extensions & Estructuras',
      level: 'Nivel Intermedio',
      badge: 'Tendencia en Salón',
      description: 'Dominá el método de alargamiento más pedido del momento. Elección correcta del tip, adhesión sin burbujas, estructura almendrada y sellado impecable.',
      duration: '4 horas prácticas intensivas',
      includes: ['Tips de gel y bases de práctica', 'Demostración en vivo paso a paso', 'Corrección de errores frecuentes', 'Certificado oficial de asistencia'],
    },
    {
      id: 'nail-art',
      title: 'Seminario: Nail Art de Autor & Micro-Pintura',
      level: 'Todos los Niveles',
      badge: 'Exclusivo Cande Sarobe',
      description: 'Potenciá tu creatividad y pulso con técnicas de trazo fino, figuras temáticas (Tarot, florales, estrellas), aplicación de pan de oro y encapsulados.',
      duration: '5 horas de práctica creativa',
      includes: ['Pinceles liner específicos recomendados', 'Muestrario de diseños propios', 'Tips para fotografía y redes', 'Certificado oficial de asistencia'],
    },
  ];

  return (
    <section id="cursos" className="py-16 sm:py-20 bg-white border-t border-stone-100 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Banner with Cande's real promotional photo */}
        <div className="mb-14 sm:mb-16 bg-gradient-to-r from-[#fff3f5] via-[#ffeff2] to-[#fdeef2] rounded-3xl p-6 sm:p-10 border border-pink-100 shadow-sm flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div className="max-w-xl text-left">
            <span className="text-[#df3b68] font-sans text-xs font-bold tracking-widest uppercase mb-2 block">
              Academia Cande Sarobe Studio
            </span>
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl text-stone-900 font-normal leading-tight mb-4">
              Capacitate con Cande y llevá tus trabajos al siguiente nivel
            </h2>
            <p className="text-stone-600 font-sans text-xs sm:text-sm md:text-base font-light mb-6 leading-relaxed">
              Capacitaciones personalizadas en grupos ultra reducidos o individuales para que adquieras técnica real, seguridad con clientas y un estándar de prolijidad que destaque en el mercado.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/5491112345678?text=Hola%20Cande!%20Quiero%20información%20sobre%20las%20próximas%20fechas%20de%20cursos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#df3b68] hover:bg-[#c82855] text-white text-xs font-sans font-semibold tracking-wider uppercase px-6 py-3 rounded-xl shadow-sm transition-all flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CONSULTAR PRÓXIMAS FECHAS</span>
              </a>
            </div>
          </div>

          {/* Photo of Cande promoting courses */}
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
              <img
                src="/images/real/cande_courses.webp"
                alt="Cande Sarobe promocionando cursos y capacitaciones"
                className="w-full h-[360px] sm:h-[400px] object-cover rounded-xl"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold text-[#df3b68] shadow-sm flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>Cupos Limitados</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section title for courses list */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
            Nuestros Talleres & Masterclasses
          </h3>
          <p className="text-stone-500 font-sans text-xs sm:text-sm font-light mt-1">
            Programas diseñados tanto para iniciarte como para perfeccionar tu técnica actual.
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {coursesList.map((course) => (
            <div 
              key={course.id}
              className="bg-[#fff9fa] rounded-2xl p-6 sm:p-7 border border-pink-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-sans font-medium text-pink-700 bg-pink-100/70 px-2.5 py-1 rounded-md">
                    {course.level}
                  </span>
                  <span className="text-[10px] font-sans font-semibold text-[#df3b68] uppercase tracking-wider">
                    {course.badge}
                  </span>
                </div>

                <h4 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal mb-3">
                  {course.title}
                </h4>

                <p className="text-stone-600 font-sans text-xs sm:text-sm leading-relaxed mb-5 font-light">
                  {course.description}
                </p>

                <div className="flex items-center text-xs text-stone-600 mb-5 bg-white p-3 rounded-lg border border-pink-50">
                  <Calendar className="w-4 h-4 text-[#df3b68] mr-2 flex-shrink-0" />
                  <span>{course.duration} — Teórico & Práctico</span>
                </div>

                <div className="space-y-2 mb-6">
                  {course.includes.map((inc, i) => (
                    <div key={i} className="flex items-center text-xs text-stone-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#df3b68] mr-2 flex-shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onInquireCourse(course.title)}
                className="w-full bg-white hover:bg-[#df3b68] text-stone-900 hover:text-white border border-[#df3b68] text-xs font-sans font-semibold py-3 rounded-xl transition-all uppercase tracking-wider text-center"
              >
                Consultar Temario & Fecha
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
