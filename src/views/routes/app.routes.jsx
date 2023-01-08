import {Main} from "../content/main";
import { Outlet } from 'react-router-dom';
import {NotFound} from "../pages/not-found";
import {StartPage} from "../pages/start-page";
import {BrowserRoute} from "./browser.routes";
import {CatalogPage} from "../pages/catalog-page";
import {FavoritePage} from "../pages/favorites-page";
import {AdminPage} from "../pages/admin-page";

export const appRoutesDefinition = [{
    path: '/',
    element: (
        <Main>
            <Outlet />
        </Main>
    ),
    children: [{
        path: BrowserRoute.notFound,
        element: <NotFound />
    }, {
        path: BrowserRoute.startPage,
        element: <CatalogPage />
    }, {
        path: BrowserRoute.catalogPage,
        element: <CatalogPage />
    }, {
        path: BrowserRoute.favoritesPage,
        element: <FavoritePage />
    }, {
        path: BrowserRoute.adminPage,
        element: <AdminPage />
    }]
}];
