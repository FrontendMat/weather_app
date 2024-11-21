import { lazy } from "react";

const Main = lazy(() => import("@/pages/MainPage"));
const List = lazy(() => import("@/pages/ListPage"));

export const RoutePath = {
    main: "/main",
    list: "/list",
};

export const routeConfig = [
    { path: RoutePath.main, element: Main },
    { path: RoutePath.list, element: List },
];
