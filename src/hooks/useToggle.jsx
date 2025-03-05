import { useState } from "react";

export function useToggle() {
  const [booleano, setBooleano] = useState(false);

  const toggleValor = () => {
    setBooleano(!booleano);
  };

  return [booleano, toggleValor];
}
