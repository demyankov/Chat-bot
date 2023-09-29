// Словарь соответсвия хостов на стендах - фронт: бек
const PORTS_MAP = {
  // release
  'node.twnsnd.online:32043': 'node.twnsnd.online:31033',

  // dev
  'nodedev.twnsnd.online:32044': 'nodedev.twnsnd.online:31034',

  // test
  'nodeqa.twnsnd.online:32045': 'nodeqa.twnsnd.online:31035',
} as const;

// Дефолтный хост для запросов с localhost
// Или если фронтовый стенд переехал на другой хост, которого нет в словаре
const DEFAULT_HOST = 'nodedev.twnsnd.online:31034';

const getHost = () => {
  const {
    location: { host },
  } = window;

  return PORTS_MAP[host as keyof typeof PORTS_MAP] || DEFAULT_HOST;
};

export const baseURL = `http://${getHost()}/api` as const;
