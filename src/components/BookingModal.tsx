import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import { X, User, Phone, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [service, setService] = useState(preselectedService || 'Kapping Gel & Nivelación');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('14:00 hs');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const services = [
    'Kapping Gel & Nivelación',
    'Soft Gel Extensions',
    'Nail Art de Autor a Mano Alzada',
    'Esmaltado Semipermanente',
    'Service & Mantenimiento',
    'Consulta por Cursos / Masterclasses',
  ];

  const timeSlots = ['10:00 hs', '12:00 hs', '14:00 hs', '16:00 hs', '18:00 hs'];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `¡Hola Cande! Quiero reservar un turno en Cande Sarobe Studio:%0A%0A` +
      `💅 *Servicio:* ${encodeURIComponent(service)}%0A` +
      `👤 *Nombre:* ${encodeURIComponent(name || 'Cliente')}%0A` +
      `📱 *Teléfono:* ${encodeURIComponent(phone || 'Sin especificar')}%0A` +
      `📅 *Fecha deseada:* ${encodeURIComponent(preferredDate || 'A coordinar')}%0A` +
      `⏰ *Horario preferido:* ${encodeURIComponent(preferredTime)}%0A` +
      (notes ? `📝 *Detalles:* ${encodeURIComponent(notes)}%0A` : '') +
      `%0A¿Tenés disponibilidad para esa fecha? ¡Muchas gracias!`;

    window.open(`https://wa.me/5491112345678?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-pink-100 relative animate-in fade-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-stone-400 hover:text-stone-700 p-2 rounded-full hover:bg-stone-100 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5 sm:mb-6">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#ffeff2] text-[#df3b68] flex items-center justify-center mx-auto mb-2.5">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
            Reservá tu Turno
          </h3>
          <p className="text-xs text-stone-500 font-sans mt-1">
            Completá tus datos y te confirmamos la fecha vía WhatsApp al instante.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
          
          {/* Service selection */}
          <div>
            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Tratamiento Deseado
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-[#fff9fa] border border-pink-200 text-stone-900 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#df3b68]/40"
            >
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Client Name */}
          <div>
            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Nombre y Apellido
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Valentina Gómez"
                className="w-full bg-[#fff9fa] border border-pink-200 text-stone-900 rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#df3b68]/40"
              />
            </div>
          </div>

          {/* WhatsApp Phone */}
          <div>
            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
              WhatsApp / Teléfono
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ej. +54 9 11 2345-6789"
                className="w-full bg-[#fff9fa] border border-pink-200 text-stone-900 rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#df3b68]/40"
              />
            </div>
          </div>

          {/* Preferred Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Fecha Preferida
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-[#fff9fa] border border-pink-200 text-stone-900 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#df3b68]/40"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                Horario Deseado
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-[#fff9fa] border border-pink-200 text-stone-900 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#df3b68]/40"
              >
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Comentarios o fotos de referencia
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="¿Tenés service previo de otro estudio? ¿Querés algún diseño particular?"
              className="w-full bg-[#fff9fa] border border-pink-200 text-stone-900 rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#df3b68]/40 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#df3b68] hover:bg-[#c82855] text-white py-3.5 rounded-xl text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all mt-2"
          >
            CONFIRMAR Y ENVIAR POR WHATSAPP
          </button>
        </form>

      </div>
    </div>
  );
};
