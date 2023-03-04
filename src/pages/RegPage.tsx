import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

const RegPage: FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const changeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const formHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios
      .post(process.env.REACT_APP_PROXY + "/api/auth/reg", {
        userName: userName,
        password: password,
      })
      .then((res: AxiosResponse) => {
        alert(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="login-box">
      <h2>Регистрация</h2>
      <form>
        <div className="user-box">
          <input type="text" onChange={changeUserName} value={userName} />
          <label>Имя пользователя</label>
        </div>
        <div className="user-box">
          <input type="password" onChange={changePassword} value={password} />
          <label>Пароль</label>
        </div>
        <div>
          <Link to="/auth/login">Войти</Link>
        </div>
        <button onClick={formHandler}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default RegPage;
