import React from 'react';

import './bootstrap.min.css';

import img5 from "./img/img5.jpg";
import logo from './img/Sportlife1-removebg-preview.png';


export const Reg=() =>{
    return(
<>
<div className='bodyRegistro'>
<div className="div1Registro">
      <img
        src={logo}
        alt=""
        className="sportlife"
      />
      <p className="iniciop">REGISTRO</p>
      <form action="">
        <div>
          <input type="text" name="" id="" placeholder="Provincia" required />
        </div>
        <div>
          <input type="text" name="" id="" placeholder="Nombre" required />

          <input type="text" name="" id="" placeholder="Apellido" required />
        </div>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Nombre de usuario"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name=""
            id=""
            placeholder="Correo electronico"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name=""
            id=""
            placeholder="Contrasena"
            required
          />
        </div>
        <div><input type="date" /></div>

        <div className="divboton">
          <button type="submit" className="botonInicio">Aceptar</button>
        </div>
      </form>
    </div>

</div>

</>

    )
}

