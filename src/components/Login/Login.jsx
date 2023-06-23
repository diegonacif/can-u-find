import { useContext, useEffect } from 'react';
import { AuthGoogleContext } from '../../contexts/AuthGoogleProvider';
import '../../App.scss';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { 
    handleGoogleSignIn, 
    userCredential,
  } = useContext(AuthGoogleContext);

  const navigate = useNavigate();

  // Back to main page when logged in
  useEffect(() => {
    userCredential ?
    navigate("/home") :
    null
  }, [userCredential]);

  return (
    <section className="login-container">
      <div className="login-buttons">
        <div 
          className="button-wrapper" 
          onClick={() => handleGoogleSignIn()}
        >
          <button>Login com Google</button>
        </div>
        <div className="button-wrapper">
          <button>Login com Facebook</button>
        </div>
      </div>
    </section>
  )
}
