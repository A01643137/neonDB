import logo from "./logo.svg";
import axios from "axios";

import "./App.css";

// Función para obtener los IDs de los estudiantes
const getStudentID = () => {
  axios
    .get("http://localhost:3000/member/T2/canva/T2")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Hubo un problema con la solicitud:", error);
    });
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={getStudentID}>Get Student ID</button>
      </header>
    </div>
  );
}

export default App;
