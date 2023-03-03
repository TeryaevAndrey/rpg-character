import React, { FC } from "react";
import Field from "../Field/Field";

interface IList {
  parameters: IParameters;
  setParameters: Function;
}

const List: FC<IList> = ({ parameters, setParameters }) => {
  React.useEffect(() => {
    setParameters({
      ...parameters,
      lifeForce: 3 + parameters.power,
      attack: { ...parameters.attack, value: parameters.power },
    });
  }, [parameters.power]);

  React.useEffect(() => {
    setParameters({
      ...parameters,
      evasion: 10 + parameters.dexterity,
      stels: { ...parameters.stels, value: parameters.dexterity },
      shooting: { ...parameters.shooting, value: parameters.dexterity },
      energy: parameters.dexterity + parameters.intelligence,
    });
  }, [parameters.dexterity]);

  React.useEffect(() => {
    setParameters({
      ...parameters,
      learnability: {
        ...parameters.learnability,
        value: parameters.intelligence,
      },
      survival: { ...parameters.survival, value: parameters.intelligence },
      medicine: { ...parameters.medicine, value: parameters.intelligence },
      energy: parameters.dexterity + parameters.intelligence,
    });
  }, [parameters.intelligence]);

  React.useEffect(() => {
    setParameters({
      ...parameters,
      intimidation: { ...parameters.intimidation, value: parameters.charisma },
      insight: { ...parameters.insight, value: parameters.charisma },
      appearance: { ...parameters.appearance, value: parameters.charisma },
      manipulation: { ...parameters.manipulation, value: parameters.charisma },
    });
  }, [parameters.charisma]);

  return (
    <div className="list">
      <Field
        value={parameters.power}
        title="Сила"
        onClick={() => {
          setParameters({ ...parameters, power: parameters.power + 1 });
        }}
        main={true}
      />
      <Field
        value={parameters.dexterity}
        title="Ловкость"
        onClick={() => {
          setParameters({
            ...parameters,
            dexterity: parameters.dexterity + 1,
          });
        }}
        main={true}
      />
      <Field
        value={parameters.intelligence}
        title="Интеллегент"
        onClick={() => {
          setParameters({
            ...parameters,
            intelligence: parameters.intelligence + 1,
          });
        }}
        main={true}
      />
      <Field
        value={parameters.charisma}
        title="Харизма"
        onClick={() => {
          setParameters({
            ...parameters,
            charisma: parameters.charisma + 1,
          });
        }}
        main={true}
      />

      <Field value={parameters.lifeForce} title="Жизненная сила" />
      <Field value={parameters.evasion} title="Уклонение" />
      <Field value={parameters.energy} title="Энергичность" />

      <Field
        value={parameters.attack.value}
        title="Атака"
        level={parameters.attack.level}
      />

      <Field
        value={parameters.stels.value}
        title="Стелс"
        level={parameters.stels.level}
      />
      <Field
        value={parameters.shooting.value}
        title="Стрельба"
        level={parameters.shooting.level}
      />

      <Field
        value={parameters.learnability.value}
        title="Обучаемость"
        level={parameters.learnability.level}
      />
      <Field
        value={parameters.survival.value}
        title="Выживание"
        level={parameters.survival.level}
      />
      <Field
        value={parameters.medicine.value}
        title="Медицина"
        level={parameters.medicine.level}
      />

      <Field
        value={parameters.intimidation.value}
        title="Запугивание"
        level={parameters.intimidation.level}
      />
      <Field
        value={parameters.insight.value}
        title="Проницательность"
        level={parameters.insight.level}
      />
      <Field
        value={parameters.appearance.value}
        title="Внешний вид"
        level={parameters.appearance.level}
      />

      <Field
        value={parameters.manipulation.value}
        title="Манипулирование"
        level={parameters.manipulation.level}
      />
    </div>
  );
};

export default List;
