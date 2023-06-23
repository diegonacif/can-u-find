import { useContext } from 'react';
import '../../App.scss';
import { AuthGoogleContext } from '../../contexts/AuthGoogleProvider';

export const Login = () => {
  const { 
    handleGoogleSignIn, 
    userCredential,
  } = useContext(AuthGoogleContext);

  console.log(userCredential ? "logged in" : "not logged in");

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
