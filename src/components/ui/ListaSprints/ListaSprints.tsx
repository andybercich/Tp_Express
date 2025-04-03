import { useState } from "react";
import { CardSprint } from "../CardSprint/CardSprint";
import "./ListaSprint.scss";
import { useNavigate } from "react-router-dom";
import { sprintStore } from "../../../store/sprintStore";
import { CrearSprintModal } from "../modals/CrearSprintModals/CrearSprintModal";

export const ListaSprints = () => {
  const { sprints } = sprintStore();
  const [create, setCreate] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNavigateButton = () => {
    navigate("/vistaBacklog");
  };


  return (
    <>
      <div className="listaSprintContainer">
        <button onClick={handleNavigateButton}>
          Backlog
          <span className="material-symbols-outlined">import_contacts</span>
        </button>
        <div className="listSprintContainer">
          <div>
            <div className="listSprintH2Button">
              <h2>Lista de sprint</h2>
              <button >
                <span onClick={()=>{setCreate(true)}} className="material-symbols-outlined">playlist_add</span>
              </button>
            </div>

            <div className="containerCards">
              {sprints.length > 0 ? (
                sprints.map((sprint) => (
                  <CardSprint key={sprint.id} sprint={sprint} />
                ))
              ) : (
                <p>No hay sprints disponibles</p>
              )}
            </div>
            
          </div>
        </div>
      </div>
      {create ? <CrearSprintModal close={setCreate} />: null}
    </>

  );
};
