import type { FC } from 'react';
import { MapPin, Instagram, Clock, MessageCircle } from 'lucide-react';

interface ContactProps {
  onOpenBooking: () => void;
}

export const Contact: FC<ContactProps> = ({ onOpenBooking }) => {
  return (
    <section id="contacto" className="py-20 bg-[#fff5f7] border-t border-pink-100">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-6">
            <span className="text-[#df3b68] font-sans text-xs font-bold tracking-widest uppercase mb-2 block">
              Vení a consentirte
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal leading-tight mb-6">
              Reservá tu momento en Cande Sarobe Studio
            </h2>
            <p className="text-stone-600 font-sans text-sm sm:text-base font-light mb-8">
              Atendemos de forma exclusiva con turno previo para brindarte una atención 100% personalizada y sin tiempos de espera.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-white text-[#df3b68] shadow-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-stone-900 font-medium">Ubicación</h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-light font-sans">
                    Estudio privado en zona céntrica (dirección exacta provista al confirmar turno)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-white text-[#df3b68] shadow-sm flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-stone-900 font-medium">Horarios de Atención</h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-light font-sans">
                    Lunes a Viernes: 09:00 a 20:00 hs | Sábados: 09:00 a 18:00 hs
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-white text-[#df3b68] shadow-sm flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-stone-900 font-medium">Instagram</h4>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#df3b68] hover:underline font-light font-sans"
                  >
                    @candesarobestudio
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#df3b68] hover:bg-[#c82855] text-white text-xs font-sans font-semibold tracking-wider uppercase px-7 py-3.5 rounded-xl shadow-md transition-all flex items-center space-x-2"
              >
                <span>RESERVAR TURNO ONLINE</span>
              </button>

              <a
                href="https://wa.me/5491112345678?text=Hola%20Cande!%20Quisiera%20consultar%20por%20turnos%20disponibles"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 text-xs font-sans font-semibold tracking-wider uppercase px-6 py-3.5 rounded-xl shadow-sm transition-all flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WHATSAPP DIRECTO</span>
              </a>
            </div>
          </div>

          {/* Right Column: Studio Card Preview */}
          <div className="lg:col-span-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-pink-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#ffeff2] border-2 border-pink-200 flex items-center justify-center mb-5">
                <span className="font-serif text-3xl font-bold text-[#df3b68]">CS</span>
              </div>
              <h3 className="font-serif text-2xl text-stone-900 font-normal">Cande Sarobe Studio</h3>
              <p className="text-xs text-stone-500 font-sans tracking-widest uppercase mt-1 mb-6">
                Especialista en Manicura & Nail Art de Autor
              </p>

              <div className="w-full bg-[#fff5f7] p-5 rounded-2xl border border-pink-100 text-left mb-6">
                <div className="flex items-center justify-between text-xs text-stone-700 mb-2">
                  <span className="font-medium">Atención con Reserva Previa:</span>
                  <span className="text-[#df3b68] font-bold">Activa</span>
                </div>
                <div className="flex items-center justify-between text-xs text-stone-700 mb-2">
                  <span className="font-medium">Protocolo de Bioseguridad:</span>
                  <span className="text-emerald-700 font-medium">Autoclave Clase B</span>
                </div>
                <div className="flex items-center justify-between text-xs text-stone-700">
                  <span className="font-medium">Medios de Pago:</span>
                  <span className="text-stone-600">Efectivo, MP, Transferencia</span>
                </div>
              </div>

              <p className="text-xs text-stone-500 font-sans italic">
                “Tu cita es un momento de desconexión y mimo para tus manos.”
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
