import {  useState } from "react";
import "./TareasBacklog.scss";
import { CardTareasBacklog } from "../CardTareasBacklog/CardTareasBacklog";
import { CrearTareaModal } from "../modals/CrearTareaModals/CrearTareaModals";
import { tareaStore } from "../../../store/tareaStore";


export const TareasBacklog = () => {

  const { tareas} = tareaStore();
  const [create, setCreate] = useState<boolean>(false);



  return (
    
      <div className="backlogContainer">
        <h1 className="title">Backlog</h1>
        <div className="tareasBacklogContainer">
          <div className="tareasBacklogButtonH2">
            <h2>Tareas en el backlog</h2>
            <button onClick={()=>{setCreate(true)}}>
              Crear tarea <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          <div className="containerTareas">
            {tareas.length > 0 ? (
              tareas.map((tarea) => (
                <CardTareasBacklog key={tarea.id} tareas={tarea} />
              ))
            ) : (
              <p>No hay tareas disponibles</p>
            )}
          </div>
        </div>
        {create ? <CrearTareaModal close={setCreate}/> : null}
      </div>


  );
};
