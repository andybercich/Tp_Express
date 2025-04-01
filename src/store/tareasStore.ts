import { create } from "zustand";
import { ITarea } from "../types/ITareas";

interface ITareaStore {
  tareas: ITarea[];
  tareaActiva: ITarea | null;
  setArrayTareas: (arrayTarea: ITarea[]) => void;
  setTareaActiva: (tareaActiva: ITarea | null) => void;
}

export const tareaStore = create<ITareaStore>((set) => ({
  tareas: [],
  tareaActiva: null,
  setArrayTareas: (arrayTarea) => set(() => ({ tareas: arrayTarea })),
  setTareaActiva: (tareaActiva) => set(() => ({ tareaActiva })),
}));
