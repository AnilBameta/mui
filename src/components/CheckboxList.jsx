import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckboxList = () => {
    const [checked1, setChecked] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setChecked2(event.target.checked);
  };


  // const handleChange1 = (event) => {
  //   setChecked2(event.target.checked);
  // };

  return (
    <div>
      <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />}  label="label"></FormControlLabel>
      </FormGroup>
      <FormGroup>
      <FormControlLabel control={<Checkbox
      checked={checked1}
      onClick={handleChange}
      label="Select"
      labelPlacement="bottom"
    />}  label="label1"></FormControlLabel>
      </FormGroup>
      <Checkbox
      checked={checked2}
      onClick={handleChange}
      label="Select"
      labelPlacement="bottom"
    />
    </div>
  )
}

export default CheckboxList
