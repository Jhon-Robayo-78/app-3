import { Link } from "react-router-dom"
import ToHomeNav from "../components/ToHomeNavbar.js"
import Footer from "../components/Footer.js"
import "./base.css"


const linkStyle = {
    color: "white",
    textDecoration: "none",
};

export default function Recuperar() {
    return (
        <div>
            <ToHomeNav />

            <h1 className="mensaje">Recuperaci�n</h1>
            
            <div className="inputForms">
                <p>Si tiene una cuenta de correo ya registrada, recibir� un correo de recuperaci�n</p>
                <div class="mb-3 row">
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="email" placeholder="Email" />
                    </div>
                </div>
                <div style={{
                    display: "flex",
                }}>
                    <input class="btn btn-primary" type="submit" value="Enviar correo" />
                    <button className="manualButton"><Link to="/login" style={linkStyle} >Atr�s</Link></button>
                </div>

            </div>  
            <Footer />
        </div>
    )
}