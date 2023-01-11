import React from "react";
import '../Styles/Tarea.css';
import {AiOutlineCloseCircle} from "react-icons/ai";

function Tarea ({id, texto, completada, completarTarea, eliminarTarea}) {
    return (
        /* Condicionar la tarea, si ya la termino = tarea-container completada
        Sino tarea-container, es decir pendiente aun */
        <div className={completada ? "tarea-container completada" : "tarea-container"}>

            <div className="tarea-texto"
            /* Funcion anonima para tareas marcar como hecha con el id*/
            onClick={() => completarTarea (id)} >
                {texto}
            </div>

            {/* Instalar npm install react-icons --save para usar el paquete de iconos de react */}
            <div className="icons-container"
            onClick={() => eliminarTarea (id)}>
                <AiOutlineCloseCircle className="tarea-icon"/>
            </div>

        </div>
    );
}

export default Tarea;