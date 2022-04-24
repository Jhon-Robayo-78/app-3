import React from "react";
import Footer from "../components/Footer.js"

class Formulario extends React.Component{
   
    render(){
    return(
        <div className="container">
            
            <h1>Registro</h1>
        <form >    
            
            <div className="input">
                <span className="input">Nombre</span>
                <input
                    type="text"  
                    className="form-control" 
                    placeholder="nombre"
                    name="nombre" />
            </div>
            
            <div className="input">
                <span className="input">Apellido</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="apellido"
                    name="apellido"/>
            </div>
            
            <div className="input">
                <span className="input">Cedula</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="cedula"
                    name="cedula" />
            </div>
            
            <div className="input">
                <span className="input">Email</span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="email" 
                    name="email" />
            </div>
            
            <div className="input">
                <span className="input">Numero de telefono</span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="numero" 
                    name="numero" />
            </div>
            <div className="input">
                <span className="input">Placa</span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="placa" 
                    name="placa"/>
            </div>
            <div>
                <button type="submit" className="btn btn-primary"> Añadir </button>
            </div>
           

        </form>
        <Footer/>
        </div>
    );}

}

export default Formulario;
