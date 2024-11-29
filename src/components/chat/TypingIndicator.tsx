import React from 'react';

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 w-20 opacity-70">
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}