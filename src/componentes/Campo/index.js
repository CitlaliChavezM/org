
import { useState } from "react";
import "./campo.css";

const Campo = (props) =>{
    const placeholderModificador = `${props.placeholder}...`;
    
    //DESTRUCTURACION
    const {type = "text"} = props;
    //la ventajas de las props, es que si no tiene ningun valor definido, se le puede colocar uno por defecto
    //extraemos esta props para que el input pueda cambiar a tipo color y se pueda reutilizar el componente

    const manejarCambio = (event) =>{
        props.actualizarValor(event.target.value);
    }

    return (
       
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
                placeholder={placeholderModificador} 
                required={props.required} 
                value={props.valor} 
                onChange={manejarCambio}
                type={type}
            />

        </div>
    //todos tendran las propiedades de campo PERO tambien dependiendo de las utilizadas para el tipo de input, text o color
    );
}
/*
    {props.titulo} = se accede al objeto props y a su llave "titulo"
    y como la llave es un string, tambien podemos utilizar metodos de los string
    ademas a los props se le pueden mandar numeros, string, funciones, etc.

    concepto de typescript = a JS le podemos agregar tipos 
*/

export default Campo; 