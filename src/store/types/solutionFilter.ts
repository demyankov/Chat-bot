import { INPUTTYPE } from 'mocks';

export interface SolutionFilterItem {
  id: string;
  filterItemName: string;
}

export interface SolutionFilter {
  id: string;
  inputType: keyof typeof INPUTTYPE;
  topPriority: boolean;
  filterName: string;
  descriptionLong: string;
  filterItemsForSolutions: SolutionFilterItem[];
}

export interface UpdateSolutionFilter {
  inputType: keyof typeof INPUTTYPE;
  topPriority: boolean;
  filterName: string;
  descriptionLong: string;
  filterItemsForSolutions: string[];
}

export interface SetCurrentFilterProps {
  filters: SolutionFilter[];
  filterId: string;
}
