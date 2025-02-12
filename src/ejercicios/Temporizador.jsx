import { useEffect, useState } from "react";

export function Temporizador() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }, []);

  return (
    <>
      <h1>{time}</h1>
    </>
  );
}
