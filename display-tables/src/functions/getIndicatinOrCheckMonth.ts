import { getIndicationMonth, createRowIndication } from '../api/indications';
import { getCheckMonth, createRowCheck } from '../api/checks';
import { IndicationInterface } from '../interfaces/indication';
import { CheckInterface } from '../interfaces/checks';
import { v4 as uuidv4 } from 'uuid';

export const GetIndicatinMonth = async (year: string, month: string) => {
  const indication = await getIndicationMonth({
    year: year,
    month: month,
  });

  let res;
  if (indication.data[0]) {
    res = indication.data[0];
  } else {
    const newIndicationMonth: IndicationInterface = {
      id: uuidv4(),
      monthId: month,
      yearId: year,
      orelDay: 0,
      orelNight: 0,
      minerDay: 0,
      minerNight: 0,
      housingWorkerDay: 0,
      housingWorkerNight: 0,
    };
    createRowIndication({ dataIndication: newIndicationMonth });
    res = newIndicationMonth;
  }
  return res;
};

export const GetCheckMonth = async (year: string, month: string) => {
  const check = await getCheckMonth({
    year: year,
    month: month,
  });
  let res;

  if (check.data[0]) {
    res = check.data[0];
  } else {
    const newCheckMonth: CheckInterface = {
      id: uuidv4(),
      monthId: month,
      yearId: year,
      checkSpentDay: 0,
      checkSpentNight: 0,
      priceDay: 0,
      priceNight: 0,
      invoiceAmount: 0,
    };
    createRowCheck({ dataCheck: newCheckMonth });
    res = newCheckMonth;
  }

  return res;
};
