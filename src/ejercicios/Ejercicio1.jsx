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
      <div className='container mt-4 p-4 border rounded shadow-lg bg-light text-center'>
        <h1 className='mb-4 text-primary'>🖼️ Galería de Imágenes</h1>

        {/* Contenedor de imágenes en cuadrícula */}
        <div className='row justify-content-center'>
          {imagenes.map((imagen, index) => (
            <div key={index} className='col-md-4 mb-3'>
              <img
                className='img-fluid rounded shadow'
                src={imagen}
                alt={`Imagen ${index}`}
              />
            </div>
          ))}
        </div>

        {/* Input para agregar imagen */}
        <div className='mt-4'>
          <input
            ref={txt_imagen}
            className='form-control w-50 mx-auto'
            type='text'
            placeholder='📷 Introduce una URL de imagen'
          />
          {error && <h5 className='text-danger mt-2'>{error}</h5>}
        </div>

        {/* Botón para agregar imagen */}
        <button className='btn btn-primary mt-3' onClick={agregarImagen}>
          ➕ Añadir imagen
        </button>

        <hr />

        {/* Imagen en tamaño grande */}
        <div className='mt-4'>
          <img
            className='img-fluid rounded shadow-lg'
            src={imagenes[posicion]}
            alt='Imagen seleccionada'
          />
        </div>

        {/* Navegación entre imágenes */}
        <div className='mt-3'>
          {posicion !== 0 && (
            <button
              className='btn btn-secondary mx-2'
              onClick={() => setPosicion(posicion - 1)}
            >
              ⬅️ Anterior
            </button>
          )}
          {posicion !== imagenes.length - 1 && (
            <button
              className='btn btn-secondary mx-2'
              onClick={() => setPosicion(posicion + 1)}
            >
              Siguiente ➡️
            </button>
          )}
        </div>
      </div>
    </>
  );
}
