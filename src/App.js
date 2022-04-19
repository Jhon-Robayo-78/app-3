//import logo from './logo.svg';
//import './App.css';

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//componentes
import ListPerson from "./components/listPerson";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import AddPerson from "./components/AddPerson";

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
      }]
    } 
  }

  onSearch(query){
    /*let temp=this.state.data.keys(placa.toLowerCase()).find(query);
    document.write(temp);*/

  }
 
  render(){
    return (
    <div className="App">
      <div className="Navbar">
        <Navbar/>
        <Search onsearch={this.onSearch}/>
      </div>
       <AddPerson/>
     <div className="ListPerson">
       <h2>listado</h2>
       {this.state.data.map(person =>{
         return(
         <ListPerson 
                placa={person.placa}
                nombre={person.nombre}
                entrada={person.entrada}
                salida={person.salida}
                miembro={person.MiembroU}
         />);
       })}
     </div>
    </div>
    );
  }
}

export default App;
