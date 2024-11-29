import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' }
];

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 
          text-gray-400 hover:text-purple-400 transition-all duration-300 border border-gray-700/50 hover:border-purple-500/30"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">{languages.find(lang => lang.code === i18n.language)?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-gray-800 shadow-lg border border-gray-700/50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700/50 transition-colors duration-200
                ${i18n.language === lang.code ? 'text-purple-400 bg-purple-500/10' : 'text-gray-300'}`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}