export const INPUTTYPE = {
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  TEXT: 'text',
  NUMBER: 'number',
};

export interface IFilter {
  type: string;
  title: string;
  id: string;
  options: Array<string>;
  placeholders?: Array<string>;
  description?: string;
}

export interface IFilterAll {
  group: string;
  filters: Array<IFilter>;
}

export const filterOptions: IFilter[] = [
  {
    type: INPUTTYPE.NUMBER,
    title: 'Стоимость, ₽',
    id: '0',
    options: [''],
    placeholders: ['от', 'до'],
    description: '',
  },
  {
    type: INPUTTYPE.CHECKBOX,
    title: 'CRM',
    id: '1',
    options: ['amoCRM', 'Битрикс24', 'RetailCRM', '1C Битрикс', 'YClients', 'Мегаплан'],
    description: '',
  },
  {
    type: INPUTTYPE.CHECKBOX,
    title: 'Платежные системы',
    id: '2',
    options: ['ЮKassa', 'Робокасса', 'ЮMoney', 'Prodamus', 'Stripe'],
    description: 'Описание',
  },
  {
    type: INPUTTYPE.CHECKBOX,
    title: 'Сервисы-интеграторы',
    id: '3',
    options: ['Albato', 'Make', 'Apiway', 'Zapier'],
    description: '',
  },
  {
    type: INPUTTYPE.CHECKBOX,
    title: 'Работа с API',
    id: '4',
    options: ['Открытое API', 'Webhook'],
    description: 'Описание',
  },
  {
    type: INPUTTYPE.CHECKBOX,
    title: 'Голосовые помощники',
    id: '5',
    options: ['Алиса', 'Маруся', 'Aimybox Google Assistant', 'Салют'],
    description: '',
  },
  {
    type: INPUTTYPE.RADIO,
    title: 'Статистика',
    id: '22',
    options: ['Да', 'Нет'],
    description: 'Описание',
  },
  {
    type: INPUTTYPE.RADIO,
    title: 'Тарифы',
    id: '6',
    options: ['Бесплатный тариф', 'Триальный период', 'Нет бесплатной версии'],
    description: '',
  },
  {
    type: INPUTTYPE.RADIO,
    title: 'Триальный период',
    id: '7',
    options: ['До 3 дней', 'До 5 дней', 'До 7 дней', 'До 10 дней', 'До 14 дней', 'До 30 дней'],
    description: '',
  },
  {
    type: INPUTTYPE.RADIO,
    title: 'Уровень сложности',
    id: '8',
    options: ['Для новичка', 'Для опытного специалиста', 'Для профессионала'],
    description: '',
  },
  {
    type: INPUTTYPE.RADIO,
    title: 'Техническая поддержка',
    id: '9',
    options: ['24/7', 'Только в рабочее время'],
    description: '',
  },
];

export const filterOptionsAll: Array<IFilterAll[]> = [
  [
    {
      group: 'Тарифы',
      filters: [
        {
          type: INPUTTYPE.NUMBER,
          title: 'Стоимость, ₽',
          id: '0',
          options: [''],
          placeholders: ['от', 'до'],
          description: '',
        },
        {
          type: INPUTTYPE.RADIO,
          title: 'Тарифы',
          id: '1',
          options: ['Бесплатный тариф', 'Триальный период', 'Нет бесплатной версии'],
          description: '',
        },
        {
          type: INPUTTYPE.RADIO,
          title: 'Триальный период',
          id: '2',
          options: ['До 3 дней', 'До 5 дней', 'До 7 дней', 'До 10 дней', 'До 14 дней', 'До 30 дней'],
          description: '',
        },
        {
          type: INPUTTYPE.RADIO,
          title: 'Особенности оплаты',
          id: '3',
          options: [
            'Особенность 1',
            'Особенность 2',
            'Особенность 3',
            'Особенность 4',
            'Особенность 5',
            'Особенность 6',
          ],
          description: 'Описание',
        },
      ],
    },
    {
      group: 'Интеграции',
      filters: [
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'CRM',
          id: '4',
          options: ['amoCRM', 'Битрикс24', 'RetailCRM', '1C Битрикс', 'YClients', 'Мегаплан'],
          description: '',
        },
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Платежные системы',
          id: '5',
          options: ['ЮKassa', 'Робокасса', 'ЮMoney', 'Prodamus', 'Stripe'],
          description: 'Описание',
        },
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Сервисы-интеграторы',
          id: '6',
          options: ['Albato', 'Make', 'Apiway', 'Zapier'],
          description: '',
        },
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Работа с API',
          id: '7',
          options: ['Открытое API', 'Webhook'],
          description: 'Описание',
        },
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Голосовые помощники',
          id: '8',
          options: ['Алиса', 'Маруся', 'Aimybox Google Assistant', 'Салют'],
          description: '',
        },
      ],
    },
  ],
  [
    {
      group: 'Каналы',
      filters: [
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Email',
          id: '9',
          options: ['Gmail', 'Mail.ru', 'Яндекс'],
          description: '',
        },
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'SMS',
          id: '10',
          options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'],
          description: 'Описание',
        },
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Пуши',
          id: '11',
          options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'],
          description: 'Описание',
        },
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Мессенджеры',
          id: '12',
          options: ['Telegram', 'Viber', 'Whatsapp'],
          description: 'Описание',
        },
      ],
    },
    {
      group: 'Работа с подписчиками',
      filters: [
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Работа с подписчиками',
          id: '13',
          options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'],
          description: 'Описание',
        },
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Массовые рассылки',
          id: '14',
          options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'],
          description: 'Описание',
        },
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Каналы массовых рассылок',
          id: '15',
          options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'],
          description: 'Описание',
        },
      ],
    },
    {
      group: 'Способы подписки',
      filters: [
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Способы подписки',
          id: '16',
          options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'],
          description: 'Описание',
        },
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Виджет для сайта',
          id: '17',
          options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'],
          description: '',
        },
      ],
    },
  ],
  [
    {
      group: 'Функционал для настройки чат-ботов',
      filters: [
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Конструктор',
          id: '18',
          options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'],
          description: 'Описание',
        },
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Персонализация контента',
          id: '19',
          options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'],
          description: 'Описание',
        },
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Прикрепление файлов',
          id: '20',
          options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'],
          description: 'Описание',
        },
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Ключевые слова',
          id: '21',
          options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'],
          description: 'Описание',
        },
      ],
    },
    {
      group: 'WhatsApp Business API',
      filters: [
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'WhatsApp Business API',
          id: '22',
          options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'],
          description: 'Описание',
        },
        {
          type: INPUTTYPE.CHECKBOX,
          title: 'Оплата WhatsApp Business API',
          id: '23',
          options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'],
          description: 'Описание',
        },
      ],
    },
    {
      group: 'Иные параметры',
      filters: [
        {
          type: INPUTTYPE.RADIO,
          title: 'Статистика',
          id: '24',
          options: ['Да', 'Нет'],
          description: 'Описание',
        },
        {
          type: INPUTTYPE.RADIO,
          title: 'Закрывающие документы',
          id: '25',
          options: ['Да', 'Нет'],
          description: 'Описание',
        },
        {
          type: INPUTTYPE.RADIO,
          title: 'Техническая поддержка',
          id: '26',
          options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4'],
          description: '',
        },
        {
          type: INPUTTYPE.RADIO,
          title: 'Уровень сложности',
          id: '27',
          options: ['Для новичка', 'Для опытного специалиста', 'Для профессионала'],
          description: '',
        },
      ],
    },
  ],
];
