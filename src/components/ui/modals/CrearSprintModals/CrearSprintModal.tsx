import { FC, FormEvent } from "react";
//import { ISprints } from "../../../../types/ITareas";
import { useForm } from "../../../../hooks/useForm";
import { ISprints } from "../../../../types/ISprints";

interface ICrearSprintsModal {}

export const CrearSprintModal: FC<ICrearSprintsModal> = () => {
  const initiallForm: ISprints= {
    id: "",
    fechaInicio: new Date(),
    fechaCierre: new Date(),
    nombre: "",
    tareas: [], 
  };
  const { values, handleChange } = useForm<ISprints>(initiallForm);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sprintsCreados: ISprints = {
      id: String(crypto.randomUUID()),
      fechaInicio: values.fechaInicio,
      fechaCierre: values.fechaCierre,
      nombre: values.nombre,
      tareas: values.tareas,
    };
  };
  return (
    <>
      <div>
        <div>
          {" "}
          <h1>Crear Sprint</h1>
          <form onSubmit={onSubmit}>
            <input
              onChange={handleChange}
              name="nombre"
              value={values.nombre}
              type="text"
              placeholder="Ingrese el nombre del sprint: "
            />
            <div>
              <label htmlFor="">fechaInicio:</label>
              <input
                onChange={handleChange}
                name="fechaInicio"
                value={String(values.fechaInicio)}
                type="date"
              />
            <div>
              <label htmlFor="">fechaCierre:</label>
              <input
                onChange={handleChange}
                name="fechaCierre"
                value={String(values.fechaCierre)}
                type="date"
              />
            </div></div>
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
