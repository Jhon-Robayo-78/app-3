import { Link } from "react-router-dom"
import ToHomeNav from "../components/ToHomeNavbar.js"
import Footer from "../components/Footer.js"
import "./login.css"


const linkStyle = {
    color: "white",
    textDecoration: "none",
};

export default function Login() {
    return (
        <div>
            <ToHomeNav />

            <h1 className="mensaje">Recuperacion</h1>
            <p>Si tiene una cuenta de correo ya registrada, recibira un correo de recuperacion</p>
            <div className="inputForms">

                <div class="mb-3 row">
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="email" placeholder="Email" />
                    </div>
                </div>
                <div style={{
                    display: "flex",
                }}>
                    <input class="btn btn-primary" type="submit" value="Enviar correo" />
                    <button className="manualButton"><Link to="/login" style={linkStyle} >Atras</Link></button>
                </div>

            </div>  
            <Footer />
        </div>
    )
}