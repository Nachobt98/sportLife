import {useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import logo from './img/Sportlife1-removebg-preview.png';

import {Reg} from './register'; 

import img1 from "./img/img1.jpg";

import img2 from "./img/img2.jpg";
import img5 from "./img/img5.jpg";
import img4 from "./img/img4.jpg";

import ControlledCarousel from './CarouselArticles';

export const Home =() => {
  const[visible, setVisible] = useState("true");

  function ocultar() {
    setVisible("false");
  }
    const navigate = useNavigate()
return (
    <>
    <div className="div1">
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="container-fluid">
           <img
             //src="C:\Users\Nacho\Desktop\NACHO1\UNI\sportLife\sportLife_frontend\src\img\Sportlife1-removebg-preview.png"
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
                   //href="./index"
                   onClick={() => navigate('/')}
                   >Inicio</a
                 >
               </li>
               <li className="nav-item">
                 <a
                  className="nav-link active"
                   //href="C:\Users\Nacho\Desktop\NACHO1\UNI\HTML\Boot1\article\article.html"
                   //onClick={() => navigate('login')}
                   >Articulos</a
                 >
               </li>
               <li className="nav-item">
                 <a
                 onClick={() => navigate('event')} 
                   className="nav-link active"
                   //href="C:\Users\Nacho\Desktop\NACHO1\UNI\HTML\Boot1\event\event.html"
                   >Eventos
                   </a
                 >
               </li>
               
             </ul>

              <ul>
              <li className="nav-item">
                 <a
                   onClick={() => navigate('login')}
                   className="nav-link active"
                   //href="./incio"
                   >Iniciar Sesion
                   </a>

               </li>

              </ul>
             
           
           </div>
         </div>
       </nav>
     </div>

     <ControlledCarousel></ControlledCarousel>
 
  
     <div className="div3">
       <div>
         <img src={img5} alt="" className="img5" />
       </div>
       <div className="unete">
         <p>
           SPORTCITY es una web dedicada a aquellas personas que les apasiona el
           deporte pero necesitan de otras personas para realizar el deporte que
           mas les gusta
         </p>
 
         <a
           onClick={() => navigate('register')}
           
           href='.\register'
           className="butonUNETE"
           >UNETE!
           </a>
           <link rel="stylesheet" href="" className='' />
           
       </div>
     </div>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
     </>

)
}