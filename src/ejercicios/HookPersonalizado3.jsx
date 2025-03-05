import { useCounter } from "../hooks/useCounter";

export function HookPersonalizado3() {
  const { contador, incrementarContador, decrementarContador, resetContador } =
    useCounter(0);
  return (
    <>
      <h1>{contador}</h1>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={decrementarContador}>Decrementar</button>
      <button onClick={resetContador}>Reset</button>
    </>
  );
}
