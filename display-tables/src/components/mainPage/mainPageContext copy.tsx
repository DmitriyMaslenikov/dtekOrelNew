import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useReducer,
} from 'react';
import { getData } from '../../api/data';
import { IndicationInterface } from '../../interfaces/indication';
import { CheckInterface } from '../../interfaces/checks';
import { Start } from '../../functions/start';
import { PreviousMonth } from '../../functions/previousMonth';
import {
  GetIndicatinMonth,
  GetCheckMonth,
} from '../../functions/getIndicatinOrCheckMonth';

const years = (await getData({ title: 'years' })).data;
const months = (await getData({ title: 'months' })).data;

const periodStart = Start(years);
// console.log(
//   'previous'
//   // typeof previous.previousMonth,
//   // typeof previous.previousYear
// );

const yearStart = periodStart.previousYear;
const monthStart = periodStart.previousMonth;

console.log('years', years, months);

const indicationsStart = await GetIndicatinMonth(yearStart, monthStart);
console.log('periodStart', periodStart);
const previous = PreviousMonth(Number(monthStart), Number(yearStart));

const indicationsPreviousStart = await GetIndicatinMonth(
  previous.previousYear,
  previous.previousMonth
);

const checksStart = await GetCheckMonth(yearStart, monthStart);

const defaultValueContext = {
  visibleDialog: true,
  years: [],
  year: { id: 1, title: '2023' },
  yearStart: '1',
  months: [],
  month: { id: 1, title: 'январь' },
  monthStart: '1',
  indicationMonth: indicationsStart,
  indicationPreviousMonth: indicationsPreviousStart,
  checkMonth: checksStart,
  saveData: false,
  dialogText: '',
  visibleErrorDialog: true,
  firstOpeningDialogue: true,

  setYear: (v: string) => {},
  setMonth: (v: string) => {},
  setIndicationMonth: (v: IndicationInterface) => {},
  setCheckMonth: (v: CheckInterface) => {},
  setSaveData: (v: boolean) => {},
  show: (v: string) => {},
  hide: (v: string) => {},
  setErrorDialog: (v: boolean) => {},
  setFirstOpeningDialogue: (v: boolean) => {},
};
const MainPageContext = createContext(defaultValueContext);
export const useMainPage = () => {
  return useContext(MainPageContext);
};

export const MainPageProvider = ({ children }: { children: any }) => {
  useEffect(() => {
    (async () => {
      const years2 = (await getData({ title: 'years' })).data;
      const months2 = (await getData({ title: 'months' })).data;

      // const periodStart = Start(years);

      // const yearStart = periodStart.previousYear;
      // const monthStart = periodStart.previousMonth;
      console.log('years', years2, months2);
    })();
  }, []);

  const [year, setYear] = useState(yearStart);
  const [month, setMonth] = useState(monthStart);

  const [indicationMonth, setIndicationMonth] = useState(indicationsStart);
  const [checkMonth, setCheckMonth] = useState(checksStart);
  const indicationPreviousMonth = useRef(indicationsPreviousStart);
  const [firstOpeningDialogue, setFirstOpeningDialogue] = useState(false);

  const [saveData, setSaveData] = useState(false);
  const [errorDialog, setErrorDialog] = useState(true);

  const reducer = (
    state: { visible: boolean; text: string },
    action: { type: string; text: string }
  ) => {
    switch (action.type) {
      case 'show':
        return { ...state, visible: true, text: action.text };
      case 'hide':
        return { ...state, visible: false };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { visible: false, text: '' });

  const show = (text: string) => dispatch({ type: 'show', text });
  const hide = (text: string) => dispatch({ type: 'hide', text });

  return (
    <MainPageContext.Provider
      value={{
        visibleDialog: state.visible,
        years,
        year,
        yearStart,
        months,
        month,
        monthStart,
        indicationMonth,
        indicationPreviousMonth,
        checkMonth,
        saveData,
        dialogText: state.text,
        visibleErrorDialog: errorDialog,
        firstOpeningDialogue: firstOpeningDialogue,

        setYear,
        setMonth,
        setIndicationMonth,
        setCheckMonth,
        setSaveData,
        show,
        hide,
        setErrorDialog,
        setFirstOpeningDialogue,
      }}
    >
      {children}
    </MainPageContext.Provider>
  );
};
