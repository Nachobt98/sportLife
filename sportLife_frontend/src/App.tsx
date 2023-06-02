import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';

import '../style/bootstrap.min.css'

import {Home} from './Incio'

import { Reg } from './register';

import { Login } from './login';

import { Event } from './event';

import { FormEvent } from './FormEvent';

import {NewEvent} from './NewEvent';


import Ejemplo from './buttonChange';
//import 'bootstrap/dist/css/bootstrap.min.css';

//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Routes>
     <Route path='/' element = {<Home />}/>
     <Route path='/register' element = {<Reg/>}/>
     <Route path='/login' element = {<Login/>}/>
     <Route path='/event' element = {<Event/>}/>
     <Route path='/newEvent' element = {<NewEvent/>}/>
     <Route path='/ejemplo' element = {<Ejemplo/>}/>
    </Routes>
   </>
  );
  }

export default App;
