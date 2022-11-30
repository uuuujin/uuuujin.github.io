import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import PostWritePage from "./page/PostWritePage";
import PostViewPage from "./page/PostViewPage";


function Index(props) {
    return (
        // <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="post-write" element={<PostWritePage/>}/>
                <Route path="post/:postId" element={<PostViewPage/>}/>
            </Routes>
        // </Router>
    );
}



export default Index;