import logo from './logo.svg';
import './App.css';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <button type="button" className="btn btn-primary">Primary</button>
          <button type="button" className="btn btn-secondary">Secondary</button>
          <button type="button" className="btn btn-success">Success</button>
          <button type="button" className="btn btn-warning">Warning</button>
          <button type="button" className="btn btn-danger">Danger</button>
          <button type="button" className="btn btn-light">Light</button>
          <button type="button" className="btn btn-dark">Dark</button>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          this is uuuujin github
        </h1>
          <p>my react 연습장</p>
        <a
          className="App-link"
          href="https://syz.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          time is
        </a>
      </header>
    </div>
  );
}

export default App;
