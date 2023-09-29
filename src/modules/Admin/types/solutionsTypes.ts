import { SolutionsFilterFormFields } from '../components/SolutionFilterOptions/config';
import { SolutionSettingsTabs } from '../layout/SolutionSettingsLayout/config';
import { SolutionsFiltersTabs } from '../layout/SolutionsFiltersLayout/config';
import { SolutionsTabs } from '../layout/SolutionsLayout/config';
import { TabsRoutes } from '../router/routes';

export interface SolutionsTabsList {
  id: number;
  tabName: SolutionsTabs;
  tabLink: TabsRoutes;
}

export interface SolutionsFiltersTabsList {
  id: number;
  tabName: SolutionsFiltersTabs;
  tabLink: TabsRoutes;
}

export interface ISolutionFilterForm {
  [SolutionsFilterFormFields.filterName]: string;
  [SolutionsFilterFormFields.descriptionLong]: string;
  [SolutionsFilterFormFields.filterItemName]: string;
  [SolutionsFilterFormFields.multiplicity]: boolean;
  [SolutionsFilterFormFields.topPriority]: boolean;
}

export interface SolutionSettingsTabsList {
  id: number;
  tabName: SolutionSettingsTabs;
  tabLink: TabsRoutes;
}
