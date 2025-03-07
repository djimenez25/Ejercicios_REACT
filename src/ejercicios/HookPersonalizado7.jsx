import { useArray } from "../hooks/useArray";

export function HookPersonalizado7() {
  const { array, addItem, removeItem, updateItem } = useArray([1, 2, 3]);
  return (
    <>
      <ul>
        {array.map((e, index) => (
          <li key={index}>
            {e}
            <button onClick={() => removeItem(index)}>Eliminar</button>
            <button onClick={() => updateItem(index, e * 10)}>Editar</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem(array.length + 1)}>Añadir elemento</button>
    </>
  );
}
