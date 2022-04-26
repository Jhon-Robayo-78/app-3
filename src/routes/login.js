import { Link } from "react-router-dom"
import HomeNav from "../components/ToHomeNavbar.js"
import Footer from "../components/Footer.js"
import "./base.css"

export default function Login() {
    return (
        <main>
            <HomeNav />
            <h1 className="mensaje">Hola de nuevo</h1>
            <p className="index--text">Por favor, digite su información</p>
            <div className="inputForms">
        
                <Link to="/conductor">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Usuario normal
                        </label>
                    </div>
                </Link>

                <Link to="/vigilante">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Vigilante
                        </label>
                    </div>
                </Link>

                <Link to="/controlador">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Controlador
                        </label>
                    </div>
                </Link>
                
                <div class="mb-3 row">
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="email" placeholder="Email" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Contraseña" />
                    </div>
                </div>
                <input class="btn btn-primary" type="submit" value="Ingresar" />                
            </div>
            <div className="options">
                <p><Link style={{ textDecoration: 'none' }} to="/recuperar_contrasena">Olvidé mi contrase}a</Link></p>
                <p className="crear"><Link  to="/crear_cuenta" style={{ textDecoration: 'none' }}>Crear cuenta</Link></p>

            </div>
            <Footer />
        </main>
    )
}
