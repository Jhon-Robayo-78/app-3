import React from "react";
import App from "./App";

class Add extends React.Component{
    constructor(props){
        super(props)
        this.state={
            placa:'',
            entrada:{hora:0,minutos:'00'}
        }//quitar nombre salida miembroU
    }
    onChangeplaca =(e)=>{
        this.setState({placa:e.target.value});
    }
    onChangeentrada =(e)=>{
        this.setState({entrada:e.target.value});
    }    
    render(){
        return(
            <div class="input-group">
            <span class="input-group-text">numero de placa</span>
            <input type="text" aria-label="Placa" className="form-control" onChange={this.onChangeplaca}></input>
            <span class="input-group-text">Hora</span>
            <input type="text" aria-label="Hora" className="form-control" onChange={this.onChangeentrada.hora}></input>
            <div className="Add-Entrada">
               <button type="button" className="btn btn-primary"> Agregar </button>
            </div>
          </div>

        );
        
    }
}

export default Add;