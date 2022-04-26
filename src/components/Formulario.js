import React from "react";
import Footer from "../components/Footer.js"

class Formulario extends React.Component{
   
    render(){
    return(
        <div className="container">
            
            <h1 className="mensaje">Registro</h1>
            
            <form className="inputForms">    
                <h4>Afiliación UTB</h4>
                <select class="form-select" aria-label="Default select example">
                    <option value="visitante">Visitante</option>
                    <option value="Media">Estudiante</option>
                    <option value="Profesor">Profesor</option>
                    <option value="Administrativo">Administrativo</option>
                    <option value="Vigilante">Vigilante</option>
                </select>
            <div className="input">
                <span className="input">Nombre</span>
                <input
                    type="text"  
                    className="form-control" 
                    name="nombre" />
            </div>
            
            <div className="input">
                <span className="input">Apellido</span>
                <input
                    type="text"
                    className="form-control"
                    name="apellido"/>
            </div>
            
            <div className="input">
                <span className="input">Cédula</span>
                <input
                    type="text"
                    className="form-control"
                    name="cedula" />
            </div>
            
            <div className="input">
                <span className="input">Número de teléfono</span>
                <input 
                    type="text" 
                    className="form-control" 
                    name="numero" />
            </div>
            
            <div className="input">
                <span className="input">Correo electrónico</span>
                <input 
                    type="text" 
                    className="form-control" 
                    name="correo" />
            </div>
            <div className="input">
                <span className="input">Contraseña</span>
                <input 
                    type="text" 
                    className="form-control" 
                    name="contrasena"/>
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
