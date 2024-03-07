export const PreviousMonth = (currentMonth: number, currentYear: number) => {
  let previousMonth = currentMonth - 1;
  let previousYear = currentYear;
  if (previousMonth === 0) {
    previousMonth = 12;
    previousYear -= 1;
  }

  return {
    previousMonth: previousMonth.toString(),
    previousYear: previousYear.toString(),
  };
};
