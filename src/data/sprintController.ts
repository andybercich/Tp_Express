import {
  deleteSprintPorId,
  getAllSprints,
  getSprintsPorId,
  postSprints,
  putSprint,
} from "../http/sprints";

import { ISprints } from "../types/ISprints";

export const getSprintsController = async (): Promise<ISprints[]> => {
  try {
    return await getAllSprints();
  } catch (error) {
    console.log("Error al obtener proyectos en el controller -", error);
    return [];
  }
};

export const getSprintsPorIdController = async (
  idSprint: string
): Promise<ISprints | null> => {
  try {
    return await getSprintsPorId(idSprint);
  } catch (error) {
    console.log("No se pudieron listar el sprint en el controller -", error);
    return null;
  }
};

export const postSprintsController = async (
  nuevoSprint: ISprints
): Promise<ISprints | null> => {
  try {
    return await postSprints(nuevoSprint);
  } catch (error) {
    console.log("No se pudo crear el sprint en el controller -", error);
    return null;
  }
};

export const putSprintController = async (
  sprintEditado: ISprints
): Promise<ISprints | null> => {
  try {
    return await putSprint(sprintEditado);
  } catch (error) {
    console.log("No se pudo editar el sprint en el controller-", error);
    return null;
  }
};

export const deleteSprintPorIdController = async (
  idSprint: string
): Promise<ISprints | null> => {
  try {
    return await deleteSprintPorId(idSprint);
  } catch (error) {
    console.log("No se pudo eliminar el sprint en el controller-", error);
    return null;
  }
};
