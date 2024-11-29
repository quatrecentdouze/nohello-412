import React from 'react';

export function AnimatedTitle() {
  return (
    <div className="relative">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 animate-fadeIn">
        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent gradient-animate">
          NoHello
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-center text-gray-300 max-w-3xl mx-auto mb-8 animate-fadeIn [animation-delay:200ms]">
        Simplifiez vos conversations, améliorez votre communication
      </p>
      <p className="text-lg text-center text-gray-400 max-w-2xl mx-auto animate-fadeIn [animation-delay:400ms]">
        Dites adieu aux messages vides et contextuels. Adoptez une communication claire et efficace.
      </p>
    </div>
  );
}