import {Link} from "react-router-dom"

function AddPerson(){
    return(
        <div className="Contenedor">
            <div className="entradaVehiculo">
                <Link className="btn btn-primary" to="/AddEntrada" role="button">agregar entrada</Link>
            </div>
            <div className="Add-person">
            <Link className="btn btn-primary" to="/Registro" role="button">+agregar nuevo usuario</Link>
            </div>
        </div>
    );
}

export default AddPerson;