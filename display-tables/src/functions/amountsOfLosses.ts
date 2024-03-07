import { CheckInterface } from '../interfaces/checks';
import { LossesInterface } from '../interfaces/losses';
import Decimal from 'decimal.js';

Decimal.set({ precision: 7 });

export const AmountsOfLosses = (
  checkMonth: CheckInterface,
  losses: LossesInterface
) => {
  const priceWithVATDay = Decimal.mul(checkMonth.priceDay, 1.2);
  const priceWithVATNight = Decimal.mul(checkMonth.priceNight, 1.2);

  return {
    lossPaymentAmountTotalDay: Decimal.mul(
      losses.totalLossesDay,
      priceWithVATDay
    ).toNumber(),

    lossPaymentAmountMinerDay: Decimal.mul(
      losses.minerLossesDay,
      priceWithVATDay
    ).toNumber(),
    lossPaymentAmountHousingWorkerDay: Decimal.mul(
      losses.housingWorkerLossesDay,
      priceWithVATDay
    ).toNumber(),

    lossPaymentAmountOrelDay: Decimal.mul(
      losses.orelLossesDay,
      priceWithVATDay
    ).toNumber(),

    lossPaymentAmountTotalNight: Decimal.mul(
      losses.totalLossesNight,
      priceWithVATNight
    ).toNumber(),

    lossPaymentAmountMinerNight: Decimal.mul(
      losses.minerLossesNight,
      priceWithVATNight
    ).toNumber(),

    lossPaymentAmountHousingWorkerNight: Decimal.mul(
      losses.housingWorkerLossesNight,
      priceWithVATNight
    ).toNumber(),

    lossPaymentAmountOrelNight: Decimal.mul(
      losses.orelLossesNight,
      priceWithVATNight
    ).toNumber(),
  };
};
