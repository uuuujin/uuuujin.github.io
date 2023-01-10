import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './clockSample/Clock';

import BootDashboard from "./component/BootDashboard";

import { HashRouter,Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
      <React.StrictMode>
          {/*<Clock/>*/}
          {/*<App />*/}
          {/*<HashRouter>*/}
          {/*      <Routes>*/}
          {/*    <Route path="/*" component={<App/>}/>*/}
          {/*    <Route path="/boot/*" component={<BootDashboard/>}/>*/}
          {/*      </Routes>*/}
          {/*</HashRouter>*/}
          <BootDashboard/>
      </React.StrictMode>
      );
  }, 1000);

// root.render(
//
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
