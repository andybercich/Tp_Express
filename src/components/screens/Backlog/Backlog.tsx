import { useState } from "react";
import { ListaSprints } from "../../ui/ListaSprints/ListaSprints";
import { TareasBacklog } from "../../ui/TareasBacklog/TareasBacklog";
import "./Backlog.scss"
import { getSprintsController } from "../../../Controllers/sprintController";
import { sprintStore } from "../../../store/sprintStore";
import { tareaStore } from "../../../store/tareaStore";
import { getTareasController } from "../../../Controllers/tareaController";

export const Backlog = () => {
  const {setArraySprints} = sprintStore();
  const {setArrayTareas} = tareaStore();

  useState(async ()=>{

    const fetchSprintsTareas = async () => {
      const sprintsCall = await getSprintsController();
      const tareas = await getTareasController();
      setArraySprints(sprintsCall);
      setArrayTareas(tareas);
    };

    fetchSprintsTareas();

  },)

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