import { useLocation, useNavigate } from "react-router-dom";
import { ListaSprints } from "../../ui/ListaSprints/ListaSprints";
import { TareasBacklog } from "../../ui/TareasBacklog/TareasBacklog";
import "./Sprint.scss";
import { ISprints } from "../../../types/ISprints";
import { ListaTareasSprint } from "../../ui/ListaTareasSprint/ListaTareasSprint";

export const Sprint = () => {
  const location = useLocation();
  const sprint: ISprints = location.state.sprint;

  return (
    <>
      <div className="sprintContainer">
        <h1>ADMINISTADOR DE TAREAS</h1>
        <ListaSprints />
        <ListaTareasSprint sprint={sprint} />
      </div>
    </>
  );
};
