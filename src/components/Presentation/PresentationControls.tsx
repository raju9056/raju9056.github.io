import { ChevronLeft, ChevronRight, Maximize, Minimize, X } from 'lucide-react';
import type { PresentationControlsProps } from '../../types/presentation';

export function PresentationControls({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onToggleFullscreen,
  onExit,
  isFullscreen,
}: PresentationControlsProps) {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-[#252526] border-t border-[#3c3c3c]">
      {/* Left: Navigation Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="p-2 rounded hover:bg-[#2d2d2d] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous slide"
          title="Previous (←)"
        >
          <ChevronLeft className="w-5 h-5 text-[#cccccc]" />
        </button>
        
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-2 rounded hover:bg-[#2d2d2d] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Next slide"
          title="Next (→ or Space)"
        >
          <ChevronRight className="w-5 h-5 text-[#cccccc]" />
        </button>

        <div className="ml-4 text-sm text-[#cccccc] font-mono">
          Slide {currentSlide + 1} / {totalSlides}
        </div>
      </div>

      {/* Right: Utility Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleFullscreen}
          className="p-2 rounded hover:bg-[#2d2d2d] transition-colors"
          aria-label="Toggle fullscreen"
          title="Fullscreen (F)"
        >
          {isFullscreen ? (
            <Minimize className="w-5 h-5 text-[#cccccc]" />
          ) : (
            <Maximize className="w-5 h-5 text-[#cccccc]" />
          )}
        </button>

        <button
          onClick={onExit}
          className="p-2 rounded hover:bg-[#2d2d2d] transition-colors"
          aria-label="Exit presentation"
          title="Exit (Esc)"
        >
          <X className="w-5 h-5 text-[#cccccc]" />
        </button>
      </div>
    </div>
  );
}
