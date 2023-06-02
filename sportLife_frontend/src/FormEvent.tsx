import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FormControl, TextField, formControlLabelClasses, Grid, Box, Slider, Input, MenuItem } from '@mui/material';
import { Button, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styled from '@emotion/styled'

/*<FloatingLabel id= "SportName" controlId="floatingSelect" label="Works with selects">
      <Form.Select id="select" aria-label="Floating label select example" value={sportname}>
        <option>Elije el deporte que vas a realizar</option>
        <option value="1">Futbol</option>
        <option value="2">Judo</option>
        <option value="3">Baloncesto</option>
      </Form.Select>
    </FloatingLabel>*/
export const FormEvent= ({}) => {
    const [formData, setformData] = useState({
        NameForm: '',
        description: '',
        sportname:'',
        number:''
    });
    //Llamar a http://localhost:8080/api/v1/masterData/getCities y http://localhost:8080/api/v1/masterData/getSports, que lo devuelve asi para las cities, para sport igual:
    /**[{"id":5,"name":"Barcelona"},{"id":6,"name":"Valencia"},{"id":7,"name":"Sevilla"},{"id":8,"name":"Madrid"}] */
    const sports = [
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
    const {NameForm, description, sportname, number} = formData;
    


    const handleOnChange = (e) =>{
        //console.log([e.target.name], e.target.value);
        
        setformData({...formData, [e.target.name] : e.target.value});
    }

    const handleInputChange =(event)=>{
      const{name, value} = event.target;
      setformData({
        ...formData,
        [name]: value
      });
    }

   /* const handleSubmit = (event) =>{
        event.preventDefault();
   const JSONData = JSON.stringify(formData);
    console.log(formData);
    console.log(JSONData);
    }*/

    //handle para CREAR EVENTOS. No se donde ponerlo, miralo tu
    
     const handleSubmit = async (NameForm, description, sportname, number) =>{
      await fetch('http://localhost:8080/api/v1/event/createEvent', {
  method: 'POST',
  body: JSON.stringify({
     name: NameForm,
     description:description,
     sport: sportname,
     members:number
  }),
  headers: {
     'Content-type': 'application/json; charset=UTF-8',
  },
  })
  .then((response) => {console.log(response); response.json();  console.log("asdasdasdasd")})
  } 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(true);

    return(
        
<Form>
    <Grid paddingBottom="1rem">
        <h1 className='titleModal'>Nuevo Evento</h1>
    </Grid>


    
    <Grid 
    display="flex"

    marginLeft="8rem"
    marginRight="8rem"
    marginBottom="1rem"
    marginTop="1rem"
    >
<div >
<TextField sx={{m: 2, width: '25ch', height:'7ch'}} name='NameForm' value={NameForm} onChange={handleInputChange} id="NameForm" label="Nombre" variant="outlined" />


<TextField sx={{
    m: 2, width: '25ch', height:'7ch'
}}
     
        id= "SportName"
        select
        label="Deporte"
        defaultValue="Judo"
        helperText="Please select your currency"
        value={sportname}
        name='sportname'
        onChange={handleInputChange}
        >
            {sports.map((sportname) => (
            <MenuItem key={sportname.value} value={sportname.value}>
              {sportname.label}
            </MenuItem>
          ))}
        </TextField>


</div>

<div>
<TextField sx={{m: 2, width: '25ch', height:'7ch'}}name='description' value={description} onChange={handleInputChange} id="description" label="Descripcion" variant="outlined" />

<div>
Numero de integrantes
        <Slider name='number' defaultValue={50} aria-label="Default" onChange={handleInputChange} valueLabelDisplay="auto"/>
    
</div>
</div>

    </Grid>


<Grid>
<Button type="submit" variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>

    <Button type='submit' onClick={() => handleSubmit(NameForm, description, sportname, number)}>
Aceptar
    </Button>
</Grid>


</Form>

    )
}

export default FormEvent;
















