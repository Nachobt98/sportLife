import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';

import './bootstrap.min.css';

import {Home} from './Incio'

import { Reg } from './register';

//import 'bootstrap/dist/css/bootstrap.min.css';

//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    
    <Routes>
     <Route path='/' element = {<Home />}/>
     <Route path='register' element = {<Reg />}/>
    </Routes>
   </>
  );
  }

export default App;
