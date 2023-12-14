import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import styles from "./Main.module.css"

function Main() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Main;