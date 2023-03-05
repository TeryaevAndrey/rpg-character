import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import jwt from "jsonwebtoken";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import RegPage from "./pages/RegPage";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

  React.useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/auth/login");
    } else {
      navigate("/");
    }
  }, []);

  React.useEffect(() => {
    axios
      .post(process.env.REACT_APP_PROXY + "/api/auth/check-token", {
        token: userInfo.token,
      })
      .then(() => {
        navigate("/auth/login");
      })
      .catch((err) => {
        navigate("/auth/login");
      });
  }, []);

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
