import { FC, useState } from "react";
import { ITarea } from "../../../types/ITareas";
import "./CardTareaSprint.scss";

interface ICardTareaSprint {
  tarea: ITarea;
}

export const CardTareaSprint: FC<ICardTareaSprint> = ({ tarea }) => {
  return (
    <>
      <div className="cardTareaSpintContainer">
        <div
          className={
            String(tarea.estado) === "pendiente"
              ? ("cardTareaSpintInfo colorPendiente")
              : (String(tarea.estado) === "en progreso"
              ? ("cardTareaSpintInfo colorEnProgreso")
              : ("cardTareaSpintInfo colorCompletado"))
          }
        >
          <p>
            <b>Titulo: </b>
            {tarea.titulo}
          </p>
          <p>
            <b>Descripcion: </b>
            {tarea.descripcion}
          </p>
          <p>
            <b>Fecha Limite: </b>
            {new Date(tarea.fechaLimite).toLocaleDateString("es-ES")}
          </p>

          <button>Enviar al backlog</button>
        </div>
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
