import React, { FC } from "react";
import {Link} from "react-router-dom";

const LoginPage: FC = () => {
  return (
    <div className="login-box">
      <h2>Авторизация</h2>
      <form>
        <div className="user-box">
          <input type="text"/>
          <label>Имя пользователя</label>
        </div>
        <div className="user-box">
          <input type="password" />
          <label>Пароль</label>
        </div>
        <div>
        <Link to="/auth/reg">Зарегистрироваться</Link>
        </div>
        <button>
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
