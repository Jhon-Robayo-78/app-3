import ToHomeNav from "../components/ToHomeNavbar.js"
import Footer from "../components/Footer.js"
import "./base.css"
import { Link } from "react-router-dom"

function Vigilante(){
    return(
        <div className="contenedorPadre">
            <ToHomeNav />

            {/*Top card*/}
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">Concurrencia</h1>
                    <div className="input-group">
                        <span className="input-title">Ingreso</span>
                        <div className="dinamic-card">
                            <input type="text" className="form-control" placeholder="Placa del vehiculo" />
                            <button className="confirmation-button">&#x2714;</button>
                        </div>
                        <span className="input">Salida</span>
                        <div className="dinamic-card">
                            <input type="text" className="form-control" placeholder="Placa del vehiculo" />
                            <button className="confirmation-button">&#x2714;</button>
                        </div>
                        <button className="notification-button" type="submit"><Link to="/notificacion">&#128276;</Link></button>
                    </div>
                </div>
                
            </div>

            {/*Middle card*/}
            <div className="card">
                <div className="card-body">
                    <div className="dinamic-card">
                        <div>
                            <h1 className="row-title">Registro de nuevo vehiculo</h1>
                            <h5>Datos del conductor</h5>
                            <input type="text" class="form-control" placeholder="Id del conductor" aria-label="First name" />
                            <p>No existe? <Link to="/crear_cuenta">Registrar</Link></p>
                        </div>

                        <div margin-left="10px">
                            <div class="row g-3">
                                <h3 className="input">Datos del vehiculo</h3>
                            </div>
                            <div class="row g-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Placa" aria-label="First name" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Marca" aria-label="Last name" />
                                </div>
                            </div>
                            <div class="row g-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Modelo" aria-label="First name" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Anio" aria-label="Last name" />
                                </div>
                            </div>
                        </div>
                        <button className="confirmation-button" type="submit">&#x2714;</button>
                    </div>
                </div>
            </div>

            {/*Bottom card*/}
            <div className="card">
                <div className="card-body">
                    <div className="dinamic-card">
                        <h1 className="card-title">Solicitud de actualizacion</h1>
                        
                        <div margin-left="10px">
                            <div class="row g-3">
                                <h3 className="input">Datos del vehiculo</h3>
                            </div>
                            <div class="row g-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Placa" aria-label="First name" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Marca" aria-label="Last name" />
                                </div>
                            </div>
                            <div class="row g-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Modelo" aria-label="First name" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Anio" aria-label="Last name" />
                                </div>
                            </div>
                        </div>
                        <button className="confirmation-button" type="submit">&#x2714;</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );

}

export default Vigilante;