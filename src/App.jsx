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
import { Comentarios } from "./ejercicios/Comentarios";
import { Reducer1 } from "./ejercicios/Reducer1";
import { Reducer2 } from "./ejercicios/Reducer2";
import { Reducer3 } from "./ejercicios/Reducer3";
import { Reducer4 } from "./ejercicios/Reducer4";
import { Reducer5 } from "./ejercicios/Reducer5";
import { HookPersonalizado1 } from "./ejercicios/HookPersonalizado1";
import { HookPersonalizado2 } from "./ejercicios/hookPersonalizado2";
import { HookPersonalizado3 } from "./ejercicios/HookPersonalizado3";
import { HookPersonalizado4 } from "./ejercicios/HookPersonalizado4";
import { HookPersonalizado5 } from "./ejercicios/HookPersonalizado5";
import { HookPersonalizado6 } from "./ejercicios/HookPersonalizado6";

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
            <li>
              <Link to='/comentarios' className='text-decoration-none'>
                Comentarios
              </Link>
            </li>
            <li>
              <Link to='/reducer1' className='text-decoration-none'>
                Ejercicio-useReduce 1
              </Link>
            </li>
            <li>
              <Link to='/reducer2' className='text-decoration-none'>
                Ejercicio-useReduce 2
              </Link>
            </li>
            <li>
              <Link to='/reducer3' className='text-decoration-none'>
                Ejercicio-useReduce 3
              </Link>
            </li>
            <li>
              <Link to='/reducer4' className='text-decoration-none'>
                Ejercicio-useReduce 4
              </Link>
            </li>
            <li>
              <Link to='/reducer5' className='text-decoration-none'>
                Ejercicio-useReduce 5
              </Link>
            </li>
            <li>
              <Link to='/hook1' className='text-decoration-none'>
                Ejercicio-HookPersonalizado 1
              </Link>
            </li>
            <li>
              <Link to='/hook2' className='text-decoration-none'>
                Ejercicio-HookPersonalizado 2
              </Link>
            </li>
            <li>
              <Link to='/hook3' className='text-decoration-none'>
                Ejercicio-HookPersonalizado 3
              </Link>
            </li>
            <li>
              <Link to='/hook4' className='text-decoration-none'>
                Ejercicio-HookPersonalizado 4
              </Link>
            </li>
            <li>
              <Link to='/hook5' className='text-decoration-none'>
                Ejercicio-HookPersonalizado 5
              </Link>
            </li>
            <li>
              <Link to='/hook6' className='text-decoration-none'>
                Ejercicio-HookPersonalizado 6
              </Link>
            </li>
          </ul>
        </nav>

        <main className='flex-grow-1 p-3'>
          <Routes>
            <Route path='/ejercicio1' element={<Ejercicio1 />} />
            <Route path='/ejercicio2' element={<Ejercicio2 />} />
            <Route path='/ejercicio3' element={<Ejercicio3 />} />
            <Route path='/temporizador' element={<Temporizador />} />
            <Route path='/contador' element={<Contador />} />
            <Route path='/formulario' element={<Formulario />} />
            <Route path='/comentarios' element={<Comentarios />} />
            <Route path='/reducer1' element={<Reducer1 />} />
            <Route path='/reducer2' element={<Reducer2 />} />
            <Route path='/reducer3' element={<Reducer3 />} />
            <Route path='/reducer4' element={<Reducer4 />} />
            <Route path='/reducer5' element={<Reducer5 />} />
            <Route path='/hook1' element={<HookPersonalizado1 />} />
            <Route path='/hook2' element={<HookPersonalizado2 />} />
            <Route path='/hook3' element={<HookPersonalizado3 />} />
            <Route path='/hook4' element={<HookPersonalizado4 />} />
            <Route path='/hook5' element={<HookPersonalizado5 />} />
            <Route path='/hook6' element={<HookPersonalizado6 />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
