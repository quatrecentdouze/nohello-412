import React from 'react';
import { MessageSquare, MessageSquareOff, MessageSquareDashed } from 'lucide-react';

export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-900/20" />
      <div className="absolute inset-0" style={{ opacity: 0.1 }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute transform -translate-y-1/2"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {i % 3 === 0 ? (
              <MessageSquare className="w-8 h-8 text-purple-500/30" />
            ) : i % 3 === 1 ? (
              <MessageSquareOff className="w-8 h-8 text-purple-400/30" />
            ) : (
              <MessageSquareDashed className="w-8 h-8 text-purple-300/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}