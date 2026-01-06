import type { PresentationProgressProps } from '../../types/presentation';

export function PresentationProgress({
  currentSlide,
  totalSlides,
  onSlideClick,
}: PresentationProgressProps) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="h-1 bg-[#3c3c3c] relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide Indicators (Dots) */}
      {onSlideClick && (
        <div className="flex items-center justify-center gap-2 py-2 bg-[#252526]">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSlideClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-blue-500 w-6'
                  : index < currentSlide
                  ? 'bg-blue-400/50'
                  : 'bg-[#4b5563]'
              } hover:bg-blue-400`}
              aria-label={`Go to slide ${index + 1}`}
              title={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
