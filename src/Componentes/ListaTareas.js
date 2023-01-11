import React from "react";
import {useState} from "react";
/* OPCION 2 
import React, { useState } from "react";
*/
import Formulario from "./Formulario";
import '../Styles/Lista.css';
import Tarea from "./Tarea";

function ListaTareas () {
    /* Hook para estado de tarea 
    Llamar a useState y agregar un arreglo vacio para las tareas */
    const [tareas, setTareas] = useState ([]);

    const agregarTarea = tarea => {
        console.log("Tia Paola agregada");
        console.log(tarea);

        /* Comprobar valor de tarea, no este vacia */
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            /* Para tareas nuevas y anteriores, nuevo array, agrega al principio de la lista*/
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }

    }

    return (
        <>
        <Formulario onSubmit={agregarTarea} />

        <div className="lista-container">
            {
                /* Todo los elementos se pasaran en el objeto tarea */
                tareas.map((tarea) => 
                /* Se crea el componente tarea */
                <Tarea
                /* agregar id */
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                /* Prop si se completo */
                completada = {tarea.completada}
                />
                )
            }
        </div>
        </>
    );
}

export default ListaTareas;