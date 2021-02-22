const padToTwo = (num: Number) => ("00" + num).slice(-2);

export const ToHMS = (total: number) => {
  const hours = padToTwo(Math.floor(total / 3600));
  const minutes = padToTwo(Math.floor((total % 3600) / 60));
  const seconds = padToTwo(Math.floor(total % 60));
  return { hours, minutes, seconds };
};
