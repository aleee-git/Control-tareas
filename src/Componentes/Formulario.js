import React, {useState} from "react";
import '../Styles/Formulario.css';
/* Package de id */
import { v4 as uuidv4 } from "uuid";

function Formulario (props) {

    const [input, setInput] = useState("");

    const manejarCambio = e => {
        console.log("Escribiendo..");
        /* Extraer el valor de lo escrito */
        setInput (e.target.value);
        console.log(e.target.value);
    }

    /* Funcion para agregar tarea */
    const manejarEnvio = e => {
        /* Evita se se recargue al enviar la tarea */
        e.preventDefault();

        /* La tarea sera lo ingresado en el input de manejarCambio */
        const tareaNueva = {
            /* uuid = package que genera id 
            Instalar con npm install uuid */
            id:  uuidv4 (),
            texto: input,
            completada: false
        }

        /* Comprobar si se envia tarea */
        console.log(tareaNueva);

        /* Pasa la tarea a la lista */
        props.onSubmit(tareaNueva);
    }


    return (
        <form className="formulario"
        onSubmit={manejarEnvio}>

            <input className="tarea-input"
            type="text" placeholder="Escribe una tarea" 
            name="texto" 
            onChange={manejarCambio} />

            <button className="tarea-boton"> Agregar </button>

        </form>
    );
}

export default Formulario;