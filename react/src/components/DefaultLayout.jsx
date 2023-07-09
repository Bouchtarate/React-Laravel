import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contents/ContextProvider";

export default function DefaultLayout() {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>Welcome To Our application</h1>
      <Outlet />
    </div>
  );
}
