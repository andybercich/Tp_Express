import { FC, useState } from "react";
import { ITarea } from "../../../types/ITareas";
import "./CardTareasBacklog.scss";
import { VerTareaModal } from "../modals/VerTareaModal/VerTareaModal";
import { CrearTareaModal } from "../modals/CrearTareaModals/CrearTareaModals";
import { badContest, confirmAlert, godContest } from "../PopUps/Alerts/ServerBadAlert";
import { deleteTareaPorIdController, moveTareaToSprint} from "../../../Controllers/tareaController";
import { sprintStore } from "../../../store/sprintStore";
import { tareaStore } from "../../../store/tareaStore";

interface ICardTareasBacklog {
  tareas: ITarea;
}

export const CardTareasBacklog: FC<ICardTareasBacklog> = ({ tareas }) => {
  const {sprints,updateSprint } = sprintStore();
  const [sprintToGo, setSprint] = useState<string>("");
  const {deleteTarea} = tareaStore();
  const [edit, setEdit] = useState<boolean>(false);
  const [buttonVerTarea, setbuttonVerTarea] = useState<boolean>(false);

    const handleDelete = async ()=>{
  
    
        
        const confirm = confirmAlert(`¿Estás seguro de borrar esta tarea, con nombre ${tareas.titulo}?`, "Esta acción no se podrá deshaser");
  
        if(await confirm){
          
            try {
              deleteTareaPorIdController(tareas.id).then(()=> deleteTarea(tareas.id));
              godContest("La tarea logró borrarse correctamente")

  
  
          } catch (error) {
            badContest("No se pudo borrar la tarea: "+ error)
          }
        }
  
  
    }

    const handleGoSprint = async()=>{
      console.log(sprintToGo)
      if(tareas.fechaLimite && sprintToGo !== ""){

        const response =await moveTareaToSprint(tareas.id, sprintToGo)

        await deleteTarea(tareas.id);
        await updateSprint(response);
      }else{
        badContest(`La tarea ${tareas.titulo} para ser enviada a su sprint, debe tener fecha limite, y un sprint asignado`)
      }


    }


  const handleOpenVerTarea = () => {
    setbuttonVerTarea(true);
  };
  const handleCloseVerTarea = () => {
    setbuttonVerTarea(false);
  };


  return (
    <>
      <div className="cardTareasBacklogContainer">
        <h3>
          <b>Titulo:</b> {tareas.titulo}
        </h3>
        <button onClick={()=>{handleGoSprint()}} className="cardTareasBacklogButton">Enviar a su sprint</button>
        <select onChange={(e) => setSprint(e.target.value)} defaultValue="">
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
            onClick={() => handleOpenVerTarea()}
            className="buttonCardVisibility"
          >
            <span className="material-symbols-outlined">visibility</span>
          </button>
          <button onClick={()=>{setEdit(true)}} className="buttonCardEdit">
            <span className="material-symbols-outlined">edit_square</span>
          </button>
          <button onClick={()=>{handleDelete()}} className="buttonCardDelete">
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
      {buttonVerTarea && (
        <VerTareaModal
          tarea={tareas}
          handelCloseVerTarea={handleCloseVerTarea}
        />
      )}
      {edit ? <CrearTareaModal close={setEdit} tarea={tareas}></CrearTareaModal> : null}
    </>
  );
};
