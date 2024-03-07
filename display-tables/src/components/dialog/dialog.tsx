import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useMainPage } from '../mainPage/mainPageContext';
import { colors } from '@mui/material';

export function AlertDialog() {
  const context = useMainPage();
  const closeDialog = () => {
    context.hide('');
  };

  // console.log('saveData', context.saveData);
  function SaveIndicatin() {
    context.setSaveData(true);
  }
  // console.log('visibleDialog', context.visibleDialog);
  if (!context.visibleDialog) {
    return <></>;
  } else {
    return (
      <Dialog
        open={context.visibleDialog}
        // onClose={handleClose}
        // onClick={context.hide}
        // aria-labelledby="alert-dialog-title"
        // aria-describedby="alert-dialog-description"
        sx={{ border: '50px', color: '#009900' }}
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: '#000099' }}>
          {'Желаете ли Вы сохранить изменения?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {context.dialogText}
            {/* При изменении периода или закрытии вкладки внесенные изменения будут
            потеряны. */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Не сохранять</Button>
          <Button onClick={SaveIndicatin} autoFocus>
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
