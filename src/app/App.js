// modules
import { useRoutes } from 'react-router-dom';
import { appRoutesDefinition } from "../views/routes";

export const App = () => {
    const AppRoutes = useRoutes(appRoutesDefinition);
    return AppRoutes;
}

