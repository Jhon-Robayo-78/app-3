import ToHomeNav from "../components/ToHomeNavbar.js"
import Footer from "../components/Footer.js"

function Notificacion(){
    return(
        <div>
            <ToHomeNav />
            <h1 className="mensaje">Cual es su problema?</h1>
            <div className="centered">
                <h4>Nivel de urgencia</h4>
                <select class="form-select" aria-label="Default select example">
                    <option value="Baja">Baja</option>
                    <option value="Media">Media</option>
                    <option value="Moderada">Moderada</option>
                </select>

                <label for="exampleFormControlTextarea1" class="form-label">Placa del vehículo</label>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleFormControlInput1"/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="confirmation-button">Enviar</button>
            </div>
            <Footer/>
        </div>
    );
}

export default Notificacion