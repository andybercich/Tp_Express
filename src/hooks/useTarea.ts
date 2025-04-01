import { useShallow } from "zustand/shallow";
import { tareaStore } from "../store/tareasStore";
import { ITarea } from "../types/ITareas";
import { getTareasController } from "../data/tareaController";

export const useTarea = () => {
  const { tareas, setArrayTareas } = tareaStore(
    useShallow((state) => ({
      tareas: state.tareas,
      setArrayTareas: state.setArrayTareas,
    }))
  );

  const getAllTareasHook = async () => {
    const data: ITarea[] = await getTareasController();
    if (data) setArrayTareas(data);
  };

  return {
    tareas,
    getAllTareasHook,
  };
};
