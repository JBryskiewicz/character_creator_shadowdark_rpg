import { classList } from "../data/classList.js";
import { talentChoiceDialogWindow } from "./talentChoiceDialogWindow.js";

const talentsRemoveDuplicatesToList = (classTalents) => {
  const filteredTalents = [...new Set(Object.values(classTalents).flat())];
  filteredTalents.pop();
  return filteredTalents;
};

export const assignOnRollTwelveTalent = (actor, characterClass) => {
  const filteredTalentIds = talentsRemoveDuplicatesToList(
    classList[characterClass].talents
  );

  const talentOptionsList = filteredTalentIds.map((talent) =>
    game.packs.get("shadowdark.talents").index.get(talent)
  );

  talentChoiceDialogWindow(
    actor,
    talentOptionsList,
    "Class talent:",
    "Level talent:"
  );
};
