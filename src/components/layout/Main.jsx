import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import styles from "./Main.module.css"
import Projetos from "../pages/Projetos.jsx";
import Contato from "../pages/Contato.jsx";
import Sobre from "../pages/Sobre.jsx";


function Main() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/sobre" element={<Sobre/>} />

      </Routes>
    </div>
  );
}

export default Main;