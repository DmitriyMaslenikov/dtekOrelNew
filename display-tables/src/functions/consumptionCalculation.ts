import { IndicationInterface } from '../interfaces/indication';
import Decimal from 'decimal.js';
Decimal.set({ rounding: 4, precision: 7 });

const consumption = (indication: number, indicationPrevious: number) => {
  return new Decimal(indication - indicationPrevious);
};

export const ConsumptionCalculation = (
  indicationMonth: IndicationInterface,
  indicationPreviousMonth: IndicationInterface
) => {
  const totalConsumptionDay = consumption(
    indicationMonth.orelDay,
    indicationPreviousMonth.orelDay
  ).mul(30);
  const totalConsumptionNight = consumption(
    indicationMonth.orelNight,
    indicationPreviousMonth.orelNight
  ).mul(30);
  const minerConsumptionDay = consumption(
    indicationMonth.minerDay,
    indicationPreviousMonth.minerDay
  );
  const minerConsumptionNight = consumption(
    indicationMonth.minerNight,
    indicationPreviousMonth.minerNight
  );
  const housingWorkerConsumptionDay = consumption(
    indicationMonth.housingWorkerDay,
    indicationPreviousMonth.housingWorkerDay
  );
  const housingWorkerConsumptionNight = consumption(
    indicationMonth.housingWorkerNight,
    indicationPreviousMonth.housingWorkerNight
  );
  const orelConsumptionDay = Decimal.sum(
    totalConsumptionDay,
    -minerConsumptionDay,
    -housingWorkerConsumptionDay
  );
  const orelConsumptionNight = Decimal.sum(
    totalConsumptionNight,
    -minerConsumptionNight,
    -housingWorkerConsumptionNight
  );
  return {
    totalConsumptionDay: totalConsumptionDay.toNumber(),
    totalConsumptionNight: totalConsumptionNight.toNumber(),
    minerConsumptionDay: minerConsumptionDay.toNumber(),
    minerConsumptionNight: minerConsumptionNight.toNumber(),
    housingWorkerConsumptionDay: housingWorkerConsumptionDay.toNumber(),
    housingWorkerConsumptionNight: housingWorkerConsumptionNight.toNumber(),
    orelConsumptionDay: orelConsumptionDay.toNumber(),
    orelConsumptionNight: orelConsumptionNight.toNumber(),
  };
};
