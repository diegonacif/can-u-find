import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { AuthGoogleContext } from "./contexts/AuthGoogleProvider";

export const PrivateRoutes = () => {
  const { isLoading, userCredential } = useContext(AuthGoogleContext);

  console.log({
    isLoading: isLoading,
    userCredential: userCredential
  })

  if(isLoading) {
    return null;
  } else {
    return userCredential ? <Outlet /> : <Navigate to="/" />;
  }
}