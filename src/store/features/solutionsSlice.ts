import { createSlice } from '@reduxjs/toolkit';
import { SortType } from 'modules/Admin/config/sort';
import { setSolutionsAction, setViewedSolutionsAction } from 'store/actions';
import { SolutionsState } from 'store/types';

const initialState: SolutionsState = {
  solutions: {
    numberOfPages: '1',
    rows: [],
    countRows: 0,
    pageNumber: 0,
  },
  favoriteSolutions: [],
  viewedSolutions: [],
  loadingState: 'idle',
  loadingMessage: '',
  error: null,
  isLoaderVisible: true,
  sortSolutionKey: 'name',
  sortSolutionDirection: SortType.ACSENDING,
};

const solutionsSlice = createSlice({
  name: 'solutions',
  initialState,
  reducers: {
    setSortKey: (state, action) => {
      state.sortSolutionKey = action.payload;
    },
    setSortDirection: (state, action) => {
      state.sortSolutionDirection = action.payload;
    },
    setSolutionsLoadingMessage: (state, { payload }) => {
      state.loadingMessage = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(setSolutionsAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.isLoaderVisible = true;
        state.loadingMessage = '';
      })
      .addCase(setSolutionsAction.fulfilled, (state, { payload, meta }) => {
        state.loadingState = meta.requestStatus;
        state.isLoaderVisible = false;
        state.solutions.numberOfPages = payload.numberOfPages;
        state.solutions.rows = payload.rows;
        state.solutions.countRows = payload.countRows;
        if (payload.rows.length === 0) {
          state.loadingMessage = 'Нет решений';
        }
      })
      .addCase(setSolutionsAction.rejected, (state, { error, meta }) => {
        state.loadingState = meta.requestStatus;
        state.error = error;
        state.isLoaderVisible = false;
        state.loadingMessage = `${error.message}`;
      })
      .addCase(setViewedSolutionsAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.isLoaderVisible = true;
        state.viewedSolutions = [];
        state.loadingMessage = '';
      })
      .addCase(setViewedSolutionsAction.fulfilled, (state, { payload, meta }) => {
        state.loadingState = meta.requestStatus;
        state.isLoaderVisible = false;
        state.viewedSolutions = payload.solutionsViewed;
        if (payload.solutionsViewed.length === 0) {
          state.loadingMessage = 'Пусто';
        }
      })
      .addCase(setViewedSolutionsAction.rejected, (state, { error, meta }) => {
        state.loadingState = meta.requestStatus;
        state.error = error;
        state.loadingMessage = error.message || 'Ошибка запроса';
        state.isLoaderVisible = false;
      });
  },
});

export const {
  reducer: solutionsReducer,
  actions: { setSolutionsLoadingMessage },
} = solutionsSlice;
