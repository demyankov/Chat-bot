export const isFormFilled = (object: {}) => {
  const formDataArray = Object.values(object);
  return !formDataArray.length || formDataArray.indexOf('') > 0;
};
