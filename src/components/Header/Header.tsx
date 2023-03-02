import React, { FC } from 'react';
import styles from "./header.module.css";
import EditImg from "../../images/edit.svg";
import DownloadImg from "../../images/download.svg";
import ImportImg from "../../images/import.svg";
import MenuImg from "../../images/burger.svg";

const Header: FC = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.nameWrapper}>
                        <h2 className={styles.name}>Username</h2>
                        <img className={styles.icon} src={EditImg} alt="Редактировать имя" />
                    </div>
                    <div className={styles.iconWrapper}>
                        <img className={styles.icon} src={DownloadImg} alt="Сохранить" />
                        <img className={styles.icon} src={ImportImg} alt="Импортировать" />
                        <img className={styles.icon} src={MenuImg} alt="Меню" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;