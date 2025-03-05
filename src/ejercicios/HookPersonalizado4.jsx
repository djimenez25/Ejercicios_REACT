import { useToggle } from "../hooks/useToggle";

export function HookPersonalizado4() {
  const [booleano, toggleValor] = useToggle();

  console.log(toggleValor);
  return (
    <>
      <button onClick={toggleValor}>{booleano ? "Mostrar" : "Ocultar"}</button>
      {!booleano && <p>Este texto se esta mostrando</p>}
    </>
  );
}
