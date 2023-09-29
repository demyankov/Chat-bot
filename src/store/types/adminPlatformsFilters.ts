export interface FilterItemsForPlatforms {
  id: string;
  filterItemName: string;
  fileUrl: string;
}

export interface AdminPlatformsFilter {
  id: string;
  inputType: 'checkbox' | 'radio';
  placeholderFrom: string;
  placeholderTo: string;
  filterName: string;
  descriptionShort: string;
  descriptionLong: string;
  fileUrl: string;
  filterItemsForPlatforms: FilterItemsForPlatforms[];
}

export interface AdminPlatformsFiltersResponse {
  id: string;
  filterGroupName: string;
  filtersForPlatforms: AdminPlatformsFilter[];
}

export interface AdminPlatformsFiltersSlice {
  filters: AdminPlatformsFiltersResponse[];
  loadingState: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: {} | null;
  isLoaderVisible: boolean;
  loadingMessage: string;
  deleteFilterMessage: string;
  isDeleteFormOpen: boolean;
}
