import { FC } from "react";
import { ISprints } from "../../../../types/ISprints";
interface IVerCrearModal {
    sprints: ISprints | null;
    handelCloseVerSprints: ()=>void
}
export const VerSprintsModal: FC<IVerCrearModal> = ({ sprints, handelCloseVerSprints }) => {
  return (
    <>
      <div>
        <div>
          <h1>ver Tarea</h1>
          <div>
            <h2>
              Nombre: <p>{sprints ? sprints.nombre :""}</p>
            </h2>
            <h2>
              FechaInicio: <p>{new Date(sprints ? sprints.fechaInicio :"").toLocaleDateString()}</p>
            </h2>
            <h2>
              FechaCierre:{" "}
              <p>{new Date(sprints ? sprints.fechaCierre :"").toLocaleDateString()}</p>
            </h2>
          </div>
          <button onClick={handelCloseVerSprints}>cerrar Sprint</button>
        </div>
      </div>
    </>
  );
};
