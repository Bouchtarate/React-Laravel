import { Outlet } from "react-router-dom";

export default function GuestLayout() {
    return (
        <div>
            <h1>
                This element is for guests signUp or login te get access to our
                content
            </h1>
            <Outlet />
        </div>
    );
}
