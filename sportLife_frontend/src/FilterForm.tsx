import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import React, { useState } from 'react';


export const FilterForm=() => {

  const currencies = [
    {
      value: 'Valencia',
      label: 'Valencia',
    },
    {
      value: 'Madrid',
      label: 'Madrid',
    },
    {
      value: 'Barcelona',
      label: 'Barcelona',
    },
    {
      value: 'Sevilla',
      label: 'Sevilla',
    },
  ];
  
  const sport = [
      {
        value: 'Judo',
        label: 'Judo',
      },
      {
        value: 'Futbol',
        label: 'Futbol',
      },
      {
        value: 'Baloncesto',
        label: 'Baloncesto',
      },
      {
        value: 'Padel',
        label: 'Padel',
      },
    ];
    
    const [formData, setformData] = useState({
      country:'',
      sports:'',
    })
  

  
    const handleInputChange =(event)=>{
      const{name, value} = event.target;
      setformData({
        ...formData,
        [name]: value
      });
    }
  
    const handelForm = (event) => {
      event.preventDefault()
      console.log(formData);
    };



  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { ml: 1, width: '25ch', height:'7ch' },
      }}
      noValidate
      autoComplete="on"
      onSubmit={handelForm}
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Ciudad"
          defaultValue="Valencia"
          helperText="Please select your currency"
          name='country'
          onChange={handleInputChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField 
        id="outlined-select-currency"
        select
        label="Deporte"
        defaultValue="Judo"
        helperText="Please select your currency"
        name='sports'
        onChange={handleInputChange}
        >
            {sport.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button type="submit" sx={{marginLeft:2, marginTop:3.2}} variant="contained" size='large'>Buscar</Button>
      </div>
    </Box>
  );
}


export default FilterForm;