import { SortType } from 'modules/Admin/config';

import { PlatfromCard } from './platformCard';

export interface GetPlatformsResponse {
  numberOfPages: string;
  rows: PlatfromCard[];
  countRows: number;
  pageNumber: number;
}

export interface PlatformsState {
  platforms: GetPlatformsResponse;
  favoritePlatforms: PlatfromCard[];
  viewedPlatforms: PlatfromCard[];
  platformsForDeletingFromViewed: string[];
  loadingState: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  isSelectMode: boolean;
  loadingMessage: string;
  error: {} | null;
  isLoaderVisible: boolean;
  sortKey: string;
  sortDirection: SortType.ACSENDING | SortType.DECSENDING;
}

export interface AdminPlatformsState {
  platforms: PlatfromCard[];
  loadingState: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: {} | null;
  isLoaderVisible: boolean;
  isKeyButtonActive: boolean;
  loadingMessage: string;
  sortKey: string;
  sortDirection: SortType.ACSENDING | SortType.DECSENDING;
}
