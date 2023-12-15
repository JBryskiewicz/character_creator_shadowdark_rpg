import { classList } from "../data/classList.js";
import { talentChoiceDialogWindow } from "./talentChoiceDialogWindow.js";

export const assignClassTalents = (actor, characterClass) => {
  const classTalentList = classList[characterClass].features;

  if (characterClass === "fighter") {
    const guaranteedFighterTalents = [classTalentList[0], classTalentList[1]];
    guaranteedFighterTalents.forEach((talent) => {
      game.packs
        .get("shadowdark.talents")
        .getDocument(talent)
        .then((result) => {
          actor.createEmbeddedDocuments("Item", [result]);
        });
    });

    const gritTalentOptions = [classTalentList[2], classTalentList[3]].map(
      (talent) => game.packs.get("shadowdark.talents").index.get(talent)
    );

    talentChoiceDialogWindow(
      actor,
      gritTalentOptions,
      "Class talent:",
      "Fighter talent:"
    );
  } else {
    const classTalentArray = classTalentList.map((talent) =>
      game.packs.get("shadowdark.talents").getDocument(talent)
    );
    Promise.all(classTalentArray).then((result) =>
      actor.createEmbeddedDocuments("Item", result)
    );
  }
};
