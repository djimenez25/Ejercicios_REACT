import { useReducer, useRef, useState } from "react";

const usuariosReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_USUARIO":
      return [...state, action.usuario];
    case "ELIMINAR_USUARIO":
      return state.filter((usuario) => usuario.id !== action.idUsuario);
    case "EDITAR_USUARIO":
      return state.map((usuario) =>
        usuario.id === action.usuario.id ? action.usuario : usuario
      );
  }
};

export function Reducer4() {
  const [state, dispatch] = useReducer(usuariosReducer, []);
  const usuarioNombreRef = useRef();
  const usuarioEmailRef = useRef();
  const [usuarioEditado, setUsuarioEditado] = useState(null);

  const agregarEditarUsuario = (e) => {
    e.preventDefault();
    const nuevoUsuario = {
      id: usuarioEditado ? usuarioEditado.id : Date.now(),
      name: usuarioNombreRef.current.value,
      email: usuarioEmailRef.current.value,
    };

    if (usuarioEditado) {
      dispatch({ type: "EDITAR_USUARIO", usuario: nuevoUsuario });
      setUsuarioEditado(null);
    } else {
      dispatch({ type: "AGREGAR_USUARIO", usuario: nuevoUsuario });
    }

    usuarioNombreRef.current.value = "";
    usuarioEmailRef.current.value = "";
  };

  const eliminarUsuario = (id) => {
    dispatch({ type: "ELIMINAR_USUARIO", idUsuario: id });
  };

  const editarUsuario = (usuario) => {
    setUsuarioEditado(usuario);
    usuarioNombreRef.current.value = usuario.name;
    usuarioEmailRef.current.value = usuario.email;
  };
  return (
    <>
      <form onSubmit={agregarEditarUsuario}>
        <h3>Formulario para agregar usuarios</h3>

        <input
          type='text'
          name='name'
          ref={usuarioNombreRef}
          placeholder='Nombre'
        />
        <input
          type='email'
          name='email'
          ref={usuarioEmailRef}
          placeholder='Email'
        />
        <button type='submit'>
          {usuarioEditado ? "Editar usuario" : "Agregar usuario"}
        </button>
      </form>
      <ul>
        {state.map((usuario) => (
          <li key={usuario.id}>
            <b>Nombre: </b>
            {usuario.name} <br />
            <b>Email: </b>
            {usuario.email}
            <button onClick={() => eliminarUsuario(usuario.id)}>
              Eliminar Usuario
            </button>
            <button onClick={() => editarUsuario(usuario)}>
              Editar Usuario
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
