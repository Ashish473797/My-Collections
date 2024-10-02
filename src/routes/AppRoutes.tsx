import { Route, Routes } from "react-router-dom";
import routes from "./RoutesArray";
import NotFound from "../modules/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
        {
            routes.map((route, index) => (
                <Route key={index} path={route.path} Component={route.component} />
            ))
        }
      <Route path="/*" Component={NotFound} />
    </Routes>
  );
}
