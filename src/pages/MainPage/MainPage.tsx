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

  const getDamage = () => {
    setParameters({...parameters, power: parameters.power - 1});
  }

  console.log(parameters);

  return (
    <>
      <Header />
      <section className="main">
        <div className="container">
          
          <Saves />
          
          <List parameters={parameters} setParameters={setParameters} />

          <button onClick={getDamage} className="damage-btn">Получить урон:{`)`}</button>

          <button className="save-btn">
            Сохранить
          </button>
        </div>
      </section>
    </>
  );
};

export default MainPage;
