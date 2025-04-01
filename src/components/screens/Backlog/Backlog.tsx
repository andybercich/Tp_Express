import { ListaSprints } from "../../ui/ListaSprints/ListaSprints";
import { TareasBacklog } from "../../ui/TareasBacklog/TareasBacklog";
import "./Backlog.scss"

export const Backlog = () => {
  return (
    <>
      <div className="backlogContainerNavigate">
        <h1>ADMINISTADOR DE TAREAS</h1>
        <ListaSprints />
        <TareasBacklog />
      </div>
    </>
  );
};
