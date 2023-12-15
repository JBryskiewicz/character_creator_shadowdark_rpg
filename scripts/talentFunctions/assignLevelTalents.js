import { classList } from "../data/classList.js";
import { assignOnRollTwelveTalent } from "./onRollTwelveTalents.js";
import { saveCharactersTalent } from "./assignTalentSupportFunction.js";
import { talentChoiceDialogWindow } from "./talentChoiceDialogWindow.js";

const levelTalentsLogic = (actor, characterClass, talentList, talentRoll) => {
  if (talentRoll.total === 12) {
    assignOnRollTwelveTalent(actor, characterClass);
  } else {
    const talentOptionList = talentList.map((talent) =>
      game.packs.get("shadowdark.talents").index.get(talent)
    );

    if (talentList.length > 1) {
      talentChoiceDialogWindow(
        actor,
        talentOptionList,
        "Class talent:",
        "Level talent:"
      );
    } else {
      const talentId = talentList[0];
      saveCharactersTalent(actor, talentId);
    }
  }
};

export const assignLevelTalents = async (actor, characterClass, race) => {
  const talentRoll = await new Roll("2d6").roll();
  const talentList = classList[characterClass].talents[talentRoll.total];
  levelTalentsLogic(actor, characterClass, talentList, talentRoll);

  if (race === "human") {
    const humanTalentRoll = await new Roll("2d6").roll();
    const bonusTalentList =
      classList[characterClass].talents[humanTalentRoll.total];
    levelTalentsLogic(actor, characterClass, bonusTalentList, humanTalentRoll);
  }
};
