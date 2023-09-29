import {
  aiMyLogicIcon,
  artsendIcon,
  botHelpIcon,
  botKitsIcon,
  botmakerIcon,
  botsifyIcon,
  buisnessbotIcon,
  botvsemIcon,
  sberbIcon,
} from '../assets';

export interface Platform {
  title: string;
  picture: string;
  text: string;
  link: string;
  id: string;
  isFavorite: boolean;
  date?: string;
}

export const platformsData: Platform[] = [
  {
    title: 'Aimylogic',
    picture: aiMyLogicIcon,
    text: 'Мультиканальная платформа для создания чат- ботов с искусственным интеллектом и голосовых ботов.',
    link: 'https://townsend.pro/',
    id: '1',
    isFavorite: false,
  },
  {
    title: 'Buisnessbot',
    picture: buisnessbotIcon,
    text: 'Мультиканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '2',
    isFavorite: false,
  },
  {
    title: 'Botvsem',
    picture: botvsemIcon,
    text: 'Мультиканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '3',
    isFavorite: false,
  },
  {
    title: 'Artsend',
    picture: artsendIcon,
    text: 'Сервис массовых рассылок сообщений и автоворонок',
    link: 'https://townsend.pro/',
    id: '4',
    isFavorite: false,
  },

  {
    title: 'BotKits',
    picture: botKitsIcon,
    text: 'Мультиканальная платформа для автоматизации общения с клиентами в социальных сетях и мессенджерах.',
    link: 'https://townsend.pro/',
    id: '5',
    isFavorite: false,
  },
  {
    title: 'Botmaker',
    picture: botmakerIcon,
    text: 'Одноканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '6',
    isFavorite: false,
  },
  {
    title: 'Botsify',
    picture: botsifyIcon,
    text: 'Мультиканальная платформа для автоматизации общения с клиентами в мессенджерах.',
    link: 'https://townsend.pro/',
    id: '7',
    isFavorite: false,
  },
  {
    title: 'Sberbb',
    picture: sberbIcon,
    text: 'Мультиканальная платформа для создания чат-ботов с "искусственным интеллектом" и голосовых ботов.',
    link: 'https://townsend.pro/',
    id: '8',
    isFavorite: false,
  },
  {
    title: 'BotHelp1',
    picture: botHelpIcon,
    text: 'Мультиканальная платформа.',
    link: 'https://townsend.pro/',
    id: '9',
    isFavorite: false,
  },
  {
    title: 'Aimylogic',
    picture: aiMyLogicIcon,
    text: 'Мультиканальная платформа для создания чат- ботов с искусственным интеллектом и голосовых ботов.',
    link: 'https://townsend.pro/',
    id: '10',
    isFavorite: false,
  },
  {
    title: 'Buisnessbot',
    picture: buisnessbotIcon,
    text: 'Мультиканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '11',
    isFavorite: false,
  },
  {
    title: 'Botvsem',
    picture: botvsemIcon,
    text: 'Мультиканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '12',
    isFavorite: false,
  },
  {
    title: 'Artsend',
    picture: artsendIcon,
    text: 'Сервис массовых рассылок сообщений и автоворонок',
    link: 'https://townsend.pro/',
    id: '13',
    isFavorite: false,
  },

  {
    title: 'BotKits',
    picture: botKitsIcon,
    text: 'Мультиканальная платформа для автоматизации общения с клиентами в социальных сетях и мессенджерах.',
    link: 'https://townsend.pro/',
    id: '14',
    isFavorite: false,
  },
  {
    title: 'Botmaker',
    picture: botmakerIcon,
    text: 'Одноканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '15',
    isFavorite: false,
  },
  {
    title: 'Азбука',
    picture: botmakerIcon,
    text: 'Одноканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '16',
    isFavorite: false,
  },
  {
    title: 'Яндекс',
    picture: botmakerIcon,
    text: 'Одноканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '17',
    isFavorite: false,
  },
];

