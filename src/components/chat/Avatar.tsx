import React from 'react';

type AvatarProps = {
  initial: string;
  color?: string;
};

export function Avatar({ initial, color = "bg-purple-600" }: AvatarProps) {
  return (
    <div 
      className={`${color} w-8 h-8 rounded-full flex items-center justify-center 
        text-white font-semibold text-sm shadow-lg 
        ring-2 ring-purple-400/20 ring-offset-2 ring-offset-gray-900
        transition-all duration-300`}
      title={`Avatar de ${initial}`}
    >
      {initial}
    </div>
  );
}