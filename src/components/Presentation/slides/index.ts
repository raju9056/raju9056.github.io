import type { SlideConfig } from '../../../types/presentation';
import { OpeningSlide } from './OpeningSlide';
import { BackgroundSlide } from './BackgroundSlide';
import { JourneySlide } from './JourneySlide';
import { DiscoverySlide } from './DiscoverySlide';
import { SpecializationSlide } from './SpecializationSlide';
import { ImplementationSlide } from './ImplementationSlide';
import { ResultsSlide } from './ResultsSlide';
import { ClosingSlide } from './ClosingSlide';

export const slides: SlideConfig[] = [
  {
    id: 'opening',
    title: 'Opening',
    component: OpeningSlide,
    duration: 60,
    notes: 'Introduce yourself and set the stage for the presentation',
  },
  {
    id: 'background',
    title: 'Background & Mindset',
    component: BackgroundSlide,
    duration: 180,
    notes: 'Establish credibility and share the key observation about data quality',
  },
  {
    id: 'journey',
    title: 'The Journey',
    component: JourneySlide,
    duration: 180,
    notes: 'Present the three-phase journey diagram - visual overview',
  },
  {
    id: 'discovery',
    title: 'Phase 1: Discovery',
    component: DiscoverySlide,
    duration: 120,
    notes: 'Explain how you discovered data quality was the real problem',
  },
  {
    id: 'specialization',
    title: 'Phase 2: Specialization',
    component: SpecializationSlide,
    duration: 120,
    notes: 'Share your educational journey and core engineering principles',
  },
  {
    id: 'implementation',
    title: 'Phase 3: Implementation',
    component: ImplementationSlide,
    duration: 180,
    notes: 'Describe enterprise challenges and your solution architecture',
  },
  {
    id: 'results',
    title: 'Results & Impact',
    component: ResultsSlide,
    duration: 120,
    notes: 'Present metrics and key lessons learned',
  },
  {
    id: 'closing',
    title: 'Apple Alignment & Closing',
    component: ClosingSlide,
    duration: 120,
    notes: 'Show direct alignment with Apple role and close strong',
  },
];

export {
  OpeningSlide,
  BackgroundSlide,
  JourneySlide,
  DiscoverySlide,
  SpecializationSlide,
  ImplementationSlide,
  ResultsSlide,
  ClosingSlide,
};
