import React from 'react';
import Validar from './validar';
import IndicadorHora from './IndicacionHora';

//boostrap

class ListPerson extends React.Component{
    render(){
        const {id,nombre,apellido,cedula,email,numero,entrada,salida,placa}=this.props
        
        
        return(
        
        <ul className="list-group list-group-horizontal">
            <li className="list-group-item">{placa}</li>
            <li className="list-group-item">{nombre}</li>
            <li className="list-group-item"> {entrada.hora}:{entrada.minutos}{IndicadorHora(entrada.hora)}</li>
            <li className="list-group-item"> {salida.hora}:{salida.minutos}{IndicadorHora(salida.hora)}</li>
            <li className="list-group-item">{Validar(miembro)}</li>
        </ul>
        );
    }    
}

export default ListPerson;