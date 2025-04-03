import axios from "axios";
import { ISprints } from "../types/ISprints";

const apiSprint = `${import.meta.env.VITE_BASE_URL}/sprints`;



export const getAllSprints = async (): Promise<ISprints[] | []> => {
  try {
    const response = await axios.get(apiSprint);
    return response.data;
  } catch (error) {
    console.log("No se pudieron listar los sprints -", error);
    return [];
  }
};

export const getSprintsPorId = async (idSprint: string): Promise<ISprints | null> => {
  try {
    const response = await axios.get(`${apiSprint}/${idSprint}`);
    return response.data;
  } catch (error) {
    console.log("No se pudo listar el sprint -", error);
    return null;
  }
};

export const postSprints = async (nuevoSprint: ISprints): Promise<ISprints | null> => {
  try {
    const response = await axios.post(apiSprint, nuevoSprint);
    return response.data;
  } catch (error) {
    console.log("No se pudo crear el sprint -", error);
    return null;
  }
};


export const putSprint = async (
  sprintActualizado: ISprints
): Promise<ISprints | null> => {
  try {
    const response = await axios.put(
      `${apiSprint}/${sprintActualizado.id}`,
      { ...sprintActualizado }
    );
    return response.data;
  } catch (error) {
    console.log("No se pudo editar el sprint -", error);
    return null;
  }
};

export const deleteSprintPorId = async (
  idSprint: string
): Promise<ISprints | null> => {
  try {
    const response = await axios.delete(
      `${apiSprint}/${idSprint}`
    );
    return response.data;
  } catch (error) {
    console.log("No se pudo eliminar el sprint -", error);
    return null;
  }
};
