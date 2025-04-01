import { FC } from "react";
import { ISprints } from "../../../types/ISprints";
import { CardTareaSprint } from "../CardTareaSprint/CardTareaSprint";
import "./ListaTareaSprint.scss";

interface IListaTareasSprint {
  sprint: ISprints;
}

export const ListaTareasSprint: FC<IListaTareasSprint> = ({ sprint }) => {
  console.log("Sprint recibido:", sprint);

  return (
    <>
      <div className="ListaTareasSprintContainer">
        <h1>{sprint.nombre}</h1>
        <div className="ListaTareasSprintButtonAdd">
          <h2>Tareas en la sprint</h2>
          <button>
            Crear Tarea <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        <div className="ListaTareasSprintEstado">
          <div className="ListaTareasSprintEstadoDiv">
            <h3>Pendiente</h3>
            {sprint.tareas.length > 0 ? (
              sprint.tareas
                .filter((tarea) => String(tarea.estado) === "pendiente")
                .map((tarea) => (
                  <CardTareaSprint key={tarea.id} tarea={tarea} />
                ))
            ) : (
              <p>No hay tareas pendientes</p>
            )}
          </div>
          <div className="ListaTareasSprintEstadoDiv">
            <h3>En progreso</h3>
            {sprint.tareas.length > 0 ? (
              sprint.tareas
                .filter((tarea) => String(tarea.estado) === "en progreso")
                .map((tarea) => (
                  <CardTareaSprint key={tarea.id} tarea={tarea} />
                ))
            ) : (
              <p>No hay tareas pendientes</p>
            )}
          </div>
          <div className="ListaTareasSprintEstadoDiv">
            <h3>Completado</h3>
            {sprint.tareas.length > 0 ? (
              sprint.tareas
                .filter((tarea) => String(tarea.estado) === "completado")
                .map((tarea) => (
                  <CardTareaSprint key={tarea.id} tarea={tarea} />
                ))
            ) : (
              <p>No hay tareas pendientes</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
