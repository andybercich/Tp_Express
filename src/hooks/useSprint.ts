import { useShallow } from "zustand/shallow";
import { sprintStore } from "../store/sprintStore";
import { getSprintsController } from "../data/sprintController";
import { ISprints } from "../types/ISprints";

export const useSprint = () => {
  const { sprints, setArraySprints } = sprintStore(
    useShallow((state) => ({
      sprints: state.sprints,
      setArraySprints: state.setArraySprints,
    }))
  );
  const getAllSprintsHook = async () => {
    const data: ISprints[] = await getSprintsController();
    
    if (data) setArraySprints(data);
  };

  return {
    sprints,
    getAllSprintsHook,
  };
};
