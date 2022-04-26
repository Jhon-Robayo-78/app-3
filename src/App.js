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

const data =[
  {id:1, nombre:'juan',apellido:'perez',cedula:'1323',email:'example@htmail.com',numero:'302',entrada:{hora:8,minutos:'30'},salida:{hora:14,minutos:'00'},placa:'k800j'},
  {id:2, nombre:'jhon',apellido:'guzman',cedula:'548',email:'example2@htmail.com',numero:'301',entrada:{hora:7,minutos:'30'},salida:{hora:12,minutos:'00'},placa:'t1000'},
  {id:3, nombre:'eliza',apellido:'trujillo',cedula:'852',email:'example3@htmail.com',numero:'305',entrada:{hora:11,minutos:'00'},salida:{hora:12,minutos:'10'},placa:'t800'},
]
class App extends React.Component {

  state={
     Data:data,
     modalActualizar: false,
     modalInsertar: false,
     form:[{id:0,
            nombre:'',
            apellido:'',
             cedula:'',
             email:'',
             numero:'',
            entrada:{hora:0,minutos:'00'},
          salida:{hora:0,minutos:'00'},
          placa:''}]  
    } 
 
  
  
 
  render(){
    return (
        <div>
            <Navbar />
            <main>
                <h2>Bienvenido al Sistema de Control de Acceso Vehicular</h2>
                <p className="index--text">Con el uso del SCAV se ha mejorado la seguridad,
                    integridad y organización del campus de la Universidad
                    Tecnológica de Bolívar en cuanto al registro de vehículos.
                    Con este sistema, y una base de datos con información detallada 
                    de cada vehículo que sale y entra al campus es
                    posible encontrar estacionamientos libres y notificar al dueño
                    del vehículo de cualquier evento si es necesario.
                </p>
            </main>
            <Footer />
        </div>    
    );
  }
}

export default App;

