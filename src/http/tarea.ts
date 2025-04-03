import axios from "axios";
import { ITarea } from "../types/ITareas";
import { API_ENDPOINTS } from "../utils/url";
import { getSprintsPorId, putSprint } from "./sprints";
import { badContest } from "../components/ui/PopUps/Alerts/ServerBadAlert";
import { ISprints } from "../types/ISprints";
export const getAllTareas = async (): Promise<ITarea[] | []> => {
  try {
    const response = await axios.get(API_ENDPOINTS.BACKLOG);
    return response.data;
  } catch (error) {
    console.log("No se pudieron listar las tareas -", error);
    return [];
  }
};


export const moverTareaASprint = async (
  idTarea: string,
  idSprint: string
): Promise<ISprints> => {
  try {

    const tarea = await getTareaPorId(idTarea);
    if(!tarea){
      throw new Error(`NO SE ENCONTRÓ LA TAREA CON ID ${idTarea}`);
      
    }


    const sprint = await getSprintsPorId(idSprint);

    if(!sprint){
      throw new Error(`NO SE ENCONTRÓ EL SPRINT CON ID ${idTarea}`);
    }

    const sprintActualizado = {
      ...sprint,
      tareas: [...sprint.tareas, tarea],
    };

    await putSprint(sprintActualizado);

    await deleteTareaPorId(idTarea);

    console.log(`Tarea ${idTarea} movida exitosamente al sprint ${idSprint}`);
    return sprintActualizado;
    
  } catch (error) {
    throw new Error("No se pudo mover la tarea al sprint -"+ error);
    
  }
};


export const getTareaPorId = async (
  idTarea: string
): Promise<ITarea | null> => {
  try {
    const response = await axios.get(`${API_ENDPOINTS.BACKLOG}/${idTarea}`);
    return response.data;
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
    return response.data;
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
    return response.data;
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
    return response.data;
  } catch (error) {
    console.log("No se pudo eliminar la tarea -", error);
    return null;
  }
};
