import { FC, useEffect, useState } from "react";
import { ITarea } from "../../../types/ITareas";
import { useSprint } from "../../../hooks/useSprint";
import "./CardTareasBacklog.scss";

interface ICardTareasBacklog {
  tareas: ITarea;
}

export const CardTareasBacklog: FC<ICardTareasBacklog> = ({ tareas }) => {
  const { getAllSprintsHook, sprints } = useSprint();

  useEffect(() => {
    getAllSprintsHook();
  }, []);

  return (
    <>
      <div className="cardTareasBacklogContainer">
        <h3>
          <b>Titulo:</b> {tareas.titulo}
        </h3>
        <button className="cardTareasBacklogButton">Enviar a backlog</button>
        <select defaultValue="">
          <option value="" disabled hidden>
            Seleccione una sprint
          </option>
          {sprints.length > 0 ? (
            sprints.map((sprint) => (
              <option key={sprint.id} value={sprint.id}>
                {sprint.nombre}
              </option>
            ))
          ) : (
            <option value="" disabled>
              No hay Sprints
            </option>
          )}
        </select>
        <div className="buttonCard">
          <button className="buttonCardVisibility">
            <span className="material-symbols-outlined">visibility</span>
          </button>
          <button className="buttonCardEdit">
            <span className="material-symbols-outlined">edit_square</span>
          </button>
          <button className="buttonCardDelete">
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </>
  );
};
