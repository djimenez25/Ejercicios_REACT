import { useState } from "react";

export function useCounter(valorInicial) {
  const [contador, setContador] = useState(valorInicial);

  const incrementarContador = () => {
    setContador((contadorPrev) => contadorPrev + 1);
  };

  const decrementarContador = () => {
    setContador((contadorPrev) => contadorPrev - 1);
  };

  const resetContador = () => {
    setContador(valorInicial);
  };

  return { contador, incrementarContador, decrementarContador, resetContador };
}
