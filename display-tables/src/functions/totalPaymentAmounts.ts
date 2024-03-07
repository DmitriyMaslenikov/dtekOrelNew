import { AmountsWithoutLossesInterface } from '../interfaces/amountsWithoutLosses';
import { AmountsOfLossesInterface } from '../interfaces/amountsOfLosses';
import Decimal from 'decimal.js';

Decimal.set({ precision: 7 });

export const TotalPaymentAmounts = (
  amountsOfLosses: AmountsOfLossesInterface,
  amountsWithoutLosses: AmountsWithoutLossesInterface
) => {
  return {
    orel: Decimal.sum(
      amountsOfLosses.lossPaymentAmountOrelDay +
        amountsOfLosses.lossPaymentAmountOrelNight +
        amountsWithoutLosses.paymentAmountOrelDay +
        amountsWithoutLosses.paymentAmountOrelNight
    ).toNumber(),
    miner: Decimal.sum(
      amountsOfLosses.lossPaymentAmountMinerDay +
        amountsOfLosses.lossPaymentAmountMinerNight +
        amountsWithoutLosses.paymentAmountMinerDay +
        amountsWithoutLosses.paymentAmountMinerNight
    ).toNumber(),
    housingWorker: Decimal.sum(
      amountsOfLosses.lossPaymentAmountHousingWorkerDay +
        amountsOfLosses.lossPaymentAmountHousingWorkerNight +
        amountsWithoutLosses.paymentAmountHousingWorkerDay +
        amountsWithoutLosses.paymentAmountHousingWorkerNight
    ).toNumber(),
  };
};
