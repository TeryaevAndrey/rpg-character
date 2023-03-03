import React, { FC } from "react";
import styles from "./header.module.css";
import EditImg from "../../images/edit.svg";
import DownloadImg from "../../images/download.svg";

const Header: FC = () => {
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
