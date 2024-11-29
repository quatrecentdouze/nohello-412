import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from './Modal';
import { MessageSquare, Clock, Target, ThumbsUp } from 'lucide-react';

type LearnMoreModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <Clock className="w-5 h-5" />,
      ...t('modals.learnMore.benefits.time', { returnObjects: true })
    },
    {
      icon: <Target className="w-5 h-5" />,
      ...t('modals.learnMore.benefits.targeting', { returnObjects: true })
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      ...t('modals.learnMore.benefits.clarity', { returnObjects: true })
    },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      ...t('modals.learnMore.benefits.professionalism', { returnObjects: true })
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          {t('modals.learnMore.title')}
        </h2>
        <p className="text-gray-400 mb-6">
          {t('modals.learnMore.subtitle')}
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-gray-800/50 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-purple-400">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-white">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-purple-600/10 rounded-lg p-4 border border-purple-500/20">
          <h3 className="font-semibold text-white mb-2">
            {t('modals.learnMore.howTo')}
          </h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            {t('modals.learnMore.tips', { returnObjects: true }).map((tip: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}