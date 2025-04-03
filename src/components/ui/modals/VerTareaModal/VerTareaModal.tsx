import { FC } from "react";
import { ITarea } from "../../../../types/ITareas";
import ReactDOM from "react-dom";
import styles from "./verTareaModal..module.css"
interface IVerCrearModal {
    tarea: ITarea;
    handelCloseVerTarea: ()=>void
}
export const VerTareaModal: FC<IVerCrearModal> = ({ tarea, handelCloseVerTarea }) => {
  return ReactDOM.createPortal(
    <div className={styles.mainDiv}>
      <div className={styles.modalUser}>

        <h1 className={styles.divTarea}>{tarea.titulo}</h1>

        <div className={styles.dateContainer} >

            <h2>
              Descripcion:<p>{tarea.descripcion}</p>
            </h2>
            <h2>
              FechaFin:{(tarea.fechaLimite)}
            </h2>

        </div> 

          <div style={{marginBottom:"20px"}}onClick={handelCloseVerTarea} >
            <button type="button" className="btn btn-outline-danger">Cerrar</button>
          </div>

        </div>

      </div>,
        document.body
  );
};
