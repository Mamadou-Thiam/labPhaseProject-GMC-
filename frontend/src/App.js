import React from "react";
import "./App.css";
import 'animate.css';
import Accueil from "./pages/Accueil";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WebCandidature from "./candidatures/WebCandidature";
import MobileCandidature from "./candidatures/MobileCandidature";
import RhCandidature from "./candidatures/RhCandidature";
import Admission from "./pages/Admission";
import CandidatureList from  "./pages/CandidatureList";
import DeleteList from "./components/DeleteList";
import ShowCandidature from "./components/ShowCandidature";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/webCandidature" element={<WebCandidature />} />
        <Route path="/mobileCandidature" element={<MobileCandidature />} />
        <Route path="/rhCandidature" element={<RhCandidature />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/candidatureList" element={<CandidatureList/>}/>
        <Route path="/candidature/delete/:id" element={<DeleteList/>}/>
        <Route path="/candidature/show/:id" element={<ShowCandidature/>}/>
      
      </Routes>
    </>
  );
};

export default App;
