import { useState } from "react";
import "./miOrg.css";

const MiOrg = (props) =>{

    /* ESTADO - Hooks = son funcionalidades que nos ayudan a trabajar con el comportamiento de react 
        HOOK => useState = utiliza el estado (funcion de react) y va a recibir un estado inicial. Es una funcionalidad ya hecha por react 
        **Nosotros podemos tener la cantidad de estados que nosotros queramos dentro de un componente
        ¿Como declaramos que se va a utilizar el hook/estado?
        = useState(ValorInicialdelestado)
        el valor inicial de estado pueden ser objetos, variables booleanas, numeros y arreglos sin ningun problema
    */

    //const [nombreVariable, funcionActualiza] = useState(ValorInicial);
    console.log(props);
    // const [mostrar,actualizarMostrar] = useState(true);
    
    // const ManejarClick = () =>{
    //     console.log("Mostrar/ocultar", mostrar);
    //     actualizarMostrar(!mostrar);//dentro de los parentesis se pondra el valor que se la a asignar al estado de donde proviene esa funcion
        
    // }
    return(
        <section className="orgSection">
            <h3 className="tittle">Mi Organizacion</h3>
            <img src="/img/add.png" alt="Add" onClick={props.cambiarMostrar}></img>
        </section>
    );
}

export default MiOrg;