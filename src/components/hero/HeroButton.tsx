import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function HeroButton() {
  const { t } = useTranslation();

  const scrollToExamples = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const examplesSection = document.getElementById('examples');
    if (examplesSection) {
      const offset = 80;
      const targetPosition = examplesSection.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button 
      onClick={scrollToExamples}
      className="group relative inline-flex items-center justify-center px-8 py-3 mt-8 
        overflow-hidden font-medium text-white bg-purple-600 rounded-lg 
        hover-glow transition-all duration-300 ease-out hover:scale-102
        active:scale-95"
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-purple-700"></span>
      <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-purple-500 opacity-30 group-hover:rotate-90 ease"></span>
      <span className="relative flex items-center gap-2">
        {t('header.cta')}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  );
}