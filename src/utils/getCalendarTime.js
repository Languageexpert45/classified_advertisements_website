
export const getCalendarTime = (value) => {
  const date = new Date(value);
  return date.toLocaleDateString();
};