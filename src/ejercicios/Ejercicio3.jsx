import { useEffect, useRef, useState } from "react";
import video from "../assets/demo.mp4";

export function Ejercicio3() {
  const videoRef = useRef();
  const [boton, setBoton] = useState(false);

  const toggleBoton = () => {
    setBoton(!boton);
    // if (boton === false) {
    //   videoRef.current.pause();
    // } else {
    //   videoRef.current.play();
    // }

    !boton ? videoRef.current.pause() : videoRef.current.play();
  };

  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <>
      <video ref={videoRef} muted>
        <source src={video}></source>
      </video>
      <div>
        <button onClick={toggleBoton}>{boton ? "Play" : "Pause"}</button>
      </div>
    </>
  );
}
