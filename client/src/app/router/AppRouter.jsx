import { memo, useMemo, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { routeConfig, RoutePath } from "./routeConfig";
import { Loader } from "@/ui/Loader/Loader";

const AppRouter = () => {
    const routes = useMemo(() => {
        return routeConfig.map((route) => (
            <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
            />
        ));
    }, [routeConfig]);

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {routes}
                <Route
                    path="*"
                    element={<Navigate to={RoutePath.main} replace />}
                />
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
