import { useState } from "react";

export function useArray(estadoInicial = []) {
  const [array, setArray] = useState(estadoInicial);

  const addItem = (item) => {
    setArray([...array, item]);
  };

  const removeItem = (index) => {
    setArray(array.filter((_, indice) => indice !== index));
  };

  const updateItem = (index, newItem) => {
    setArray(array.map((e, indice) => (indice === index ? newItem : e)));
  };

  return { array, addItem, removeItem, updateItem };
}
