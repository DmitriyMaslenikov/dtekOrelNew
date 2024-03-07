import { CheckInterface } from '../interfaces/checks';
import { ConsumptionInterface } from '../interfaces/consumption';
import Decimal from 'decimal.js';

Decimal.set({ precision: 7 });

export const AmountsWithoutLosses = (
  checkMonth: CheckInterface,
  consumptions: ConsumptionInterface
) => {
  const priceWithVATDay = Decimal.mul(checkMonth.priceDay, 1.2);
  const priceWithVATNight = Decimal.mul(checkMonth.priceNight, 1.2);
  return {
    paymentAmountTotalDay: Decimal.mul(
      consumptions.totalConsumptionDay,
      checkMonth.priceDay
    ).toNumber(),

    paymentAmountMinerDay: Decimal.mul(
      consumptions.minerConsumptionDay,
      priceWithVATDay
    ).toNumber(),
    paymentAmountHousingWorkerDay: Decimal.mul(
      consumptions.housingWorkerConsumptionDay,
      priceWithVATDay
    ).toNumber(),

    paymentAmountOrelDay: Decimal.mul(
      consumptions.orelConsumptionDay,
      priceWithVATDay
    ).toNumber(),

    paymentAmountTotalNight: Decimal.mul(
      consumptions.totalConsumptionNight,
      priceWithVATNight
    ).toNumber(),

    paymentAmountMinerNight: Decimal.mul(
      consumptions.minerConsumptionNight,
      priceWithVATNight
    ).toNumber(),

    paymentAmountHousingWorkerNight: Decimal.mul(
      consumptions.housingWorkerConsumptionNight,
      priceWithVATNight
    ).toNumber(),

    paymentAmountOrelNight: Decimal.mul(
      consumptions.orelConsumptionNight,
      priceWithVATNight
    ).toNumber(),
  };
};
