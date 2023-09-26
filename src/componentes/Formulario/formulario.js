
import { useState } from "react";
import "./formulario.css";
import Campo from "../Campo"; /* Otra forma de mandar a llamar a los componentes, dado que el archivo se llama index.js, lo toma de manera automatica de la carpeta indicada*/
import ListaOpciones from "../ListaOpciones/listaOpciones";
import Boton from "../Boton";

const Formulario = ( props ) =>{

    const [nombre , actualizarNombre] = useState("");
    const [puesto , actualizarPuesto] = useState("");
    const [foto , actualizarFoto] = useState("");
    const [equipo , actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");      

    // DESTRUCTURACION PROPS
    const {registrarColaborador, crearEquipo} = props;


    const manejarEnvio = (event) => {
        event.preventDefault(); //se le quita la responsabilidad al navegador de como tiene que comportarse el evento 
        console.log("Manejar el envio");
        let datosAEnviar = {
            // nombre: nombre, el valor y llave llevan el mismo nombre y se puede poner de dos formas
            // puesto: puesto,
            // foto: foto
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    };
    /* Se  utilizan los props en los campos de texto para que estar 
        al pendiente de las modificaciones y como se van actualizando 
        los valores de nuestros inputs
    */

    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault();
        crearEquipo({titulo, colorPrimario: color}); //como la funcion solo recibe un solo valor, mandaremos los parametros como un objeto, por consecuente, los valores se guardaran ahi
        //gracias a las nuevas versiones de JS, no necesitamos escribir el objeto como suele ser ya que tendrian el mismo nombre "titulo: titulo"
    }

    return (
        <section className="formulario"> 
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo
                    titulo ="Nombre" 
                    placeholder="Ingresar nombre" 
                    required 
                    valor={nombre} 
                    actualizarValor={actualizarNombre}
                />
                <Campo 
                    titulo ="Puesto" 
                    placeholder="Ingresar puesto" 
                    required
                    valor={puesto} 
                    actualizarValor={actualizarPuesto}

                />
                <Campo
                    titulo ="Foto" 
                    placeholder="Ingresar enlace de foto" 
                    required 
                    valor={foto} 
                    actualizarValor={actualizarFoto}
                />
                <ListaOpciones 
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                    equipos={props.equipos}
                />
                <Boton>
                    Crear
                </Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo 
                    titulo ="Titulo" 
                    placeholder="Ingresar titulo" 
                    required 
                    valor={titulo} 
                    actualizarValor={actualizarTitulo}
                />
                <Campo
                    titulo ="Color" 
                    placeholder="Ingresar el color en Hexadecimal" 
                    required
                    valor={color} 
                    actualizarValor={actualizarColor}
                    type="color"

                />
                <Boton>
                   Registrar Equipo
                </Boton>
            </form>
        </section>
    
    );
}

export default Formulario;
