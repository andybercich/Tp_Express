import React, { FC } from "react";
import { ITarea } from "../../../../types/ITareas";
import "./VerTareaModal.scss";

export interface IVerTareaModal {
  tarea: ITarea | null;
}

export const VerTareaModal: FC<IVerTareaModal> = ({ tarea }) => {
  console.log(tarea);
  return (
    <>
      <div className="verModalContiner">
        <div className="verModal">
          <h1>Ver Tarea</h1>
          <div>
            <h2>
              Nombre: <p>{tarea ? tarea.titulo : ""}</p>
            </h2>
            <h2>
              Descripcion: <p>{tarea ? tarea.descripcion : ""}</p>
            </h2>
            <h2>
              Fecha Fin:
              <p>
                {" "}
                {new Date(tarea ? tarea.fechaLimite : "").toLocaleDateString(
                  "es-ES"
                )}
              </p>
            </h2>
          </div>
          <button>Cerrar Tarea</button>
        </div>
      </div>
    </>
  );
};
