import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import { Applayout } from "@/components/layouts/AppLayout";

// config
import { DEFAULT_PATH } from "../config/app";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => {
    const LoadableComponent = (props) => {
        return (
            <Suspense fallback={<LoadingScreen />}>
                <Component {...props} />
            </Suspense>
        );
    };

    LoadableComponent.displayName = `Loadable(${Component.displayName || Component.name})`;

    return LoadableComponent;
};

// "/app"

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Applayout />,
            children: [
                { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
                {
                    path: "app",
                    element: <PageDashboard />,
                },
                {
                    path: "sample",
                    element: <PageSample />,
                },
                {
                    path: "empty",
                    element: <PageEmpty />,
                },
                { path: "404", element: <Page404 /> },
                { path: "*", element: <Navigate to="/404" replace /> },
            ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}

const PageDashboard = Loadable(lazy(() => import("../pages/Dashboard")));
const PageSample = Loadable(lazy(() => import("../pages/Sample")));
const PageEmpty = Loadable(lazy(() => import("../pages/Empty")));
const Page404 = Loadable(lazy(() => import("../pages/NoMatch")));
