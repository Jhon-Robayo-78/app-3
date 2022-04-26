import ToHomeNav from "../components/ToHomeNavbar.js"
import Footer from "../components/Footer.js"

export default function Conductor(){
    return(
        <div>
        <ToHomeNav/>
        <h1 className="mensaje">Bienvenido</h1>
        <div class="card">
            <div class="wrap-card">
                <div>
                    <h1 className="card-title">¿Se encuentra dentro del campus?</h1>
                    <h5 className="card-title">Encuentre su vehículo</h5>
                </div>

                    <button className="confirmation-button">&#x1F4CD;</button>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <div className="dinamic-card">
                    <div>
                        <h1 className="card-title">Solicitud de actualización</h1>
                        <h5 className="card-title">Cambió de vehículo?</h5>
                    </div>
                    <div margin-left="10px">
                        <div class="row g-3">
                            <h3 className="input">Datos del vehículo</h3>
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