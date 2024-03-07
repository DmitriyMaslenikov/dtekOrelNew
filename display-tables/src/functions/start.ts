import { PreviousMonth } from './previousMonth';
export const Start = (years: { id: string; title: string }[]) => {
  const date = new Date();
  const yearsMap = new Map();
  const currentMonth = date.getMonth() + 1;
  const currentYearTitle = date.getFullYear();

  years.map((year: { id: string; title: string }) => {
    yearsMap.set(year.title, year.id);
  });

  const previousYear = yearsMap.get(currentYearTitle.toString());

  return PreviousMonth(currentMonth, previousYear);
};
