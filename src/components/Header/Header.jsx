import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/AuthGoogleProvider";

export const Header = () => {
  const { handleGoogleSignOut } = useContext(AuthGoogleContext);

  return (
    <div className="header-container">
      <h2>Can U Find</h2>
      <button 
        className="logout-button" 
        onClick={() => handleGoogleSignOut()}
      >
        Logout
      </button>
    </div>
  )
}
