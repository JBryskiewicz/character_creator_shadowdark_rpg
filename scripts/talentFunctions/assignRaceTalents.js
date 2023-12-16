import { raceList } from "../data/raceList.js";
import { saveCharactersTalent } from "./assignTalentSupportFunction.js";
import { talentChoiceDialogWindow } from "./talentChoiceDialogWindow.js";

export const assignRaceTalents = (actor, race) => {
  if (race === "elf") {
    const elfAncestryTalents = raceList[race].talent.map((talent) =>
      game.packs.get("shadowdark.talents").index.get(talent.id)
    );
    talentChoiceDialogWindow(
      actor,
      elfAncestryTalents,
      "Race talent:",
      "Elf talent:"
    );
  } else {
    const talentId = raceList[race].talent[0].id;
    saveCharactersTalent(actor, talentId);
  }
};
