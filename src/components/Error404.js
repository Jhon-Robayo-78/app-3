import ToHomeNav from "../components/ToHomeNavbar.js"
import Footer from "../components/Footer.js"

function NotFound() {
    return(
        <div className="P404">
            <ToHomeNav />
            <h1>Uh-oh!</h1>
            <h1>Esta pagina no existe</h1>
            <h3>Como la encontraste?</h3>
            <img src='NotFoundWeb.png' id='NF1' alt="no found" />
            <Footer />
        </div>
    );
}

export default NotFound;