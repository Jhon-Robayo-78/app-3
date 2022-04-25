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
                    <nav className="card">
                        <h1 className="card-title">Novedades</h1>

                    </nav>
                    <nav className="card">
                        <h1 className="card-title">Registro</h1>
                    </nav>
                    <nav className="card mixed">
                        <h1 className="card-title">En este momento:</h1>
                    </nav>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}