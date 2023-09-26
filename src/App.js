
import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import './App.css';
import Header from './componentes/header.js'; 
import Formulario from './componentes/Formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  /* CONDITIONAL RENDERING = RENDERIZADO CONDICIONAL apartir de nuestras reglas o estados conseguimos mostrar o quitar elementos o cierta logica por detras
      TERNARIO => condicion ? seMuestra : nosSeMuestra (if)
                              true        false

      CORTO CIRCUITO = condicion && seMuestra
    FRAGMENTS = <></> Se interpreta como algo vacio en react
  */
  //se utiliza el arreglo vacio cuando estemos registrando el concepto de una lista de items
                                                  //arreglo vacio
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysR-dev.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }
  ]);

  const [equipos, actualizarEquipos] = useState([
    //objetos
    { 
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#51C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    { 
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Actualizar color de equipo
  const actualizarColor = (color,id) =>{
    console.log("Actualizar: ", color, id );
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados); 
  }
  //Registrar colaborador 
  const registrarColaborador = ( colaborador ) =>{
      console.log("Nuevo colab", colaborador);
      //spread operator "..." = se crea un copia de los valores actuales y despues se le agrega el colaborador 
      actualizarColaboradores([...colaboradores,colaborador]);
  };

  //Eliminar colaborador
   const EliminarColaborador = (id) =>{
    console.log("Eliminado", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id); //metodo de los arreglos que recibe una funcion 
    //estamos llendo al arreglo de los colaboradores, lo filtramos y vamos por cada uno de los colaboradores, si el id del colaborador es diferente al que yo al que yo le estoy dando click, simplemente lo guardas en el arreglo de nuevosColaboradores
    //FILTER= nos regresa un nnuevo arreglo sin modificar el original 
    actualizarColaboradores(nuevosColaboradores);
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}]);
    //se abre un arreglo por que será una lista 
    //se hace una copia del arreglo equipos, y despues recibirá un nuevo objeto que hara que se tomen los dato que vienen de "nuevoEquipo", tomando en cuenta que tambien será una copia, y a su vez se le agregara el id 
  }

  //Fav
  const like = (id) =>{
    console.log(id);
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id ===id ){
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    })
    actualizarColaboradores(colaboradoresActualizados);
  }

  return (
    <div>
      {/* {/* forma de llamar al componente de react 
      { Header() } 
      <Header></Header> { /* etiquetas que podemos utilizar en jsx o react */ }
      <Header />
      {/* { mostrarFormulario === true ? <Formulario /> : <div></div>} = es igual a que no igualarlo con true*/}

      {/* { mostrarFormulario ? <Formulario /> : <div></div>} */}
      
      { mostrarFormulario && <Formulario 
                                equipos={equipos.map( (equipo) => equipo.titulo )}
                                registrarColaborador = {registrarColaborador}
                                crearEquipo={crearEquipo}
                            />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} /> 
      {
        //map = nos va a regresar un arreglo a partir de los datos que reciba 
        //      y siempre hay que trabajar con la propiedad KEY
        equipos.map( (equipo) =><Equipo 
                                  datos={equipo} 
                                  key={equipo.titulo}
                                  colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
                                  eliminarColaborador={EliminarColaborador}
                                  actualizarColor={actualizarColor}
                                  like={like}
                                />
            //la idea de key es que esta le ayudara a react saber cual es el elemento y debe de ser unica la llave
            //filter = filtra datos (metodo de los arreglos)
            //.filter(quiero que filtres cada colaborador => y solamente me indiques cuales son los colaboradores que colaboradores.equipo sean igual === al equipo.titulo , y si si corresponde, si me lo muestres)
            )
        //las arrow functions nos permite retornar los datos si es que no se va a declarar nada dentro de los corchetes
      }

      <Footer />

    </div>
  ); //miOrg = tiene props para que interactue con los hooks del componente app y con el componente index de miOrg
}

export default App;
