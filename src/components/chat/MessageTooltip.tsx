import React, { useState } from 'react';
import { Info } from 'lucide-react';

type MessageTooltipProps = {
  isGoodExample: boolean;
  children: React.ReactNode;
};

export function MessageTooltip({ isGoodExample, children }: MessageTooltipProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const tooltipText = isGoodExample
    ? "✓ Message clair et efficace avec contexte"
    : "⚠️ Évitez les messages sans contexte";

  return (
    <div className="relative">
      <div className="relative">
        {children}
        <button
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-40 hover:!opacity-100 transition-opacity"
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
          aria-label="Plus d'informations"
        >
          <Info className="w-4 h-4 text-white/70" />
        </button>
      </div>
      {isTooltipVisible && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-800 text-sm text-white rounded-lg whitespace-nowrap z-10 pointer-events-none animate-fadeIn">
          {tooltipText}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
      )}
    </div>
  );
}