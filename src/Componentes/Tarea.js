import React from "react";
import '../Styles/Tarea.css';
import {AiOutlineCloseCircle} from "react-icons/ai";

function Tarea ({texto, completada}) {
    return (
        /* Condicionar la tarea, si ya la termino = tarea-container completada
        Sino tarea-container, es decir pendiente aun */
        <div className={completada ? "tarea-container completada" : "tarea-container"}>

            <div className="tarea-texto">
                {texto}
            </div>
            {/* Instalar npm install react-icons --save para usar el paquete de iconos de react */}
            <div className="icons-container">
                <AiOutlineCloseCircle className="tarea-icon"/>
            </div>

        </div>
    );
}

export default Tarea;