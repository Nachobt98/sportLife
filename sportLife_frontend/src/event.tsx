import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './img/Sportlife1-removebg-preview.png';
import  Evento from './eventComponent';
import NewButton from './newEventButton';
import FormEvent from './FormEvent';
import FilterForm from './FilterForm';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FormControl, TextField, formControlLabelClasses, Slider, Input } from '@mui/material';
import { Button, Modal} from 'react-bootstrap';

import './bootstrap.min.css';
import { log } from 'console';
import { Box, Grid} from '@mui/material';

import handleSubmit from './FormEvent';

 export const Event=() =>{
  const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    

    return(

        <>
    <div className="div1">
      <nav className={"navbar navbar-expand-lg navbar-dark bg-primary"}>
        <div className="container-fluid">
          <img
            src={logo}
            alt=""
            className="sportlife"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  //href="C:\Users\Nacho\Desktop\NACHO1\UNI\HTML\Boot1\index\index.html"
                    //href='/'
                    onClick={() => navigate('/')}
                  >Inicio</a
                >
              </li>  
              <li className="nav-item">
                <a
                  className="nav-link active"
                  //href="C:\Users\Nacho\Desktop\NACHO1\UNI\HTML\Boot1\article\article.html"
                  >Articulos</a
                >
              </li>
              <li className="nav-item">
                <a 
                className="nav-link active" 
                aria-current="page"
                //href="event"
                onClick={() => navigate('/event')}
                >Eventos</a>
              </li>
              
            </ul>

            <ul>
            <li className="nav-item">
                 <a
                   onClick={() => navigate('/login')}
                   className="nav-link active"
                   //href="./Inicio"
                   >Iniciar Sesion
                   </a>
               </li>
            </ul>
           
          
          </div>
        </div>
      </nav>
    </div>

    <Box className='EventBox'>
    <Box className='BoxForm'
       display="flex"
       justifyContent="center"
       alignItems="center"> 
          
      <Grid>
      
       <h2>Encuentra el deporte ideal con la mejor compañia</h2>
       
       <Grid
       display="flex"
       justifyContent="center"
       alignItems="center"
       sx={ {m:1, padding:"0px"}}
       >
        <FilterForm></FilterForm>
   
       </Grid>
         
          </Grid>
          </Box>
    
    <div className="divEvents">
    
    
    <Box 
     sx={{
      display: "flex",
      justifyContent:"center",
      margin:"0px"
  }
  }
    >

    <Button variant="outline-primary" onClick={handleShow}>
        Crear Evento
      </Button>
    </Box>
  

      <Modal className="Modal1"  show={show} onHide={handleClose}>
  
        <Modal.Body> 

          <FormEvent></FormEvent>

        </Modal.Body>
        <Modal.Footer>
        
          <Button type="submit" variant="primary" onClick={
           handleClose
            }>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>

    
<Box className='events'
sx={{
  display:"block",
justifyContent:"center"
}}>
<Evento
        onClick={() => navigate('login')}
        title='Futsal Tarongers'
        description='este evento es el primero'
        type='futbol sala'
        ></Evento>
         <Evento
         onClick={() => navigate('login')}
        title='Futsal Tarongers'
        description='este evento es el primero'
        type='futbol sala'
        ></Evento>
         <Evento
         onClick={() => navigate('login')}
        title='Futsal Tarongers'
        description='este evento es el primero'
        type='futbol sala'
        ></Evento>
        <Evento
         onClick={() => navigate('login')}
        title='Futsal Tarongers'
        description='este evento es el primero'
        type='futbol sala'
        ></Evento>
</Box>
        
        
      
    </div>
    
    

    </Box>
    
  </>
      
 ) 
}