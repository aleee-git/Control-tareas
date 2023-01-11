import React from "react";
import '../Styles/Formulario.css'

function Formulario (props) {
    return (
        <form className="formulario">

            <input className="tarea-input"
            type="text" placeholder="Escribe una tarea" 
            name="texto" 
            />

            <button className="tarea-boton"> Agregar </button>

        </form>
    );
}

export default Formulario;