import {
  getAllTareas,
  getTareaPorId,
  postTarea,
  putTarea,
  deleteTareaPorId,
} from "../http/tarea";
import { ITareas } from "../types/ITareas";

export const getTareaController = async ():Promise<ITareas[]> => {
  try {
    
    console.log(await getAllTareas())
    return await getAllTareas();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getTareaPorIdController = async (idTarea: string) => {
  try {
    return await getTareaPorId(idTarea);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const postTareaController = async (nuevaTarea: ITareas) => {
  try {
    return await postTarea(nuevaTarea);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const putTareaController = async (tareaEdita: ITareas) => {
  try {
    return await putTarea(tareaEdita);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteTareaPorIdController = async (tareaEliminada: string) => {
  try {
    return await deleteTareaPorId(tareaEliminada);
  } catch (error) {
    console.log(error);
    return null;
  }
};
