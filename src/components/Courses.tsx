import type { FC } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

interface CoursesProps {
  onInquireCourse: (courseName: string) => void;
}

export const Courses: FC<CoursesProps> = ({ onInquireCourse }) => {
  const coursesList = [
    {
      id: 'inicial',
      title: 'Taller Inicial: Manicura Rusa & Semipermanente',
      level: 'Nivel Principiante / Cero',
      badge: 'Más Vendido',
      description: 'Aprendé desde las bases anatómicas de la uña, manejo de torno y fresas de diamante, corte con tijera/alicate y esmaltado nivelado sin desprendimientos.',
      duration: 'Jornada Intensiva (6 horas)',
      includes: ['Kit de fresas iniciales', 'Manual impreso y digital', 'Práctica real sobre modelo', 'Certificado oficial'],
    },
    {
      id: 'softgel-pro',
      title: 'Masterclass: Soft Gel Tips & Alargamiento',
      level: 'Nivel Intermedio',
      badge: 'Tendencia',
      description: 'Dominá la técnica de extensiones más solicitada en salones. Preparación del lecho, elección milimétrica del tip, arquitectura, curvatura C y sellado.',
      duration: '4 horas prácticas',
      includes: ['Caja de tips de práctica', 'Base de adhesión profesional', 'Demostración paso a paso', 'Certificado oficial'],
    },
    {
      id: 'nail-art',
      title: 'Seminario: Nail Art & Micro-Pintura Floral',
      level: 'Todos los Niveles',
      badge: 'Exclusivo',
      description: 'Perfeccioná tu pulso y técnica artística. Trazo fino, flores acuarelables, combinación de pigmentos, aplicación de cristales y encapsulado con glitter.',
      duration: '5 horas de práctica',
      includes: ['Pinceles liner específicos', 'Uso de geles de pintura premium', 'Plantillas de práctica', 'Certificado oficial'],
    },
  ];

  return (
    <section id="cursos" className="py-20 bg-white border-t border-stone-100">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#df3b68] font-sans text-xs font-bold tracking-widest uppercase mb-2 block">
            Academia & Formación
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal leading-tight mb-4">
            Cursos y Capacitaciones Profesionales
          </h2>
          <p className="text-stone-600 font-sans text-sm sm:text-base font-light">
            Formate con técnicas actualizadas y atención personalizada en grupos reducidos para garantizar un aprendizaje real.
          </p>
        </div>

        {/* Courses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coursesList.map((course) => (
            <div 
              key={course.id}
              className="bg-[#fff9fa] rounded-2xl p-7 border border-pink-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-sans font-medium text-pink-700 bg-pink-100/70 px-2.5 py-1 rounded-md">
                    {course.level}
                  </span>
                  <span className="text-[11px] font-sans font-semibold text-[#df3b68] uppercase tracking-wider">
                    {course.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-stone-900 font-normal mb-3">
                  {course.title}
                </h3>

                <p className="text-stone-600 font-sans text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  {course.description}
                </p>

                <div className="flex items-center text-xs text-stone-500 mb-6 bg-white p-3 rounded-lg border border-pink-50">
                  <Calendar className="w-4 h-4 text-[#df3b68] mr-2" />
                  <span>{course.duration} — Cupos reducidos</span>
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
                Consultar Próxima Fecha
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
