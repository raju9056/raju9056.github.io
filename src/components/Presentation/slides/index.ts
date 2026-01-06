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
    duration: 240,
    notes: 'Establish credibility and share the key observation about data quality',
  },
  {
    id: 'journey',
    title: 'The Journey',
    component: JourneySlide,
    duration: 240,
    notes: 'Present the three-phase journey diagram - visual overview',
  },
  {
    id: 'implementation',
    title: 'Implementation & Architecture',
    component: ImplementationSlide,
    duration: 300,
    notes: 'Describe enterprise challenges, solution architecture, and system diagram with flowchart',
  },
  {
    id: 'closing',
    title: 'Apple Alignment & Closing',
    component: ClosingSlide,
    duration: 180,
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
