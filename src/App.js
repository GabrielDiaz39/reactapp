import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import SumayResta from "./Components/Calculadora";
import Temperatura from "./Components/CalculadoraTemperatura";
import Formulario from "./Components/Formulario";
export function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>Formularios en React</h1>
                <Menu></Menu>
                <Routes>
                    <Route path="/Calculadora" element={<SumayResta />} />
                    <Route path="/CalculadoraTemperatura" element={<Temperatura />} />
                    <Route path="/Formulario" element={<Formulario />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}