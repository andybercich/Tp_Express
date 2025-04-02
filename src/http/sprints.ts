import axios from "axios";
import { ISprints } from "../types/ISprints";
import { API_ENDPOINTS } from "../utils/url";

export const getAllSprints = async (): Promise<ISprints[] | []> => {
  try {
    const response = await axios.get(API_ENDPOINTS.SPRINT_LIST);
    return response.data;
  } catch (error) {
    console.log("No se pudieron listar los sprints -", error);
    return [];
  }
};

export const getSprintsPorId = async (idSprint: string): Promise<ISprints | null> => {
  try {
    const response = await axios.get(`${API_ENDPOINTS.SPRINT_LIST}/${idSprint}`);
    return response.data;
  } catch (error) {
    console.log("No se pudieron listar el sprint -", error);
    return null;
  }
};

export const postSprints = async (nuevoSprint: ISprints): Promise<ISprints | null> => {
  try {
    const response = await axios.post(API_ENDPOINTS.SPRINT_LIST, nuevoSprint);
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
      `${API_ENDPOINTS.SPRINT_LIST}/${sprintActualizado.id}`,
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
      `${API_ENDPOINTS.SPRINT_LIST}/${idSprint}`
    );
    return response.data;
  } catch (error) {
    console.log("No se pudo eliminar el sprint -", error);
    return null;
  }
};
