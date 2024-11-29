import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-purple-500/10 pt-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
              {t('footer.copyright')}
            </p>
          </div>
          <div>
            <a 
              href="https://github.com/quatrecentdouze/nohello-412" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 
                text-gray-400 hover:text-purple-400 transition-all duration-300 border border-gray-700/50 hover:border-purple-500/30"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}