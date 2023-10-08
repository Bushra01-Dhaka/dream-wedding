import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <ScrollRestoration />
        </div>
    );
};

export default MainLayout;