import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({});

  const enviarFormulario = (e) => {
    e.preventDefault();

    if (Object.keys(error).length === 0) {
      setNombre("");
      setEmail("");
      setPassword("");
      Swal.fire({
        icon: "success",
        title: "Formulario enviado!",
        text: "Tu formulario se ha publicado correctamente.",
        confirmButtonColor: "#198754",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al enviar formulario",
        confirmButtonColor: "#d33",
      });
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
      <form
        onSubmit={enviarFormulario}
        className='container mt-4 p-4 border rounded shadow-lg bg-light'
      >
        <h2 className='text-center text-primary mb-4'>📝 Registro</h2>

        <div className='mb-3'>
          <label className='form-label fw-bold'>Nombre:</label>
          <input
            type='text'
            className={`form-control ${
              error.nombre ? "is-invalid" : "is-valid"
            }`}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {error.nombre && (
            <div className='invalid-feedback'>{error.nombre}</div>
          )}
        </div>

        <div className='mb-3'>
          <label className='form-label fw-bold'>Email:</label>
          <input
            type='email'
            className={`form-control ${
              error.email ? "is-invalid" : "is-valid"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <div className='invalid-feedback'>{error.email}</div>}
        </div>

        <div className='mb-3'>
          <label className='form-label fw-bold'>Contraseña:</label>
          <input
            type='password'
            className={`form-control ${
              error.password ? "is-invalid" : "is-valid"
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && (
            <div className='invalid-feedback'>{error.password}</div>
          )}
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          🚀 Enviar
        </button>
      </form>
    </>
  );
}
