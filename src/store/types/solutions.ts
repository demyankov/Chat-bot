import { SortType } from 'modules/Admin/config';

import { SolutionCard } from './platform';

export interface GetSolutionsResponse {
  numberOfPages: string;
  rows: SolutionCard[];
  countRows: number;
  pageNumber: number;
}

export interface SolutionsState {
  solutions: GetSolutionsResponse;
  favoriteSolutions: SolutionCard[];
  viewedSolutions: SolutionCard[];
  loadingState: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  loadingMessage: string;
  error: {} | null;
  isLoaderVisible: boolean;
  sortSolutionKey: string;
  sortSolutionDirection: SortType.ACSENDING | SortType.DECSENDING;
}

export interface AdminSolutionsState {
  solutions: SolutionCard[];
  loadingState: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: {} | null;
  isLoaderVisible: boolean;
  deleteSolutionErrorMessage: string;
  activeItemId: string;
  loadingMessage: string;
  isSearchButtonActive: boolean;
  sortSolutionKey: string;
  sortSolutionDirection: SortType.ACSENDING | SortType.DECSENDING;
}
