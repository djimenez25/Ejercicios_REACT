import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export function Comentarios() {
  const [nombre, setNombre] = useState("");
  const [resenia, setResenia] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");

  useEffect(() => {
    const comentariosGuardados = localStorage.getItem("comentarios");
    if (comentariosGuardados) {
      setComentarios(JSON.parse(comentariosGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
  }, [comentarios]);

  const agregarComentario = (e) => {
    e.preventDefault();

    if (nombre.length > 0 && resenia.length > 0 && nuevoComentario.length > 0) {
      const comentarioNuevo = {
        id: Date.now(),
        nombre,
        resenia,
        nuevoComentario,
        like: 0,
        dislike: 0,
      };
      setComentarios([...comentarios, comentarioNuevo]);
      setNuevoComentario("");
      setResenia("");
      setNombre("");
      // Mensaje de éxito
      Swal.fire({
        icon: "success",
        title: "¡Comentario enviado!",
        text: "Tu comentario se ha publicado correctamente.",
        confirmButtonColor: "#198754",
      });
    } else {
      // Mensaje de error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, rellena todos los campos.",
        confirmButtonColor: "#d33",
      });
    }
  };

  const sumarLike = (id) => {
    setComentarios(
      comentarios.map((comentario) =>
        comentario.id === id
          ? { ...comentario, like: comentario.like + 1 }
          : comentario
      )
    );
  };

  const sumarDislike = (id) => {
    setComentarios(
      comentarios.map((comentario) =>
        comentario.id === id
          ? { ...comentario, dislike: comentario.dislike + 1 }
          : comentario
      )
    );
  };

  const eliminarComentario = (id) => {
    const nuevosComentarios = [...comentarios.filter((c) => c.id !== id)];
    setComentarios(nuevosComentarios);
  };

  return (
    <>
      <div className='container mt-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card shadow-lg border-0'>
              <div className='card-body'>
                <h3 className='card-title text-center text-primary'>
                  Deja tu comentario
                </h3>
                <form onSubmit={agregarComentario}>
                  <div className='mb-3'>
                    <label className='form-label fw-bold'>Nombre:</label>
                    <input
                      type='text'
                      className='form-control shadow-sm'
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder='Escribe tu nombre'
                    />
                  </div>

                  <div className='mb-3'>
                    <label className='form-label fw-bold'>Reseña:</label>
                    <input
                      type='text'
                      className='form-control shadow-sm'
                      value={resenia}
                      onChange={(e) => setResenia(e.target.value)}
                      placeholder='Escribe una breve reseña'
                    />
                  </div>

                  <div className='mb-3'>
                    <label className='form-label fw-bold'>Comentario:</label>
                    <textarea
                      className='form-control shadow-sm'
                      rows='3'
                      value={nuevoComentario}
                      onChange={(e) => setNuevoComentario(e.target.value)}
                      placeholder='Escribe tu comentario aquí...'
                    ></textarea>
                  </div>

                  <div className='d-grid'>
                    <button type='submit' className='btn btn-primary'>
                      🚀 Enviar Comentario
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className='list-unstyled container mt-4'>
        <div className='row'>
          {comentarios.map((comentario) => (
            <div key={comentario.id} className='col-md-6 mb-4'>
              <div className='card shadow-lg border-0'>
                <div className='card-body'>
                  <h5 className='card-title text-primary fw-bold'>
                    {comentario.nombre}
                  </h5>
                  <h6 className='text-muted'>Reseña</h6>
                  <p className='card-text'>{comentario.resenia}</p>
                  <h6 className='text-muted'>Comentario</h6>
                  <p className='card-text'>{comentario.nuevoComentario}</p>
                  <div className='d-flex justify-content-between'>
                    <button
                      className='btn btn-outline-success m-2'
                      onClick={() => sumarLike(comentario.id)}
                    >
                      👍 Me gusta ({comentario.like})
                    </button>
                    <button
                      className='btn btn-outline-danger m-2'
                      onClick={() => sumarDislike(comentario.id)}
                    >
                      👎 No me gusta ({comentario.dislike})
                    </button>
                    <button
                      className='btn btn-outline-secondary m-2'
                      onClick={() => eliminarComentario(comentario.id)}
                    >
                      ❌ Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </>
  );
}
