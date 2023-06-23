import '../../App.scss';

export const Login = () => {
  return (
    <section className="login-container">
      <div className="login-buttons">
        <div className="button-wrapper">
          <button>Login com Google</button>
        </div>
        <div className="button-wrapper">
          <button>Login com Facebook</button>
        </div>
      </div>
    </section>
  )
}
