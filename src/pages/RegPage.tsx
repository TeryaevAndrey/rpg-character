import React, { FC } from "react";
import {Link} from "react-router-dom";

const RegPage: FC = () => {
  return (
    <div className="login-box">
      <h2>Регистрация</h2>
      <form>
        <div className="user-box">
          <input type="text" />
          <label>Имя пользователя</label>
        </div>
        <div className="user-box">
          <input type="password" />
          <label>Пароль</label>
        </div>
        <div>
        <Link to="/auth/login">Войти</Link>
        </div>
        <button>
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
