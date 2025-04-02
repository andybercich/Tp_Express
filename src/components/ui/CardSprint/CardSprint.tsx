import { FC, useState } from "react";
import { ISprints } from "../../../types/ISprints";
import "./cardSprint.scss";
import { useNavigate } from "react-router-dom";

interface ICardSprint {
  sprint: ISprints;
}

export const CardSprint: FC<ICardSprint> = ({ sprint }) => {
  const navigate = useNavigate();

  const handleNavigateButton = () => {
    console.log(sprint),
    navigate("/vistaSprint", { state: { sprint } })
    
  };

  return (
    <>
      <div className="cardSprintContainer">
        <div className="datosCard" key={sprint.id}>
          <p>
            <b>{sprint.nombre}</b>
          </p>
          <p>
            <b>Inicio: </b>
            {new Date(sprint.fechaInicio).toLocaleDateString("es-ES")}
          </p>
          <p>
            <b>Fin: </b>
            {new Date(sprint.fechaCierre).toLocaleDateString("es-ES")}
          </p>
        </div>
        <div className="buttonCard">
          <button className="buttonCardVisibility"onClick={()=>handleNavigateButton()}>
            <span className="material-symbols-outlined">visibility</span>
          </button>
          <button className="buttonCardEdit">
            <span className="material-symbols-outlined">edit_square</span>
          </button>
          <button className="buttonCardDelete">
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
    </>
  );
};
