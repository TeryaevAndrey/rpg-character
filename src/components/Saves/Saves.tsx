import React, { FC } from 'react';
import Save from './Save/Save';
import styles from "./saves.module.css";

const Saves: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <Save />
                <Save />
                <Save />
                <Save />
                <Save />
                <Save />
            </div>
        </div>
    );
};

export default Saves;