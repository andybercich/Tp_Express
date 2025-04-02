import { useEffect, useState } from "react";
import { useSprint } from "../../../hooks/useSprint";
import { CardSprint } from "../CardSprint/CardSprint";
import "./ListaSprint.scss";
import { useNavigate } from "react-router-dom";

export const ListaSprints = () => {
  const { getAllSprintsHook, sprints } = useSprint();
  const navigate = useNavigate();

  const handleNavigateButton = () => {
    navigate("/vistaBacklog");
  };

  useEffect(() => {
    getAllSprintsHook();
  }, []);

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
              <button>
                <span className="material-symbols-outlined">playlist_add</span>
              </button>
            </div>
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
    </>
  );
};
