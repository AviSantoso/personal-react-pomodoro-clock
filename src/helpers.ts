const padToTwo = (num: Number) => ("00" + num).slice(-2);

export const toMS = (total: number) => {
  const minutes = padToTwo(Math.floor(total / 60));
  const seconds = padToTwo(Math.floor(total % 60));
  return { minutes, seconds };
};
