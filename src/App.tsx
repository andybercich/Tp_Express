import { useEffect } from "react";
import { useTarea } from "./hooks/useTarea";

function App() {
  const { getAllTareasHooks, tareas } = useTarea();
  useEffect(() => {
    getAllTareasHooks();
  }, []);

  console.log(tareas);

  return <></>;
}

export default App;
