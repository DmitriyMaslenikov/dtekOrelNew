import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useMainPage } from '../mainPage/mainPageContext';

export function ErrorDialog() {
  const context = useMainPage();
  const closeDialog = () => context.setErrorDialog(true);

  if (context.visibleErrorDialog) {
    return <></>;
  } else {
    return (
      <Dialog
        open={!context.visibleErrorDialog}
        // onClose={handleClose}
        // onClick={context.hide}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Сумма оплат обществ не совпадает с суммой счёта!'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* При изменении периода или закрытии вкладки внесенные изменения будут
            потеряны. */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Ok</Button>
        </DialogActions>
      </Dialog>
    );
  }
}
