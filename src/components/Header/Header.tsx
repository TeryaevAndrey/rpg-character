import React, { FC } from "react";
import styles from "./header.module.css";
import EditImg from "../../images/edit.svg";
import axios, { AxiosResponse } from "axios";

const Header: FC = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const [name, setName] = React.useState<string>(userInfo.userName);

  const changeName = async () => {
    const newName = prompt("Введите новое имя");

    if (newName !== null && newName.length === 0) {
      alert("Ошибка. Вы оставили поле пустым!");
    }

    if (newName) {
      await axios
        .post(process.env.REACT_APP_PROXY + "/api/auth/new-username", {
          userId: userInfo.userId,
          newUserName: newName,
        })
        .then((res: AxiosResponse) => {
          alert(res.data.message);

          localStorage.setItem("userInfo", JSON.stringify({
            ...userInfo,
            userName: newName,
          }));

          setName(newName);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.nameWrapper}>
            <h2 className={styles.name}>{name}</h2>
            <img
              className={styles.icon}
              src={EditImg}
              alt="Редактировать имя"
              onClick={changeName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
