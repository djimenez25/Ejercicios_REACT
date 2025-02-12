import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Ejercicio1 } from "./ejercicios/ejercicio1";
import { Ejercicio2 } from "./ejercicios/Ejercicio2";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Ejercicio3 } from "./ejercicios/Ejercicio3";
import { Temporizador } from "./ejercicios/Temporizador";
import { Contador } from "./ejercicios/Contador";
import { Formulario } from "./ejercicios/Formulario";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className='bg-light p-3'>
          <h4>Menú de ejercicios</h4>
          <ul className='list-unstyled'>
            <li>
              <Link to='/ejercicio1' className='text-decoration-none'>
                Ejercicio 1
              </Link>
            </li>
            <li>
              <Link to='/ejercicio2' className='text-decoration-none'>
                Ejercicio 2
              </Link>
            </li>
            <li>
              <Link to='/ejercicio3' className='text-decoration-none'>
                Ejercicio 3
              </Link>
            </li>
            <li>
              <Link to='/temporizador' className='text-decoration-none'>
                Temporizador
              </Link>
            </li>
            <li>
              <Link to='/contador' className='text-decoration-none'>
                Contador
              </Link>
            </li>
            <li>
              <Link to='/formulario' className='text-decoration-none'>
                Formulario
              </Link>
            </li>
          </ul>
        </nav>

        <main className='flex-grow-1 p-3 bg-white'>
          <Routes>
            <Route path='/ejercicio1' element={<Ejercicio1 />} />
            <Route path='/ejercicio2' element={<Ejercicio2 />} />
            <Route path='/ejercicio3' element={<Ejercicio3 />} />
            <Route path='/temporizador' element={<Temporizador />} />
            <Route path='/contador' element={<Contador />} />
            <Route path='/formulario' element={<Formulario />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
