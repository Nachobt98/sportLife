import React, { useState } from 'react';

import './bootstrap.min.css'

import img5 from "./img/img5.jpg";
import logo from './img/Sportlife1-removebg-preview.png';


export const Reg=() =>{

  const [formData, setformData] = useState({
    firstname:'',
    lastname:'',
    username:'',
    location:'',
    email:'',
    password:'',
    birthdate:''

  })

  const {firstname, lastname, username, location, email, password, birthdate} = formData;
  
  
  
  const handleInputChange =(event)=>{
    const{name, value} = event.target;
    setformData({
      ...formData,
      [name]: value
    });
  }
  
  /*
  const handelForm = (event) => {
    event.preventDefault();
   const JSONData = JSON.stringify(formData);
    console.log(formData);
    console.log(JSONData);
  };
  
  */

  
  const handelForm = async (firstname, lastname, username, location, email, password, birthdate) =>{
    await fetch('http://localhost:8080/api/v1/auth/signupRegisteredUser', {
method: 'POST',
body: JSON.stringify({
    firstname:firstname,
    lastname:lastname,
    username:username,
    location:location,
    email:email,
    password:password,
    date:birthdate
}),
headers: {
   'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => {response.json(); console.log(response.json())})
}
  
  
 //registrar usuario, meterlo en BD
 //.post("http://localhost:3000/api/v1/auth/signupRegisteredUser", JSONData)
  
  
  
  
  
  /*const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const[username, setUsername] = useState("")
  const[provincia, setProvincia] = useState("")
  const [email, setEmail] = useState("")
  const [contrasena, setContrasena] = useState("")
  const[date, setDate] = useState("")



  const handleSubmit = (nombre, apellido, username, provincia, email, contrasena, date) =>{
    alert(nombre)
    alert(apellido)
    alert(username)
    alert(provincia)
    alert(email)
    alert(contrasena)
    alert(date)*/


  //llamar a backend => http://localhost:3000/api/v1  + /auth + /signupRegisteredUser
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
          <input type="text" value={location} name='location' onChange={handleInputChange}
           placeholder="Provincia" required />
        </div>
        <div>
          <input type="text" value={firstname} name='firstname' onChange={handleInputChange
          } placeholder="Nombre" required />

          <input type="text" value={lastname} name='lastname' onChange={handleInputChange
          } placeholder="Apellido" required />
        </div>
        <div>
          <input
            type="text"
            value={username}
            name='username'
            onChange={handleInputChange}
            placeholder="Nombre de usuario"
            required
          />
        </div>
        <div>
          <input
            type="email"
           value={email}
           name='email'
           onChange={handleInputChange}
            placeholder="Correo electronico"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            name='password'
            onChange={handleInputChange}
            placeholder="Contrasena"
            required
          />
        </div>
        <div><input type="date" value={birthdate} name='birthdate' onChange={handleInputChange}/></div>

        <div className="divboton">
          <button type="submit" className="botonInicio" onClick={() => handelForm(firstname, lastname, username, location, email, password, birthdate)}>Aceptar</button>
        </div>
      </form>
    </div>

</div>

</>

    )

  }
