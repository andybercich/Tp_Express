import { FC, useState } from "react";
import { ISprints } from "../../../types/ISprints";
import "./cardSprint.scss";
import { useNavigate } from "react-router-dom";
import { badContest, confirmAlert, godContest } from "../PopUps/Alerts/ServerBadAlert";
import { deleteSprintPorIdController } from "../../../Controllers/sprintController";
import { sprintStore } from "../../../store/sprintStore";
import { CrearSprintModal } from "../modals/CrearSprintModals/CrearSprintModal";
import { VerSprintsModal } from "../modals/VerSprintModals/VerSprintModal";

interface ICardSprint {
  sprint: ISprints;
}

export const CardSprint: FC<ICardSprint> = ({ sprint }) => {
  const navigate = useNavigate();
  const { deleteSprint} = sprintStore();
  const [edit, setEdit] = useState<boolean>(false);
  const[ver, setVer] = useState<boolean>(false);

  const handleNavigateButton = () => {
    console.log(sprint),
    navigate("/vistaSprint", { state: { sprint } })
    
  };

  const handleDelete = async ()=>{

  
      
      const confirm = confirmAlert(`¿Estás seguro de borrar este sprint, con nombre ${sprint.nombre}?`, "Esta acción no se podrá deshaser");

      if(await confirm){
        
          try {
            deleteSprintPorIdController(sprint.id).then(()=>deleteSprint(sprint.id));
            godContest("El sprint logró borrarse correctamente")


        } catch (error) {
          badContest("No se pudo borrar el sprint: "+ error)
        }
      }


  }

  return (
    <>
      <div className="cardSprintContainer">
        <div className="datosCard" key={sprint.id}>
          <p>
            <b>{sprint.nombre}</b>
          </p>
          <p>
            <b>Inicio: </b>
            {sprint.fechaInicio}
          </p>
          <p>
            <b>Fin: </b>
            {sprint.fechaCierre}
          </p>
        </div>
        <div className="buttonCard">
          <button className="buttonCardVisibility"onClick={()=>setVer(true)}>
            <span className="material-symbols-outlined">visibility</span>
          </button>
          <button className="buttonCardEdit" onClick={()=>{setEdit(true)}}>
            <span className="material-symbols-outlined">edit_square</span>
          </button>
          <button onClick={handleDelete} className="buttonCardDelete">
            <span className="material-symbols-outlined">delete</span>
          </button>
          <button
            className="buttonCardArrowForward"
            onClick={handleNavigateButton}
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

      </div>
      {edit ? <CrearSprintModal close={setEdit} Sprint={sprint}></CrearSprintModal> : null}
      {ver ? <VerSprintsModal close={setVer} sprints={sprint}></VerSprintsModal> : null}
    </>
    
  );
};
