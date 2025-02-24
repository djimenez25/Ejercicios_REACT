import { act, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_CAMPO":
      return [...state, { id: Date.now(), value: "" }];
    case "ELIMINAR_CAMPO":
      return state.filter((campo) => campo.id !== action.idCampo);
    case "ACTUALIZAR_VALOR":
      return state.map((campo) =>
        campo.id === action.idCampo
          ? { ...campo, value: action.nuevoCampo }
          : campo
      );
  }
};

export function Reducer3() {
  const [state, dispatch] = useReducer(formReducer, []);

  return (
    <>
      <button onClick={() => dispatch({ type: "AGREGAR_CAMPO" })}>
        Agregar campo
      </button>

      <div>
        {state.map((campo) => (
          <div key={campo.id}>
            <input
              type='text'
              value={campo.value}
              onChange={(e) =>
                dispatch({
                  type: "ACTUALIZAR_VALOR",
                  idCampo: campo.id,
                  nuevoCampo: e.target.value,
                })
              }
            />
            <button
              onClick={() =>
                dispatch({ type: "ELIMINAR_CAMPO", idCampo: campo.id })
              }
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
