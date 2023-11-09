import React from "react";
import './App.css';
import Main from "./main/Main.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Resume from "./pages/resume.jsx";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  <div className='App'>
  <Routes>
  <Route element={<Main/>}>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Projects' element={<Projects/>}/>
  <Route path='/Resume' element={<Resume/>}/>
  </Route>
  </Routes>
    </div>
  );
}

export default App;
