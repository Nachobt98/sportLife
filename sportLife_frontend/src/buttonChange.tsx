import React, { Component, useState } from "react";

import './bootstrap.min.css';





export const Ejemplo =() => {
 
   const[state, setState] = useState(false)

   function handleChange() {
    setState(true);
  }


    return (
      <div>
        <div className="col-md-6  mb-2">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            {/* Este es el boton 1 */}
            <button
              type="button"
              id="btn-nquote"
              className="btn btn-success btn-sm"
              onClick={() => handleChange()}
            >
              Normal Quote
            </button>

            {/* Este es el boton 2 */}
            <button
              type="button"
              id="btn-flex"
              className="btn btn-unique btn-sm"
              onClick={() => handleChange()}
            >
              Flex Quote
            </button>
          </div>
        </div>
        <span>
          {state ? (
            <div /* Este es el div 1 */ className="redd" />
          ) : (
            <div /* Este es el div 2 */ className="red2" />
          )}
        </span>


      </div>
    );

}

export default Ejemplo;