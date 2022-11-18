import React from "react";
import logo from '../logo.svg';
import Clock from '../clockSample/Clock';


function Home() {
    return (
        <div className="App">
        <Clock/>
          <header className="App-header">
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


export default Home