import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
// ROUTES
import App from './App';
import NotFound from './components/Error404';
import Login from"./routes/login"
import Registro from "./routes/crear_cuenta"
import Recuperar from "./routes/recuperar_contrasena"
import Vigilante from './routes/VistaVigilante';
import Notificacion from './routes/Notificacion';
import Controlador from "./routes/Controlador"
import Conductor from './routes/Conductor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
                <Route path="login" element={<Login />} />
                    <Route path="crear_cuenta" element={<Registro />} />
                    <Route path="recuperar_contrasena" element={<Recuperar />} />
                    <Route path="vigilante" element={<Vigilante />} />
                    <Route path="notificacion" element={<Notificacion />} />
                    <Route path="controlador" element={<Controlador />} />
                    <Route path="conductor" element={<Conductor />} />


                {/* pagina no encontrada */}            
                <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

