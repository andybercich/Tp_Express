import { create } from "zustand";
import { ITarea } from "../types/ITareas";


interface ITareaStore {
  tareas: ITarea[];
  setArrayTareas: (arrayTarea: ITarea[]) => void;
  deleteTarea: (id: string) => void;
  postTarea: (nuevaTarea: ITarea) => void;
  updateTarea: (tareaActualizada: ITarea) => void;
}

export const tareaStore = create<ITareaStore>((set) => ({
  tareas: [],

  setArrayTareas: (arrayTarea) => set(() => ({ tareas: arrayTarea })),

  deleteTarea: (id) =>
    set((state) => ({
      tareas: state.tareas.filter((tarea) => tarea.id !== id),
    })),
    postTarea: (nuevaTarea: ITarea) =>
      set((state) => ({
        tareas: [...state.tareas, nuevaTarea],
      })),
  updateTarea: (tareaActualizada) =>
    set((state) => ({
      tareas: state.tareas.map((tarea) =>
        tarea.id === tareaActualizada.id ? tareaActualizada : tarea
      ),
    })),
}));
