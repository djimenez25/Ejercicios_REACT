import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export function HookPersonalizado2() {
  const [url, setUrl] = useState("https://biblioteca.guappi.com/api/libros");
  const { data, loading, error } = useFetch(url);
  return (
    <>
      <h1>Libros:</h1>
      {loading && <p>Cargando</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
}
