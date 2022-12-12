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
import Axios from "./axios";
import ContextTest from "./context/contextTest";
import Ref from "./Ref/UseRef";
import ShowTextTest from "./Ref/ShowTextTest";
import BoxRefTest from "./Ref/ManyDomRefTest"

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
          <Route path="/axios" element={<Axios/>}/>
          <Route path="/ContextTest" element={<ContextTest/>}/>
          <Route path="/Ref" element={<Ref/>}/>
          <Route path="/ShowTextTest" element={<ShowTextTest/>}/>
          <Route path="/BoxRefTest" element={<BoxRefTest/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;