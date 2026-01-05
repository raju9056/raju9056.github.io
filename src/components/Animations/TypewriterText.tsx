import { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  texts: string[];              // Array of texts to cycle through
  typingSpeed?: number;         // Speed in ms per character (default: 75)
  deletingSpeed?: number;       // Speed for backspace effect (default: 50)
  pauseDuration?: number;       // Pause after typing before delete (default: 2000)
  pauseBeforeNext?: number;     // Pause before starting next text (default: 200)
  loop?: boolean;               // Whether to loop through texts (default: true)
  showCursor?: boolean;         // Show blinking cursor (default: true)
  cursorChar?: string;          // Cursor character (default: "█")
  className?: string;           // Additional CSS classes
}

export function TypewriterText({
  texts,
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 2000,
  pauseBeforeNext = 200,
  loop = true,
  showCursor = true,
  cursorChar = '█',
  className = '',
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setDisplayText(texts[0]);
      setIsComplete(true);
      return;
    }

    // If animation is complete and not looping, don't restart
    if (isComplete && !loop) {
      return;
    }

    const currentText = texts[currentIndex];

    // Handle pause state
    if (isPaused) {
      // If not looping and we've finished typing the last text, mark as complete
      if (!loop && currentIndex === texts.length - 1 && displayText === currentText) {
        setIsComplete(true);
        return;
      }

      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        if (loop) {
          setIsDeleting(true);
        } else {
          setIsComplete(true);
        }
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    // Handle deleting state
    if (isDeleting) {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        // Finished deleting, move to next text
        const nextIndex = (currentIndex + 1) % texts.length;
        
        const timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentIndex(nextIndex);
        }, pauseBeforeNext);
        return () => clearTimeout(timer);
      }
    }

    // Handle typing state
    if (displayText.length < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      // Finished typing current text
      if (!loop && currentIndex === texts.length - 1) {
        // Last text and not looping - mark as complete
        setIsComplete(true);
      } else {
        // Pause before next action
        setIsPaused(true);
      }
    }
  }, [
    displayText,
    currentIndex,
    isDeleting,
    isPaused,
    isComplete,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    pauseBeforeNext,
    loop,
  ]);

  return (
    <span className={`typewriter-text ${className}`}>
      {displayText}
      {showCursor && !isComplete && (
        <span className="typewriter-cursor animate-cursor-blink">
          {cursorChar}
        </span>
      )}
    </span>
  );
}
