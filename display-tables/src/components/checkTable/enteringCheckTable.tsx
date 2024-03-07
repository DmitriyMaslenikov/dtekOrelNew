import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Cell } from '../cell';
import { CheckInterface } from '../../interfaces/checks';
import { useMainPage } from '../mainPage/mainPageContext';
import { getCheckYasno } from '../../api/checks';
import { CheckYasnoDialog } from '../dialog/checkYasnoDialog';
import { CheckYasnoInterface } from '../../interfaces/checkYasnoInterface';

const dataStart: CheckYasnoInterface = {
  date: '',
  checkAmount: '',
};

export function EnteringCheckTable() {
  const context = useMainPage();
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [data, setData] = useState(dataStart);
  useEffect(() => {
    setCheckSpentDay(Number(context.checkMonth.checkSpentDay));
    setCheckSpentNight(Number(context.checkMonth.checkSpentNight));
    setPriceDay(Number(context.checkMonth.priceDay));
    setPriceNight(Number(context.checkMonth.priceNight));
    setInvoiceAmount(Number(context.checkMonth.invoiceAmount));
  }, [context.checkMonth]);

  const [checkSpentDay, setCheckSpentDay] = useState(
    context.checkMonth.checkSpentDay
  );
  const [checkSpentNight, setCheckSpentNight] = useState(
    context.checkMonth.checkSpentNight
  );
  const [priceDay, setPriceDay] = useState(context.checkMonth.priceDay);
  const [priceNight, setPriceNight] = useState(context.checkMonth.priceNight);
  const [invoiceAmount, setInvoiceAmount] = useState(
    context.checkMonth.invoiceAmount
  );

  useEffect(() => {
    const value: CheckInterface = {
      id: context.checkMonth.id,
      monthId: context.month,

      yearId: context.year,
      checkSpentDay: checkSpentDay,
      checkSpentNight: checkSpentNight,
      priceDay: priceDay,
      priceNight: priceNight,
      invoiceAmount: invoiceAmount,
    };
    context.setCheckMonth(value);
  }, [checkSpentDay, checkSpentNight, priceDay, priceNight, invoiceAmount]);

  const GetCheck = async () => {
    const data = (await getCheckYasno()).data;
    setData(data);
    setVisibleDialog(true);
  };
  const CloseDialog = () => {
    setVisibleDialog(false);
  };
  const SaveCheck = () => {
    setInvoiceAmount(data.checkAmount);
    setVisibleDialog(false);
  };

  return (
    <>
      <CheckYasnoDialog
        data={data}
        visibleDialog={visibleDialog}
        CloseDialog={CloseDialog}
        SaveIndicatin={SaveCheck}
      />
      <Button onClick={GetCheck}>Получить последний счёт с сайта</Button>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h5" variant="h5">
                Електрична енергія
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                День
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Ночь
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Кількість кВт*г
              </Typography>
            </TableCell>

            <Cell initialValue={checkSpentDay} setValue={setCheckSpentDay} />

            <Cell
              initialValue={checkSpentNight}
              setValue={setCheckSpentNight}
            />
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Ціна/тариф, грн./кВт*г
              </Typography>
            </TableCell>
            <Cell initialValue={priceDay} setValue={setPriceDay} />
            <Cell initialValue={priceNight} setValue={setPriceNight} />
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              colSpan={2}
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Усього по рахунку, грн. з ПДВ
              </Typography>
            </TableCell>
            <Cell initialValue={invoiceAmount} setValue={setInvoiceAmount} />
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
