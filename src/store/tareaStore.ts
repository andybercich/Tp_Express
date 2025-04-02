import { create } from "zustand";
import { ITarea } from "../types/ITareas";
interface ITareaStore {
  tareas: ITarea[];
  setArrayTareas: (arrayTarea: ITarea[]) => void;
}
export const tareaStore = create<ITareaStore>((set) => ({
  tareas: [],
  setArrayTareas: (arrayTarea) => set(() => ({ tareas: arrayTarea })),
}));
