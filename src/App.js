import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./component/Home/Home";
import Photo from "./component/Photo/Photo";
import DoSomeThing from "./component/Do";

function App() {
  return (
     <div >
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photo" element={<Photo />} />
            <Route path="/test" element={<DoSomeThing />} />
        </Routes>
      </Router>
     </div>
  );
}

export default App;
