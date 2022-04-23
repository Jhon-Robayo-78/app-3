import './App.css';

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//componentes
import { BrowserRouter,
Route,
Link, 
Routes
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Inicio from "./components/Inicio";
import Filas from "./components/FilasItem";
import Add from "./components/UpdateEntrada"
import Formulario from "./components/Formulario";
import NotFound from "./components/Error404";
import ListPerson2 from "./components/pruebas/vistaListado";

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
      <BrowserRouter>
        <div className="AppContainer">
          <Navbar/>
          <hr/>
        <Routes>         
            <Route exact path='/' element={<Inicio FormsT={this.state.form}/>}/>

            <Route exact path='/ListPerson' element={
                <Filas Data={this.state.data}/> 
                } />
            <Route exact path='/AddEntrada' element={<Add Data={this.state.data}/>}/>
            <Route exact path='/Registro' element={<Formulario
                                                  onChange={this.handleChange}
                                                  Form={this.state.form}
                                                  onSubmit={this.handleSubmit}/>}/>    
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
        </div>

      </BrowserRouter>
    
    );
  }
}

export default App;

//            <Route exact path='/ListUsers' element={<ListPerson2/>}/>





    
