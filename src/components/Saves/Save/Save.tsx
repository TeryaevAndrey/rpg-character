import React, { FC } from 'react';
import styles from "./save.module.css";

const Save: FC = () => {
    return (
        <div className={styles.wrapper}>
            <p>Название</p>
            <div className={styles.wrapperBtns}>
                <div className={styles.importBtn}>Импорт</div>
                <div className={styles.deleteBtn}>Удалить</div>
            </div>
        </div>
    );
};

export default Save;