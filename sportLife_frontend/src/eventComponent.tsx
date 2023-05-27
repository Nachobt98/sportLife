import { ReactDOM } from "react"
import {Box, Button, Grid} from "@mui/material";
import React from 'react';
import './bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

//boxShadow: '1px 2px 9px 3px #F4AAB9',
const Evento = ({title, description, type, onClick}) => {
  const navigate = useNavigate()
    return(
  <Grid
  sx={{ 
    backgroundColor:"#fcfcfc4d",
   borderRadius:"5px",
  padding:"5px",
  margin:"4rem"
  }}
 width={"1500px"}
 className="gridEvent" >
   <h2 className="letras">{title}</h2>
   <div>
    <h1 className="letras">{description}</h1>
    <h1 className="letras">{type}</h1>  
   </div> 
   <div>
    <Button  variant="outlined" size="large" onClick={() => navigate('/newEvent')}>
      Acceder
    </Button>
   </div>
  </Grid>
    
        
    );
};

export default Evento;