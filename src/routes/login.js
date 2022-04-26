import { Link } from "react-router-dom"
import HomeNav from "../components/ToHomeNavbar.js"
import Footer from "../components/Footer.js"
import "./base.css"

export default function Login() {
    return (
        <main>
            <HomeNav />
            <h1 className="mensaje">Hola de nuevo</h1>
            <p className="index--text">Por favor, digite su informaci�n</p>
            <div className="inputForms">
                
                <div class="mb-3 row">
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="email" placeholder="Email" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Contrase�a" />
                    </div>
                </div>
                <input class="btn btn-primary" type="submit" value="Ingresar" />                
            </div>
            <div className="options">
                <p><Link style={{ textDecoration: 'none' }} to="/recuperar_contrasena">Olvid� mi contrase}a</Link></p>
                <p className="crear"><Link  to="/crear_cuenta" style={{ textDecoration: 'none' }}>Crear cuenta</Link></p>

            </div>
            <Footer />
        </main>
    )
}
