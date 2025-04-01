import { useShallow } from "zustand/shallow";
import { tareaStore } from "../store/tareaStore";
import { ITareas } from "../types/ITareas";
import { getTareaController } from "../data/tareaController";

export const useTarea = () => {
  const { tareas, setArrayTareas } = tareaStore(
    useShallow((state) => ({
      tareas: state.tareas,
      setArrayTareas: state.setArrayTareas,
    }))
  );

  const getAllTareasHooks = async () => {
    const data: ITareas[] = await getTareaController();
    console.log(data);
    if (data) setArrayTareas(data);
  };
  return { tareas, getAllTareasHooks };
};
