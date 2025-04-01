import axios from "axios";
import { ITareas } from "../types/ITareas";
import { API_ENDPOINTS } from "../utils/url";

export const getAllTareas = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.BACKLOG);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getTareaPorId = async (idTarea: string) => {
  try {
    const response = await axios.get(`${API_ENDPOINTS.BACKLOG}/${idTarea}`);
    return response.data.tarea;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const postTarea = async (nuevaTarea: ITareas) => {
  try {
    const response = await axios.post(API_ENDPOINTS.BACKLOG, { ...nuevaTarea });
    return response.data.tarea;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const putTarea = async (tareaActualizada: ITareas) => {
  try {
    const response = await axios.put(
      `${API_ENDPOINTS.BACKLOG}/${tareaActualizada.id}`,
      { ...tareaActualizada }
    );
    return response.data.tarea;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteTareaPorId = async (idTarea: string) => {
  try {
    const response = await axios.delete(`${API_ENDPOINTS.BACKLOG}/${idTarea}`);
    return response.data.tarea;
  } catch (error) {
    console.log(error);
    return null;
  }
};
