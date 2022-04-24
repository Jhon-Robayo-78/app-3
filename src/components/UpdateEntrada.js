import React from "react";

class Add extends React.Component{
    constructor(props){
        super(props)

    }
/*
    onChangeplaca =(e)=>{
        if(this.state.u.filter(item => item.placa === e)===true){
            console.log(e);
        }
        this.setState({placa:e.target.value});
    }
    onChangeentrada =(e)=>{
        this.setState({entrada:e.target.value});
    }   */
    render(){
        return(
            <div className="input">
            <span className="input">numero de placa</span>
            <input type="text" aria-label="Placa" className="form-control" ></input>
            <button type="button" className="btn btn-primary"> Verificar </button>
            <br/>
            <br/>
            <span className="input">Hora</span>
            <input type="text" aria-label="Hora" className="form-control" ></input>
            <br/>
            <span className="input">Minutos</span>
            <input type="text" aria-label="minutos" className="form-control" ></input>
            <div className="Add-Entrada">
               <button type="button" className="btn btn-primary"> Agregar </button>
            </div>
          </div>

        );
        
    }
}

export default Add;

//onChange={this.onChangeentrada.hora}
//onChange={this.onChangeplaca}