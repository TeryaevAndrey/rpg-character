import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

const LoginPage: FC = () => {
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
      .post(process.env.REACT_APP_PROXY + "/api/auth/login", {
        userName,
        password,
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
      <h2>Авторизация</h2>
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
          <Link to="/auth/reg">Зарегистрироваться</Link>
        </div>
        <button onClick={formHandler}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
