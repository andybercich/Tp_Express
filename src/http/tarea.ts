import axios from "axios";
import { ITarea } from "../types/ITareas";
import { getSprintsPorId, putSprint } from "./sprints";
import { ISprints } from "../types/ISprints";

const apiBacklog = `${import.meta.env.VITE_BASE_URL}/backlog`;

export const getAllTareas = async (): Promise<ITarea[] | []> => {
  try {
    const response = await axios.get(apiBacklog);
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
    const response = await axios.get(`${apiBacklog}/${idTarea}`);
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
    const response = await axios.post(apiBacklog, { ...nuevaTarea });
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
      `${apiBacklog}/${tareaActualizada.id}`,
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
    const response = await axios.delete(`${apiBacklog}/${idTarea}`);
    return response.data;
  } catch (error) {
    console.log("No se pudo eliminar la tarea -", error);
    return null;
  }
};
