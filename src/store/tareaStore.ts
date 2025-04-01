import { create } from "zustand";
import { ITareas } from "../types/ITareas";
interface ITareaStore {
  tareas: ITareas[];
  setArrayTareas: (arrayTarea: ITareas[]) => void;
}
export const tareaStore = create<ITareaStore>((set) => ({
  tareas: [],
  setArrayTareas: (arrayTarea) => set(() => ({ tareas: arrayTarea })),
}));
