import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from './Modal';
import { Facebook, Twitter, Linkedin, Mail, Link2, CheckCircle2 } from 'lucide-react';

type ShareModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const shareUrl = 'https://nohello.412dev.net';

export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const { t } = useTranslation();
  const [copied, setCopied] = React.useState(false);

  const shareButtons = [
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      color: 'bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2]',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(t('modals.share.subtitle'))}&url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      color: 'bg-[#4267B2]/10 hover:bg-[#4267B2]/20 text-[#4267B2]',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5]',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      color: 'bg-purple-600/10 hover:bg-purple-600/20 text-purple-400',
      href: `mailto:?subject=${encodeURIComponent(t('modals.share.title'))}&body=${encodeURIComponent(
        `${t('modals.share.subtitle')}\n\n${shareUrl}`
      )}`
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          {t('modals.share.title')}
        </h2>
        <p className="text-gray-400 mb-6">
          {t('modals.share.subtitle')}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {shareButtons.map((button) => (
            <a
              key={button.name}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${button.color} p-4 rounded-lg flex flex-col items-center gap-2 transition-all duration-300 group hover:scale-105`}
            >
              {button.icon}
              <span className="text-sm font-medium">{button.name}</span>
            </a>
          ))}
        </div>

        <div className="relative">
          <div className="flex gap-2">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
            <button
              onClick={copyToClipboard}
              className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{t('modals.share.copied')}</span>
                </>
              ) : (
                <>
                  <Link2 className="w-5 h-5" />
                  <span>{t('modals.share.copy')}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}