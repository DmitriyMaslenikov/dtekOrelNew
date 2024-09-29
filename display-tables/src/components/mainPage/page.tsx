import {
  Typography,
  Container,
  Paper,
  TableContainer,
  Divider,
} from '@mui/material';
import { useEffect, useRef } from 'react';
import { PeriodSelect } from '../periodSelect';

import { changeIndication } from '../../api/indications';
import { changeCheck } from '../../api/checks';
import { ChangeIndicationInterface } from '../../interfaces/indication';
import { ChangeCheckInterface } from '../../interfaces/checks';
import { useMutation } from '@tanstack/react-query';
import { useMainPage } from './mainPageContext';
import { CalculationTable } from '../calculationTable/calculationTable';
import { EnteringMeterReadingsTable } from '../indicationTable/enteringMeterReadingsTable';
import { EnteringCheckTable } from '../checkTable/enteringCheckTable';
import { AlertDialog } from '../dialog/dialog';
import DescriptionAlerts from '../alerts/errorAlert';
import CustomizedSnackbars from '../alerts/errorAlert2';

import { PreviousMonth } from '../../functions/previousMonth';
import {
  GetIndicatinMonth,
  GetCheckMonth,
} from '../../functions/getIndicatinOrCheckMonth';

export const Page = () => {
  const context = useMainPage();
  const yearStart = context.year;
  const monthStart = context.month;

  const indicationMutation = useMutation({
    mutationFn: changeIndication,
  });
  const checkMutation = useMutation({
    mutationFn: changeCheck,
  });

  useEffect(() => {
    // console.log('Изменение месяца или года', context.year, context.month);
    if (
      context.firstOpeningDialogue ||
      String(context.year) !== yearStart ||
      String(context.month) !== monthStart
    ) {
      context.setFirstOpeningDialogue(true);
      context.show('При изменении периода внесенные изменения будут потеряны.');
    }
  }, [context.year, context.month]);
  useEffect(() => {
    // console.log('Изменение видимости');
    if (!context.visibleDialog) {
      const indications = GetIndicatinMonth(context.year, context.month);

      indications.then((indication) => {
        context.setIndicationMonth(indication);
      });

      const previous = PreviousMonth(
        Number(context.month),
        Number(context.year)
      );

      const indicationsPrevious = GetIndicatinMonth(
        previous.previousYear,
        previous.previousMonth
      );

      indicationsPrevious.then((indication) => {
        context.setIndicationPreviousMonth(indication);
      });

      const checks = GetCheckMonth(context.year, context.month);

      checks.then((check) => {
        context.setCheckMonth(check);
      });
    }
  }, [context.visibleDialog]);

  useEffect(() => {
    // console.log('Изменение записи');
    // console.log('context.saveData', context.saveData);

    if (context.saveData) {
      // console.log('saveData.Page', context.saveData);
      context.hide('');
      context.setSaveData(false);

      const dataChangeIndication: ChangeIndicationInterface = {
        id: context.indicationMonth.id,
        orelDay: context.indicationMonth.orelDay,
        orelNight: context.indicationMonth.orelNight,
        minerDay: context.indicationMonth.minerDay,
        minerNight: context.indicationMonth.minerNight,
        housingWorkerDay: context.indicationMonth.housingWorkerDay,
        housingWorkerNight: context.indicationMonth.housingWorkerNight,
      };

      indicationMutation.mutate({ dataChangeIndication: dataChangeIndication });

      const dataChangeCheck: ChangeCheckInterface = {
        id: context.checkMonth.id,
        checkSpentDay: context.checkMonth.checkSpentDay,
        checkSpentNight: context.checkMonth.checkSpentNight,
        priceDay: context.checkMonth.priceDay,
        priceNight: context.checkMonth.priceNight,
        invoiceAmount: context.checkMonth.invoiceAmount,
      };

      checkMutation.mutate({ dataChangeCheck: dataChangeCheck });
    }
  }, [context.saveData]);

  return (
    <Container sx={{ paddingLeft: '25px' }}>
      <DescriptionAlerts />
      <CustomizedSnackbars />
      <AlertDialog />

      <Container
        sx={{
          right: 1000,
        }}
        maxWidth="sm"
        fixed
      >
        <Typography variant="h5" component="h2">
          Выбор периода
        </Typography>
        <Divider sx={{ paddingTop: '15px' }} light={false} />
        <PeriodSelect
          data={context.months}
          value={context.month}
          valueChange={context.setMonth}
        />
        <PeriodSelect
          data={context.years}
          value={context.year}
          valueChange={context.setYear}
        />
      </Container>

      <Divider sx={{ paddingTop: '20px' }} />
      <TableContainer component={Paper}>
        <Typography variant="h5" component="h2">
          Таблица для ввода показаний за{' '}
          {context.months[Number(context.month) - 1].title}{' '}
          {context.years[Number(context.year) - 1].title} года.
        </Typography>

        <EnteringMeterReadingsTable />
      </TableContainer>
      <TableContainer component={Paper}>
        <Typography variant="h5" component="h2">
          Таблица для ввода данных счёта за{' '}
          {context.months[Number(context.month) - 1].title}{' '}
          {context.years[Number(context.year) - 1].title} года
        </Typography>
        <EnteringCheckTable />
      </TableContainer>

      <CalculationTable />
    </Container>
  );
};
