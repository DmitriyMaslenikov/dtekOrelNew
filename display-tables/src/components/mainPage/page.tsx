import {
  Typography,
  Container,
  Paper,
  TableContainer,
  Divider,
} from '@mui/material';
import { useEffect } from 'react';
import { PeriodSelect } from '../periodSelect';

import {
  getIndicationMonth,
  createRowIndication,
  changeIndication,
  getIndicationDtek,
} from '../../api/indications';
import { getCheckMonth, createRowCheck, changeCheck } from '../../api/checks';
import {
  IndicationInterface,
  ChangeIndicationInterface,
} from '../../interfaces/indication';
import { CheckInterface, ChangeCheckInterface } from '../../interfaces/checks';
import { useMutation } from '@tanstack/react-query';
import { useMainPage } from './mainPageContext';
import { CalculationTable } from '../calculationTable/calculationTable';
import { EnteringMeterReadingsTable } from '../indicationTable/enteringMeterReadingsTable';
import { EnteringCheckTable } from '../checkTable/enteringCheckTable';
import { AlertDialog } from '../dialog/dialog';
import DescriptionAlerts from '../alerts/errorAlert';
import CustomizedSnackbars from '../alerts/errorAlert2';
import { v4 as uuidv4 } from 'uuid';
import { PreviousMonth } from '../../functions/previousMonth';

export const Page = () => {
  const context = useMainPage();
  const indicationMutation = useMutation({
    mutationFn: changeIndication,
  });
  const checkMutation = useMutation({
    mutationFn: changeCheck,
  });

  useEffect(() => {
    // console.log('Изменение месяца или года');
    if (
      context.firstOpeningDialogue ||
      String(context.year) !== context.yearStart ||
      String(context.month) !== context.monthStart
    ) {
      context.setFirstOpeningDialogue(true);
      context.show('При изменении периода внесенные изменения будут потеряны.');
    }
  }, [context.year, context.month]);
  useEffect(() => {
    // console.log('Изменение видимости');
    if (!context.visibleDialog) {
      const indications = getIndicationMonth({
        year: context.year,
        month: context.month,
      });
      indications.then((indication) => {
        if (indication.data[0]) {
          context.setIndicationMonth(indication.data[0]);
        } else {
          const newIndicationMonth: IndicationInterface = {
            id: uuidv4(),
            monthId: context.month,
            yearId: context.year,
            orelDay: 0,
            orelNight: 0,
            minerDay: 0,
            minerNight: 0,
            housingWorkerDay: 0,
            housingWorkerNight: 0,
          };
          createRowIndication({ dataIndication: newIndicationMonth });
          context.setIndicationMonth(newIndicationMonth);
        }
      });

      const previous = PreviousMonth(
        Number(context.month),
        Number(context.year)
      );

      const indicationsPrevious = getIndicationMonth({
        year: previous.previousYear,
        month: previous.previousMonth,
      });
      indicationsPrevious.then((indication) => {
        if (indication.data[0]) {
          context.indicationPreviousMonth.current = indication.data[0];
        }
      });

      const checks = getCheckMonth({
        year: context.year,
        month: context.month,
      });
      checks.then((check) => {
        if (check.data[0]) {
          context.setCheckMonth(check.data[0]);
        } else {
          const newCheckMonth: CheckInterface = {
            id: uuidv4(),
            monthId: context.month,
            yearId: context.year,
            checkSpentDay: 0,
            checkSpentNight: 0,
            priceDay: 0,
            priceNight: 0,
            invoiceAmount: 0,
          };
          createRowCheck({ dataCheck: newCheckMonth });
          context.setCheckMonth(newCheckMonth);
        }
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
          {context.years[Number(context.year) - 1].title} года
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
