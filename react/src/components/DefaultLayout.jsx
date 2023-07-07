import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div>
            <h1>Welcome To Our application</h1>
            <Outlet />
        </div>
    );
}
