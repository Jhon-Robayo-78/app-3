import ToHomeNav from "../components/ToHomeNavbar.js"
import Footer from "../components/Footer.js"
import "./base.css"

export default function Controlador() {
    return (
        <div>
            <ToHomeNav />
            <div className="cont-panel">
                <nav className="left-panel">

                </nav>
                <div className="right-panel">
                    <div className="card">
                        <h1 className="card-title">Novedades</h1>

                    </div>
                    <div className="card">
                        <h1 className="card-title">Registro</h1>
                    </div>
                    <div className="card mixed">
                        <h1 className="card-title mixed">En este momento</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}