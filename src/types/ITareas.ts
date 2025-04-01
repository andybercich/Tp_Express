import { IEstadoTareas } from "./IEstadoTareas";

export interface ITareas {
  id: string;
  titulo: string;
  descripcion: string;
  estado: IEstadoTareas;
  fechaLimite: Date;
}
