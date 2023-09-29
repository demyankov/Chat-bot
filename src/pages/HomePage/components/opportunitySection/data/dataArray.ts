import { DataOpportunityType } from '../types/dataOpportunityType';

import meditationImage from '../assets/meditation.jpg';

import contactImage from '../assets/contact.jpg';

import lettersImage from '../assets/letters.jpg';

import timeManagmentImage from '../assets/time managment.jpg';

import analyseImage from '../assets/analyse.jpg';

export const dataArray: Array<DataOpportunityType> = [
  {
    title: 'Рай для интровертов',
    description:
      'Все трудности человеческого общения уходят в роботизированное русло. Повышайте свою производительность и концентрируйтесь на самых важных вещах.',
    picture: meditationImage,
    id: '1',
  },
  {
    title: 'Разгрузите службу поддержки',
    description:
      'Доверьте боту ответы на типовые вопросы клиентов. Чат-бот подскажет цену, объяснит, как оплатить заказ и доставку, даст нужную ссылку — сделает всё быстро и без вашего участия.',
    picture: contactImage,
    id: '2',
  },
  {
    title: 'Автоворонки продаж в мессенджерах',
    description:
      'Создавайте воронки и цепочки коммуникаций и превращайте подписчиков в покупателей. Рассказывайте клиентам о важных акциях, вовлекайте в диалог, оставайтесь на связи.',
    picture: lettersImage,
    id: '3',
  },
  {
    title: 'Будьте на связи с клиентами 24/7',
    description:
      'Чат-бот ответит клиентам даже ночью. Обработает входящие запросы, уточнит информацию, примет заказ, сохранит контакты пользователя, если консультанта нет на месте.',
    picture: timeManagmentImage,
    id: '4',
  },
  {
    title: 'Принимайте платежи ',
    description:
      'Зарабатывайте, продавая товары и услуги прямо в боте, получая деньги на свой кошелек Qiwi или ЮMoney.',
    picture: analyseImage,
    id: '5',
  },
];
