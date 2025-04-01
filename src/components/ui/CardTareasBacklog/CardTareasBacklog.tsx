import { FC, useEffect, useState } from "react";
import { ITarea } from "../../../types/ITareas";
import { useSprint } from "../../../hooks/useSprint";
import "./CardTareasBacklog.scss";
import { VerTareaModal } from "../modals/VerTareaModal/VerTareaModal";
import { tareaStore } from "../../../store/tareasStore";
import { useShallow } from "zustand/shallow";

interface ICardTareasBacklog {
  tareas: ITarea;
}

export const CardTareasBacklog: FC<ICardTareasBacklog> = ({ tareas }) => {
  const { getAllSprintsHook, sprints } = useSprint();
  const { setTareaActiva, tareaActiva } = tareaStore(
    useShallow((state) => ({
      setTareaActiva: state.setTareaActiva,
      tareaActiva: state.tareaActiva,
    }))
  );
  const [buttonVerTarea, setButtonVerTarea] = useState<boolean>(false);

  useEffect(() => {
    getAllSprintsHook();
  }, []);

  const handleVerTarea = (tarea: ITarea) => {
    console.log("Entre");
    setTareaActiva(tarea);
    setButtonVerTarea(!buttonVerTarea);
  };

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
          <button
            className="buttonCardVisibility"
            onClick={() => handleVerTarea(tareas)}
          >
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

      {buttonVerTarea && <VerTareaModal tarea={tareaActiva} />}
    </>
  );
};
