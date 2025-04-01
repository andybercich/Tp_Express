import { Navigate, Route, Routes } from "react-router-dom";
import { Sprint } from "../components/screens/Sprint/Sprint";
import { Backlog } from "../components/screens/Backlog/Backlog";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/vistaBacklog" replace />} />
        <Route path="/vistaBacklog" element={<Backlog />} />
        <Route path="/vistaSprint" element={<Sprint />} />
      </Routes>
    </>
  );
};
