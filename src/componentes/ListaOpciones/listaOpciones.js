import "./listaOpciones.css";

const ListaOpciones = (props) =>{
    // metodo  Map = tiene la sig estructura = arreglo.map( (equipo) => {
    //     return <option></option>
    // })
    // aparte de recibir el elemento que nosotros tenemos dentro del arreglo, recibira como segundo argumento el index
    // map funciona tomando un arreglo de informacion y apartir de eso lo va a transformar y nos va a regresar un nuevo arreglo con esos datos transformados 
   
    

    const manejarCambio = (evento) =>{
        console.log("Cambio",evento.target.value); 
        props.actualizarEquipo(evento.target.value);
    }

    return(
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                { props.equipos.map ( (equipo, index) => <option key={index} value={equipo} >{equipo}</option>) /*siempre al elemento que estemos regresando 
                    le debemos de devolver el elemento key, y esto es por que react necesita un identificador unico que le 
                    ayudara a saber cuandoo es que tiene que hacer un cierto comportamiento, ya que react reacciona a ciertos cambios
                */}
            </select>
        </div>
    );
} 

export default ListaOpciones;