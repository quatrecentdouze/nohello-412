import React from 'react';
import { Avatar } from './Avatar';

type MessageProps = {
  content: string;
  timestamp: string;
  sender: string;
  isReceived?: boolean;
  status?: 'sent' | 'waiting';
  isGoodExample?: boolean;
};

export function Message({
  content,
  timestamp,
  sender,
  isReceived = false,
  status = 'sent',
  isGoodExample = true
}: MessageProps) {
  const isSenderAlice = sender === 'Alice';
  const bubbleGradient = isSenderAlice
    ? isGoodExample
      ? 'from-purple-600 to-purple-500'
      : 'from-red-600/70 to-red-500/70'
    : 'from-gray-800 to-gray-700';

  return (
    <div 
      className={`flex gap-3 ${isSenderAlice ? 'justify-start' : 'justify-end'} group message-enter`}
      style={{
        opacity: isGoodExample ? 1 : 0.7
      }}
    >
      {isSenderAlice && (
        <div className="transition-transform duration-200 group-hover:scale-110">
          <Avatar 
            initial={sender[0]} 
            color={isGoodExample ? "bg-purple-600" : "bg-red-600/70"}
          />
        </div>
      )}
      
      <div className="max-w-[80%]">
        <div
          className={`rounded-2xl px-4 py-3 bg-gradient-to-br ${bubbleGradient} 
            shadow-lg transition-all duration-300 
            hover:shadow-xl hover:scale-[1.02] relative
            ${!isGoodExample ? 'opacity-90 hover:opacity-100' : ''}`}
        >
          <p className="text-white leading-relaxed">
            {content.split(' ').map((word, i) => (
              <span
                key={i}
                className={word.startsWith('#') ? 'text-purple-200 font-medium' : ''}
              >
                {word}{' '}
              </span>
            ))}
          </p>
        </div>
        
        <div className="flex items-center gap-2 mt-1 px-2">
          <span className="text-xs text-gray-400">{timestamp}</span>
        </div>
      </div>

      {!isSenderAlice && (
        <div className="transition-transform duration-200 group-hover:scale-110">
          <Avatar 
            initial={sender[0]} 
            color="bg-gray-700"
          />
        </div>
      )}
    </div>
  );
}