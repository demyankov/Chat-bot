import { PlatfromCard } from './platformCard';

export interface SolutionCard {
  id: string;
  name: string;
  description: string;
  isActive: true;
  type: string;
  priceMin: 0;
  eventPlan: string;
  platformId: string;
  isFavorite: boolean;
  platform: PlatfromCard;
}

export interface PlatformResp {
  id: string;
  name: string;
  description: string;
  fileUrl: string;
  urlWebsite: string;
  isFavorites: boolean;
}

export interface ReviewCardResp {
  id: string;
  date: string;
  text: string;
  author: string;
}

export interface AdminReviewCardResp extends ReviewCardResp {
  platformId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PlatformFilterItem {
  id: string;
  filterItemName: string;
  selected?: boolean;
}

export interface PlatformFilter {
  id: string;
  filterName: string;
  filterItemsForPlatforms: PlatformFilterItem[];
}

export interface Characteristic {
  id: string;
  filterGroupName: string;
  filtersForPlatforms: PlatformFilter[];
}

export interface PlatformDetailsResponse {
  platform: PlatformResp;
  solutions: SolutionCard[];
  reviews: ReviewCardResp[];
  characteristics: Characteristic[];
}

export interface PlatformDetailsState extends PlatformDetailsResponse {
  isLoading: boolean;
  isFavoriteLoading: boolean;
  loadingStatus: string;
  error: string | null;
}

export interface AllPlatformReviewsState {
  loadingStatus: string;
  error: {} | null;
  reviews: AdminReviewCardResp[];
}
