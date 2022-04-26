import "./CSS modulos/navbar.css"
import { Link } from "react-router-dom"

function Homenavbar() {
    return (
        <nav className="indexNav">
            <img className="nav--logo" src="LOGO UTB.png" alt="UTB Logo" />
            <h1 className="nav--logo_text">Sistema SCAV</h1>
            <div className="anchors">
                <Link to="/" className="nav--anchor">Volver al inicio</Link>
            </div>
        </nav>
    );
}

export default Homenavbar