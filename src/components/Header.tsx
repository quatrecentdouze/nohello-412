import React from 'react';
import { MessageSquareOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BackgroundPattern } from './hero/BackgroundPattern';
import { GridBackground } from './hero/GridBackground';
import { AnimatedTitle } from './hero/AnimatedTitle';
import { HeroButton } from './hero/HeroButton';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="relative min-h-[80vh] flex flex-col items-center justify-center py-16 overflow-hidden">
      <GridBackground />
      <BackgroundPattern />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8 animate-fadeIn">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-purple-600/20 rounded-full"></div>
            <MessageSquareOff className="relative w-16 h-16 text-purple-400" />
          </div>
        </div>

        <div className="relative">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 animate-fadeIn">
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent gradient-animate">
              {t('header.title')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-center text-gray-300 max-w-3xl mx-auto mb-8 animate-fadeIn [animation-delay:200ms]">
            {t('header.subtitle')}
          </p>
          <p className="text-lg text-center text-gray-400 max-w-2xl mx-auto animate-fadeIn [animation-delay:400ms]">
            {t('header.description')}
          </p>
        </div>

        <div className="flex justify-center animate-fadeIn [animation-delay:600ms]">
          <HeroButton />
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </header>
  );
}