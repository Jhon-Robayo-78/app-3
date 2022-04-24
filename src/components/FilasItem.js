import AddPerson from "./AddPerson";
import ListPerson from "./listPerson";

function Filas(props){  
    return(
        <div className="list">
            <h2>listado</h2>
       {
       props.Data.map(person =>
         
         <ListPerson 
                key={person.placa}
                placa={person.placa}
                nombre={person.nombre}
                entrada={person.entrada}
                salida={person.salida}
                miembro={person.MiembroU}/>
                )
        }
        <AddPerson/>
        </div>

    );
    
}

export default Filas;