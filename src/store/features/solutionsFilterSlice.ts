import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getInputTypeByMultiple } from 'helpers';
import { errorHandler } from 'helpers/errorHandler';
import { isIncluded } from 'helpers/isInclude';
import { ISolutionFilterForm } from 'modules/Admin/types';
import uuid from 'react-uuid';
import { SolutionFilter, SolutionFilterItem } from 'store';
import { setSolutionsFilterByIdAction, updateSolutionsFilterAction } from 'store/actions';

interface ISolutionsFilterSlice {
  currentFilter: SolutionFilter;
  solutionsFilterOptions: SolutionFilterItem[];
  isSolutionsFilterLoading: boolean;
  isSaveModalOpen: boolean;
  solutionsFilterLoadingMessage: string;
  solutionsFilterErrorMessage: string;
}

const initialState: ISolutionsFilterSlice = {
  currentFilter: {} as SolutionFilter,
  solutionsFilterOptions: [],
  isSolutionsFilterLoading: false,
  isSaveModalOpen: false,
  solutionsFilterLoadingMessage: '',
  solutionsFilterErrorMessage: '',
};

const solutionsFilterSlice = createSlice({
  name: 'solutionsFilter',
  initialState,
  reducers: {
    deleteOption: (state, { payload: filterId }: PayloadAction<string>) => {
      const options = state.solutionsFilterOptions.filter(({ id }) => id !== filterId);
      state.solutionsFilterOptions = options;
      const filterItemsForSolutions = options;
      state.currentFilter = {
        ...state.currentFilter,
        filterItemsForSolutions,
      };
    },

    addOption: (state, { payload: filterItemName }: PayloadAction<string>) => {
      const options = state.currentFilter.filterItemsForSolutions.map(({ filterItemName: option }) => option);
      const isAlreadeExist = isIncluded(options, filterItemName);

      if (isAlreadeExist) {
        state.solutionsFilterErrorMessage = 'Опция с данным значением уже существует';
        return;
      }

      const id = uuid();
      const option: SolutionFilterItem = { id, filterItemName };
      state.solutionsFilterOptions = [...state.solutionsFilterOptions, option];
      state.currentFilter = {
        ...state.currentFilter,
        filterItemsForSolutions: state.solutionsFilterOptions,
      };
      state.solutionsFilterErrorMessage = '';
    },

    clearCurrentSolutionsFilter: (state) => {
      state.currentFilter = {} as SolutionFilter;
      state.solutionsFilterOptions = [];
    },

    changeCurrentSolutionsFilter: (state, { payload }: PayloadAction<ISolutionFilterForm>) => {
      const { topPriority, filterName, descriptionLong, multiplicity } = payload;
      const inputType = getInputTypeByMultiple(multiplicity);
      const filterItemsForSolutions = state.solutionsFilterOptions;

      state.currentFilter = {
        ...state.currentFilter,
        topPriority,
        filterName,
        descriptionLong,
        inputType,
        filterItemsForSolutions,
      };
    },

    setIsSaveModalOpen: (state, { payload: isActive }: PayloadAction<boolean>) => {
      state.isSaveModalOpen = isActive;
    },

    clearMessages: (state) => {
      state.solutionsFilterLoadingMessage = '';
      state.solutionsFilterErrorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateSolutionsFilterAction.pending, (state) => {
        state.isSolutionsFilterLoading = true;
        state.solutionsFilterLoadingMessage = '';
        state.solutionsFilterErrorMessage = '';
      })
      .addCase(updateSolutionsFilterAction.fulfilled, (state) => {
        state.isSolutionsFilterLoading = false;
        state.solutionsFilterLoadingMessage = 'Фильтр успешно сохранен';
        state.isSaveModalOpen = false;
      })
      .addCase(updateSolutionsFilterAction.rejected, (state, { error }) => {
        state.isSolutionsFilterLoading = false;
        state.solutionsFilterLoadingMessage = '';
        state.solutionsFilterErrorMessage = errorHandler(error, 'Ошибка сохранения фильтра');
      })
      .addCase(setSolutionsFilterByIdAction.pending, (state) => {
        state.isSolutionsFilterLoading = true;
        state.solutionsFilterErrorMessage = '';
      })
      .addCase(setSolutionsFilterByIdAction.fulfilled, (state, { payload: filter }) => {
        state.isSolutionsFilterLoading = false;
        state.currentFilter = filter;
      })
      .addCase(setSolutionsFilterByIdAction.rejected, (state, { error }) => {
        state.isSolutionsFilterLoading = false;
        state.solutionsFilterErrorMessage = errorHandler(error, 'Ошибка получения фильтра');
      });
  },
});

export const {
  reducer: solutionsFilterReducer,
  actions: {
    deleteOption,
    addOption,
    setIsSaveModalOpen,
    changeCurrentSolutionsFilter,
    clearCurrentSolutionsFilter,
    clearMessages,
  },
} = solutionsFilterSlice;
