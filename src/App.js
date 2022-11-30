import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./component/Home";
import Scroll from "./scroll";
import Comment from "./comment/contents/CommentList";
import Notification from "./comment/contents/NotificationList";
import Accommodate from "./useCounter/Accommodate";
import ConfirmButton from "./ConfirmButton/ConfirmButton";
import LandingPage from "./Toolbar/LandingPage";
import AttendanceBook from "./AttendanceBook/AttendanceBook";
import SignUp from "./SignUp/SignUp";
import Calculator from "./Temperature/Calculator";
import ProfileCard from "./Card/ProfileCard";
import DarkOrLight from "./Theme/DarkOrLight";
import Blocks from "./Blocks/Blocks";
import Blog from "./miniBlog";

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
          <Route path="/accommodate" element={<Accommodate />} />
          <Route path="/confirmButton" element={<ConfirmButton />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/attendanceBook" element={<AttendanceBook/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/calculator" element={<Calculator/>}/>
          <Route path="/card" element={<ProfileCard/>} />
          <Route path="/Theme" element={<DarkOrLight/>} />
          <Route path="/Blocks" element={<Blocks/>} />
          <Route path="/blog/*" element={<Blog/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;