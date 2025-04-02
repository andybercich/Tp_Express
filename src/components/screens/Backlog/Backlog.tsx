import { useState } from "react";
import { ListaSprints } from "../../ui/ListaSprints/ListaSprints";
import { TareasBacklog } from "../../ui/TareasBacklog/TareasBacklog";
import "./Backlog.scss"
import { getSprintsController } from "../../../data/sprintController";

export const Backlog = () => {


  useState(async ()=>{

    const fetchSprints = async () => {
      const sprintsCall = await getSprintsController();
      console.log(sprintsCall);
    };

    fetchSprints();

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