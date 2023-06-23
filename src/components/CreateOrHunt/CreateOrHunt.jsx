import { useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";

export const CreateOrHunt = () => {
  const navigate = useNavigate();

  return (
    <section className="create-or-hunt-container">
      <Header />
      <div className="choice-container">
        <button onClick={() => navigate("/my-hunts")}>Criar Caçada</button>
        <button>Caçar Tesouro</button>
      </div>
    </section>
  )
}
