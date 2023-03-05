import axios, { AxiosResponse } from "axios";
import React, { FC } from "react";
import Save from "./Save/Save";
import styles from "./saves.module.css";

interface ISaves {
  saves: ISavesItem[] | [];
  setSaves: Function;
  setParameters: Function;
}

const Saves: FC<ISaves> = ({ saves, setSaves, setParameters }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

  React.useEffect(() => {
    axios
      .post(process.env.REACT_APP_PROXY + "/api/parameters/get-saves", {
        userId: userInfo.userId,
      })
      .then((res: AxiosResponse) => {
        setSaves(res.data.saves);
      });
  }, [userInfo.userId]);

  const importHandler = (parameters: IParameters) => {
    setParameters(parameters);
  };

  const deleteHandler = async (id: string) => {
    await axios
      .delete(process.env.REACT_APP_PROXY + `/api/parameters/delete-save/${id}`)
      .then((res: AxiosResponse) => {
        alert(res.data.message);

        const filterSaves = saves.filter((item: ISavesItem) => {
          return item._id !== id;
        });

        setSaves(filterSaves);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {saves.map((save: ISavesItem) => {
          return (
            <Save
              title={save.saveName}
              importClick={() => importHandler(save.parameters)}
              deleteClick={() => deleteHandler(save._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Saves;
