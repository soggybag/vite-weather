import { useEffect, useState } from "react";

///////////////////////////////////////////////////////////////
// Use this to experiment with useEffect
///////////////////////////////////////////////////////////////

function Watcher() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Tick is:", tick);
      setTick(tick + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{tick}</div>;
}

export default Watcher