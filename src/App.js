import logo from './logo.svg';
import './App.css';
import './animate/MoveButton';
import MoveButton from "./animate/MoveButton";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MoveButton/>
        <h1>
          this is uuuujin github
        </h1>
          <p>나의 개발 연습장</p>
        <a
          className="App-link"
          href="https://syz.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          syz blog
        </a>
      </header>
    </div>
  );
}

export default App;
