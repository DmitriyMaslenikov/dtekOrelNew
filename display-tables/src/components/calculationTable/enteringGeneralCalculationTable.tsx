import { useRef } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { Cell, Cell2 } from './cell';
import { AmountsOfLossesInterface } from '../../interfaces/amountsOfLosses';
import { AmountsWithoutLossesInterface } from '../../interfaces/amountsWithoutLosses';
import { ConsumptionInterface } from '../../interfaces/consumption';
import { LossesInterface } from '../../interfaces/losses';
import { TotalPaymentAmountsInterface } from '../../interfaces/totalPaymentAmounts';
import { useMainPage } from '../mainPage/mainPageContext';
import { useReactToPrint } from 'react-to-print';

export function EnteringGeneralCalculationTable({
  consumption,
  losses,
  amountsWithoutLosses,
  amountsOfLosses,
  totalPaymentAmounts,
}: {
  consumption: ConsumptionInterface;
  losses: LossesInterface;
  amountsWithoutLosses: AmountsWithoutLossesInterface;
  amountsOfLosses: AmountsOfLossesInterface;
  totalPaymentAmounts: TotalPaymentAmountsInterface;
}) {
  const context = useMainPage();

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        ref={componentRef}
      >
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              rowSpan={2}
              sx={{
                border: 2,
              }}
            >
              <Typography component="h5" variant="h5">
                .
              </Typography>
            </TableCell>
            <TableCell
              colSpan={2}
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Общий счётчик
              </Typography>
            </TableCell>
            <TableCell
              colSpan={2}
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Шахтёр
              </Typography>
            </TableCell>
            <TableCell
              colSpan={2}
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Жилищник
              </Typography>
            </TableCell>
            <TableCell
              colSpan={2}
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Орель
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
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
                Потребление за месяц в кВт
              </Typography>
            </TableCell>
            <Cell value={consumption.totalConsumptionDay} />
            <Cell value={consumption.totalConsumptionNight} />
            <Cell value={consumption.minerConsumptionDay} />
            <Cell value={consumption.minerConsumptionNight} />
            <Cell value={consumption.housingWorkerConsumptionDay} />
            <Cell value={consumption.housingWorkerConsumptionNight} />
            <Cell value={consumption.orelConsumptionDay} />
            <Cell value={consumption.orelConsumptionNight} />
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Цена за кВт (без НДС)
              </Typography>
            </TableCell>
            <Cell value={context.checkMonth.priceDay} />
            <Cell value={context.checkMonth.priceNight} />
            <Cell value={context.checkMonth.priceDay} />
            <Cell value={context.checkMonth.priceNight} />
            <Cell value={context.checkMonth.priceDay} />
            <Cell value={context.checkMonth.priceNight} />
            <Cell value={context.checkMonth.priceDay} />
            <Cell value={context.checkMonth.priceNight} />
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Потери в кВт
              </Typography>
            </TableCell>
            <Cell value={losses.totalLossesDay} />
            <Cell value={losses.totalLossesNight} />
            <Cell value={losses.minerLossesDay} />
            <Cell value={losses.minerLossesNight} />
            <Cell value={losses.housingWorkerLossesDay} />
            <Cell value={losses.housingWorkerLossesNight} />
            <Cell value={losses.orelLossesDay} />
            <Cell value={losses.orelLossesNight} />
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Сумма оплаты без потерь грн.
              </Typography>
            </TableCell>
            <Cell value={amountsWithoutLosses.paymentAmountTotalDay} />
            <Cell value={amountsWithoutLosses.paymentAmountTotalNight} />
            <Cell value={amountsWithoutLosses.paymentAmountMinerDay} />
            <Cell value={amountsWithoutLosses.paymentAmountMinerNight} />
            <Cell value={amountsWithoutLosses.paymentAmountHousingWorkerDay} />
            <Cell
              value={amountsWithoutLosses.paymentAmountHousingWorkerNight}
            />
            <Cell value={amountsWithoutLosses.paymentAmountOrelDay} />
            <Cell value={amountsWithoutLosses.paymentAmountOrelNight} />
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Сумма оплаты потерь грн.
              </Typography>
            </TableCell>
            <Cell value={amountsOfLosses.lossPaymentAmountTotalDay} />
            <Cell value={amountsOfLosses.lossPaymentAmountTotalNight} />
            <Cell value={amountsOfLosses.lossPaymentAmountMinerDay} />
            <Cell value={amountsOfLosses.lossPaymentAmountMinerNight} />
            <Cell value={amountsOfLosses.lossPaymentAmountHousingWorkerDay} />
            <Cell value={amountsOfLosses.lossPaymentAmountHousingWorkerNight} />
            <Cell value={amountsOfLosses.lossPaymentAmountOrelDay} />
            <Cell value={amountsOfLosses.lossPaymentAmountOrelNight} />
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Общая сумма оплаты за месяц грн.
              </Typography>
            </TableCell>
            <Cell2 value={context.checkMonth.invoiceAmount} />
            <Cell2 value={totalPaymentAmounts.miner} />
            <Cell2 value={totalPaymentAmounts.housingWorker} />
            <Cell2 value={totalPaymentAmounts.orel} />
          </TableRow>
        </TableBody>
      </Table>
      <button onClick={handlePrint}>Print this table!</button>
    </>
  );
}
