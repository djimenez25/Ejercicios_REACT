import { useRef, useState } from "react";

export function Ejercicio1() {
  const [imagenes, setImagenes] = useState([
    "https://img.asmedia.epimg.net/resizer/v2/OWNQNAG6CUBXD3N3XQNI2SPGUU.jpg?auth=a4d8d0deaa6fb93374ab1e91376a616a3cfe7bfa8d11d38c789c9143a1808cef&width=480&height=270&focal=1615%2C929",
    "https://img.asmedia.epimg.net/resizer/v2/PZ4MEPEIRVEV3OC5NYY75GIWOM.jpg?auth=4d2b57894807a1e5dbb9b90f4709b71d17bab1f0a2676cad80856fc7a01eafb6&width=480&height=270&focal=335%2C48",
    "https://img.asmedia.epimg.net/resizer/v2/BBBLET3HQFDTVHNH3CFD26AWVY.jpg?auth=c21933d3c5e832c6dbd5cc616aa9bcf8523a8a2a798a243a49bb914e6aec5378&width=480&height=270&focal=2458%2C1866",
    "https://img.asmedia.epimg.net/resizer/v2/YSYJO6KZUFBJ7PIEDMGIT54JPQ.JPG?auth=42b2d0e12aa11277398fe9855966a9ee5a1a7c3a9612697782f39c225eb33a47&width=480&height=270&focal=1008%2C330",
  ]);
  const [error, setError] = useState();
  const txt_imagen = useRef();
  const [posicion, setPosicion] = useState(0);

  const agregarImagen = () => {
    let url_img = txt_imagen.current.value;
    setError("");
    url_img.length > 5
      ? setImagenes([...imagenes, url_img])
      : setError("Debe introducir almenos 5 caracteres");

    error && (txt_imagen.current.value = "");
  };

  const pasoDeImagen = () => {};

  return (
    <>
      <h1>Galeria de imagenes</h1>
      {imagenes.map((imagen, index) => (
        <img style={{ width: "300px" }} key={index} src={imagen} />
      ))}
      <div>
        <input
          ref={txt_imagen}
          style={{ width: "100%" }}
          type='text'
          placeholder='Introduce una imagen'
        />
        {error && <h5 style={{ color: "red" }}>{error}</h5>}
      </div>
      <button onClick={agregarImagen}>Añadir imagen</button>
      <hr />
      <div>
        <img src={imagenes[posicion]} />
      </div>
      {posicion != 0 && (
        <button onClick={() => setPosicion(posicion - 1)}>Anterior</button>
      )}
      {posicion != imagenes.length - 1 && (
        <button onClick={() => setPosicion(posicion + 1)}>Siguiente</button>
      )}
    </>
  );
}
