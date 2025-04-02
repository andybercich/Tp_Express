import { FC } from "react";
import { ITarea } from "../../../../types/ITareas";
interface IVerCrearModal {
    tarea: ITarea | null;
    handelCloseVerTarea: ()=>void
}
export const VerTareaModal: FC<IVerCrearModal> = ({ tarea, handelCloseVerTarea }) => {
  return (
    <>
      <div>
        <div>
          <h1>ver Tarea</h1>
          <div>
            <h2>
              Nombre: <p>{tarea ? tarea.titulo :""}</p>
            </h2>
            <h2>
              Descripcion: <p>{tarea ? tarea.descripcion :""}</p>
            </h2>
            <h2>
              FechaFin:{" "}
              <p>{new Date(tarea ? tarea.fechaLimite :"").toLocaleDateString()}</p>
            </h2>
          </div>
          <button onClick={handelCloseVerTarea}>cerrarTarea</button>
        </div>
      </div>
    </>
  );
};
