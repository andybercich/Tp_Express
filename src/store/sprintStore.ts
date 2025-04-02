import { create } from "zustand";
import { ISprints } from "../types/ISprints";

interface ISprintStore {
  sprints: ISprints[];
  sprintActiva: ISprints | null;
  setArraySprints: (arraySprint: ISprints[]) => void;
  setSprintActivo: (sprintActivo: ISprints | null) => void;
}

export const sprintStore = create<ISprintStore>((set) => ({
  sprints: [],
  sprintActiva: null,

  setArraySprints: (arraySprint) => set(() => ({ sprints: arraySprint })),

  setSprintActivo: (sprintActiva) => set(() => ({ sprintActiva })),
}));
