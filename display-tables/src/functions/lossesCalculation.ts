import { CheckInterface } from '../interfaces/checks';
import { ConsumptionInterface } from '../interfaces/consumption';
import Decimal from 'decimal.js';

Decimal.set({ precision: 7 });

export const LossesCalculation = (
  consumption: ConsumptionInterface,
  checkMonth: CheckInterface
) => {
  const totalLossesDay = Decimal.sum(
    checkMonth.checkSpentDay,
    -consumption.totalConsumptionDay
  );

  const totalLossesNight = Decimal.sum(
    checkMonth.checkSpentNight,
    -consumption.totalConsumptionNight
  );

  const lossesPerKWDay = totalLossesDay.div(consumption.totalConsumptionDay);

  const lossesPerKWNight = totalLossesNight.div(
    consumption.totalConsumptionNight
  );

  const minerLossesDay = Decimal.mul(
    lossesPerKWDay,
    consumption.minerConsumptionDay
  );
  const housingWorkerLossesDay = Decimal.mul(
    lossesPerKWDay,
    consumption.housingWorkerConsumptionDay
  );
  const orelLossesDay = Decimal.mul(
    lossesPerKWDay,
    consumption.orelConsumptionDay
  );

  const minerLossesNight = Decimal.mul(
    lossesPerKWNight,
    consumption.minerConsumptionNight
  );
  const housingWorkerLossesNight = Decimal.mul(
    lossesPerKWNight,
    consumption.housingWorkerConsumptionNight
  );
  const orelLossesNight = Decimal.mul(
    lossesPerKWNight,
    consumption.orelConsumptionNight
  );

  return {
    totalLossesDay: totalLossesDay.toNumber(),
    totalLossesNight: totalLossesNight.toNumber(),
    minerLossesDay: minerLossesDay.toNumber(),
    minerLossesNight: minerLossesNight.toNumber(),
    housingWorkerLossesDay: housingWorkerLossesDay.toNumber(),
    housingWorkerLossesNight: housingWorkerLossesNight.toNumber(),
    orelLossesDay: orelLossesDay.toNumber(),
    orelLossesNight: orelLossesNight.toNumber(),
  };
};
