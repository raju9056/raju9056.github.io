interface WindowChromeProps {
  title: string;
}

export function WindowChrome({ title }: WindowChromeProps) {
  return (
    <div className="h-8 bg-ide-sidebar flex items-center px-4 border-b border-ide-border">
      {/* Traffic light buttons */}
      <div className="flex items-center gap-2">
        <button
          className="window-button window-button-close"
          aria-label="Close"
        />
        <button
          className="window-button window-button-minimize"
          aria-label="Minimize"
        />
        <button
          className="window-button window-button-maximize"
          aria-label="Maximize"
        />
      </div>

      {/* Title */}
      <div className="flex-1 text-center">
        <span className="text-sm text-ide-text-muted">{title}</span>
      </div>

      {/* Spacer for symmetry */}
      <div className="w-14" />
    </div>
  );
}
