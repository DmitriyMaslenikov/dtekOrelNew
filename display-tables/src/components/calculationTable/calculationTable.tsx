import { Container, TableContainer, Typography, Paper } from '@mui/material';
import { ConsumptionCalculation } from '../../functions/consumptionCalculation';
import { LossesCalculation } from '../../functions/lossesCalculation';
import { AmountsOfLosses } from '../../functions/amountsOfLosses';
import { AmountsWithoutLosses } from '../../functions/amountsWithoutLosses';
import { TotalPaymentAmounts } from '../../functions/totalPaymentAmounts';
import { AmountsOfLossesInterface } from '../../interfaces/amountsOfLosses';
import { AmountsWithoutLossesInterface } from '../../interfaces/amountsWithoutLosses';
import { EnteringGeneralCalculationTable } from './enteringGeneralCalculationTable';
import { EnteringMinerCalculationTable } from './enteringMinerCalculationTable';
import { EnteringHousingWorkerCalculationTable } from './enteringHousingWorkerCalculationTable';
import { useMainPage } from '../mainPage/mainPageContext';

export function CalculationTable() {
  const context = useMainPage();

  const consumption = ConsumptionCalculation(
    context.indicationMonth,
    context.indicationPreviousMonth
  );

  const losses = LossesCalculation(consumption, context.checkMonth);
  const amountsWithoutLosses: AmountsWithoutLossesInterface =
    AmountsWithoutLosses(context.checkMonth, consumption);
  const amountsOfLosses: AmountsOfLossesInterface = AmountsOfLosses(
    context.checkMonth,
    losses
  );
  const totalPaymentAmounts = TotalPaymentAmounts(
    amountsOfLosses,
    amountsWithoutLosses
  );
  const error =
    Math.round(
      (totalPaymentAmounts.housingWorker +
        totalPaymentAmounts.miner +
        totalPaymentAmounts.orel -
        context.checkMonth.invoiceAmount) *
        100
    ) / 100;
  //   console.log('Ошибка расчёта', error);
  //   if (error !== 0) {
  //     console.log('Ошибка расчёта', error);
  //     // context.setErrorDialog(false);
  //   }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Typography variant="h5" component="h2">
          Общая таблица за {context.months[Number(context.month) - 1].title}{' '}
          {context.years[Number(context.year) - 1].title} года
        </Typography>

        <EnteringGeneralCalculationTable
          consumption={consumption}
          losses={losses}
          amountsWithoutLosses={amountsWithoutLosses}
          amountsOfLosses={amountsOfLosses}
          totalPaymentAmounts={totalPaymentAmounts}
        />
      </TableContainer>
      <TableContainer component={Paper}>
        <Typography variant="h5" component="h2">
          Таблица для Шахтёра за{' '}
          {context.months[Number(context.month) - 1].title}{' '}
          {context.years[Number(context.year) - 1].title} года
        </Typography>

        <EnteringMinerCalculationTable
          consumption={consumption}
          losses={losses}
          amountsWithoutLosses={amountsWithoutLosses}
          amountsOfLosses={amountsOfLosses}
          totalPaymentAmounts={totalPaymentAmounts}
        />
      </TableContainer>
      <TableContainer component={Paper}>
        <Typography variant="h5" component="h2">
          Таблица для Жилищника за{' '}
          {context.months[Number(context.month) - 1].title}{' '}
          {context.years[Number(context.year) - 1].title} года
        </Typography>

        <EnteringHousingWorkerCalculationTable
          consumption={consumption}
          losses={losses}
          amountsWithoutLosses={amountsWithoutLosses}
          amountsOfLosses={amountsOfLosses}
          totalPaymentAmounts={totalPaymentAmounts}
        />
      </TableContainer>
    </Container>
  );
}
