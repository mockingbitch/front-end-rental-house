import { Routes, Route } from "react-router-dom";
import Layout from "./containers/layouts/Layout";
import { publicRoutes, privateRoutes } from "./routes";

const App = (props) => {
    const isLoggedIn = props.isLoggedIn;
    return (
        <Routes>
            { publicRoutes.map((publicRoute, index) => {
                const PublicLayout = publicRoute.layout || Layout;
                const PublicPage = publicRoute.component;

                return (
                    <Route key={ index } path={ publicRoute.path } element={
                        <PublicLayout>
                            <PublicPage />
                        </PublicLayout>
                    } />
                )
            })}

            { isLoggedIn && privateRoutes.map((privateRoute, index) => {
                const PrivateLayout = privateRoute.layout || Layout;
                const PrivatePage = privateRoute.component;

                return (
                    <Route key={ index } path={ privateRoute.path } element={
                        <PrivateLayout>
                            <PrivatePage />
                        </PrivateLayout>
                    } />
                )
            })}
        </Routes>
    )
}

export default App;