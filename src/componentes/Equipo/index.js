
import "./equipo.css";
import Colaborador from "../Colaboradores";
import hexToRgba from "hex-to-rgba";

//props = es un objeto, por lo cual yo puedo acceder a el por medio su metodo "props.equipo"

const Equipo = (props) =>{
/*
    DESTRUCTURACION
    =de la siguiente forma es como sacamos las propiedades del arreglo en app.js y les damos un nombre 
        para que assi no repitamos tanto "props.datos.algo"
*/
const {colorPrimario, colorSecundario, titulo, id } =props.datos;
const obj ={ backgroundColor: hexToRgba(colorPrimario, 0.6)}; // esto es con la libreria hextorgba, recibe el color en hexadecimal y el otro parametro es la opacidad que se requiere
const estilosTitulo ={borderColor: colorPrimario};

const {colaboradores,eliminarColaborador, actualizarColor, like} = props; 

//style={{ backgroundColor: props.datos.colorSecundario }}
//nos sirve para poder colocar las propiedades css necesarias dentro de codigo react y js
    return (<> { colaboradores.length > 0 &&
                <section className="equipo" style={obj}>
                    <input 
                        type="color"
                        className="input__color"
                        value={colorPrimario}
                        onChange={(evento)=>{
                            actualizarColor(evento.target.value, id);
                        }} //Tipo de evento en el cual se le tiene que indicar una funcion y esa funcion se va a ejecutar cada vez que exita un cambio en el input
                    />
                    <h3 style={estilosTitulo}>{titulo}</h3>
                    <div className="colaboradores">
                        {
                            colaboradores.map( (colaborador, index) => <Colaborador 
                                                                        datos={colaborador} 
                                                                        key={index} 
                                                                        colorPrimario={colorPrimario} 
                                                                        eliminarColaborador={eliminarColaborador}
                                                                        like={like}
                                                                        /> )
                        } 
                    </div>
                </section>
                }
            </>) //fragments ya que jsx espera estas llaves
}

export default Equipo; //componente