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
import { IndicationInterface } from '../../interfaces/indication';
import { useMainPage } from '../mainPage/mainPageContext';
import { getIndicationDtek } from '../../api/indications';
import { IndicationDtekDialog } from '../dialog/indicationDtekDialog';

export function EnteringMeterReadingsTable() {
  // console.log('Изменение записи');
  const context = useMainPage();
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [data, setData] = useState({
    date: '',
    indicationDay: '',
    indicationNight: '',
  });

  useEffect(() => {
    setOrelDay(Number(context.indicationMonth.orelDay));
    setOrelNight(Number(context.indicationMonth.orelNight));
    setMinerDay(Number(context.indicationMonth.minerDay));
    setMinerNight(Number(context.indicationMonth.minerNight));
    setHousingWorkerDay(Number(context.indicationMonth.housingWorkerDay));
    setHousingWorkerNight(Number(context.indicationMonth.housingWorkerNight));
  }, [context.indicationMonth]);

  const [orelDay, setOrelDay] = useState(context.indicationMonth.orelDay);
  const [orelNight, setOrelNight] = useState(context.indicationMonth.orelNight);
  const [minerDay, setMinerDay] = useState(context.indicationMonth.minerDay);
  const [minerNight, setMinerNight] = useState(
    context.indicationMonth.minerNight
  );
  const [housingWorkerDay, setHousingWorkerDay] = useState(
    context.indicationMonth.housingWorkerDay
  );
  const [housingWorkerNight, setHousingWorkerNight] = useState(
    context.indicationMonth.housingWorkerNight
  );

  useEffect(() => {
    const value: IndicationInterface = {
      id: context.indicationMonth.id,
      monthId: context.month,
      yearId: context.year,
      orelDay: orelDay,
      orelNight: orelNight,
      minerDay: minerDay,
      minerNight: minerNight,
      housingWorkerDay: housingWorkerDay,
      housingWorkerNight: housingWorkerNight,
    };
    context.setIndicationMonth(value);
  }, [
    orelDay,
    orelNight,
    minerDay,
    minerNight,
    housingWorkerDay,
    housingWorkerNight,
  ]);

  const GetData = async () => {
    const data = (await getIndicationDtek()).data;
    setData(data);
    setVisibleDialog(true);
  };
  const CloseDialog = () => {
    setVisibleDialog(false);
  };
  const SaveIndicatin = () => {
    setOrelDay(Number(data.indicationDay));
    setOrelNight(Number(data.indicationNight));
    setVisibleDialog(false);
  };

  return (
    <>
      <IndicationDtekDialog
        data={data}
        visibleDialog={visibleDialog}
        CloseDialog={CloseDialog}
        SaveIndicatin={SaveIndicatin}
      />

      <Button onClick={GetData}>Получить последнии показания с сайта</Button>

      <Table
        sx={{
          paddingLeft: '80px',
          border: 4,
          borderRadius: 5,
          width: '1000px',
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow
            sx={{
              borderBottom: 4,
              backgroundColor: '#eeeee7',
            }}
          >
            <TableCell
              className="qqqqq"
              align="center"
              sx={{
                border: 2,
                borderTopColor: 'primary.main',
                width: '600px',
                height: '50px',
              }}
            >
              <Typography component="h5" variant="h5">
                Счётчик
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
                Общий
              </Typography>
            </TableCell>

            <Cell initialValue={orelDay} setValue={setOrelDay} />

            <Cell initialValue={orelNight} setValue={setOrelNight} />
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Шахтёр
              </Typography>
            </TableCell>
            <Cell initialValue={minerDay} setValue={setMinerDay} />
            <Cell initialValue={minerNight} setValue={setMinerNight} />
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                border: 2,
              }}
            >
              <Typography component="h6" variant="h6">
                Жилищник
              </Typography>
            </TableCell>
            <Cell
              initialValue={housingWorkerDay}
              setValue={setHousingWorkerDay}
            />
            <Cell
              initialValue={housingWorkerNight}
              setValue={setHousingWorkerNight}
            />
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
