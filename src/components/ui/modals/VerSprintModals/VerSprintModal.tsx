import { FC } from "react";
import { ISprints } from "../../../../types/ISprints";
import styles from "./verSprintModal.module.css"
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";

interface IVerCrearModal {
    sprints: ISprints;
    close: (value: boolean) => void;
}

export const VerSprintsModal: FC<IVerCrearModal> = ({ sprints, close }) => {
  return ReactDOM.createPortal(
      <div className={styles.mainDiv}>


        <div className={styles.modalUser}>

          <h1 className={styles.divTarea}>{sprints.nombre}</h1>

          <div className={styles.dateContainer} >
            <h2>
              Inicio: {sprints.fechaInicio}
            </h2>
            
            <h2>
              Cierre: {sprints.fechaCierre}
            </h2>
          </div>

          <div style={{marginBottom:"20px"}} onClick={()=>{close(false)}}>
            <button type="button" className="btn btn-outline-danger">Cerrar</button>
          </div>
        </div>


      </div>
      ,
    document.body
  );
};
