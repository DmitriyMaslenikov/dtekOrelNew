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

const getDatas = async () => {
  const years = (await getData({ title: 'years' })).data;
  const months = (await getData({ title: 'months' })).data;
  const periodStart = Start(years);
  const yearStart = periodStart.previousYear;
  const monthStart = periodStart.previousMonth;
  const indicationsStart: IndicationInterface = await GetIndicatinMonth(
    yearStart,
    monthStart
  );
  const previous = PreviousMonth(Number(monthStart), Number(yearStart));
  const indicationsPreviousStart: IndicationInterface = await GetIndicatinMonth(
    previous.previousYear,
    previous.previousMonth
  );
  const checksStart = await GetCheckMonth(yearStart, monthStart);
  return {
    years,
    months,
    yearStart,
    monthStart,
    indicationsStart,
    indicationsPreviousStart,
    checksStart,
  };
};
const promisData = getDatas();

const indicationsStart: IndicationInterface = {
  id: '',
  monthId: '1',
  yearId: '1',
  orelDay: 0,
  orelNight: 0,
  minerDay: 0,
  minerNight: 0,
  housingWorkerDay: 0,
  housingWorkerNight: 0,
};

const checksStart: CheckInterface = {
  id: '',
  monthId: '1',
  yearId: '1',
  checkSpentDay: 0,
  checkSpentNight: 0,
  priceDay: 0,
  priceNight: 0,
  invoiceAmount: 0,
};

const defaultValueContext = {
  visibleDialog: true,
  years: [{ id: 1, title: '2023' }],
  year: '1',
  // yearStart: '1',
  months: [{ id: 1, title: 'январь' }],
  month: '1',
  // monthStart: '1',
  indicationMonth: indicationsStart,

  indicationPreviousMonth: indicationsStart,
  checkMonth: checksStart,
  saveData: false,
  // dialogText: '',
  // visibleErrorDialog: true,
  firstOpeningDialogue: true,
  setYear: (v: string) => {},
  setMonth: (v: string) => {},
  setIndicationMonth: (v: IndicationInterface) => {},
  setIndicationPreviousMonth: (v: IndicationInterface) => {},
  setCheckMonth: (v: CheckInterface) => {},
  setSaveData: (v: boolean) => {},
  show: (v: string) => {},
  hide: (v: string) => {},
  // setErrorDialog: (v: boolean) => {},
  setFirstOpeningDialogue: (v: boolean) => {},
};
const MainPageContext = createContext(defaultValueContext);
export const useMainPage = () => {
  return useContext(MainPageContext);
};

export const MainPageProvider = ({ children }: { children: any }) => {
  const [year, setYear] = useState('1');
  const [month, setMonth] = useState('1');

  const monthsAndYears = useRef({
    months: [{ id: 1, title: 'январь' }],
    years: [{ id: 1, title: '2023' }],
  });

  const [indicationMonth, setIndicationMonth] = useState(indicationsStart);
  const [checkMonth, setCheckMonth] = useState(checksStart);
  const [indicationPreviousMonth, setIndicationPreviousMonth] =
    useState(indicationsStart);
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

  useEffect(() => {
    (async () => {
      const data = await promisData;

      monthsAndYears.current = { years: data.years, months: data.months };
      setYear(data.yearStart);
      setMonth(data.monthStart);
      setIndicationMonth(data.indicationsStart);
      setIndicationPreviousMonth(data.indicationsPreviousStart);
      setCheckMonth(data.checksStart);
    })();
  }, []);

  return (
    <>
      <div>{}</div>
      <MainPageContext.Provider
        value={{
          visibleDialog: state.visible,
          years: monthsAndYears.current.years,
          year,
          // yearStart,
          months: monthsAndYears.current.months,
          month,
          // monthStart,
          indicationMonth,
          indicationPreviousMonth,

          checkMonth,
          saveData,
          // dialogText: state.text,
          // visibleErrorDialog: errorDialog,
          firstOpeningDialogue: firstOpeningDialogue,
          setYear,
          setMonth,
          setIndicationMonth,
          setIndicationPreviousMonth,
          setCheckMonth,
          setSaveData,
          show,
          hide,
          // setErrorDialog,
          setFirstOpeningDialogue,
        }}
      >
        {children}
      </MainPageContext.Provider>
    </>
  );
};
