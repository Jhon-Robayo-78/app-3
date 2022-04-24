import { Link } from "react-router-dom"
import ToHomeNav from "../components/ToHomeNavbar.js"
import Footer from "../components/Footer.js"
import Formulario from "../components/Formulario.js"
export default function Login() {
    return (
        <div>
            <ToHomeNav />

             <Formulario/>

            <Footer />
        </div>
    )
}