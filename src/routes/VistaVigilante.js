import ToHomeNav from "../components/ToHomeNavbar.js"
import Footer from "../components/Footer.js"

function Vigilante(){
    return(
        <div className="contenedorPadre">
            <ToHomeNav/>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Concurrencia</h5>
                <div className="input-group">
                  <span className="input">Ingreso de vehiculo</span>
                  <input type="text"  className="form-control" placeholder="Placa de vehiculo"/>
                  <span className="input">Salida de vehiculo</span>
                  <input type="text"  className="form-control" placeholder="Placa de vehiculo"/>
                  <buttom><img src="./img/BottomVerticalNotificacion.png"/></buttom>
                   </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Registro de vehiculo nuevo</h5>
                <span className="input">Datos del conductor</span>
                  <input type="text" lassName="form-control" placeholder="ID del conductor"/>
                  <p>No existe? <a href="/crear_cuenta">Registrar</a></p>                
                  <span className="input">Datos del vehiculos</span>
                  <input type="text" className="form-control" placeholder="Placa"/>
                  <input type="text"  className="form-control" placeholder="Modelo"/>
                  <input type="text"  className="form-control" placeholder="Marca"/>
                  <input type="text" className="form-control" placeholder="Año"/>
                  <buttom><img src="./img/BottomVertical.png"/></buttom>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <h1 className="card-title">Solicitud de actualizacion</h1>
                <span className="input">Datos del vehiculos</span>
                  <input type="text" className="form-control" placeholder="Placa"/>
                  <input type="text" className="form-control" placeholder="Modelo"/>
                  <input type="text" className="form-control" placeholder="Marca"/>
                  <input type="text" className="form-control" placeholder="Año"/>
                  <buttom><img src="./img/BottomVertical.png"/></buttom>
                </div>
            </div>
            <Footer/>
        </div>
    );

}

export default Vigilante;