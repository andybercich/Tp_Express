import { ITarea } from "./ITareas";

export interface ISprints {
  id: string;
  fechaInicio: Date;
  fechaCierre: Date;
  nombre: string;
  tareas: ITarea[];
}
