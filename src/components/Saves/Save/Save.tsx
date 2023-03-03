import React, { FC } from 'react';
import styles from "./save.module.css";

const Save: FC = () => {
    return (
        <div className={styles.wrapper}>
            <p>Название</p>
            <div className={styles.importBtn}>Импорт</div>
        </div>
    );
};

export default Save;