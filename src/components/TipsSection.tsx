import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbulb, Clock, MessageSquare, Target } from 'lucide-react';
import { LearnMoreModal } from './modal/LearnMoreModal';
import { GridBackground } from './hero/GridBackground';

export function TipsSection() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tips = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('tips.items.0.title'),
      content: t('tips.items.0.content'),
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: t('tips.items.1.title'),
      content: t('tips.items.1.content'),
      color: "from-purple-600/20 to-purple-700/20"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('tips.items.2.title'),
      content: t('tips.items.2.content'),
      color: "from-purple-700/20 to-purple-800/20"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: t('tips.items.3.title'),
      content: t('tips.items.3.content'),
      color: "from-purple-800/20 to-purple-900/20"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden" id="tips">
      <GridBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            {t('tips.title')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('tips.subtitle')}
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="group relative"
              style={{
                animation: 'fadeIn 0.5s ease-out forwards',
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tip.color} rounded-xl blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100`}></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-purple-500/10 p-6 rounded-xl hover:border-purple-500/30 transition-all duration-300 h-full">
                <div className="text-purple-400 mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-300">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                  {tip.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {tip.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 border border-purple-500/20 hover:border-purple-500/30"
          >
            {t('tips.learnMore')}
          </button>
        </div>
      </div>

      <LearnMoreModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}