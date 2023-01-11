import React from "react";
import '../Styles/Tarea.css';
import {AiOutlineCloseCircle} from "react-icons/ai";

function Tarea ({texto}) {
    return (
        <div className="tarea-container">

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