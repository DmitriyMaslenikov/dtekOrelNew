import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { CheckYasnoInterface } from '../../interfaces/checkYasnoInterface';

export function CheckYasnoDialog({
  data,
  visibleDialog,
  CloseDialog,
  SaveIndicatin,
}: {
  data: CheckYasnoInterface;
  visibleDialog: boolean;
  CloseDialog: () => void;
  SaveIndicatin: () => void;
}) {
  const text = `Период ${data.date}.\n Сумма счёта ${data.checkAmount}.`;

  if (!visibleDialog) {
    return <></>;
  } else {
    return (
      <Dialog open={visibleDialog} sx={{ border: '50px', color: '#009900' }}>
        <DialogTitle id="alert-dialog-title" sx={{ color: '#000099' }}>
          {'Желаете ли Вы применить полученные данные?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>
              Период - {data.date}.
              <br />
              Сумма счёта - {data.checkAmount}.
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={CloseDialog}>Не применять</Button>
          <Button onClick={SaveIndicatin} autoFocus>
            Применить
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
