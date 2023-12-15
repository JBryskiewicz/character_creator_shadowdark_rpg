import { classList } from "../data/classList.js";
import { classLanguagesSelectionForm } from "../../templates/assignClassLanguagesForm.js";

export const assignClassLanguages = (
  actor,
  characterClass,
  racialLanguages
) => {
  let langs = classList[characterClass].numberOfLanguages;

  new Dialog({
    title: "Choose language: ",
    content: classLanguagesSelectionForm(characterClass, racialLanguages),
    buttons: {
      ok: {
        label: "Submit",
        callback: (html) => {
          const classLanguageList = [];

          for (let idx = 0; idx < langs[0]; idx++) {
            classLanguageList.push(
              `Compendium.shadowdark.languages.Item.${html
                .find(`#common${idx}`)
                .val()}`
            );
          }
          for (let idx = 0; idx < langs[1]; idx++) {
            classLanguageList.push(
              `Compendium.shadowdark.languages.Item.${html
                .find(`#rare${idx}`)
                .val()}`
            );
          }

          const actorLanguages = actor.system.languages;

          actor.update({
            "system.languages": [...actorLanguages, ...classLanguageList],
          });
        },
      },
      cancel: {
        label: "Cancel",
      },
    },
  }).render(true);
};
