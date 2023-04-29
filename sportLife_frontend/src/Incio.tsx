import {useNavigate} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';

import logo from './img/Sportlife1-removebg-preview.png';

import {Reg} from './register'; 

import img1 from "./img/img1.jpg";

import img2 from "./img/img2.jpg";
import img5 from "./img/img5.jpg";
import img4 from "./img/img4.jpg";


export const Home =() => {
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
                   href="./index.html"
                   >Inicio</a
                 >
               </li>
               <li className="nav-item">
                 <a
                  className="nav-link active"
                   href="C:\Users\Nacho\Desktop\NACHO1\UNI\HTML\Boot1\article\article.html"
                   >Articulos</a
                 >
               </li>
               <li className="nav-item">
                 <a
                   className="nav-link active"
                   href="C:\Users\Nacho\Desktop\NACHO1\UNI\HTML\Boot1\event\event.html"
                   >Eventos
                   </a
                 >
               </li>
               <li className="nav-item">
                 <a
                   className="nav-link active"
                   href="C:\Users\Nacho\Desktop\NACHO1\UNI\HTML\Boot1\iniciosesion\iniciosesion.html"
                   >Iniciar Sesion
                   </a>
               </li>
             </ul>
             <form className="d-flex">
               <input
                 className="form-control me-2"
                 type="search"
                 placeholder="Search"
                 aria-label="Search"
               />
               <button className="btn btn-outline-success" type="submit">
                 Search
               </button>
             </form>
           </div>
         </div>
       </nav>
     </div>
 
     <div className="div2">
       <div
         id="carouselExampleCaptions"
         className="carousel slide"
         data-bs-ride="carousel"
       >
         <div className="carousel-indicators">
           <button
             type="button"
             data-bs-target="#carouselExampleCaptions"
             data-bs-slide-to="0"
             className="active"
             aria-current="true"
             aria-label="Slide 1"
           ></button>
           <button
             type="button"
             data-bs-target="#carouselExampleCaptions"
             data-bs-slide-to="1"
             aria-label="Slide 2"
           ></button>
           <button
             type="button"
             data-bs-target="#carouselExampleCaptions"
             data-bs-slide-to="2"
             aria-label="Slide 3"
           ></button>
         </div>
         <div className="carousel-inner">
           <div className="carousel-item active">
             <img src={img1} className="d-block w-100" alt="..." />
             <div className="carousel-caption d-none d-md-block">
               <h5>Empieza tu vida sana!</h5>
               <p>
                 Te ofrecemos algunos consejos para llevar una alimentacion sana.
               </p>
             </div>
           </div>
           <div className="carousel-item">
             <img src={img2} className="d-block w-100" alt="..." />
             <div className="carousel-caption d-none d-md-block">
               <h5>A sudar!</h5>
               <p>Rutinas faciles y rapidas que puedes hacer en tu casa.</p>
             </div>
           </div>
           <div className="carousel-item">
             <img src={img4} className="d-block w-100" alt="..." />
             <div className="carousel-caption d-none d-md-block">
               <h5>Con el ejercicio no solo ayudas a tu cuerpo</h5>
               <p>
                 Lee este articulo sobre como el deporte beneficia a la mente.
               </p>
             </div>
           </div>
         </div>
         <button
           className="carousel-control-prev"
           type="button"
           data-bs-target="#carouselExampleCaptions"
           data-bs-slide="prev"
         >
           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
           <span className="visually-hidden">Previous</span>
         </button>
         <button
           className="carousel-control-next"
           type="button"
           data-bs-target="#carouselExampleCaptions"
           data-bs-slide="next"
         >
           <span className="carousel-control-next-icon" aria-hidden="true"></span>
           <span className="visually-hidden">Next</span>
         </button>
       </div>
     </div>
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