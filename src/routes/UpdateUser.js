import ToHomeNav from "../components/ToHomeNavbar.js"
import Footer from "../components/Footer.js"

export default function UserUpdate(){
    return(
        <div>
        <ToHomeNav/>
         <h1>Se encuentra  dentro del campus?</h1>
         <div class="card">
             <div class="card-body">
                  Encontrar Su vehiculo
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