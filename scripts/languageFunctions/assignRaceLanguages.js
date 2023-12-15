import { assignRaceLanguagesForm } from "../../templates/assignRaceLanguagesForm.js";
import { assignClassLanguages } from "./assignClassLanguages.js";
import { raceList } from "../data/raceList.js";

const validateCharacterClass = (characterClass) => {
  const validClasses = ["bard", "cleric", "wizard"];
  return validClasses.some((option) => option === characterClass);
};

export const assignRaceLanguages = (actor, characterClass, race) => {
  if (race === "human") {
    new Dialog({
      title: "Choose language: ",
      content: assignRaceLanguagesForm(raceList[race].languageOfChoice),
      buttons: {
        ok: {
          label: "Submit",
          callback: (html) => {
            const additionalLanguage = html.find("#language").val();

            const languageList = [
              `Compendium.shadowdark.languages.Item.${additionalLanguage}`,
              `Compendium.shadowdark.languages.Item.${raceList[race].knownLanguages[0].id}`,
            ];
            actor.update({
              "system.languages": languageList,
            });

            if (validateCharacterClass(characterClass)) {
              assignClassLanguages(actor, characterClass, languageList);
            }
          },
        },
        cancel: {
          label: "Cancel",
        },
      },
    }).render(true);
  } else {
    const languageList = raceList[race].knownLanguages.map(
      (language) => `Compendium.shadowdark.languages.Item.${language.id}`
    );

    actor.update({
      "system.languages": languageList,
    });

    if (validateCharacterClass(characterClass)) {
      assignClassLanguages(actor, characterClass, languageList);
    }
  }
};
