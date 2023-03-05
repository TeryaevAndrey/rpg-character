import React, { FC } from 'react';
import styles from "./save.module.css";

interface ISave {
    title: string;
    importClick: React.MouseEventHandler;
    deleteClick: React.MouseEventHandler;
}

const Save: FC<ISave> = ({title, importClick, deleteClick}) => {
    return (
        <div className={styles.wrapper}>
            <p>{title}</p>
            <div className={styles.wrapperBtns}>
                <div className={styles.importBtn} onClick={importClick}>Импорт</div>
                <div className={styles.deleteBtn} onClick={deleteClick}>Удалить</div>
            </div>
        </div>
    );
};

export default Save;