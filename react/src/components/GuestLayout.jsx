import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contents/ContextProvider";

export default function GuestLayout() {
  const { token } = useStateContext();
  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>
        This element is for guests signUp or login te get access to our content
      </h1>
      <Outlet />
    </div>
  );
}
