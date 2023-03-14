import { useState } from 'preact/hooks'
import './app.css'
import Card from "./components/Card";

export function App() {

  const [userName, setUserName] = useState("");
  const [genero, setGenero] = useState("");
  const [pelicula, setPelicula] = useState("");
  const [selectRating, setSelectRating] = useState("");
  const [send, setSend] = useState(false);
  const [errorSelect, setErrorSelect] = useState("");
  

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const onChangeGenero = (event) => {
    setGenero(event.target.value);
  };
  const onChangePelicula = (event) => {
    setPelicula(event.target.value);
  };
  const onChangeSelectRating = (event) => {
    setSelectRating(event.target.value);
  };

  const validUserName = (userName) => {
    const withoutSpace = userName.trim();

    if (withoutSpace.length >= 3) {
      return true;
    } else {
      setErrorSelect("Por favor chequea que la información sea correcta");
      return false;
    }
  };

  const validGenero = (genero) => {
    const withoutSpace = genero.trim();

    if (withoutSpace.length >= 6) {
      return true;
    } else {
      setErrorSelect("Por favor chequea que la información sea correcta");
      return false;
    }
  };

  const completeInput = (userName, genero, pelicula) => {
    if (userName === "" || genero === "" || pelicula === "") {
      setErrorSelect("Por favor chequea que la información sea correcta");
      setSend(false);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isNameValid = validUserName(userName);

    const isGeneroValid = validGenero(genero);

    const isCompleteInput = completeInput(userName, genero, pelicula);

    if (selectRating === "") {
      setErrorSelect("Seleccionar una puntuación");

      return;
    }

    if (isNameValid && isCompleteInput && isGeneroValid) {
      setSend(true);
      setErrorSelect("");
    }
  };

  return(

    <div className="App">
      <h2>Hablemos de películas</h2>
      <form onSubmit={handleSubmit}>
        
        <input
        type="text"
        placeholder = "Ingrese su nombre"
        value={userName}
        onChange={onChangeUserName}
        />
        
        <input
        type="text"
        placeholder = "Genero favorito"
        value={genero}
        onChange={onChangeGenero}
        />

        <input
        type="text"
        placeholder = "Pelicula favorita"
        value={pelicula}
        onChange={onChangePelicula}
        />

        <select
        placeholder = "Puntuacion"
        value={selectRating}
        onChange={onChangeSelectRating}
        >
          <option value="" disabled default>
            Rating
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="submit" value="Enviar" />
      </form>
      <div className="Error">{errorSelect}</div>
      {send && (
        <Card
          userName={userName}
          genero={genero}
          pelicula={pelicula}
          selectRating={selectRating}
        />
      )}
    </div>
  );
}

export default App;
