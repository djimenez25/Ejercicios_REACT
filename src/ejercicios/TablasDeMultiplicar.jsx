import { useState } from "react";

export function TablasDeMultiplicar() {
  const [inicio, setInicio] = useState("");
  const [final, setFinal] = useState("");
  const [tablas, setTablas] = useState([]);
  const [error, setError] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    tablaMultiplicar();
  };

  const tablaMultiplicar = () => {
    if (inicio <= final) {
      let resultado = [];
      for (let i = inicio; i <= final; i++) {
        let tabla = `Tabla del ${i}: `;

        for (let j = 1; j <= 10; j++) {
          tabla += `${i} x ${j} = ${i * j} | `;
        }
        console.log(tabla);
        resultado.push(tabla);
      }

      setTablas(resultado);
      setInicio("");
      setFinal("");
      setError("");
    } else {
      setTablas([]);
      setFinal("");
      setInicio("");
      setError("Error, los numeros introducidos no son validos");
    }
  };

  return (
    <>
      <form onSubmit={enviarFormulario}>
        <label>Inicio</label>
        <input
          type='number'
          value={inicio}
          onChange={(e) => setInicio(e.target.value)}
        />
        <label>Final</label>
        <input
          type='number'
          value={final}
          onChange={(e) => setFinal(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>

      <h4>Tablas de Multiplicar</h4>
      <ul>
        {tablas.map((tabla, index) => (
          <li key={index}>{tabla}</li>
        ))}
      </ul>
      <p className='text-danger'>{error}</p>
    </>
  );
}
