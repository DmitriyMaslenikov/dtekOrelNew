import { TableCell, Typography } from '@mui/material';

export const Cell = ({ value }: { value: number }) => {
  return (
    <TableCell
      align="center"
      sx={{
        border: 2,
      }}
    >
      <Typography component="h6" variant="h6">
        {value === 0 ? '-' : value}
      </Typography>
    </TableCell>
  );
};

export const Cell2 = ({ value }: { value: number }) => {
  return (
    <TableCell
      colSpan={2}
      align="center"
      sx={{
        border: 2,
      }}
    >
      <Typography component="h6" variant="h6">
        {value}
      </Typography>
    </TableCell>
  );
};
