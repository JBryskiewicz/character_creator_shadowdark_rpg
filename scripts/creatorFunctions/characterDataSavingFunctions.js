import { raceList } from "../data/raceList.js";
import { classList } from "../data/classList.js";

// Save default character name if user does not input new name
// to prevent undefined input error on form submit
export const validateAndSaveCharacterName = (actor, characterName) => {
  const validatedName = characterName === "" ? actor.name : characterName;

  actor.update({
    name: validatedName,
  });
};

// Roll amount of character's starting gold and save it on character sheet
export const saveCharacterGold = async (actor) => {
  const rolledGold = await new Roll("2d6").roll();
  const gold = rolledGold.total * 5;

  actor.update({
    "system.coins.gp": gold,
  });
};

// Update actor's ancestry (race) with the one submitted by player
export const saveCharacterRace = (actor, race) => {
  actor.update({
    "system.ancestry": `Compendium.shadowdark.ancestries.Item.${raceList[race].race}`,
  });
};

// Update actor's character's class with the one submitted by player
export const saveCharacterClass = (actor, characterClass) => {
  actor.update({
    "system.class": `Compendium.shadowdark.classes.Item.${classList[characterClass].id}`,
  });
};
