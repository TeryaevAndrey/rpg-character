import React, { FC } from "react";
import styles from "./header.module.css";
import EditImg from "../../images/edit.svg";
import DownloadImg from "../../images/download.svg";
import axios from "axios";

const Header: FC = () => {
  const [name, setName] = React.useState<string>("");

  const changeName = async () => {
    const newName = prompt("Введите новое имя");

    if (newName !== null && newName.length === 0) {
      alert("Ошибка. Вы оставили поле пустым!");
    }
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.nameWrapper}>
            <h2 className={styles.name}>Username</h2>
            <img
              className={styles.icon}
              src={EditImg}
              alt="Редактировать имя"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
