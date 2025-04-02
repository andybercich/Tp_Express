import { useShallow } from "zustand/shallow";
import { tareaStore } from "../store/tareasStore";
import { ITarea } from "../types/ITareas";
import {
  getTareasController,
  postTareaController,
} from "../data/tareaController";

export const useTarea = () => {
  const { tareas, setArrayTareas, agregarTarea } = tareaStore(
    useShallow((state) => ({
      tareas: state.tareas,
      setArrayTareas: state.setArrayTareas,
      agregarTarea: state.agregarTarea,
    }))
  );

  const getAllTareasHook = async () => {
    const data: ITarea[] = await getTareasController();
    if (data) setArrayTareas(data);
  };

  const postTareaHook = async (nuevaTarea: ITarea) => {
    try {
      await postTareaController(nuevaTarea);
      getAllTareasHook();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    tareas,
    getAllTareasHook,
    postTareaHook,
  };
};
