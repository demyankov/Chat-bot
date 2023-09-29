export const getActiveFiltersId = (formState: Record<string, string | boolean>): Array<string> => {
  const activeFilterItems = Object.entries(formState).filter(([, value]) => !!value);
  return activeFilterItems.map(([id]) => id);
};

export const getResetFormState = (state: Record<string, string | boolean>): Record<string, boolean> => {
  const resetFormArr = Object.keys(state).map((inputId) => [inputId, false]);
  return Object.fromEntries(resetFormArr);
};