// export const mockFilters: ICharacteristic[] = [
//   {
//     id: 'f9506bcf-f30a-42b3-9bd0-ba10bcf693191',
//     filterGroupName: 'Тарифы',
//     filterForPlatforms: [
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c832',
//         filterName: 'Стоимость',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'от 100 ₽/мес до 900 ₽/мес',
//           },
//         ],
//       },
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c833',
//         filterName: 'Стоимость',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'Кор значение',
//           },
//         ],
//       },
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c834',
//         filterName: 'Короткое название',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'чуть длиннее',
//           },
//         ],
//       },
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c835',
//         filterName: 'Чуть длиннее название',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'от 100 ₽/мес до 900 ₽/мес',
//           },
//           {
//             id: 'null',
//             filterItemName: 'от 100 ₽/мес до 900 ₽/мес',
//           },
//         ],
//       },
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c836',
//         filterName: 'Очень длинное название',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'очень очень очень длинноое значение фильтра',
//           },
//         ],
//       },
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c837',
//         filterName: 'Супер мега длинное название фильтра с переносом строки',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'от 100 ₽/мес до 900 ₽/мес',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'f9506bcf-f30a-42b3-9bd0-ba10bcf693198',
//     filterGroupName: 'Фильтр 2',
//     filterForPlatforms: [
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c83933',
//         filterName: 'Стоимость',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'от 100 ₽/мес до 900 ₽/мес',
//           },
//         ],
//       },
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c839',
//         filterName: 'Навание фильтра 2',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'Значение фильтра 1',
//           },
//           {
//             id: 'null',
//             filterItemName: 'Значение фильтра 2',
//           },
//           {
//             id: 'null',
//             filterItemName: 'Значение фильтра 3',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'f9506bcf-f30a-42b3-9bd0-ba10bcf6931910',
//     filterGroupName: 'Тарифы 1',
//     filterForPlatforms: [
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c8311',
//         filterName: 'Стоимость',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'от 100 ₽/мес до 900 ₽/мес',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'f9506bcf-f30a-42b3-9bd0-ba10bcf6931912',
//     filterGroupName: 'Тарифы',
//     filterForPlatforms: [
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c8313',
//         filterName: 'Стоимость',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'от 100 ₽/мес до 900 ₽/мес',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'f9506bcf-f30a-42b3-9bd0-ba10bcf6931914',
//     filterGroupName: 'Тарифы',
//     filterForPlatforms: [
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c8315',
//         filterName: 'Стоимость',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'от 100 ₽/мес до 900 ₽/мес',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'f9506bcf-f30a-42b3-9bd0-ba10bcf6931916',
//     filterGroupName: 'Тарифы',
//     filterForPlatforms: [
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c8317',
//         filterName: 'Стоимость',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'от 100 ₽/мес до 900 ₽/мес',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'f9506bcf-f30a-42b3-9bd0-ba10bcf6931918',
//     filterGroupName: 'Тарифы',
//     filterForPlatforms: [
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c8319',
//         filterName: 'Стоимость',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'от 100 ₽/мес до 900 ₽/мес',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'f9506bcf-f30a-42b3-9bd0-ba10bcf6931920',
//     filterGroupName: 'Тарифы',
//     filterForPlatforms: [
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c8321',
//         filterName: 'Стоимость',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'от 100 ₽/мес до 900 ₽/мес',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'f9506bcf-f30a-42b3-9bd0-ba10bcf6931922',
//     filterGroupName: 'Тарифы',
//     filterForPlatforms: [
//       {
//         id: '22ded895-ee58-4bc0-bad8-238316178c8323',
//         filterName: 'Стоимость',
//         filterItemForPlatforms: [
//           {
//             id: 'null',
//             filterItemName: 'от 100 ₽/мес до 900 ₽/мес',
//           },
//         ],
//       },
//     ],
//   },
// ];
