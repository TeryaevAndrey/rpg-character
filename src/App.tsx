import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import jwt from "jsonwebtoken";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import RegPage from "./pages/RegPage";
import axios from "axios";
import checkToken from "./utils/checkToken";

function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/auth/login");
    } else {
      navigate("/");
    }
  }, []);

  React.useEffect(() => {
    const deadToken = checkToken();

    if (deadToken) {
      navigate("/auth/login");
      localStorage.removeItem("userInfo");
    }
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/reg" element={<RegPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
