import { useEffect, useState, useRef } from 'react';
import mermaid from 'mermaid';
import type { MermaidDiagramProps } from '../../types/presentation';

// Initialize Mermaid with dark theme
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  themeVariables: {
    primaryColor: '#3b82f6',
    primaryTextColor: '#fff',
    primaryBorderColor: '#60a5fa',
    lineColor: '#94a3b8',
    secondaryColor: '#8b5cf6',
    tertiaryColor: '#10b981',
    background: '#1e1e1e',
    mainBkg: '#1e1e1e',
    secondBkg: '#2d2d2d',
    tertiaryBkg: '#3c3c3c',
    textColor: '#e5e7eb',
    border1: '#4b5563',
    border2: '#6b7280',
  },
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: 'basis',
  },
  securityLevel: 'loose',
});

export function MermaidDiagram({ chart, id, className = '' }: MermaidDiagramProps) {
  const [svg, setSvg] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    
    const renderDiagram = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Generate unique ID for this render
        const uniqueId = `mermaid-${id}-${Date.now()}`;
        
        // Render the diagram
        const { svg: renderedSvg } = await mermaid.render(uniqueId, chart);
        
        if (mounted) {
          // Hide the default Mermaid subgraph label
          const styledSvg = renderedSvg.replace(
            '</style>',
            `
            .cluster-label,
            g.cluster > text {
              display: none !important;
            }
            </style>`
          );
          setSvg(styledSvg);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error rendering Mermaid diagram:', error);
        if (mounted) {
          setError(error instanceof Error ? error.message : 'Unknown error');
          setIsLoading(false);
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(renderDiagram, 100);
    
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [chart, id]);

  if (isLoading) {
    return (
      <div
        ref={containerRef}
        className={`mermaid-container flex items-center justify-center ${className}`}
        style={{ minHeight: '400px', width: '100%' }}
      >
        <div className="text-[#9ca3af] text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading diagram...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        ref={containerRef}
        className={`mermaid-container flex items-center justify-center ${className}`}
        style={{ minHeight: '400px', width: '100%' }}
      >
        <div className="text-red-400 p-4 border border-red-500 rounded max-w-md">
          <p className="font-semibold">Error rendering diagram</p>
          <p className="text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`mermaid-container relative ${className} ${isFullscreen ? 'bg-[#1e1e1e] p-8' : ''}`}
      style={{ minHeight: '400px', width: '100%' }}
    >
      <button
        onClick={toggleFullscreen}
        className="absolute top-2 right-2 z-10 p-2 bg-[#2d2d2d] hover:bg-[#3c3c3c] rounded-lg border border-[#4b5563] transition-colors"
        title={isFullscreen ? 'Exit fullscreen' : 'View fullscreen'}
      >
        {isFullscreen ? (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        )}
      </button>
      <div
        className="flex items-center justify-center"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}
