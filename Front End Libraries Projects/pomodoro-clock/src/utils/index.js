export const formatNumber = number => {
  return number < 10 ? `0${number}` : number;
};

export const convertToMs = number => {
  return Math.floor(number / 60000);
};
