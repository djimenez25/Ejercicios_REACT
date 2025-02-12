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
      <h1>Precio de alquiler</h1>
      <div>
        <select onChange={(e) => setOpcion(e.target.value)}>
          <option>Seleciona una opcion</option>
          <option value='coche'>Alquilar un coche</option>
          <option value='piso'>Alquilar piso</option>
          <option value='hotel'>Noches de hotel</option>
        </select>
      </div>
      <div>
        <input
          value={dias}
          onChange={(e) => setDias(e.target.value)}
          type='text'
          style={{ width: "30%" }}
          placeholder='Introduce los dias'
        />
      </div>
      {<h5>{precio}</h5>}
    </>
  );
}
