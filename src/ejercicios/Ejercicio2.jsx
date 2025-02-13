import { useEffect, useRef, useState } from "react";

export function Ejercicio2() {
  const [opcion, setOpcion] = useState();
  const [dias, setDias] = useState("");
  const [precio, setPrecio] = useState("");

  const alquiler = () => {
    switch (opcion) {
      case "coche":
        if (dias <= 5) {
          setPrecio(dias * 60);
        } else if (dias > 5) {
          setPrecio(dias * 50);
        } else if (dias > 8) {
          setPrecio(dias * 45);
        }
        break;

      case "piso":
        if (dias <= 7) {
          setPrecio(dias * 50);
        } else if (dias > 7) {
          setPrecio(dias * 45);
        } else if (dias > 12) {
          setPrecio(dias * 40);
        }
        break;

      case "hotel":
        if (dias <= 3) {
          setPrecio(dias * 40);
        } else if (dias > 3) {
          setPrecio(dias * 35);
        } else if (dias > 7) {
          setPrecio(dias * 30);
        }
        break;
    }
    console.log(precio);
  };

  useEffect(() => {
    alquiler();
  }, [opcion, dias]);

  return (
    <>
      <div className='container mt-4 p-4 border rounded shadow-lg bg-light text-center'>
        <h1 className='mb-4 text-primary'>🚗🏠🏨 Precio de Alquiler</h1>

        {/* Selector */}
        <div className='mb-3'>
          <label className='form-label fw-bold'>Selecciona una opción:</label>
          <select
            className='form-select w-50 mx-auto'
            onChange={(e) => setOpcion(e.target.value)}
          >
            <option>Selecciona una opción</option>
            <option value='coche'>🚗 Alquilar un coche</option>
            <option value='piso'>🏠 Alquilar un piso</option>
            <option value='hotel'>🏨 Noches de hotel</option>
          </select>
        </div>

        {/* Input de días */}
        <div className='mb-3'>
          <label className='form-label fw-bold'>Introduce los días:</label>
          <input
            value={dias}
            onChange={(e) => setDias(e.target.value)}
            type='number'
            className='form-control w-50 mx-auto text-center'
            placeholder='Número de días'
          />
        </div>

        {/* Mostrar precio */}
        <h5 className='mt-3 p-3 bg-success text-white rounded'>
          💰 Precio total: {precio} €
        </h5>
      </div>
    </>
  );
}
