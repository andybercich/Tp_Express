import { create } from "zustand";
import { ISprints } from "../types/ISprints";


interface ISprintStore {
  sprints: ISprints[];
  sprintActiva: ISprints | null;
  setArraySprints: (arraySprint: ISprints[]) => void;
  setSprintActivo: (sprintActivo: ISprints | null) => void;
  postSprint: (nuevoSprint: ISprints) => void;
  updateSprint: (sprintActualizado: ISprints) => void;
  deleteSprint: (idSprint: string) => void;
}

export const sprintStore = create<ISprintStore>((set) => ({
  sprints: [],
  sprintActiva: null,

  setArraySprints: (arraySprint) => set(() => ({ sprints: arraySprint })),
  setSprintActivo: (sprintActiva) => set(() => ({ sprintActiva })),

  postSprint: (nuevoSprint) =>
    set((state) => ({ sprints: [...state.sprints, nuevoSprint] })),

  updateSprint: (sprintActualizado) =>
    set((state) => ({
      sprints: state.sprints.map((s) =>
        s.id === sprintActualizado.id ? sprintActualizado : s
      ),
    })),

  deleteSprint: (idSprint) =>
    set((state) => ({
      sprints: state.sprints.filter((s) => s.id !== idSprint),
    })),
}));
