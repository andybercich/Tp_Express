import { useEffect } from "react";
import { useTarea } from "../../../hooks/useTarea";
import "./TareasBacklog.scss";
import { CardTareasBacklog } from "../CardTareasBacklog/CardTareasBacklog";

export const TareasBacklog = () => {
  const { getAllTareasHook, tareas } = useTarea();

  useEffect(() => {
    getAllTareasHook();
  }, []);

  return (
    <>
      <div className="backlogContainer">
        <h1>Backlog</h1>
        <div className="tareasBacklogContainer">
          <div className="tareasBacklogButtonH2">
            <h2>Tareas en el backlog</h2>
            <button>
              Crear tarea <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          <div>
            {tareas.length > 0 ? (
              tareas.map((tarea) => (
                <CardTareasBacklog key={tarea.id} tareas={tarea} />
              ))
            ) : (
              <p>No hay sprints disponibles</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
