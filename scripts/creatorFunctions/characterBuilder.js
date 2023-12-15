import { characterBuilderForm } from "../../templates/characterBuilderForm.js";
import { saveCharacterHitPoints } from "./saveCharacterHitPoints.js";
import { assignRaceTalents } from "../talentFunctions/assignRaceTalents.js";
import { assignClassTalents } from "../talentFunctions/assignClassTalents.js";
import { assignLevelTalents } from "../talentFunctions/assignLevelTalents.js";
import { assignRaceLanguages } from "../languageFunctions/assignRaceLanguages.js";
import {
  validateAndSaveCharacterName,
  saveCharacterGold,
  saveCharacterClass,
  saveCharacterRace,
} from "./characterDataSavingFunctions.js";

export const characterBuilder = (actor, attributes) => {
  new Dialog({
    title: "Character creator: ",
    content: characterBuilderForm(attributes),
    buttons: {
      ok: {
        label: "Submit",
        callback: (html) => {
          const characterName = html.find("#name").val();
          const characterClass = html.find("#class").val();
          const race = html.find("#race").val();

          validateAndSaveCharacterName(actor, characterName);

          saveCharacterRace(actor, race);
          saveCharacterClass(actor, characterClass);
          saveCharacterHitPoints(actor, characterClass, race);

          assignRaceTalents(actor, race);
          assignClassTalents(actor, characterClass);
          assignLevelTalents(actor, characterClass, race);

          assignRaceLanguages(actor, characterClass, race);

          saveCharacterGold(actor);
        },
      },
      cancel: {
        label: "Cancel",
      },
    },
  }).render(true);
};
