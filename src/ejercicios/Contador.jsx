import { useEffect, useRef, useState } from "react";

export function Contador() {
  const [time, setTime] = useState(0);
  const [boton, setBoton] = useState(false);
  const intervalRef = useRef();

  const toggleBoton = () => {
    setBoton(!boton);

    !boton
      ? clearInterval(intervalRef.current)
      : (intervalRef.current = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000));
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }, []);
  return (
    <>
      <h1>{time}</h1>
      <button onClick={toggleBoton}>{boton ? "Iniciar" : "Pausar"}</button>
    </>
  );
}
