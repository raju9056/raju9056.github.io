// Presentation types

export interface SlideConfig {
  id: string;
  title: string;
  component: React.ComponentType<SlideProps>;
  duration?: number; // suggested duration in seconds
  notes?: string;
}

export interface SlideProps {
  isActive: boolean;
  direction: 'forward' | 'backward' | 'none';
}

export interface PresentationState {
  currentSlide: number;
  totalSlides: number;
  isFullscreen: boolean;
}

export interface MermaidDiagramProps {
  chart: string;
  id: string;
  className?: string;
}

export interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
  onExit: () => void;
  isFullscreen: boolean;
}

export interface PresentationProgressProps {
  currentSlide: number;
  totalSlides: number;
  onSlideClick?: (index: number) => void;
}
