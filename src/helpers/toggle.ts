export const toggle = (array: string[], item: string) => {
  const isIncluded = array.includes(item);
  const newArray = isIncluded ? array.filter((element) => element !== item) : [...array, item];

  return newArray;
};
