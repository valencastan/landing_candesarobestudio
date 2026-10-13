import type { FC, ReactNode } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCw, 
  SlidersHorizontal, 
  Star, 
  Puzzle, 
  MoreVertical, 
  Minus, 
  Square, 
  X, 
  Plus,
  Lock
} from 'lucide-react';

interface BrowserChromeProps {
  children: ReactNode;
  url?: string;
}

export const BrowserChrome: FC<BrowserChromeProps> = ({ 
  children, 
  url = 'candesarobestudio.com' 
}) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white rounded-none sm:rounded-xl shadow-none sm:shadow-mockup border-0 sm:border sm:border-stone-200/80 transition-all duration-300">
      
      {/* Top Tab Bar (Desktop Browser Top Bar) - Shown on tablet & desktop */}
      <div className="hidden sm:flex bg-[#dbe4ee] px-3 pt-2.5 pb-0 items-center justify-between select-none border-b border-stone-300/60">
        <div className="flex items-center space-x-2 flex-1">
          {/* Active Tab */}
          <div className="relative flex items-center bg-white text-stone-800 text-[12px] md:text-[12.5px] font-medium py-2 px-3.5 rounded-t-lg shadow-sm border-t border-x border-stone-300/50 max-w-[220px] md:max-w-[240px] w-full">
            {/* Pink 'C' Favicon Monogram */}
            <div className="w-4 h-4 rounded-full bg-pink-50 border border-pink-300 flex items-center justify-center mr-2 flex-shrink-0">
              <span className="text-[10px] font-serif font-bold text-[#df3b68] leading-none">C</span>
            </div>
            
            {/* Tab Title */}
            <span className="truncate flex-1 font-sans text-stone-700 font-normal">
              Cande Sarobe Studio
            </span>
            
            {/* Close Tab Icon */}
            <button 
              className="ml-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded p-0.5"
              aria-label="Cerrar pestaña"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* New Tab Button */}
          <button 
            className="text-stone-500 hover:text-stone-800 hover:bg-stone-300/50 p-1.5 rounded-full transition-colors"
            title="Nueva pestaña"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Window Controls (Minimize, Maximize, Close) */}
        <div className="flex items-center space-x-3 text-stone-500 pb-1.5 pr-1">
          <button className="hover:text-stone-800 p-1 hover:bg-stone-300/40 rounded transition-colors" title="Minimizar">
            <Minus className="w-3.5 h-3.5" />
          </button>
          <button className="hover:text-stone-800 p-1 hover:bg-stone-300/40 rounded transition-colors" title="Maximizar">
            <Square className="w-3 h-3" />
          </button>
          <button className="hover:text-red-600 p-1 hover:bg-red-100 rounded transition-colors" title="Cerrar">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Address & Navigation Bar - Desktop / Tablet version */}
      <div className="hidden sm:flex bg-white px-3 py-2 items-center justify-between border-b border-stone-200 gap-3 select-none">
        {/* Navigation Buttons */}
        <div className="flex items-center space-x-1 text-stone-500">
          <button className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 transition-colors" title="Atrás">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 transition-colors" title="Adelante">
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="p-1.5 rounded-full hover:bg-stone-100 text-stone-600 transition-colors" title="Recargar">
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Omnibox / URL Field */}
        <div className="flex-1 max-w-[850px] bg-[#f1f3f4] hover:bg-[#ebedf0] focus-within:bg-white focus-within:ring-2 focus-within:ring-pink-400/40 rounded-full py-1.5 px-3.5 flex items-center justify-between transition-all border border-stone-200/60">
          <div className="flex items-center space-x-2 text-stone-700 flex-1 overflow-hidden">
            <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500 flex-shrink-0" />
            <span className="text-[13px] font-sans text-stone-700 tracking-tight font-normal">
              {url}
            </span>
          </div>
          <button className="text-stone-400 hover:text-amber-500 transition-colors" title="Marcar como favorito">
            <Star className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-2 text-stone-500">
          <button className="p-1.5 rounded-full hover:bg-stone-100 transition-colors" title="Extensiones">
            <Puzzle className="w-4 h-4" />
          </button>
          
          {/* User Profile Avatar */}
          <div className="w-6 h-6 rounded-full bg-pink-100 border border-pink-300 flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-pink-300 transition-all">
            <span className="text-[10px] font-bold text-[#df3b68]">CS</span>
          </div>

          <button className="p-1.5 rounded-full hover:bg-stone-100 transition-colors" title="Personalizar y controlar">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Top URL Bar (Subtle, sleek & doesn't steal space) */}
      <div className="sm:hidden bg-[#f8f9fa] border-b border-stone-200 px-3 py-1.5 flex items-center justify-between">
        <div className="flex items-center space-x-1.5 text-stone-500 text-xs">
          <Lock className="w-3 h-3 text-emerald-600" />
          <span className="font-sans text-stone-700 font-medium text-[11px]">{url}</span>
        </div>
        <div className="w-5 h-5 rounded-full bg-pink-100 border border-pink-300 flex items-center justify-center">
          <span className="text-[9px] font-serif font-bold text-[#df3b68]">C</span>
        </div>
      </div>

      {/* Web Content Render Area */}
      <div className="relative bg-white w-full">
        {children}
      </div>
    </div>
  );
};
