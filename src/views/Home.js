import logo from "../logo.svg";
import "../App.css";
import CompA from "./CompA";
import CompB from "./CompB";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CompA />
        </div>
        <div>
          <CompB />
        </div>
      </header>
    </div>
  );
}

export default App;
