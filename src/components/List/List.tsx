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
      attack: {
        ...parameters.attack,
        value: parameters.power,
        level:
          parameters.attack.value % 10 === 0 && parameters.attack.value > 0
            ? parameters.attack.level + 1
            : parameters.attack.level,
      },
    });
  }, [parameters.power, setParameters]);

  React.useEffect(() => {
    setParameters({
      ...parameters,
      evasion: 10 + parameters.dexterity,
      stels: {
        ...parameters.stels,
        value: parameters.dexterity,
        level:
          parameters.stels.value % 10 === 0 && parameters.stels.value > 0
            ? parameters.stels.level + 1
            : parameters.stels.level,
      },
      shooting: {
        ...parameters.shooting,
        value: parameters.dexterity,
        level:
          parameters.shooting.value % 10 === 0 && parameters.shooting.value > 0
            ? parameters.shooting.level + 1
            : parameters.shooting.level,
      },
      energy: parameters.dexterity + parameters.intelligence,
    });
  }, [parameters.dexterity, setParameters]);

  React.useEffect(() => {
    setParameters({
      ...parameters,
      learnability: {
        ...parameters.learnability,
        value: parameters.intelligence,
        level:
          parameters.learnability.value % 10 === 0 &&
          parameters.learnability.value > 0
            ? parameters.learnability.level + 1
            : parameters.learnability.level,
      },
      medicine: {
        ...parameters.medicine,
        value: parameters.intelligence,
        level:
          parameters.medicine.value % 10 === 0 && parameters.medicine.value > 0
            ? parameters.medicine.level + 1
            : parameters.medicine.level,
      },
      survival: {
        ...parameters.survival,
        value: parameters.intelligence,
        level:
          parameters.survival.value % 10 === 0 && parameters.survival.value > 0
            ? parameters.survival.level + 1
            : parameters.survival.level,
      },
      energy: parameters.dexterity + parameters.intelligence,
    });
  }, [parameters.intelligence, setParameters]);

  React.useEffect(() => {
    setParameters({
      ...parameters,
      intimidation: {
        ...parameters.intimidation,
        value: parameters.charisma,
        level:
          parameters.intimidation.value % 10 === 0 &&
          parameters.manipulation.value > 0
            ? parameters.intimidation.level + 1
            : parameters.intimidation.level,
      },
      insight: {
        ...parameters.insight,
        value: parameters.charisma,
        level:
          parameters.insight.value % 10 === 0 &&
          parameters.manipulation.value > 0
            ? parameters.insight.level + 1
            : parameters.insight.level,
      },
      appearance: {
        ...parameters.appearance,
        value: parameters.charisma,
        level:
          parameters.appearance.value % 10 === 0 &&
          parameters.appearance.value > 0
            ? parameters.appearance.level + 1
            : parameters.appearance.level,
      },
      manipulation: {
        ...parameters.manipulation,
        value: parameters.charisma,
        level:
          parameters.manipulation.value % 10 === 0 &&
          parameters.manipulation.value > 0
            ? parameters.manipulation.level + 1
            : parameters.manipulation.level,
      },
    });
  }, [parameters.charisma, setParameters]);

  return (
    <div className="list">
      <Field
        value={parameters.power}
        title="????????"
        onClick={() => {
          setParameters({ ...parameters, power: parameters.power + 1 });
        }}
        main={true}
      />
      <Field
        value={parameters.dexterity}
        title="????????????????"
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
        title="??????????????????????"
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
        title="??????????????"
        onClick={() => {
          setParameters({
            ...parameters,
            charisma: parameters.charisma + 1,
          });
        }}
        main={true}
      />

      <Field value={parameters.lifeForce} title="?????????????????? ????????" />
      <Field value={parameters.evasion} title="??????????????????" />
      <Field value={parameters.energy} title="????????????????????????" />

      <Field
        value={parameters.attack.value}
        title="??????????"
        level={parameters.attack.level}
      />

      <Field
        value={parameters.stels.value}
        title="??????????"
        level={parameters.stels.level}
      />
      <Field
        value={parameters.shooting.value}
        title="????????????????"
        level={parameters.shooting.level}
      />

      <Field
        value={parameters.learnability.value}
        title="??????????????????????"
        level={parameters.learnability.level}
      />
      <Field
        value={parameters.survival.value}
        title="??????????????????"
        level={parameters.survival.level}
      />
      <Field
        value={parameters.medicine.value}
        title="????????????????"
        level={parameters.medicine.level}
      />

      <Field
        value={parameters.intimidation.value}
        title="??????????????????????"
        level={parameters.intimidation.level}
      />
      <Field
        value={parameters.insight.value}
        title="????????????????????????????????"
        level={parameters.insight.level}
      />
      <Field
        value={parameters.appearance.value}
        title="?????????????? ??????"
        level={parameters.appearance.level}
      />

      <Field
        value={parameters.manipulation.value}
        title="??????????????????????????????"
        level={parameters.manipulation.level}
      />
    </div>
  );
};

export default List;
