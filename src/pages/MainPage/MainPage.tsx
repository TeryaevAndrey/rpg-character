import React, { FC } from "react";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";

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
      level: 0,
    },
    stels: {
      value: 0,
      level: 0,
    },
    shooting: {
      value: 0,
      level: 0,
    },
    learnability: {
      value: 0,
      level: 0,
    },
    survival: {
      value: 0,
      level: 0,
    },
    medicine: {
      value: 0,
      level: 0,
    },
    intimidation: {
      value: 0,
      level: 0,
    },
    insight: {
      value: 0,
      level: 0,
    },
    appearance: {
      value: 0,
      level: 0,
    },
    manipulation: {
      value: 0,
      level: 0,
    },
  });

  return (
    <>
      <Header />
      <section className="main">
        <div className="container">
          
          <List parameters={parameters} setParameters={setParameters} />

          <button className="save-btn">
            Сохранить
          </button>
        </div>
      </section>
    </>
  );
};

export default MainPage;
