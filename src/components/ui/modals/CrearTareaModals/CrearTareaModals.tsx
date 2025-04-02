import { FC, FormEvent} from "react";
import { ITarea } from "../../../../types/ITareas";
import { useForm } from "../../../../hooks/useForm";



interface ICrearTareaModal {}

export const CrearTareaModal: FC<ICrearTareaModal> = () => {
  const initiallForm: ITarea = {
    id: "",
    titulo: "",
    descripcion: "",
    estado: "pendiente",
    fechaLimite: new Date(),
  };
  const { values, handleChange } = useForm<ITarea>(initiallForm);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const tareaCreada: ITarea = {
      id: String(crypto.randomUUID()),
      titulo: values.titulo,
      descripcion: values.descripcion,
      fechaLimite: values.fechaLimite,
      estado: initiallForm.estado,
    };
  };
  return (
    <>
      <div>
        <div>
          {" "}
          <h1>CrearTarea</h1>
          <form onSubmit={onSubmit}>
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
            <div>
              <label htmlFor="">fechaLimite:</label>
              <input
                onChange={handleChange}
                name="fechaLimite"
                value={String(values.fechaLimite)}
                type="date"
              />
            </div>
            <div>
              <div>
                <button type="submit">aceptar</button>
                <button>cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
