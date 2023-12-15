import { classList } from "../data/classList.js";

const rollCharacterHp = (actor, characterClass, race) => {
  const conModifier =
    actor.system.abilities.con.mod > 1 ? actor.system.abilities.con.mod : 1;

  let hp = conModifier;

  const hpRoll =
    Math.floor(Math.random() * classList[characterClass].hitDice) + 1;

  let advHpRoll = 0;
  if (race === "dwarf") {
    advHpRoll =
      Math.floor(Math.random() * classList[characterClass].hitDice) + 1;
  }

  hpRoll > advHpRoll ? (hp += hpRoll) : (hp += advHpRoll);

  return hp;
};

const returnDwarfBonusHp = (race) => {
  return race === "dwarf" ? 2 : 0;
};

export const saveCharacterHitPoints = (actor, characterClass, race) => {
  const hp = rollCharacterHp(actor, characterClass, race);
  const dwarfBonusHp = returnDwarfBonusHp(race);

  actor.update({
    "system.attributes.hp.value": hp + dwarfBonusHp,
    "system.attributes.hp.base": hp,
  });
};
