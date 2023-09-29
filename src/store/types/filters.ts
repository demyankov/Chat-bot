export interface FilterItem {
  id: string;
  filterItemName: string;
}

export interface Filters {
  id: string;
  filterName: string;
  inputType: 'checkbox' | 'radio' | 'text';
  filterItemsForPlatforms: FilterItem[];
  descriptionShort: string;
  descriptionLong: string;
  placeholderFrom: string;
  placeholderTo: string;
}

export interface FilterGroup {
  id: string;
  filterGroupName: string;
  filtersForPlatforms: Filters[];
}
