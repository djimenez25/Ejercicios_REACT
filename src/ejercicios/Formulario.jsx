import { useEffect, useState } from "react";

export function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({});

  const enviarFormulario = (e) => {
    e.preventDefault();

    if (Object.keys(error).length === 0) {
      alert("Enviado");
    } else {
      alert("No enviado");
    }
  };

  useEffect(() => {
    const newErrors = {};
    if (nombre.length >= 0 && nombre.length < 5) {
      newErrors.nombre = "Debe introducir mas de 5 caracteres";
    }
    if (email.length >= 0 && email.length < 5) {
      newErrors.email = "Debe introducir mas de 5 caracteres";
    }
    if (password.length >= 0 && password.length < 5) {
      newErrors.password = "Debe introducir mas de 5 caracteres";
    }
    setError(newErrors);
  }, [nombre, email, password]);

  return (
    <>
      <form onSubmit={enviarFormulario}>
        <div className='mb-3'>
          <label className='form-label'>Nombre:</label>
          <input
            type='text'
            value={nombre}
            className='form-control'
            onChange={(e) => setNombre(e.target.value)}
          />
          {error.nombre && <p style={{ color: "red" }}>{error.nombre}</p>}
        </div>

        <div className='mb-3'>
          <label className='form-label'>Email:</label>
          <input
            type='email'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>

        <div className='mb-3'>
          <label className='form-label'>Password:</label>
          <input
            type='password'
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>

        <button type='submit'>Enviar</button>
      </form>
    </>
  );
}
