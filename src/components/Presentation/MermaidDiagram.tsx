import { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    
    const renderDiagram = async () => {
      if (!containerRef.current) return;
      
      try {
        setIsLoading(true);
        setError(null);
        
        // Clear any existing content
        containerRef.current.innerHTML = '';
        
        // Generate unique ID for this render
        const uniqueId = `mermaid-${id}-${Date.now()}`;
        
        // Render the diagram
        const { svg } = await mermaid.render(uniqueId, chart);
        
        if (containerRef.current && mounted) {
          containerRef.current.innerHTML = svg;
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

  return (
    <div
      ref={containerRef}
      className={`mermaid-container flex items-center justify-center ${className}`}
      style={{ minHeight: '400px', width: '100%' }}
    >
      {isLoading && (
        <div className="text-[#9ca3af] text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading diagram...</p>
        </div>
      )}
      {error && (
        <div className="text-red-400 p-4 border border-red-500 rounded max-w-md">
          <p className="font-semibold">Error rendering diagram</p>
          <p className="text-sm mt-2">{error}</p>
        </div>
      )}
    </div>
  );
}
