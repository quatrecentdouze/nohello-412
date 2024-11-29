import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChatWindow } from './chat/ChatWindow';
import { MessageSquareX, MessageSquareCode } from 'lucide-react';

export function ExampleSection() {
  const { t } = useTranslation();

  const badExample = t('examples.badExample.messages', { returnObjects: true });
  const goodExample = t('examples.goodExample.messages', { returnObjects: true });

  return (
    <section className="py-16 bg-gray-900" id="examples">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            {t('examples.title')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('examples.subtitle')}
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ChatWindow
            messages={badExample}
            title={t('examples.badExample.title')}
            isGoodExample={false}
            icon={<MessageSquareX className="w-6 h-6" />}
          />
          <ChatWindow
            messages={goodExample}
            title={t('examples.goodExample.title')}
            isGoodExample={true}
            icon={<MessageSquareCode className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
}