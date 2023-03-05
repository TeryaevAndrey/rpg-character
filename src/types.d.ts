interface IParameters {
  power: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
  lifeForce: number;
  evasion: number;
  energy: number;

  attack: {
    value: number;
    level: number;
  };
  stels: {
    value: number;
    level: number;
  };
  shooting: {
    value: number;
    level: number;
  };
  learnability: {
    value: number;
    level: number;
  };
  survival: {
    value: number;
    level: number;
  };
  medicine: {
    value: number;
    level: number;
  };
  intimidation: {
    value: number;
    level: number;
  };
  insight: {
    value: number;
    level: number;
  };
  appearance: {
    value: number;
    level: number;
  };
  manipulation: {
    value: number;
    level: number;
  };
}

interface ISavesItem {
  _id: string;
  saveName: string;
  userId;

  parameters: {
    power: number;
    dexterity: number;
    intelligence: number;
    charisma: number;
    lifeForce: number;
    evasion: number;
    energy: number;

    attack: {
      value: number;
      level: number;
    };
    stels: {
      value: number;
      level: number;
    };
    shooting: {
      value: number;
      level: number;
    };
    learnability: {
      value: number;
      level: number;
    };
    survival: {
      value: number;
      level: number;
    };
    medicine: {
      value: number;
      level: number;
    };
    intimidation: {
      value: number;
      level: number;
    };
    insight: {
      value: number;
      level: number;
    };
    appearance: {
      value: number;
      level: number;
    };
    manipulation: {
      value: number;
      level: number;
    };
  };
}
