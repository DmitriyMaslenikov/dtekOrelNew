import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

export const PeriodSelect = ({
  data,
  value,
  valueChange,
}: {
  data: { title: string; id: number }[];
  value: string;
  valueChange: (index: string) => void;
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    valueChange(event.target.value);
  };

  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        variant="filled"
        defaultValue="0"
        displayEmpty={true}
        // renderValue={(value: string) => {
        //   return (
        //     <div
        //       style={{
        //         display: 'flex',
        //         justifyContent: 'space-between',
        //         alignItems: 'center',
        //       }}
        //     >
        //       <MenuItem key={props.data[0].id} value={props.data[0].id}>
        //         {props.data[0].title}
        //       </MenuItem>
        //     </div>
        //   );
        // }}
        value={value}
        label="Year"
        onChange={handleChange}
      >
        {data.map((value: { title: string; id: number }) => (
          <MenuItem key={value.id} value={value.id}>
            {value.title}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
