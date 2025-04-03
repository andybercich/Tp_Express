import { ITarea } from "./ITareas";

export interface ISprints {
  id: string;
  fechaInicio: String;
  fechaCierre: String;
  nombre: string;
  tareas: ITarea[];
}
