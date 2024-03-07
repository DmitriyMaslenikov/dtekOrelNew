import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

export function LoadingFinishedAlert({ data }: { data: any }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Snackbar
        key={'top' + 'center'}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={20000}
        onClose={handleClose}
      >
        <Alert
          variant="filled"
          severity="success"
          action={
            <Button onClick={handleClose} color="inherit" size="small">
              Закрыть
            </Button>
          }
        >
          <AlertTitle>Счёт загружен</AlertTitle>
          {data}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
