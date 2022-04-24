import ToHomeNav from "../components/ToHomeNavbar.js"
import Footer from "../components/Footer.js"

export default function Notificacion(){
    return(
        <div>
            <ToHomeNav/>
         <h1>Cual es Su problema?</h1>
         <div class="dropdown">
             <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                 Tipo de notificacion
             </button>
             <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Alta</a></li>
                <li><a class="dropdown-item" href="#">moderada</a></li>
                <li><a class="dropdown-item" href="#">Baja</a></li>
             </ul>
         </div>   
        <div class="mb-3">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="placa de  vehiculo"/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <Footer/>
        </div>
    );
}