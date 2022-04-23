import React from "react";
import {Link} from "react-router-dom"
class Formulario extends React.Component{
   /* state={
        
    }
    handleSubmit = e =>{
        e.preventDefault()
        console.log(form)
    }*/
   /* handleChange = e =>{
        let partialState={}
        partialState[e.target.name]=e.target.value
        this.setState(partialState)
        /*form({
            [e.target.name]:e.target.value      
        })*/
    //}
    render(){
        const {onChange, Form, onSubmit}=this.props
    return(
        <div className="container">
            <h1>Creacion de Usuario</h1>
        <form onSubmit={onSubmit}>    
            
            <div className="input">
                <span className="input">Nombre</span>
                <input
                    type="text"  
                    className="form-control" 
                    placeholder="nombre"
                    name="nombre" 
                    onChange={onChange} 
                    value={Form.nombre}/>
            </div>
            
            <div className="input">
                <span className="input">Apellido</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="apellido"
                    name="apellido"
                    onChange={onChange}
                    value={Form.apellido}/>
            </div>
            
            <div className="input">
                <span className="input">Cedula</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="cedula"
                    name="cedula" 
                    onChange={onChange} 
                    value={Form.cedula}/>
            </div>
            
            <div className="input">
                <span className="input">Email</span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="email" 
                    name="email" 
                    onChange={onChange} 
                    value={Form.email}/>
            </div>
            
            <div className="input">
                <span className="input">Numero de telefono</span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="numero" 
                    name="numero" 
                    onChange={onChange} 
                    value={Form.numero}/>
            </div>
            <div>
                <button type="submit" className="btn btn-primary"> Añadir </button>
            </div>
            <div>
                <Link className="btn btn-primary" role="button" to='/ListUsers' >Listado de usuarios</Link>
            </div>

        </form>
        </div>
    );}

}

export default Formulario;

//                    onChange={onChange} 
//value={form.nombre}/>
