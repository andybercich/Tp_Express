import { FC, FormEvent } from "react";
import { ITarea } from "../../../../types/ITareas";
import { useForm } from "../../../../hooks/useForm";
import styles from "./crearTareaModal.module.css"
import ReactDOM from "react-dom";
import { Close } from "../../Icons/CloseIcon/Close";
import { Button } from "react-bootstrap";
import { badContest, godContest } from "../../PopUps/Alerts/ServerBadAlert";
import { postTareaController, putTareaController } from "../../../../Controllers/tareaController";
import { getAllTareas } from "../../../../http/tarea";
import { tareaStore } from "../../../../store/tareaStore";

interface ICrearTareaModal {
  close: (value: boolean) => void;
  tarea?: ITarea;
}

export const CrearTareaModal: FC<ICrearTareaModal> = ({close, tarea}) => {
  const { updateTarea, postTarea} = tareaStore();

  const initiallForm: ITarea = {
    id: "",
    titulo: tarea ? tarea.titulo : "",
    descripcion: tarea ? tarea.descripcion : "",
    estado: tarea ? tarea.estado : "pendiente",
    fechaLimite: tarea ? tarea.fechaLimite : "",
  };
  const { values, handleChange } = useForm<ITarea>(initiallForm);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const tareaCreada: ITarea = {
      id: tarea ? tarea.id : String(crypto.randomUUID()),
      titulo: values.titulo,
      descripcion: values.descripcion,
      fechaLimite: values.fechaLimite,
      estado: tarea ? tarea.estado : initiallForm.estado,
    };

    try {

      if(tarea){
        await putTareaController(tareaCreada).then(() => updateTarea(tareaCreada));

      }else{
        await postTareaController(tareaCreada).then(()=> postTarea(tareaCreada))
      }

      godContest(`Se ha  ${tarea ? "editado" : "creado"} la tarea correctamente!!`)
      close(false);

    } catch (error) {8
      badContest(`No se pudo ${tarea ? "editar" : "crear"} la tarea`+ error)
    }

  };
  return ReactDOM.createPortal(
    
      <div className={styles.mainDiv}>

        <div className={styles.modalUser}>
          
          <h1>{tarea ? "Editar": "Crear"} Tarea</h1>

          <div className={styles.divClose}>
            <Close close={close} />
          </div>

          <form className={styles.formularios} onSubmit={onSubmit}>
            <input
              onChange={handleChange}
              name="titulo"
              value={values.titulo}
              type="text"
              placeholder="Ingrese titulo de la tarea: "
            />
            <input
              onChange={handleChange}
              name="descripcion"
              value={values.descripcion}
              type="text"
              placeholder="Ingrese una descripcion: "
            />
            <div className={styles.dateContainer}>
              <label htmlFor="">Fecha Limite:</label>
              <input
                onChange={handleChange}
                name="fechaLimite"
                value={String(values.fechaLimite)}
                type="date"
              />
            </div>
            <div>
              <div className={styles.buttonContainer}>
                <Button type="submit" variant="outline-success">
                  Confirmar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      ,
    document.body
  );
};
