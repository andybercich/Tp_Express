import { FC, useEffect, useState } from "react";
import { ITarea } from "../../../types/ITareas";
import { useSprint } from "../../../hooks/useSprint";
import "./CardTareasBacklog.scss";
import { tareaStore } from "../../../store/tareasStore";
import { useShallow } from "zustand/shallow";
import { VerTareaModal } from "../modals/VerTareaModal/VerTareaModal";

interface ICardTareasBacklog {
  tareas: ITarea;
}

export const CardTareasBacklog: FC<ICardTareasBacklog> = ({ tareas }) => {
  const { getAllSprintsHook, sprints } = useSprint();
  const { setTareasActivas, tareaActiva } = tareaStore(
    useShallow((state) => ({
      setTareasActivas: state.setTareaActiva,
      tareaActiva: state.tareaActiva,
    }))
  );
  const [buttonVerTarea, setbuttonVerTarea] = useState<boolean>(false);
  const handleOpenVerTarea = (tarea: ITarea) => {
    setTareasActivas(tarea);
    setbuttonVerTarea(true);
  };
  const handleCloseVerTarea = () => {
    setTareasActivas(null);
    setbuttonVerTarea(false);
  };

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
          <button
            onClick={() => handleOpenVerTarea(tareas)}
            className="buttonCardVisibility"
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
      {buttonVerTarea && (
        <VerTareaModal
          tarea={tareaActiva}
          handelCloseVerTarea={handleCloseVerTarea}
        />
      )}
    </>
  );
};
