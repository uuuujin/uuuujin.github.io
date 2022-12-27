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
import BoxRefTest from "./Ref/ManyDomRefTest";
import AgeTest from "./Ref/AgeTest";
import MemoTest from "./HookTest/MemoTest";
import CallBackTest from "./HookTest/CallBackTest";
import ReducerTest from "./HookTest/ReducerTest";
import ImperativeHandleApp from "./HookTest/ImperativeHandleApp";
import LayoutEffectTest from "./HookTest/LayoutEffectTest";
import DebugValueTestApp from "./HookTest/DebugValueTestApp";
import PropTypesTest from "./recommandedComponentWrite/PropTypesTestApp";
import RenderingSpeedSample from "./RenderingSpeed/Sample";
import RenderingSpeedFruitSample from "./RenderingSpeed/SelectFruitsSampleCode";
import BetweenRealDomVirtualDom from "./RenderingSpeed/BetweenRealDomVirtualDom";
import ReduxPractice from "./Redux/ReduxPractice";
import ReduxPracticeUseRedux from "./Redux/ReduxPracticeUseRedux";
//import MiddlewareTest from "./Redux/middlewareTEST2";
//import MiddlewareExample from "./Redux/middlewareExmaple";
//import MiddlewareDelayExample from "./Redux/middlewareDelayExample";
// import MiddlewareStorage from "./Redux/middlewareStorage";
// import ReducerProduce from './Redux/ReducerProduce';
// import StoreTest from "./Redux/StoreTest";
//import ReduxSampleApplication from "./Sample_Redux_Application";
import ReduxSampleApp from "./SampleReduxApplication";
import ReduxSampleAppBetter from "./SampleReduxApplicationBetter";

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
          <Route path="/AgeTest" element={<AgeTest/>}/>
          <Route path="/MemoTest" element={<MemoTest/>} />
          <Route path="/CallBackTest" element={<CallBackTest/>} />
          <Route path="/ReducerTest" element={<ReducerTest/>} />
          <Route path="/ImperativeHandleApp" element={<ImperativeHandleApp/>} />
          <Route path="/LayoutEffectTest" element={<LayoutEffectTest/>} />
          <Route path="/DebugValueTestApp" element={<DebugValueTestApp/>} />
          <Route path="/PropTypesTest" element={<PropTypesTest/>} />
          <Route path="/RenderingSpeedSample" element={<RenderingSpeedSample/>} />
          <Route path="/RenderingSpeedFruitSample" element={<RenderingSpeedFruitSample/>} />
          <Route path="/BetweenRealDomVirtualDom" element={<BetweenRealDomVirtualDom/>} />
          <Route path="/ReduxPractice" element={<ReduxPractice/>}/>
          <Route path="/ReduxPracticeUseRedux" element={<ReduxPracticeUseRedux/>}/>
          {/*<Route path="/MiddlewareTest" element={<MiddlewareTest/>}/>
          <Route path="/MiddlewareExample" element={<MiddlewareExample/>}/>
          <Route path="/MiddlewareDelayExample" element={<MiddlewareDelayExample/>}/>
          <Route path="/MiddlewareStorage" element={<MiddlewareStorage/>}/>
          <Route path="/ReducerProduce" element={<ReducerProduce/>}/>
          <Route path="/StoreTest" element={<StoreTest/>}/>
          <Route path="/ReduxSampleApplication" element={<ReduxSampleApplication/>}/>*/}
          <Route path="/ReduxSampleApp" element={<ReduxSampleApp/>}/>
          <Route path="/ReduxSampleAppBetter" element={<ReduxSampleAppBetter/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;