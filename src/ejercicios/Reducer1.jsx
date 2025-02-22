import { useReducer } from "react";

const contadorReducer = (state, action) => {
  switch (action.type) {
    case "incrementar":
      return state + 1;
    case "decrementar":
      return state - 1;
    case "reset":
      return (state = 0);
  }
};

export function Reducer1() {
  const [contador, setContador] = useReducer(contadorReducer, 0);
  return (
    <>
      <h3>{contador}</h3>
      <button onClick={() => setContador({ type: "incrementar" })}>
        Incrementar
      </button>
      <button onClick={() => setContador({ type: "decrementar" })}>
        Decrementar
      </button>
      <button onClick={() => setContador({ type: "reset" })}>Reiniciar</button>
    </>
  );
}
