import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import App from './App';
import Login from"./routes/login"
import Registro from"./routes/registro"
import NotFound from './components/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
                <Route path="login" element={<Login />} />
                <Route path="registro" element={<Registro />} />

                {/* pagina no encontrada */}            
                <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

