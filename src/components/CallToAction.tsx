import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Share2, ArrowRight } from 'lucide-react';
import { ShareModal } from './modal/ShareModal';
import { GridBackground } from './hero/GridBackground';

export function CallToAction() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden">
      <GridBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent py-4 leading-relaxed">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center px-8 py-3
                overflow-hidden font-medium text-white bg-purple-600 rounded-lg 
                hover-glow transition-all duration-300 ease-out hover:scale-102
                active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-purple-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 
                transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 
                bg-purple-500 opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                {t('cta.share')}
              </span>
            </button>

            <a
              href="#examples"
              className="inline-flex items-center justify-center px-6 py-3 text-purple-300 
                hover:text-purple-200 transition-colors duration-300"
            >
              {t('cta.examples')}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <ShareModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}