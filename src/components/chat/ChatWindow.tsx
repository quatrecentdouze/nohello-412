import React from 'react';
import { useTranslation } from 'react-i18next';
import { Message } from './Message';
import { TypingIndicator } from './TypingIndicator';

type ChatWindowProps = {
  messages: {
    content: string;
    timestamp: string;
    sender: string;
    isReceived: boolean;
    status?: 'sent' | 'waiting';
  }[];
  title: string;
  isGoodExample?: boolean;
  icon?: React.ReactNode;
};

export function ChatWindow({ messages, title, isGoodExample = true, icon }: ChatWindowProps) {
  const { t } = useTranslation();
  
  const bgGradient = isGoodExample
    ? 'bg-gradient-to-br from-purple-900/10 to-purple-900/5'
    : 'bg-gradient-to-br from-red-900/10 to-gray-800/30';

  const borderColor = isGoodExample
    ? 'border-purple-500/10 hover:border-purple-500/30'
    : 'border-red-500/10 hover:border-red-500/30';

  const badgeColor = isGoodExample
    ? 'bg-purple-600/20 text-purple-400'
    : 'bg-red-600/20 text-red-400';

  return (
    <div 
      className={`rounded-xl overflow-hidden transition-all duration-300 
        shadow-lg hover:shadow-xl ${bgGradient} backdrop-blur-sm
        border ${borderColor} group animate-fadeIn`}
    >
      <div className="bg-gray-800/80 p-4 border-b border-gray-700/50">
        <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
          <div className="text-purple-400 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <h3 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h3>
          <span className={`${badgeColor} text-xs px-2 py-1 rounded-full ml-auto whitespace-nowrap`}>
            {isGoodExample ? t('examples.goodExample.badge') : t('examples.badExample.badge')}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {messages.map((message, index) => (
          <Message
            key={index}
            {...message}
            isGoodExample={isGoodExample}
          />
        ))}
        {isGoodExample && <TypingIndicator />}
      </div>
    </div>
  );
}