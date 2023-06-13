import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [data,setData] = React.useState(props.default);
  const handleChange = (event) => {
    const selected = event.target.value;
    setData(selected);
    props.onChange(selected,props.id)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data}
          label="Age"
          onChange={handleChange}
        >
        {props.datas?  props.datas.map((data)=> {
            return(
                <MenuItem value={data.status}>{data.status.charAt(0).toUpperCase() + data.status.slice(1)}</MenuItem>
            )
        }) :null}
        </Select>
      </FormControl>
    </Box>
  );
}