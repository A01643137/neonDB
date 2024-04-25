import logo from "./logo.svg";
import axios from "axios";

import "./App.css";
//postgresql://autolensDB_owner:e4Fv0YIATVWb@ep-dry-wave-a5d77r71.us-east-2.aws.neon.tech/autolensDB
// const getStudentID = () => {
//   fetch(
//     "postgresql://autolensDB_owner:e4Fv0YIATVWb@ep-dry-wave-a5d77r71.us-east-2.aws.neon.tech/autolensDB/host:3000/member/T2/canva/T2"
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);
//     });
// };

const getStudentID = () => {
  axios.get("http://localhost:3000/member/T2/canva/T2").then((data) => {
    console.log(data);
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
