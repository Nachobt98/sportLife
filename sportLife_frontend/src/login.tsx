import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from './img/Sportlife1-removebg-preview.png';
import './bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import Ejemplo from './buttonChange';

export const Login =() => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setContrasena] = useState("")

 const handleSubmit = async (email, password) =>{
    await fetch('http://localhost:8080/api/v1/auth/login', {
method: 'POST',
body: JSON.stringify({
   email,
   password
}),
headers: {
   'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => {console.log(response); response.json();  console.log("asdasdasdasd")})
}


const falseSubmit = () => {
  
 
  
}


 //iniciar sesion, meterlo en BD
 //.post("http://localhost:3000/api/v1/auth/login", JSONData)

return( 
    <body className="bodyInicio">
    <div className="div1Inicio">
      <img src={logo} alt="" className="sportlife" />
      <p className="iniciop">INICIO SESION</p>
      <form action="">
        <div>
          <label form="mail">Correo Electronico</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)
          } />
        </div>
        <div>
          <label className="labelPass" form="name">Contrasena </label>
          <input type="password"  value = {password} onChange={e => setContrasena(e.target.value)}/>
        </div>
        <div className="divboton">
          <button type="submit" className="botonInicio" onClick={ () => handleSubmit(email, password)}>Aceptar</button>
          <div>
            <a href="" className="apass">Olvidaste la contrasena?</a> 
            <a
              href="C:\Users\Nacho\Desktop\NACHO1\UNI\HTML\Boot1\register\register.html"
              className="apass"
              >No estas registrado?</a
            >
          </div>
        </div>
      </form>
    </div>
  </body>
)

}