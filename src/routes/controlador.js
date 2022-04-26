import ToHomeNav from "../components/ToHomeNavbar.js"
import Footer from "../components/Footer.js"
import "./base.css"
import { Link } from "react-router-dom"

export default function Controlador() {
    return (
        <div>
            <ToHomeNav />
            <div className="cont-panel">
                <nav className="left-panel">
                    <h1 className="card-title">Solicitudes de actualizacion</h1>
                    <table>
                        <tr>
                            <td>
                                <div className="databox">
                                    <div class="row g-3">
                                        <div class="col">
                                            <p>Placa</p>
                                        </div>
                                        <div class="col">
                                            <p>ID conductor</p>
                                        </div>
                                    </div>
                                    <div class="row g-3">
                                        <div class="col">
                                            <p>Fecha</p>
                                        </div>
                                        <div class="col">
                                            <a href="#">Revisar</a>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>

                </nav>
                <div>
                    <nav className="cont-card">
                        <h1 className="card-title">Novedades</h1>
                        <table>
                            <tr>
                                <td>
                                    <div className="databox">
                                        <div class="row g-3">
                                            <div class="col">
                                                <p>Placa</p>
                                            </div>
                                            <div class="col">
                                                <p>Nivel</p>
                                            </div>
                                        </div>
                                        <div class="row g-3">
                                            <div class="col">
                                                <p>Fecha</p>
                                            </div>
                                            <div class="col">
                                                <a href="#">Mas detalles</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </nav>

                    <nav className="cont-card">
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
                    </nav>

                    <nav className="cont-card dinamic">
                        <div>
                            <h1 className="card-title">En este momento:</h1>
                        </div>
                            <div>
                                <div class="row g-3">
                                    <div class="col">
                                        <p>Estudiante</p>
                                    </div>
                                    <div class="col">
                                        <p>###</p>
                                    </div>
                                </div>
                                <div class="row g-3">
                                    <div class="col">
                                        <p>Administrativo</p>
                                    </div>
                                    <div class="col">
                                    <p>###</p>
                                    </div>
                                </div>
                                <div class="row g-3">
                                    <div class="col">
                                        <p>Visitante</p>
                                    </div>
                                    <div class="col">
                                    <p>###</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Vehiculos dentro de las instalaciones:</p>
                                <h1>###</h1>
                            </div>
                            <div>
                                <p>Espacios disponibles:</p>
                                <h1>###</h1>
                            </div>
                        
                    </nav>
                </div>
            </div>
            <Footer />
        </div>        
    )
}
