import {
  deleteTareaPorId,
  getAllTareas,
  getTareaPorId,
  postTareas,
  putTarea,
} from "../http/tarea";
import { ITarea } from "../types/ITareas";

export const getTareasController = async (): Promise<ITarea[]> => {
  try {
    return await getAllTareas();
  } catch (error) {
    console.log("Error al obtener tareas en el controller -", error);
    return [];
  }
};

export const getTareaPorIdController = async (
  idTarea: string
): Promise<ITarea | null> => {
  try {
    return await getTareaPorId(idTarea);
  } catch (error) {
    console.log("No se pudieron listar la tarea en el controller -", error);
    return null;
  }
};

export const postTareaController = async (
  nuevaTarea: ITarea
): Promise<ITarea | null> => {
  try {
    return await postTareas(nuevaTarea);
  } catch (error) {
    console.log("No se pudo crear la tarea en el controller -", error);
    return null;
  }
};

export const putTareaController = async (
  tareaEditado: ITarea
): Promise<ITarea | null> => {
  try {
    return await putTarea(tareaEditado);
  } catch (error) {
    console.log("No se pudo editar la tarea en el controller-", error);
    return null;
  }
};

export const deleteTareaPorIdController = async (
  idTarea: string
): Promise<ITarea | null> => {
  try {
    return await deleteTareaPorId(idTarea);
  } catch (error) {
    console.log("No se pudo eliminar la tarea en el controller-", error);
    return null;
  }
};
