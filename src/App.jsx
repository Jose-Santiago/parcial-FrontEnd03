import { useState } from "react";
import Card from "./components/Card";
import "./styles/App.css";
import styles from "./styles/App.module.css";
import MsgError from "./components/MsgError";

function App() {
  const [user, setUser] = useState({
    name: "",
    lenguaje: "",
  });
  const [showCard, setShowCard] = useState(false);
  const [errors, setErrors] = useState(false);

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (user.name.length >= 3 && user.lenguaje.length > 5) {
      setShowCard(true);
      setErrors(false);
    } else {
      setErrors(true);
    }
  };
  return (
    <div className="App">
      <h1>Color favorito?</h1>
      {showCard ? (
        <Card nombre={user.name} lenguaje={user.lenguaje} />
      ) : (
        <form onSubmit={handlerSubmit}>
          <label> Nombre: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, name: event.target.value.trim() })
            }
          />
          <label> Color Favorito: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, lenguaje: event.target.value.trim() })
            }
          />
          <button>Enviar respuestas</button>
          {errors ? <MsgError /> : null}
        </form>
      )}
    </div>
  );
}

export default App;
