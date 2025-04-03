import { FormEvent } from "react";
import styles from "./crearSprintModal.module.css"
import { useForm } from "../../../../hooks/useForm";
import { ISprints } from "../../../../types/ISprints";
import ReactDOM from "react-dom";
import { Close } from "../../Icons/CloseIcon/Close";
import { Button } from "react-bootstrap";
import { badContest, godContest } from "../../PopUps/Alerts/ServerBadAlert";
import { postSprintsController, putSprintController } from "../../../../Controllers/sprintController";
import { sprintStore } from "../../../../store/sprintStore";
interface ICrearSprintsModal {
  close: (value: boolean) => void;
  Sprint?: ISprints;
}

export const CrearSprintModal: React.FC<ICrearSprintsModal> = ({ close,Sprint }) => {
  const { updateSprint, postSprint} = sprintStore();
  const initiallForm: ISprints= {
    id: "",
    fechaInicio: Sprint ? Sprint.fechaInicio : new Date(),
    fechaCierre: Sprint ? Sprint.fechaCierre : new Date(),
    nombre: Sprint ? Sprint.nombre :"",
    tareas: Sprint ? Sprint.tareas :[], 
  };
  const { values, handleChange } = useForm<ISprints>(initiallForm);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const sprintsCreados: ISprints = {
      id: Sprint ? Sprint.id : String(crypto.randomUUID()),
      fechaInicio: values.fechaInicio,
      fechaCierre: values.fechaCierre,
      nombre: values.nombre,
      tareas: Sprint ? Sprint.tareas: [] ,
    };

    try {
      if(Sprint){
        await putSprintController(sprintsCreados).then(()=>updateSprint(sprintsCreados))
      }else{
        await postSprintsController(sprintsCreados).then(()=> postSprint(sprintsCreados));
      }

      godContest(`Se ha  ${Sprint ? "editado" : "creado"} el sprint correctamente!!`)
      close(false);
    } catch (error) {
      
      badContest(`No se pudo ${Sprint ? "editar" : "crear"} el sprint correctamente`+ error)
    
    }

  };

  return ReactDOM.createPortal(
      <div className={styles.mainDiv}>
        <div className={styles.modalUser}>
          <h1>{Sprint? "Editar" : "Crear"} Sprint</h1>

          <div className={styles.divClose}>
            <Close close={close} />
          </div>

          <form onSubmit={onSubmit} className={styles.formularios}>
            <input
              onChange={handleChange}
              name="nombre"
              value={values.nombre}
              type="text"
              placeholder="Ingrese el nombre del sprint: "
            />
            <div className={styles.dateContainer}>
              <label htmlFor="">Fecha Inicio:</label>
              <input
                onChange={handleChange}
                name="fechaInicio"
                value={String(values.fechaInicio)}
                type="date"
              />
            <div className={styles.dateContainer}>
              <label htmlFor="">Fecha Cierre:</label>
              <input
                onChange={handleChange}
                name="fechaCierre"
                value={String(values.fechaCierre)}
                type="date"
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button type="submit" variant="outline-success">
              Confirmar
            </Button>
          </div>
          </form>
        </div>
      </div>,
    document.body
  );
};
