import { TabsRoutes } from 'modules/Admin/router/routes';
import { AxiosResponse, AxiosError } from 'axios';
import { PlatformFilter } from 'store';

export interface CreatePlatformRequest {
  name: string;
  description: string;
  urlWebsite: string;
  priceMin: number;
  priceMax: number;
  file: File | null | string;
  isActive: boolean;
}

export enum CreatePlatformFields {
  name = 'Название платформы',
  platfomLink = 'Ссылка на платформу',
  description = 'Краткое описание платформы',
  price = 'Стоимость, ₽',
  downloadFile = 'Загрузить логотип',
}

export enum CreatePlatformFieldsName {
  name = 'name',
  platfomLink = 'urlWebsite',
  description = 'description',
  priceFrom = 'priceMin',
  priceTo = 'priceMax',
  downloadFile = 'file',
}

export enum PlatformsTabs {
  mainOptions = 'Основные настройки',
  filtersOptions = 'Настройки фильтров',
  reviews = 'Отзывы',
  workWithPlatforms = 'Работа с платформами',
  filtersDirectory = 'Справочник фильтров',
}

export enum AdminPlatformPath {
  platforms = 'Платформы',
  platform = 'Платформа',
  createPlatform = 'Создание платформы',
}

export interface PlatformsTabsList {
  id: number;
  tabName: PlatformsTabs;
  tabLink: TabsRoutes;
}

export interface FilterItemsRequest {
  idFilterItems: string[];
}

export interface FilterItemsResponse {
  idFilterItems: string[];
  platformId: string;
}

export interface IFiltersForPlatforms {
  filtersForPlatforms: PlatformFilter[];
  filterName: string;
}

export interface FiltersIdStatus {
  [key: string]: boolean | string;
}

export interface MainOptions {
  name: string;
  description: string;
  priceMin: number | string;
  priceMax: number | string;
  urlWebsite: string;
}

export interface MainOptionsRequest extends MainOptions {
  file?: File | null;
  isActive: boolean;
}

export interface MainOptionsFormFiels extends MainOptions {
  file: null | File;
  fileUrl?: string;
}

export interface MainOptionsResponse extends MainOptions {
  isActive: boolean;
  fileUrl: string;
  id: number;
}

export enum MainOptionsFielsdId {
  nameId = 'main-options-name',
  linkId = 'main-options-link',
  descriptionId = 'main-options-description',
  priceFromId = 'main-options-price-from',
  priceToid = 'main-options-price-to',
  fileId = 'main-options-file',
}

export function isAxiosResponseError(error: any): error is AxiosResponse<any> {
  return error && typeof error === 'object' && 'data' in error;
}

export function isAxiosError(error: any): error is AxiosError {
  return error.isAxiosError === true;
}
