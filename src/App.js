import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Main } from "./pages/main/Main";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="project-wrapper">
        <div className="project">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

