import './App.css';

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
//import Search from "./components/Search";
//import Inicio from "./components/Inicio";
//import Filas from "./components/FilasItem";
//import Add from "./components/UpdateEntrada"
//import Formulario from "./components/Formulario";
//import NotFound from "./components/Error404";
//import ListPerson from "./components/listPerson";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data: [{
        placa:'132-htg',nombre:'juan',entrada:{hora:8,minutos:'30'},salida:{hora:14,minutos:'00'},MiembroU:true
      },{
        placa:'567-yot',nombre:'jhon',entrada:{hora:7,minutos:'30'},salida:{hora:12,minutos:'00'},MiembroU:true
      },{
        placa:'200-gfg',nombre:'alberto',entrada:{hora:11,minutos:'00'},salida:{hora:12,minutos:'10'},MiembroU:false
      }],
      form:[{nombre:'a',
             apellido:'',
             cedula:'',
             email:'',
             numero:''}]  
    } 
  }
  
  handleChange = e =>{
    /*let partialState={}
    partialState[e.target.name]=e.target.value
    this.setState(partialState)*/
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value   }   
    })
}
handleSubmit = e =>{
  e.preventDefault()
  console.log(this.state.form)
}
  
 
  render(){
    return (
        <div>
            <Navbar />
            <main>
                <h2>Bienvenido al Sistema de Control de Acceso Vehicular</h2>
                <p>Con el uso del SCAV se ha mejorado la seguridad,
                    integridad y organizacion del campus de la Universidad
                    Tecnologica de Bolivar en cuanto al registro de vehiculos.
                    Con este sistema, y una base de datos con informacion detallada 
                    de cada vehiculo que sale y entra al campus, ademas de esto, es
                    posible encontrar estacionamientos libres y notificar al dueno
                    del vehiculo si es necesario.
                </p>
            </main>
            <Footer />
        </div>    
    );
  }
}

export default App;

//            <Route exact path='/ListUsers' element={<ListPerson2/>}/>
