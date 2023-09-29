import { TelegramIcon, VkIcon, WhatsAppIcon } from 'assets';
import { FooterAnchors } from 'pages';

export const footerRoutes = [
  {
    to: FooterAnchors.REVIEWS,
    text: 'Отзывы',
  },
  {
    to: FooterAnchors.FAQ,
    text: 'FAQ',
  },
  {
    to: FooterAnchors.SUPPORT,
    text: 'Поддержка',
  },
];

export const socials = [
  {
    to: 'https://whatsapp.com',
    img: WhatsAppIcon,
  },
  {
    to: 'https://vk.com',
    img: VkIcon,
  },
  {
    to: 'https://t.me',
    img: TelegramIcon,
  },
];
