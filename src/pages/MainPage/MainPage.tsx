import axios, { AxiosResponse } from "axios";
import React, { FC } from "react";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import Saves from "../../components/Saves/Saves";

const MainPage: FC = () => {
  const [parameters, setParameters] = React.useState<IParameters>({
    power: 0,
    dexterity: 0,
    intelligence: 0,
    charisma: 0,

    lifeForce: 3,
    evasion: 10,
    energy: 0,

    attack: {
      value: 0,
      level: 1,
    },
    stels: {
      value: 0,
      level: 1,
    },
    shooting: {
      value: 0,
      level: 1,
    },
    learnability: {
      value: 0,
      level: 1,
    },
    survival: {
      value: 0,
      level: 1,
    },
    medicine: {
      value: 0,
      level: 1,
    },
    intimidation: {
      value: 0,
      level: 1,
    },
    insight: {
      value: 0,
      level: 1,
    },
    appearance: {
      value: 0,
      level: 1,
    },
    manipulation: {
      value: 0,
      level: 1,
    },
  });
  const [saves, setSaves] = React.useState<any>([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

  const getDamage = () => {
    setParameters({ ...parameters, power: parameters.power - 1 });
  };

  const save = async () => {
    const name = prompt("Введите название сохранения");

    if (name !== null) {
      await axios
        .post(process.env.REACT_APP_PROXY + "/api/parameters/new-save", {
          parameters,
          saveName: name,
          userId: userInfo.userId,
        })
        .then((res: AxiosResponse) => {
          alert(res.data.message);

          setSaves((prev: any) => [res.data.parametersObj, ...prev])
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  return (
    <>
      <Header />
      <section className="main">
        <div className="container">
          <Saves saves={saves} setSaves={setSaves} />

          <List parameters={parameters} setParameters={setParameters} />

          <button onClick={getDamage} className="damage-btn">
            Получить урон:{`)`}
          </button>

          <button onClick={save} className="save-btn">
            Сохранить
          </button>
        </div>
      </section>
    </>
  );
};

export default MainPage;
