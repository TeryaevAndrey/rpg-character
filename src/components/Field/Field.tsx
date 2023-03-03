import React, { FC } from "react";
import styles from "./field.module.css";
import AddImg from "../../images/add.svg";

interface IField {
  value: number;
  title: string;
  onClick?: React.MouseEventHandler;
  main?: boolean;
  level?: number;
}

const Field: FC<IField> = ({ value, title, onClick, main = false, level }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <p>{value}</p>
        <p>{title}</p>

        {level !== undefined && <div className={styles.level}>{level}</div>}

        {main && (
          <img
            className={styles.icon}
            onClick={onClick}
            src={AddImg}
            alt="Плюс"
          />
        )}
      </div>
    </div>
  );
};

export default Field;
