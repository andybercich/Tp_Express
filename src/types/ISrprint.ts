import { ITarea } from "./ITareas";

export interface ISriprint {
  id: string;
  fechaInicio: Date;
  fechaCierre: Date;
  Nombre: string;
  tareas: ITarea[];
}
