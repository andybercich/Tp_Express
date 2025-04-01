import axios from "axios";
import { ITarea } from "../types/ITareas";
import { API_ENDPOINTS } from "../utils/url";

export const getAllTareas = async (): Promise<ITarea[] | []> => {
  try {
    const response = await axios.get(API_ENDPOINTS.BACKLOG);
    return response.data.tareas;
  } catch (error) {
    console.log("No se pudieron listar las tareas -", error);
    return [];
  }
};

export const getTareaPorId = async (
  idTarea: string
): Promise<ITarea | null> => {
  try {
    const response = await axios.get(`${API_ENDPOINTS.BACKLOG}/${idTarea}`);
    return response.data.tareas;
  } catch (error) {
    console.log("No se pudieron listar la tarea -", error);
    return null;
  }
};

export const postTareas = async (
  nuevaTarea: ITarea
): Promise<ITarea | null> => {
  try {
    console.log("Enviando tarea:", nuevaTarea);
    const response = await axios.post(API_ENDPOINTS.BACKLOG, { ...nuevaTarea });
    return response.data.tareas;
  } catch (error) {
    console.log("No se pudo crear la tarea -", error);
    return null;
  }
};

export const putTarea = async (
  tareaActualizada: ITarea
): Promise<ITarea | null> => {
  try {
    const response = await axios.put(
      `${API_ENDPOINTS.BACKLOG}/${tareaActualizada.id}`,
      { ...tareaActualizada }
    );
    return response.data.tareas;
  } catch (error) {
    console.log("No se pudo editar la tarea -", error);
    return null;
  }
};

export const deleteTareaPorId = async (
  idTarea: string
): Promise<ITarea | null> => {
  try {
    const response = await axios.delete(`${API_ENDPOINTS.BACKLOG}/${idTarea}`);
    return response.data.tareas;
  } catch (error) {
    console.log("No se pudo eliminar la tarea -", error);
    return null;
  }
};
