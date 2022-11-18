import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./component/Home";
import Scroll from "./scroll";
import Comment from "./comment/contents/CommentList";
import Notification from "./comment/contents/NotificationList";


// function App() {
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>
//           this is uuuujin github
//         </h1>
//           <p>my react 연습장</p>
//         <a
//           className="App-link"
//           href="https://syz.netlify.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           time is
//         </a>
//       </header>
//       <div>
//         {Scroll}
//       </div>
//
//       {/*<Route path="/scroll" component={Scroll}/>*/}
//     </div>
//
//   );
// }
//


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scroll" element={<Scroll />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;