import { useEffect, useState } from "react";

export function Comentarios() {
  const [nombre, setNombre] = useState("");
  const [resenia, setResenia] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const comentariosGuardados = localStorage.getItem("comentarios");
    if (comentariosGuardados) {
      setComentarios(JSON.parse(comentariosGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
  }, [comentarios]);

  const sumarContador = (index) => {
    setContador(contador + 1);
  };

  const agregarComentario = (e) => {
    e.preventDefault();

    const comentarioNuevo = {
      nombre,
      resenia,
      nuevoComentario,
    };
    setComentarios([...comentarios, comentarioNuevo]);
    setNuevoComentario("");
    setResenia("");
    setNombre("");
  };

  const eliminarComentario = (index) => {};

  return (
    <>
      <form>
        <div className='mb-3'>
          <label className='form-label'>Nombre:</label>
          <input
            type='text'
            className='form-control'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Reseña:</label>
          <input
            type='text'
            className='form-control'
            value={resenia}
            onChange={(e) => setResenia(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Comentario:</label>
          <input
            type='text'
            className='form-control'
            value={nuevoComentario}
            onChange={(e) => setNuevoComentario(e.target.value)}
          />
        </div>

        <button onClick={agregarComentario} type='submit'>
          Enviar
        </button>
      </form>

      <ul>
        {comentarios.map((comentario, index) => (
          <div key={index}>
            <h6>Nombre: {comentario.nombre}</h6>
            <p>Reseña: {comentario.resenia}</p>
            <p>Comentario: {comentario.nuevoComentario}</p>
            <div>
              <button onClick={sumarContador}>Me gusta{contador}</button>
              <button onClick={sumarContador}>No me gusta{contador}</button>
              <button>Eliminar</button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
