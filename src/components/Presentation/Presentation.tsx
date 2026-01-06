import { useState, useEffect, useCallback } from 'react';
import { PresentationSlide } from './PresentationSlide';
import { PresentationControls } from './PresentationControls';
import { PresentationProgress } from './PresentationProgress';
import { slides } from './slides';
import type { PresentationState } from '../../types/presentation';

export function Presentation() {
  const [state, setState] = useState<PresentationState>({
    currentSlide: 0,
    totalSlides: slides.length,
    isFullscreen: false,
  });
  const [direction, setDirection] = useState<'forward' | 'backward' | 'none'>('none');

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > state.currentSlide ? 'forward' : 'backward');
      setState(prev => ({ ...prev, currentSlide: index }));
    }
  }, [state.currentSlide]);

  const nextSlide = useCallback(() => {
    if (state.currentSlide < slides.length - 1) {
      setDirection('forward');
      setState(prev => ({ ...prev, currentSlide: prev.currentSlide + 1 }));
    }
  }, [state.currentSlide]);

  const previousSlide = useCallback(() => {
    if (state.currentSlide > 0) {
      setDirection('backward');
      setState(prev => ({ ...prev, currentSlide: prev.currentSlide - 1 }));
    }
  }, [state.currentSlide]);

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
        setState(prev => ({ ...prev, isFullscreen: true }));
      } catch (err) {
        console.error('Error attempting to enable fullscreen:', err);
      }
    } else {
      try {
        await document.exitFullscreen();
        setState(prev => ({ ...prev, isFullscreen: false }));
      } catch (err) {
        console.error('Error attempting to exit fullscreen:', err);
      }
    }
  }, []);

  const exitPresentation = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    // Could add navigation back to portfolio here if needed
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          previousSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(slides.length - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'Escape':
          if (document.fullscreenElement) {
            exitPresentation();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, previousSlide, goToSlide, toggleFullscreen, exitPresentation]);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setState(prev => ({ ...prev, isFullscreen: !!document.fullscreenElement }));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const CurrentSlideComponent = slides[state.currentSlide].component;

  return (
    <div className="h-full flex flex-col bg-[#1e1e1e] overflow-hidden">
      {/* Slide Content Area */}
      <div className="flex-1 relative overflow-auto">
        <div className="absolute inset-0 overflow-auto">
          <PresentationSlide
            isActive={true}
            direction={direction}
          >
            <CurrentSlideComponent
              isActive={true}
              direction={direction}
            />
          </PresentationSlide>
        </div>
      </div>

      {/* Progress Bar */}
      <PresentationProgress
        currentSlide={state.currentSlide}
        totalSlides={state.totalSlides}
        onSlideClick={goToSlide}
      />

      {/* Controls */}
      <PresentationControls
        currentSlide={state.currentSlide}
        totalSlides={state.totalSlides}
        onPrevious={previousSlide}
        onNext={nextSlide}
        onToggleFullscreen={toggleFullscreen}
        onExit={exitPresentation}
        isFullscreen={state.isFullscreen}
      />

      {/* Keyboard Shortcuts Hint */}
      {!state.isFullscreen && (
        <div className="absolute top-4 right-4 bg-[#2d2d2d] border border-[#3c3c3c] rounded-lg p-3 text-xs text-[#9ca3af] opacity-70 hover:opacity-100 transition-opacity">
          <p className="font-semibold mb-2">Keyboard Shortcuts:</p>
          <div className="space-y-1">
            <p><kbd className="px-2 py-1 bg-[#1e1e1e] rounded">→</kbd> or <kbd className="px-2 py-1 bg-[#1e1e1e] rounded">Space</kbd> Next</p>
            <p><kbd className="px-2 py-1 bg-[#1e1e1e] rounded">←</kbd> Previous</p>
            <p><kbd className="px-2 py-1 bg-[#1e1e1e] rounded">F</kbd> Fullscreen</p>
            <p><kbd className="px-2 py-1 bg-[#1e1e1e] rounded">Esc</kbd> Exit</p>
          </div>
        </div>
      )}
    </div>
  );
}
