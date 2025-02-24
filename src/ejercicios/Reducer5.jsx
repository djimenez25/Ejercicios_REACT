import { useReducer, useState } from "react";

const notasReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_NOTA":
      return [...state, action.nota];

    case "ELIMINAR_NOTA":
      return state.filter((nota) => nota.id !== action.idNota);

    case "EDITAR_NOTA":
      return state.map((nota) =>
        nota.id === action.nota.id ? action.nota : nota
      );
  }
};

export function Reducer5() {
  const [state, dispatch] = useReducer(notasReducer, []);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [notaEditada, setNotaEditada] = useState(null);

  const agregarEditarNota = (e) => {
    e.preventDefault();
    const nuevaNota = {
      id: notaEditada ? notaEditada.id : Date.now(),
      titulo: titulo,
      contenido: contenido,
    };

    if (notaEditada) {
      dispatch({ type: "EDITAR_NOTA", nota: nuevaNota });
      setNotaEditada(null);
    } else {
      dispatch({ type: "AGREGAR_NOTA", nota: nuevaNota });
    }

    setTitulo("");
    setContenido("");
  };

  const eliminarNota = (id) => {
    dispatch({ type: "ELIMINAR_NOTA", idNota: id });
  };

  const editarNota = (nota) => {
    setNotaEditada(nota);
    setTitulo(nota.titulo);
    setContenido(nota.contenido);
  };
  return (
    <>
      <form onSubmit={agregarEditarNota}>
        <input
          type='text'
          name='titulo'
          placeholder='Titulo...'
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <br />
        <input
          type='text'
          name='contenido'
          placeholder='Contenido...'
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
        />
        <br />
        <button type='submit'>
          {notaEditada ? "Editar nota" : "Agregar nota"}
        </button>
      </form>

      <ul>
        {state.map((nota) => (
          <li key={nota.id}>
            <b>Titulo: </b>
            {nota.titulo}
            <br />
            <b>Contenido: </b>
            {nota.contenido}

            <button onClick={() => eliminarNota(nota.id)}>Eliminar nota</button>
            <button onClick={() => editarNota(nota)}>Editar nota</button>
          </li>
        ))}
      </ul>
    </>
  );
}
